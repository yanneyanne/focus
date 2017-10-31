const path = require('path')
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu

let pythonProcess = null

app.on('window-all-closed', function() {
  app.quit();
})

app.on('ready', function() {

  let scriptPath = path.join(__dirname, '..', '__init__')
  pythonProcess = require('child_process').spawn(scriptPath)

  let win = new BrowserWindow({
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
    pythonProcess.kill()
    pythonProcess = null
  })

  let template = [{
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
