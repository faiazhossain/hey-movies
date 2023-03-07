import React from "react";

function Button({ title, onclick, variant, disabled, fullwidth, type }) {
  let className = "bg-primary p-1 text-white";
  if (fullwidth) {
    className += " w-full";
  }
  if (variant === "outlined") {
    className = className.replace(
      "bg-primary",
      "border border-primary text-primary bg-white"
    );
  }

  return (
    <button className={className} type={type}>
      {title}
    </button>
  );
}

export default Button;
