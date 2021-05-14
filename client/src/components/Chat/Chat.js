import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket-io-clent';

let socket;

import './Chat.css'

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:3001';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <infoBar room={room} />
                {/* <input value={message} onChange={(event) => setMessages(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event): null}></input> */}
            </div>
        </div>
    )
}

export default Chat;