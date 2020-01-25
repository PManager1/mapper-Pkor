import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InfoIcon from '@material-ui/icons/Info';
import {useSelector, useDispatch} from 'react-redux';
import { editMap } from '../../actions';
import { connect } from "react-redux";

function RenameDialog(props) {
  // console.log( '12 - RenameDialog props = ', props );
  const [TxtMapName, setTxtMapName] = useState('');

  const onChangemapName = (e) =>{
    console.log( ' 19 - onChangemapName  e.target.value=' , e.target.value );
    // setTxtMapName(e.target.value);

    setTxtMapName({ TxtMapName : e.target.value });

    console.log( '24-  TxtMapName = ',  TxtMapName );
  }

  const dispatch = useDispatch()

  const { mapInfo } =  props;

  console.log( '19 - props  = ', props);

  console.log( '  20- mapInfo  = ', mapInfo._id );
  console.log( '  20- mapInfo  = ', mapInfo.mapName);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log('29 - handleSave ,  _id =',  mapInfo._id);
    console.log('37 - handleSave ,  mapName =',  mapInfo.mapName);
    setOpen(false);

    console.log('51 - handleSave ,  TxtMapName =',  TxtMapName);


    // dispatch(editMap(props.values._id, props.values));
    dispatch(editMap( mapInfo._id, TxtMapName));
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button > */}


      <InfoIcon onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            Please provide new Map Name.
          </DialogContentText>
          <TextField
            autoFocus
            // onChange={onChangemapName}
            // value={TxtMapName}
            onChange={e => setTxtMapName(e.target.value)}
            margin="dense"
            id="name"
            label="Map Name"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const mapStateToProps = (state) =>{
  // console.log( '51 -  state.records =', state.records );
  return { records: state.records.data };
};

export default connect(null, { editMap })(RenameDialog);