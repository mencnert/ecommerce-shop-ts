import React, { FunctionComponent } from "react";

import "./custom-button.styles.scss";

interface Props {
  type: "button" | "submit";
  isGoogleSignIn: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: FunctionComponent<Props> = ({
  children,
  isGoogleSignIn = false,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
