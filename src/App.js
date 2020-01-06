import React from 'react';
import './App.css';
import ChatBox from "./components/ChatBox/ChatBox";

function App() {
    return (
        <div className="App" style={{
            backgroundImage: "url(background.jpg)"
        }}>
            <ChatBox/>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundColor: "#000",
                opacity: 0.5,
                zIndex: 1
            }}/>
        </div>
  );
}

export default App;
