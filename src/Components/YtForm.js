import React from "react";
import {
  useFormik,
  ErrorMessage,
  Form,
  Field,
  Formik,
  FieldArray,
} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  cname: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
});
const initialValues = {
  fname: "",
  email: "",
  cname: "",
  comments: "",
  address: "",
  social: {
    twitter: "",
    instagram: "",
    facebook: "",
  },
  phnNumber: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};
 
function YtForm() {
  // const formik = useFormik({
  //   initialValues: {
  //     fname: "",
  //     email: "",
  //     cname: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  //   // validate: (values) => {
  //   //   let errors = {};
  //   //   if (!values.fname) {
  //   //     errors.fname = "Required";
  //   //   }
  //   //   if (!values.email) {
  //   //     errors.email = "Required";
  //   //   } else if (
  //   //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   //   ) {
  //   //     errors.email = "Invalid Email Address";
  //   //   }
  //   //   if (!values.cname) {
  //   //     errors.cname = "Required";
  //   //   }
  //   //   return errors;
  //   // },
  //   validationSchema,
  // });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="fname">First Name:</label>
              <Field
                type="text"
                id="fname"
                name="fname"
                // value={formik.values.fname}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // {...formik.getFieldProps("fname")}
              />
              {/* {formik.touched.fname && formik.errors.fname ? (
            <div className="error">{formik.errors.fname}</div>
          ) : null} */}
              <ErrorMessage name="fname">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // {...formik.getFieldProps("email")}
              />
              {/* {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null} */}
              <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="cname">Channel Name:</label>
              <Field
                type="text"
                id="cname"
                name="cname"
                // value={formik.values.cname}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // {...formik.getFieldProps("cname")}
              />
              {/* {formik.touched.cname && formik.errors.cname ? (
            <div className="error">{formik.errors.cname}</div>
          ) : null} */}
              <ErrorMessage name="cname">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments:</label>
              <Field as="textarea" id="comments" name="comments" />
              <ErrorMessage name="comments">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="address">Address:</label>
              <Field name="address">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <input type="text" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter:</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>
            <div className="form-control">
              <label htmlFor="instagram">Instagram:</label>
              <Field type="text" id="instagram" name="social.instagram" />
            </div>
            <div className="form-control">
              <label htmlFor="primary">Primary Phn No:</label>
              <Field type="number" id="primary" name="phnNumber[0]" />
            </div>
            <div className="form-control">
              <label htmlFor="secondary">Secondary Phn No:</label>
              <Field type="number" id="secondary" name="phnNumber[1]" />
            </div>
            <div className="form-control">
              <label>List Of Phn No:</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field
                            type="number"
                            id="phNumber"
                            name={`phNumbers[${index}]`}
                          />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                        </div>
                      ))}
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            {/* <button
              type="submit"
              disabled={!(formik.dirty && formik.isValid)}
              >
              Submit
            </button> */}
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YtForm;
