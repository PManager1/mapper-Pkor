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


import {useSelector, useDispatch} from 'react-redux';
import BottomButtons from './BottomButtons';
import RenameDialog from './RenameDialog.js';
import Tooltip from '@material-ui/core/Tooltip';
// import { fetchMaps } from '../../actions';

import { fetchSingleMap, fetchMaps } from '../../actions';


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
  console.log( ' 13 Maps = ', Maps );


  const renderDescription = () => {
    console.log( '17 - renderDescription props.Maps=', props.Maps );


    return (
      <>
        {[1,2,3,4].map((item, index) => (
      // {Maps.map((item, index) => (

            <li key={item}>
              {item}
            </li>

        ))}
      </>
    )

  }







  const callBackend = () =>{
    console.log( '44 - callBackend() called props=', props );
    props.fetchMaps();
  }

  useEffect((props) => {
    console.log("47 - calling useEffect with props = ", props );
    callBackend(props);
    console.log("49 - fetching fetchMaps =", props);
  // }, [props]);
}, []);

  // console.log("22 - fetching fetchMaps =", props.Maps);
  // ****** END OF CHANGE ******

  return (<div>
    {!props.Maps ? (
      <Spinner />
    ) : (
      <>
      {/* {[1,2,3,4].map((item, index) => ( */}
    {props.Maps.map((item, index) => (
          <li >
            {item.mapName}
          </li>

      ))}
    </>
    )}
    </div>);

};


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






