import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

import './PostDetails.css';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
}));

const PostDetails = () => {
    const {postId} = useParams();
    const [postDetails, setPostDetails] = useState({})
    const [isPostLoading, setPostIsloading] = useState(true)

    useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setPostDetails(data)
        setPostIsloading(false)
      })
    
    }, [postId])

    if(isPostLoading) return <p>Loading....</p>
    
    const {id, title, body} = postDetails;
    


  return (
    <div>
        <div className='postDetails'>
            <p><b>Post Id:</b> {id}</p>
            <p><b>Post Title:</b> {title}</p>
            <p><b>Post Description: </b>{body}</p>
            <Link to={`/posts/postId/${id}`}><ColorButton variant="contained">See Comments</ColorButton></Link>
        </div>
        
    </div>
  )
}

export default PostDetails