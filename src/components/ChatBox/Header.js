import React from 'react';
import Separator from "./Separator";

const Header = () => {
    return (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
                paddingLeft: 10
            }}>
                <img src="dofus.png" alt="Dofus" style={{
                    height: 50,
                    width: 50
                }}/>
                <h2 style={{
                    paddingLeft: 10
                }}>Game chat</h2>
            </div>
            <Separator/>
        </>
    );
};

export default Header;