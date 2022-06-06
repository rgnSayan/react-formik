import React from "react";
import { Field, ErrorMessage } from "formik";

function CheckBox({ name, label, options, ...rest }) {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value && field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name}>
        {(errorMsg) => <div className="error">{errorMsg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default CheckBox;
