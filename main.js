const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
var win;
app.on('ready',() => {
  let win = new BrowserWindow({width:822,height:651});
  win.setMenu(null);
  win.loadURL('file://' + __dirname + '/src/menu.html');
  //win.webContents.openDevTools();

});

/*function Play() {
  win.loadURL('file://' + __dirname + '/index.html');
}*/
