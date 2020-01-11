import configStore from "../store/configStore";

const webSocket = new WebSocket("ws://51.77.221.45:8080");

webSocket.onmessage = (event) => {

    // Data received
    console.log(JSON.parse(event.data));

    configStore.dispatch(JSON.parse(event.data));
};

export default webSocket;