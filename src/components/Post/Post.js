import * as React from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Post.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const Post = (props) => {
  const {id, title, body} = props.post
  
  return (
    <div className='posts'>
      <Card>
        <CardHeader title={`Id: ${id}`} />
        <CardContent>
          <Typography style={{textAlign: 'left', fontSize: '18px'}} gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography style={{textAlign: 'justify'}} variant="body2" color="text.secondary">{`${body.slice(0,100)} ...`}</Typography>
        </CardContent>
        <CardActions style={{padding: '0 16px 16px 16px'}}>
          <Link to={`/posts/${id}`}><ColorButton variant="contained">Custom CSS</ColorButton></Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default Post