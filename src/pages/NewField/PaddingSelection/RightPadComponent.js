import React from 'react';
import PickMapSelect from '../../../components/Records/PickMapSelect.js';
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';


const LeftPadComponent  = () => {

  return(<div>


    <TextField
      name="PaddingRight"
      // helperText={touched.PaddingLeft ? errors.PaddingLeft : ""}
      // error={Boolean(errors.PaddingLeft)}
      label="Right Padding value"
      // value={PaddingLeft}
      // onChange={handleChange}
      fullWidth
    />
    {/* <div>{Boolean(errors.PaddingLeft) ? errors.PaddingLeft : ""}</div> */}

    </div>);
};

export default LeftPadComponent;

