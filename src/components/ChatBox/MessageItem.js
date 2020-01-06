import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MessageItem = (props) => {

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div style={{
                backgroundColor: "#ffffff",
                width: 350,
                padding: 10,
                borderRadius: 8,
                borderColor: "#b0b0b0",
                marginBottom: 20
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: 5
                }}>
                    <span style={{
                        fontWeight: "bold",
                        marginBottom: 5
                    }}>
                        @{ props.author }
                    </span>
                    <span style={{
                        textAlign: "justify"
                    }}>
                        { props.message }
                    </span>
                </div>
            </div>
        </div>
    );
};

MessageItem.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default MessageItem;