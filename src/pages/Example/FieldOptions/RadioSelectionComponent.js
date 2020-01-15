import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";

import Grid from '@material-ui/core/Grid';


const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

export default function RadioSelectionComponent(props) {
  console.log('  17 RadioSelectionComponent -   props =', props );

  const [selectedValue, setSelectedValue] = React.useState("Text");

  const handleChange = event => {
    props.parentMethod();
    setSelectedValue(event.target.value);
    console.log(' 21  - event.target.value = ', event.target.value);
  };

  return (
    <div>
      Text
      <Radio
        checked={selectedValue === "Text"}
        onChange={handleChange}
        value="Text"
        name="radio-button-demo"
        inputProps={{ "aria-label": "A" }}
      />
      Numeric
      <Radio
        checked={selectedValue === "Numeric"}
        onChange={handleChange}
        value="Numeric"
        name="radio-button-demo"
        inputProps={{ "aria-label": "B" }}
      />

    </div>
  );
}
