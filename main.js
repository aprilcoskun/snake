const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

app.on('ready',() => {
  let win = new BrowserWindow({width:820, height:648, resizable:false,
                                                  title:'Snake', backgroundColor:'#1f1f1f',icon:__dirname + '/assets/snake.ico'});
  win.loadURL('file://' + __dirname + '/src/menu.html');
  win.setMenu(null);
  win.center();
});

app.on('window-all-closed', app.quit);

app.on('before-quit', () => {
    mainWindow.removeAllListeners('close');
    mainWindow.close();
});
