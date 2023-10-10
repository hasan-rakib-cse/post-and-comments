import React from 'react'
import './CommentsDetails.css'

const CommentsDetails = (props) => {
    const {id, name, email, body} = props.comment
    const dataImage = props.dataImage;
    const count = props.count
    

    return(
        <div>
            <div className='comment-details-area'>
                <div className='image'>
                    <img src={dataImage[count]} alt="" />
                </div>
                <div className='description'>
                    <h3>Id: {id}</h3>
                    <p><b>Name: </b>{name}</p>
                    <p><b>Email: </b>{email}</p>
                    <p><b>Description: </b>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentsDetails