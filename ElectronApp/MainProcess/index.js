const { app, BrowserWindow } = require("electron");
const createMainWindow = require("../MainWindow")
console.log(createMainWindow);

app.whenReady().then(() => {
    createMainWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) 
            createMainWindow() //如果没有窗口打开则打开一个窗口 (macOS)
    })
});

// 管理窗口的生命周期
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit() //在Windows和Linux上，关闭所有窗口通常会完全退出一个应用程序。MacOS则
})

require("../MainHandles") // 注册主进程的处理函数