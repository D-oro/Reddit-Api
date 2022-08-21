import React, {useState, useEffect} from 'react'
import AllReplies from '../components/AllReplies';

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

    return(
        <div>
            <p>
                <AllReplies replies={replies}/>
            </p>
        </div>
    )
}
export default RedditContainer


