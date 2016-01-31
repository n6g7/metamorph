'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');
const windowBarHeight = 22;

let mainWindow = null;
let squareDimension = 200;
let headerHeight = 30;

app.on('window-all-closed', app.quit);

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: windowBarHeight + headerHeight + squareDimension,
    width: 2 * squareDimension
  });

  //mainWindow.webContents.openDevTools();

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', () => mainWindow = null);
});
