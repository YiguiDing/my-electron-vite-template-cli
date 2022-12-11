<template>
    <lay-button type="primary" @click="sendHelloWorldHandler">send Hello World</lay-button>
</template>

<script setup>
import { ref,onMounted } from "vue"
import {contextBridge} from "@/api_electron"
import { layer } from  "@layui/layer-vue"

onMounted((()=>{
    contextBridge.receiver((event,{type,msg,data})=>{
        switch(type){
            case "notifiy":
                layer.notifiy(data)
        }
    })
}))
function sendHelloWorldHandler(){
    contextBridge.sender({type:"echo",msg:"Hello World"})
}
</script>
  