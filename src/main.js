import { app, BrowserWindow } from 'electron';

const windowBarHeight = 22;
const squareDimension = 200;
const headerHeight = 30;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

let createWindow = () => {
  mainWindow = new BrowserWindow({
    height: windowBarHeight + headerHeight + squareDimension,
    width: 2 * squareDimension
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
