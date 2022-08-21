import React from 'react';
import Reply from './Reply';

const AllReplies = ({replies}) => {

    return(
        <div>
            {replies.map((reply) => {
                return(
                    <Reply
                        id={reply.data.id}
                        title={reply.data.title}
                        ups={reply.data.ups}
                        downs={reply.data.downs}
                        permalink={reply.data.permalink}
                        selftext={reply.data.selftext}
                    />
                )
            })}
        </div>
    )
};

export default AllReplies