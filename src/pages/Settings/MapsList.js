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

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
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
  { provider: 'BlackBaud', mapId: 'BlackClientId-123423994', clientName: 'Apple', PayGroup: 'project-ID'  },
  { provider: 'Shawshank Redemption', year: 1972, client: 'Royal Dutch Shell', PayGroup: 'paygp'},
  { provider: 'The Godfather: Part II', year: 1974, client: 'State Grid', PayGroup: 'paygp'  },
  { provider: 'The Dark Knight', year: 2008, client: 'BP', PayGroup: 'paygp'  },
  { provider: '12 Angry Men', year: 1957, client: 'Volkswagen', PayGroup: 'paygp'  },
  { provider: "Schindler's List", year: 1993, client: 'Toyota', PayGroup: 'paygp'  },
  { provider: 'Pulp Fiction', year: 1994, client: 'Berkshire Hathaway', PayGroup: 'paygp'  },
  { provider: 'The Lord of the Rings: The Return of the King', year: 2003, client: 'Amazon', PayGroup: 'paygp'  },
  { provider: 'The Good, the Bad and the Ugly', year: 1966, client: 	'UnitedHealth', PayGroup: 'paygp'  },
  { provider: 'Fight Club', year: 1999, client: 'Samsung', PayGroup: 'paygp'  },
  { provider: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, client: 'McKesson', PayGroup: 'paygp'  },
  { provider: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980, client: 'Daimler', PayGroup: 'paygp'  },
  { provider: 'Forrest Gump', year: 1994, client: 'CVS Health', PayGroup: 'paygp'  },
  { provider: 'Inception', year: 2010, client: 'Apple', PayGroup: 'paygp'  },
  { provider: 'The Lord of the Rings: The Two Towers', year: 2002, client: 'Apple', PayGroup: 'paygp'  },
  { provider: "One Flew Over the Cuckoo's Nest", year: 1975, client: 'Apple', PayGroup: 'paygp'  },
  { provider: 'Goodfellas', year: 1990, client: 'Apple', PayGroup: 'paygp'  },
  { provider: 'The Matrix', year: 1999, client: 'Banana', PayGroup: 'paygp'  },
  { provider: 'Seven Samurai', year: 1954, client: 'Gap', PayGroup: 'paygp'  },
];
