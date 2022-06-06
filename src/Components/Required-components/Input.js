import React from "react";
import { Field, ErrorMessage } from "formik";

function Input({ label, name, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name}>
        {(errorMsg) => <div className="error">{errorMsg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default Input;
