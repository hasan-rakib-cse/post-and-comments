import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import CommentsDetails from '../CommentsDetails/CommentsDetails';
import data from '../data/employeeData.json'

const Comments = () => {
  const {commentsId} = useParams();
  const [comments, setComments] = useState([])
  const [isCommentsLoading, setCommentsIsloading] = useState(true)
  const [jsonData, setJsonData] = useState([])

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${commentsId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setComments(data))
    setCommentsIsloading(false)

  }, [commentsId])

  useEffect(() => {
    setJsonData(data);
  
  }, []);

  if(isCommentsLoading) return <p>Loading....</p>

  const dataImage = jsonData.map(dt => dt.image);

  let count = 0;

  return (
    <div>
        {comments.map(comment => <CommentsDetails key={comment.id} comment={comment} dataImage={dataImage} count={count++} />)}
        
    </div>
  )
}

export default Comments