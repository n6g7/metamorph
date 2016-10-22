import { app, BrowserWindow } from 'electron';
import { setMenu } from './menu';

const windowWidth = 480;
const windowHeight = 580;

const isDev = process.env.NODE_ENV === 'dev';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    height: windowHeight,
    width: windowWidth
  });

  setMenu();

  const rootFile = isDev ? 'dev.html' : 'index.html';
  mainWindow.loadURL(`file://${__dirname}/${rootFile}`);

  if (isDev) mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  mainWindow.on('scroll-touch-begin', () => {
    mainWindow.webContents.send('scroll-touch-begin');
  });
  mainWindow.on('scroll-touch-end', () => {
    mainWindow.webContents.send('scroll-touch-end');
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
