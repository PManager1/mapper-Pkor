import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Spinner } from "../../components/common/components/spinner/spinner.js";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useSelector, useDispatch } from 'react-redux';
import BottomButtons from './BottomButtons';

import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from "react-router-dom";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';


import { fetchSingleMap, fetchMaps, editMap } from '../../actions';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 1200,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ClientSearchResult = (props) => {

  let history = useHistory();
  const [Loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);

  const { Maps } = props;
  console.log(' 37 -  Maps = ', Maps);


  const handleOnClick = (map) => {
    console.log (' 41 - handleOnClick =', map );
  // props.match.params );
    // console.log( '34 - goToNewField(MapID) clicked props =', MapId );
    // history.push(`/newfield/${props.data.MapId}`)
    // history.push(`/records/${map._id}`);

  }


  const callBackend = () => {
    console.log('44 - callBackend() called props=', props);
    props.fetchMaps();
  }

  useEffect((props) => {
    console.log("47 - calling useEffect with props = ", props);
    callBackend(props);
    console.log("49 - fetching fetchMaps =", props);
    // }, [props]);
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
  // console.log("22 - fetching fetchMaps =", props.Maps);
  // ****** END OF CHANGE ******

  return (<div>
    {!props.Maps ? (
      <Spinner />
    ) : (
        <>
          <List dense className={classes.root}>

{/* {[0, 1, 2, 3].map(value => { */}
  {Maps.map(value => {
  const labelId = `checkbox-list-secondary-label-${value}`;
  return (
    <ListItem key={value} button>

      <ListItemAvatar>
        <Avatar
          alt={`Avatar n°${value + 1}`}
          src={`/static/images/avatar/${value + 1}.jpg`}
        />
      </ListItemAvatar>
      <ListItemText id={labelId} primary={` ${value.mapName}`}   />

      <ListItemText id={labelId} onClick={handleOnClick} primary={`Thursday 19 January 2010`} />

      <Divider variant="inset" component="li" />

    </ListItem>
  );
})}
</List>

          <BottomButtons />
        </>
      )}
  </div>);

};


const mapStateToProps = (state) => {
  console.log('91  - ClientSearchResult -   state =', state);

  return { Maps: state.maps.data };
};

export default connect(mapStateToProps, { fetchSingleMap, fetchMaps, editMap })(ClientSearchResult);

// export default connect(mapStateToProps, { fetchLogics })(ClientSearchResult);








