import React, {useState, useEffect} from 'react'
import AllReplies from '../components/AllReplies';
import Popup from '../components/Popup';

const RedditContainer = () => {
    const[replies, setReplies] = useState([]);

    useEffect(() => {
        getReplies();
    }, [])

    const getReplies = function(){
        fetch('https://www.reddit.com/r/javascript.json')
        .then(res => res.json())
        .then(replies => setReplies(replies.data.children))
    }

    const[isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <p>
                <AllReplies replies={replies}/>
            </p>
        </div>
    )
}



export default RedditContainer