import React from "react";
import { Field, ErrorMessage } from "formik";

function DatePicker({ name, label, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field type="date" name={name} id={name} {...rest} />
      <ErrorMessage name={name}>
        {(errorMsg) => <div className="error">{errorMsg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default DatePicker;
