const win = require('electron').remote.getCurrentWindow();

resizeTo(
  win.db.get('config').value().width,
  win.db.get('config').value().height
);

let level = win.db.get('config').value().level;

onload = () => {
  let highestScore = win.db.get('highestScore').value();
  if (highestScore) document.title = `Your Highest Score : ${highestScore}`;
};

function exit() {
  win.removeAllListeners('close');
  win.close();
  remote.app.quit();
}

function credit() {
  require('electron').shell.openExternal('https://alpcoskun.com');
}
