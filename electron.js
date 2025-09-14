const { app, BrowserWindow } = require('electron');
require('electron-reload')(__dirname);


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('kms.html');
}

app.whenReady().then(createWindow);