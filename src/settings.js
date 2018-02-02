const win = require('electron').remote.getCurrentWindow();
let resolutions = [
  { text: '640x480', width: 642, height: 482 },
  { text: '800x600', width: 802, height: 602 },
  { text: '1020x760', width: 1022, height: 762 },
  { text: '1280x960', width: 1282, height: 962 }
];

let levels = [
  { text: 'SANDBOX', val: 10 },
  { text: 'EASY', val: 15 },
  { text: 'NORMAL', val: 20 },
  { text: 'HARD', val: 30 },
  { text: 'HARDEST', val: 40 }
];

let { width, height, level } = win.db.get('config').value();

let currentRes = resolutions.filter(r => r.width === width)[0];
let currentLevel = levels.filter(l => l.val === level)[0];

let display;

onload = () => {
  displayR = document.getElementsByClassName('option')[1];
  displayL = document.getElementsByClassName('option')[3];
  displayR.innerHTML = currentRes.text;
  displayL.innerHTML = currentLevel.text;
};

function resUp() {
  if (currentRes.text === '640x480') currentRes = resolutions[1];
  else if (currentRes.text === '800x600') currentRes = resolutions[2];
  else if (currentRes.text === '1020x760') currentRes = resolutions[3];
  displayR.innerHTML = currentRes.text;
  resizeTo(currentRes.width, currentRes.height);
  win.db
    .set('config.width', currentRes.width)
    .set('config.height', currentRes.height)
    .write();
}

function resDown() {
  if (currentRes.text === '800x600') currentRes = resolutions[0];
  else if (currentRes.text === '1020x760') currentRes = resolutions[1];
  else if (currentRes.text === '1280x960') currentRes = resolutions[2];
  displayR.innerHTML = currentRes.text;
  resizeTo(currentRes.width, currentRes.height);
  win.db
    .set('config.width', currentRes.width)
    .set('config.height', currentRes.height)
    .write();
}

function diffUp() {
  if (currentLevel.val === 10) currentLevel = levels[1];
  else if (currentLevel.val === 15) currentLevel = levels[2];
  else if (currentLevel.val === 20) currentLevel = levels[3];
  else if (currentLevel.val === 30) currentLevel = levels[4];
  displayL.innerHTML = currentLevel.text;
  win.db.set('config.level', currentLevel.val).write();
}

function diffDown() {
  if (currentLevel.val === 15) currentLevel = levels[0];
  else if (currentLevel.val === 20) currentLevel = levels[1];
  else if (currentLevel.val === 30) currentLevel = levels[2];
  else if (currentLevel.val === 40) currentLevel = levels[3];
  displayL.innerHTML = currentLevel.text;
  win.db.set('config.level', currentLevel.val).write();
}
