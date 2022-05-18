// // 引入electron并创建一个Browserwindow
// const { app, BrowserWindow } = require('electron');
// const path = require('path');
// const url = require('url');
// // 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
// let mainWindow;

// function createWindow() {
//   //创建浏览器窗口,宽高自定义
//   mainWindow = new BrowserWindow({ width: 800, height: 600 });
//   /*
//    * 加载应用-----  electron-quick-start中默认的加载入口
//    */
//   mainWindow.loadURL(
//     url.format({
//       //使用npm run build生成的index.html的路径名
//       pathname: path.join(__dirname, './build/index.html'),
//       protocol: 'file:',
//       slashes: true
//     })
//   );

//   // 打开开发者工具，默认不打开
//   // mainWindow.webContents.openDevTools()

//   // 关闭window时触发下列事件.
//   mainWindow.on('closed', function () {
//     mainWindow = null;
//   });
// }

// // 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
// app.on('ready', createWindow);

// // 所有窗口关闭时退出应用.
// app.on('window-all-closed', function () {
//   // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', function () {
//   // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
//   if (mainWindow === null) {
//     createWindow();
//   }
// });

// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // 加载 index.html
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // 打开开发工具
  // mainWindow.webContents.openDevTools()
};

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。
