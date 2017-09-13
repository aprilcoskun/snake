const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let win;

app.on('ready',() => {
  win = new BrowserWindow({width:820, height:646, resizable:false,
                                                  title:'Snake', backgroundColor:'#1f1f1f',icon:__dirname + '/assets/snake256.png'});
  win.loadURL('file://' + __dirname + '/src/menu.html');
  win.setMenu(null);
  win.center();
});

app.on('window-all-closed', app.quit);

app.on('before-quit', () => {
    win.removeAllListeners('close');
    win.close();
});
