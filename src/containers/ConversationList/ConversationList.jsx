import React from 'react';
import ConversationItem from '../../components/Conversation/ConversationItem';
import './ConversationList.css';

const ConversationList = () =>{
    return (
        <div id='conversation-container'>
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
        </div>
    );
}

export default ConversationList;