import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import * as Yup from "yup";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`
  },
  container: {
    width: '100%'
  }
});

const validationSchema = Yup.object({
  RecordName: Yup.string("Enter a RecordName").required("RecordName is required"),
  FieldName: Yup.string("Enter a FieldName").required("FieldName is required"),
  MappedFieldName: Yup.string("Enter a MappedFieldName").required("MappedFieldName is required"),
  MaxCharLength: Yup.string("Enter a MaxCharLength").required("MaxCharLength is required"),
  SequenceNumber: Yup.string("Enter a SequenceNumber").required("SequenceNumber is required"),
  RadioValue: Yup.string("Enter a RadioValue").required("RadioValue is required"),
  LeftPadding: Yup.string("Enter a LeftPadding").required("LeftPadding is required"),
  RightPadding: Yup.string("Enter a RightPadding").required("RightPadding is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("")
    .min(8, "Password must contain atleast 8 characters")
    .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});

class RecordsForm extends Component {
  constructor(props) {
    // console.log(' 44 - in RecordsForm props.fieldInfo  = ', props.fieldInfo );
    super(props);
    this.state = {};
  }

  submit = data => {
    // console.log('50-inside submit function of RecordsForm ', data);
  };


  render() {
    const classes = this.props;
    return (
      <React.Fragment>
        <div className={classes.container} style={{width: '100%' }}>
            <Formik
              render={props => <Form {...props} />}
              initialValues={this.props.fieldInfo}
              validationSchema={validationSchema}
              onSubmit={this.submit}
            />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(RecordsForm);

//  https://codesandbox.io/s/jzjx2890oy

