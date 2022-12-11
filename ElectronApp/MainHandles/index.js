// 用于从主进程到渲染进程的异步通信。
const { ipcMain } = require("electron");


ipcMain.handle("on-get-msg",async(event,msgObj)=>{
    const {type,msg,data} = msgObj;
    if(type=="echo")
        return await echo(event,msg);
    else
        return undefined
})
async function echo(event,msgTxt){
    event && event.sender.send("on-send-msg",{ // 触发on-send-msg事件
        type:"notifiy",
        data:{title:"提示",content:msgTxt,time:"2000",offset:'rb'}
    })
}
