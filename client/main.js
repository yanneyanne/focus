var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow
var Menu = electron.Menu

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
})

app.on('ready', function() {
  var win = new BrowserWindow({
    width: 700,
    height: 800,
    minWidth: 700,
    minHeight: 800,
    movable: true,
    titleBarStyle : 'hidden',
  })

  win.loadURL('file://' + __dirname + '/public/index.html')

  win.closeDevTools()

  win.on('closed', function() {
    win = null;
  })
  var template = [{
    label: "focus",
    submenu: [
      { label: "About focus", selector: "orderFrontStandardAboutPanel:" },
      { type: "separator" },
      { label: "Quit", accelerator: "Command+Q", click: function() { app.quit() }}
    ]}, {
    label: "Edit",
    submenu: [
        { label: "Cut", accelerator: "Command+X", role: "cut" },
        { label: "Copy", accelerator: "Command+C", role: "copy" },
        { label: "Paste", accelerator: "Command+V", role: "paste" },
    ]}
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
})
