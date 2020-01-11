import configStore from "../store/configStore";

const webSocket = new WebSocket("ws://" + process.env.REACT_APP_WS_ADRESS + ":" + process.env.REACT_APP_WS_PORT);

webSocket.onmessage = (event) => {

    // Data received
    console.log(JSON.parse(event.data));

    configStore.dispatch(JSON.parse(event.data));
};

export default webSocket;