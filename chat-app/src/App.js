import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100"
            projectID="0456ba6c-f2e9-4d19-8c17-0001989e6f8d"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/> }
        />
    );
}

export default App;