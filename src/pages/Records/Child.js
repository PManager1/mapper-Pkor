import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import SortableComponent from './SortableComponent';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Route , withRouter} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    secondary: {
        main: '#F15A29'
      }
    }
  },
)




const summary = {
  height: "50%",
  paddingTop: 5,
};

const sectionRecordName = {
  paddingTop: 5,
  marginTop: 70,
  height: 50,
  marginBottom: -10,
};

const sectionPlusBtn = {
  paddingTop: 5,
  marginTop: 35,
};


const Child = (props) => {
  let history = useHistory();

  const { MapId } = props.data;

  console.log( '37 - in child component  props.data', props.data  );
  console.log( '38 - in child component MapId', MapId  );


  // const { id } = props.match.params;

  // console.log( '40 - in child component  props.match.params id= ', id  );
  useEffect(() => {
    // code to run on component mount
    // props.fetchClients();
  }, [])

  // props.history.push(`/newrecord/${props.match.params.id}`);


  const goToNewField = () => {
    console.log ('53 - goToNewField clicked  - props.data._id =' , props.data._id );
    // console.log( '32 - goToNewField(MapID) clicked props.match.params =', props.match.params );
    // console.log( '34 - goToNewField(MapID) clicked props =', MapId );

    // history.push(`/newfield/${props.data.MapId}`)
    history.push(`/newfield/${props.data.MapId}/${props.data._id}`)
    // history.push(`/newfield`)
  }


    return (
      <div>
           <Grid container spacing={3} style={summary}>
            <Grid item xs={6} sm={4}>
              <section style={sectionRecordName}>
                <Typography variant='h5' align='left'> {props.data.RecordName}  </Typography>
              </section>
             </Grid>
              <Grid item xs={6} sm={4}>
              </Grid>
              <Grid item xs={6} sm={2}>
              </Grid>
              <Grid item xs={6} sm={2}>
              <MuiThemeProvider theme={theme}>
              <section style={sectionPlusBtn}>
                  <Typography paragraph align="right">
                    <Tooltip title="Add New Field" aria-label="add">
                      <Fab color="secondary" aria-label="add" onClick={goToNewField} >
                        <AddIcon />
                        </Fab>
                      </Tooltip>
                  </Typography>
                </section>
                </MuiThemeProvider>
                </Grid>
      </Grid>


            {/* we pass RecordId which has multiple fields in it. Now this one fetches & creates mutiple childs */}
            <SortableComponent Record={props.data}/>
      </div>
    );
  }

export default Child;

