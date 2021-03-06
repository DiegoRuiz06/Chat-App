import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isMyMessage) => {
        chat.people.map((person, idx) => person.last_read === message.id && (
            <div 
                key={`read_${idx}`}
                className="read-receipt"
                style={{ float: isMyMessage ? 'right' : 'left', backgroundImage: `url(${person?.person?.avatar})` }}
            />
        ))
    }

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, idx) => {
            const message = messages[key];
            const lastMessageKey = idx === 0 ? null : keys[idx - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg ${idx}`} style={{ width: '100%' }}>
                    <div className="meessage-block">
                        {
                            isMyMessage
                            ? <MyMessage  message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }


    if(!chat) return 'Loading...';

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height:'100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;