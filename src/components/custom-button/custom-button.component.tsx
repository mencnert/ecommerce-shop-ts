import React from "react";

import "./custom-button.styles.scss";

type Props = {
  type: "button" | "submit";
  isGoogleSignIn: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CustomButton: React.FC<Props> = ({
  children,
  isGoogleSignIn,
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
