import { defineStore } from "pinia";
import { ref } from 'vue'

interface TDChannel {
  name: string;
  values: number[];
}

export const useTdStore = defineStore('tdStore', () => {
  const td = ref({
    connected: false,
    ws: null as null | WebSocket,
    channels: {} as { [id: string]: number[] },
  })
  
  const connect = (port: number, COMPname: string, channels: TDChannel[] = []) => {
    if (td.value.ws == null || td.value.ws?.readyState == WebSocket.CLOSED) {
      td.value.ws = new WebSocket(`ws://localhost:${port}/${COMPname}`)
    }

    td.value.ws.onopen = () => {
      channels.forEach(chan => {
        sendCHOP(chan.name, chan.values)
      });
    }

    td.value.ws.onmessage = (ev: MessageEvent) => {
      const chanData: TDChannel = JSON.parse(ev.data)
      td.value.channels[chanData.name] = chanData.values
    }
  }

  const close = () => {
    td.value.ws?.close()
  }

  const sendCHOP = (name: string, values: number[] ) => {
    const data: TDChannel = { name, values }
    td.value.ws?.send(JSON.stringify(data))
  }

  return {
    td,
    connect,
    close,
    sendCHOP
  }
});