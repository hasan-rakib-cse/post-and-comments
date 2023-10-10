import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import Post from '../Post/Post'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data =>setPosts(data))
    
  }, [])


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

  return (
    <div>
      <Box sx={{ width: '100%' }}>
          <div style={{textAlign: 'center'}}>
              <h3 style={{display: 'inline-block', marginTop: '0px'}}>Total Post: {posts.length}</h3>
          </div>
          <Grid container spacing={{ xs: 2, md: 3 }} style={{textAlign: 'left'}}>
              {posts.map(post => {
                  return(
                      <Grid key={post.id} item xs={12} sm={12} md={6} lg={4}>
                          <Item key={post.id} style={{backgroundColor: '#efefef', padding: '20px'}}>
                            <Post post={post} />
                          </Item>
                      </Grid>
                  )
              })}

          </Grid>
      </Box>
    </div>
  )
}

export default Posts