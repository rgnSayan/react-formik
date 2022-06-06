import React from "react";
import CheckBox from "./Required-components/CheckBox";
import DatePicker from "./Required-components/DatePicker";
import Input from "./Required-components/Input";
import Radio from "./Required-components/Radio";
import Select from "./Required-components/Select";
import TextArea from "./Required-components/TextArea";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
  }
}

export default FormikControl;
