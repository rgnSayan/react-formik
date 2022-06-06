import React from "react";
import { Field, ErrorMessage } from "formik";

function TextArea({ name, label, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} id={name} {...rest} />
      <ErrorMessage name={name}>
        {(errorMsg) => <div className="error">{errorMsg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default TextArea;
