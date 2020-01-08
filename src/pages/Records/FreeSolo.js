/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <Autocomplete
      fullWidth
        multiple
        id="tags-filled"
        options={top100Films.map(option => option.title)}
        // defaultValue={[top100Films[1].title]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={params => (
          <TextField
          fullWidth
            {...params}
            variant="outlined"
            label="Pick meta data values"
            placeholder="Meta Data"
            fullWidth
          />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'TYPE_CODE' },
  { title: 'ACCOUNT_NUMBER' },
  { title: 'POST_DATE,' },
  { title: 'ENCUMBRANCE' },
  { title: 'JOURNAL' },
  { title: 'AMOUNT' },
  { title: 'D_UI_PROJECT_ID' },
  { title: 'D_ACCOUNT_CLASS' },
  { title: 'D_AMOUNT": 10' },
  { title: 'D_PERCENT": 100' },
];
