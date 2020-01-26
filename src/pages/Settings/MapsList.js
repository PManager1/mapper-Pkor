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
// import CommentIcon from '@material-ui/icons/Comment';
import InfoIcon from '@material-ui/icons/Info';


import { useSelector, useDispatch } from 'react-redux';
import BottomButtons from './BottomButtons';
import RenameDialog from './RenameDialog.js';
import Tooltip from '@material-ui/core/Tooltip';

import { fetchSingleMap, fetchMaps, editMap } from '../../actions';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 1200,
    backgroundColor: theme.palette.background.paper,
  },
}));

const MapsList = (props) => {

  const [Loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);

  const { Maps } = props;
  console.log(' 13 Maps = ', Maps);



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
          <List className={classes.root}>
            {Maps.map(value => {

              const labelId = `checkbox-list-label-${value}`;

              return (  //key={value}
                <ListItem role={undefined} dense button onClick={handleToggle(value)}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                    // inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={` ${value.mapName}`} />
                  <ListItemSecondaryAction>
                    <Tooltip title="Rename the map" aria-label="add">
                      <RenameDialog mapInfo={value} />
                    </Tooltip>
                  </ListItemSecondaryAction>
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
  console.log('91  - MapsList -   state =', state);

  return { Maps: state.maps.data };
};

export default connect(mapStateToProps, { fetchSingleMap, fetchMaps, editMap })(MapsList);

// export default connect(mapStateToProps, { fetchLogics })(MapsList);


const top100Films = [
  { provider: 'BlackBaud', 'mapId': 'BlackClientId-123423994', clientName: 'Apple', PayGroup: 'project-ID' },
  { 'provider': 'Shawshank Redemption', year: 1972, 'client': 'Royal Dutch Shell', PayGroup: 'paygp' },
  { 'provider': 'The Godfather: Part II', year: 1974, 'client': 'State Grid', PayGroup: 'paygp' },
  { 'provider': 'The Dark Knight', year: 2008, 'client': 'BP', PayGroup: 'paygp' },
  { 'provider': '12 Angry Men', year: 1957, 'client': 'Volkswagen', PayGroup: 'paygp' }
];






