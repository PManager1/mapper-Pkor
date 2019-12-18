import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import NameIcon from "@material-ui/icons/SupervisorAccount";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";

export const Form = props => {
  const {
    values: { FieldName, MappedFieldName, MaxCharLength, SequenceNumber  },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;
  console.table(props);

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="FieldName"
        helperText={touched.FieldName ? errors.FieldName : ""}
        error={Boolean(errors.FieldName)}
        label="FieldName"
        value={FieldName}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.name) ? errors.name : ""}</div>

      <TextField
        name="MappedFieldName"
        helperText={touched.MappedFieldName ? errors.MappedFieldName : ""}
        error={Boolean(errors.MappedFieldName)}
        label="MappedFieldName"
        value={MappedFieldName}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.MappedFieldName) ? errors.MappedFieldName : ""}</div>
      


      <TextField
        name="MaxCharLength"
        helperText={touched.MaxCharLength ? errors.MaxCharLength : ""}
        error={Boolean(errors.MaxCharLength)}
        label="MaxCharLength"
        value={MaxCharLength}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.MaxCharLength) ? errors.MaxCharLength : ""}</div>


      <TextField
        name="SequenceNumber"
        helperText={touched.SequenceNumber ? errors.SequenceNumber : ""}
        error={Boolean(errors.SequenceNumber)}
        label="SequenceNumber"
        value={SequenceNumber}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.SequenceNumber) ? errors.SequenceNumber : ""}</div>
   

   
      <Button
        type="submit"
        fullWidth
        variant="raised"
        color="primary"
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
};
