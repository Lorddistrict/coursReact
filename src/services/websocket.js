import configStore from "../store/configStore";

const webSocket = new WebSocket("ws://srrj6.sse.codesandbox.io/");

webSocket.onmessage = (event) => {

    // Data received
    console.log(JSON.parse(event.data));

    configStore.dispatch(JSON.parse(event.data));
};

export default webSocket;