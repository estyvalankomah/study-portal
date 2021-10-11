import React from 'react';

import './Message.css';

const Message = () => {
    return (
        <div>   
            <div className='message-row you-message'>
                <div className='message-content you-message-content'>
                    <img src={require('../../assets/images/daryl.png')} alt='' />
                    <div className='message-text you-message-text'>What's up</div>
                    <div className='message-time'>19:20</div>
                </div>
            </div>
            
            <div className='message-row other-message'>
                <div className='message-content other-message-content'>
                    <img src={require('../../assets/images/ben.png')} alt='' />
                    <div className='message-text other-message-text'>What's up</div>
                    <div className='message-time'>19:20</div>
                </div>
            </div>
        </div>
    );
}

export default Message;