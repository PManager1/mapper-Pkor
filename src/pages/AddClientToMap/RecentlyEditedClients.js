import React, { Component, useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { Spinner } from "../../components/common/components/spinner/spinner.js";
import { connect } from "react-redux";
import { fetchClients } from '../../actions';
import {useSelector, useDispatch} from 'react-redux';
import BottomButtons from './BottomButtons';
import Tooltip from '@material-ui/core/Tooltip';
import RenameDialogClients from '../../components/common/RenameDialogClients.js';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 1200,
    backgroundColor: theme.palette.background.paper,
  },
}));

const [clients, setClients] = [];

function RecentlyEditedClients(props) {

  const [Loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);

  const { Clients } = props;
  console.log(' 13 Clients = ', Clients);


const callBackend = () => {
  console.log('44 - callBackend() called props=', props);
  props.fetchClients();
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

  return (
    <>
     <Typography variant='p' color="primary" align="left">
                    Recently edited clients
            </Typography>

    {!props.Clients ? (
      <Spinner />
    ) : (
        <>
          <List className={classes.root}>
            {Clients.map(value => {

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
                  <ListItemText id={labelId} primary={` ${value.clientName}`} />
                  <ListItemSecondaryAction>
                    <Tooltip title="Rename the map" aria-label="add">
                      <RenameDialogClients mapInfo={value} />
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </>
      )}

<BottomButtons />
</>
  );
}


const mapStateToProps = (state) =>{
  console.log( '72 - AllRules  state =', state );
  // return { records: state.records.data };
  return { Clients: state.clients.data };
};

export default connect(mapStateToProps, { fetchClients })(RecentlyEditedClients);