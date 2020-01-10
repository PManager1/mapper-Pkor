import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import RulePicker from './RulePicker';
import MetaDataPicker from './MetaDataPicker';
// import FreeSolo from './FreeSolo'; 


import DeleteBtn from './common/DeleteBtn.js'; 
// import PickSingleMapped from './common/PickSingleMapped';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  sectionRulePicker:{
    marginLeft:20,
    marginTop:20,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullDialogInFormFields(props) {
  // console.log ( '38 -  FullDialog  props.Info._id = ', props.fieldInfo._id ); 
  console.log('40- FullDialogInForm  props =', props );

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        More FDIF -56
      </Button>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              More Information
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
      
        {/* <div className={classes.sectionRulePicker}>
              <MetaDataPicker />
            </div> */}
            <br />

            <Divider />

            <div className={classes.sectionRulePicker}>
              {/* <FreeSolo /> */}
            </div>
            

            <div className={classes.sectionRulePicker}>
              {/* <RulePicker /> */}
            </div>
            <br />
            <Divider />

            <div className={classes.sectionRulePicker}>
                <DeleteBtn {...props} />
            </div>


      </Dialog>
    </div>
  );
}
