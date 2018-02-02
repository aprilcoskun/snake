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
    width: db.get('config').value().width,
    height: db.get('config').value().height
  });
  win.db = db;
  win.loadURL(`file://${__dirname}/src/menu.html`);
});

app.on('window-all-closed', app.quit);

app.on('before-quit', () => {
  win.removeAllListeners('close');
  win.close();
});
