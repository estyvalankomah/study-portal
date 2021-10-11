import React from 'react';

import './ConversationSearch.css';

const ConversationSearch = () => {
    return (
        <div id='search-container'>
            <div id='profile-container'>
                <img src={require('../../assets/images/daryl.png')} alt='Profile pic' />
                <text>Robert Johnson</text><br />
                <text id='email-text'>robert@example.com</text>
            </div>
            <input type='text' placeholder='Search or start new chat' />
        </div>
    );
}

export default ConversationSearch;