import React from 'react';
import './ConversationItem.css';

const ConversationItem = () => {
    return (
        <div className='conversation-item'>
            <img src={require('../../assets/images/kim.jpeg')} alt='profile pic' />
            <div className="title-text">Angelina Jolie</div>
            <div className="recieved-date">1 minute ago</div>
            <div className="conversation-message">What's up</div>
        </div>
    );
}

export default ConversationItem;