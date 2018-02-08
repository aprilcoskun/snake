const win = require('electron').remote.getCurrentWindow();

resizeTo(
  process.platform === 'win32'
    ? win.db.get('config').value().width + 10
    : win.db.get('config').value().width,
  process.platform === 'win32'
    ? win.db.get('config').value().height + 34
    : win.db.get('config').value().height
);

const level = win.db.get('config').value().level;

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
