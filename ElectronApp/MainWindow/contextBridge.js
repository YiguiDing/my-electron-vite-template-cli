const {ipcRenderer , contextBridge } = require("electron")


contextBridge.exposeInMainWorld("contextBridge",{
    sender: async (msgObj) => await ipcRenderer.invoke("on-get-msg",msgObj),
    // callback会收到两个参数一个是event 另一个是msgObj
    receiver: (callback) => ipcRenderer.on('on-send-msg', callback),
})
