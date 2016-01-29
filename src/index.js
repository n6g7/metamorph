'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');

let mainWindow = null;

app.on('window-all-closed', app.quit);

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 365, height: 80 });

  //mainWindow.webContents.openDevTools();

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', () => mainWindow = null);
});
