import React from 'react';
import ConversationSearch from '../../components/ConversationSearch/ConversationSearch';
import ChatTitle from '../../components/ChatTitle/ChatTitle';
import ChatInput from '../../components/ChatInput/ChatInput';
import ConversationList from '../ConversationList/ConversationList';
import ChatContainer from '../ChatContainer/ChatContainer';

import './Container.css';

const Container = () => {
    return (
        <div id='container'>
            <ConversationSearch />
            <ConversationList />
            <ChatTitle />
            <ChatContainer />
            <ChatInput />
        </div>
    );
}

export default Container;