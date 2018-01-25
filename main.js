const electron = require('electron');
const app = electron.app;

let win;

app.on('ready', () => {
  win = new electron.BrowserWindow({
    autoHideMenuBar: true,
    backgroundColor: '#1f1f1f',
    center: true,
    icon: `${__dirname}/assets/snake256.png`,
    resizable: false,
    title: 'Snake',
    useContentSize: true
  });
  win.loadURL(`file://${__dirname}/src/menu.html`);
});

app.on('window-all-closed', app.quit);

app.on('before-quit', () => {
  win.removeAllListeners('close');
  win.close();
});
