import React from 'react';
import './ChatTitle.css';

const ChatTitle = () => {
    return(
        <div id='chat-title'>
            <div id='chat-title-container'>
                <img src={require('../../assets/images/ben.png')} alt='profile pic' />
                <text id='chat-title-text'>Dominic Brown</text>
            </div>
        </div>
    );
}

export default ChatTitle;
