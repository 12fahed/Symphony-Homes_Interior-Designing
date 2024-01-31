import {PrettyChatWindow} from 'react-chat-engine-pretty'


const ChatsPage = (props) =>{
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='3fff7234-42d1-4a94-a03d-195e51d4aab6'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage