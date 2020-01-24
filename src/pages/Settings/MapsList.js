import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
// import CommentIcon from '@material-ui/icons/Comment';
import InfoIcon from '@material-ui/icons/Info';

import { connect } from "react-redux";
// import { fetchMaps } from '../../actions';
import {useSelector, useDispatch} from 'react-redux';
import BottomButtons from './BottomButtons';
import RenameDialog from './RenameDialog.js';
import Tooltip from '@material-ui/core/Tooltip';
import { fetchSingleMap, fetchMaps } from '../../actions';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 1200,
    backgroundColor: theme.palette.background.paper,
  },
}));

function MapsList(props) {

  console.log( '33 -   props.maps =', props.Maps );
  const { Maps } = props;
  console.log( '33 -   Maps =', Maps );

  useEffect(() => {
    props.fetchMaps();
}, []);


  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (

    <>
    <List className={classes.root}>
      {top100Films.map(value => {

        const labelId = `checkbox-list-label-${value}`;

        return (  //key={value}
          <ListItem  role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                // inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={` ${value.provider}`} />
            <ListItemSecondaryAction>
            <Tooltip title="Rename the map" aria-label="add">
                <RenameDialog />
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>

<BottomButtons />
</>
  );
}



const mapStateToProps = (state) =>{
  console.log( '91  - MapsList -   state =', state );

  return { Maps: state.clients.data };
};

export default connect(mapStateToProps, { fetchSingleMap, fetchMaps })(MapsList);

// export default connect(mapStateToProps, { fetchLogics })(MapsList);


const top100Films = [
  { provider: 'BlackBaud', 'mapId': 'BlackClientId-123423994', clientName: 'Apple', PayGroup: 'project-ID'  },
  { 'provider': 'Shawshank Redemption', year: 1972, 'client': 'Royal Dutch Shell', PayGroup: 'paygp'},
  { 'provider': 'The Godfather: Part II', year: 1974, 'client': 'State Grid', PayGroup: 'paygp'  },
  { 'provider': 'The Dark Knight', year: 2008, 'client': 'BP', PayGroup: 'paygp'  },
  { 'provider': '12 Angry Men', year: 1957, 'client': 'Volkswagen', PayGroup: 'paygp'  }
];
