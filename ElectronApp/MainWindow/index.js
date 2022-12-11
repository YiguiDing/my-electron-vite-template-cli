const { BrowserWindow,app } = require("electron");
const {default:WinState} = require("electron-win-state");
const path = require("path");

const createWindow = () => {
    const winState = new WinState({defaultWidth: 1500,defaultHeight: 700});
    const mainWindow = new BrowserWindow({
        ...winState.winOptions,
        webPreferences: {
            // 预加载文件（必须是绝对路径）
            preload:path.resolve(__dirname,"./contextBridge.js")
        }
    })
    // 加载网页
    if(app.isPackaged){// 判断是否已经打包
        mainWindow.loadFile(path.resolve(__dirname,"../../WebApp_dist/index.html"));// 加载本地页面
    }else{
        mainWindow.loadURL("http://localhost:5173/")
        mainWindow.webContents.openDevTools()// 打开开发工具
    }
    winState.manage(mainWindow)//管理窗口状态
}
module.exports = createWindow