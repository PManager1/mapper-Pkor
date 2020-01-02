import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function BottomButtons() {
  const classes = useStyles();

  return (
    <div>

      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
    
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Create a New Template
      </Button>
     
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save in Current Template
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        SaveAs New Template
      </Button>

      <Button
        variant="contained"
        color="primary"
        disabled
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Generate Output file
      </Button>

    </div>
  );
}