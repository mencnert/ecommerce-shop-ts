import React from "react";

import "./form-input.styles.scss";

type Props = {
  label: string;
  name: string;
  type: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required: boolean;
};

const FormInput: React.FC<Props> = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
