const remote = require('electron').remote;
let win;
let selectElem = document.getElementById('select');
let c = selectElem.value;

selectElem.addEventListener('change', () => {
  c = selectElem.value;
});

function play() {
  let url = "index.html?" + c;
  window.location.href=url;
}

function exit() {
  win = remote.getCurrentWindow();
  win.removeAllListeners('close');
  win.close();
  remote.app.quit();
}
function credit() {
  let shell = require('electron').shell;
  event.preventDefault();
  shell.openExternal('https://alpcoskun.com');
}
