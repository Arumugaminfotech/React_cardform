import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { bgcolor } from '@mui/system';
import {Grid} from '@mui/material'


const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cols , setCol] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const col =() => {
    setCol(ps => !ps);
  }

  return (
    <div  className="card">
      <Grid>
    <Card sx={{ maxWidth: 345,  background:" linear-gradient(135deg, hsl(36,100%,50%) 10%, hsl(72,100%,50%) 60%, white 90%)",}} marginLeft="100px" >
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.container.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings"  id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick} >
            <MoreVertIcon />
          </IconButton>
        }
        title={props.container.name}
       
        subheader={moment().format('MMMM Do YYYY, h:mm:ss a')}
      />
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={props.remove}>Delete</MenuItem>
        <MenuItem onClick={props.h}>Edit</MenuItem>
      </Menu>
      <CardMedia
        component="img"
        height="194"
        image="./image/mumbai.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.container.des}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.container.pro}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {cols ?<FavoriteIcon onlClick = {col} color = "secondary" />: <FavoriteIcon onClick = {col}     />}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Details of the project will be updated soon
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    </div>
  );
}