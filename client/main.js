var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 800,
    minWidth: 700,
    minHeight: 800,
    movable: true,
    titleBarStyle : 'hidden',
  });

  mainWindow.loadURL('file://' + __dirname + '/public/index.html');

  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
  mainWindow.webContents.on("devtools-opened", () => {
    mainWindow.webContents.closeDevTools();
  });
});
