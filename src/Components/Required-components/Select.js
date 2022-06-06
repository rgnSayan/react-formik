import React from "react";
import { Field, ErrorMessage } from "formik";
function Select({ name, label, options, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} as="select" {...rest}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name}>
        {(errorMsg) => <div className="error">{errorMsg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default Select;
