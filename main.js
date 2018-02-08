const electron = require('electron');
const app = electron.app;
const FileSync = require('lowdb/adapters/FileSync');
const db = require('lowdb')(new FileSync(`${app.getPath('userData')}/db.json`));

let win;

db.defaults({ config: { width: 802, height: 602, level: 20 } }).write();

app.on('ready', () => {
  win = new electron.BrowserWindow({
    autoHideMenuBar: true,
    backgroundColor: '#1f1f1f',
    center: true,
    icon: `${__dirname}/assets/snake256.png`,
    resizable: false,
    title: 'Snake',
    useContentSize: true,
    width:
      process.platform === 'win32'
        ? db.get('config').value().width + 10
        : db.get('config').value().width,
    height:
      process.platform === 'win32'
        ? db.get('config').value().height + 34
        : db.get('config').value().height
  });
  win.db = db;
  win.loadURL(`file://${__dirname}/src/menu.html`);
});

app.on('window-all-closed', () => {
  
  if (process.platform !== 'darwin') {
    app.quit();
  }
});