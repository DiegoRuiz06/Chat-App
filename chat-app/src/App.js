import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100"
            projectID="0456ba6c-f2e9-4d19-8c17-0001989e6f8d"
            userName="Diego"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/> }
        />
    );
}

export default App;