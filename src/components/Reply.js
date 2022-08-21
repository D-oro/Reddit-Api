import React, {useState} from 'react'

const Reply = ({title, ups}) => {

    const[isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const UpvotesPopup = props => {
        return(
            <div className="popup-box">
                <div className="box">
                    {props.content}
                    <span onClick={props.handleClose}>
                        <button>Close</button></span>
                </div>
            </div>
        )}

    return(
        <div>
            <li>
                {title} 
                <input 
                    type="button"
                    value="show upvotes"
                    onClick={togglePopup}
                />
                {isOpen && <UpvotesPopup
                content={<>
                    <p>{ups}</p>
                </>}
                handleClose={togglePopup}
                />}
            </li>
        </div>
    )
}

export default Reply

