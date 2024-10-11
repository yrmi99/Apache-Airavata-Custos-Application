/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import "./style.css";

export const HeaderAuth = ({ state, className }) => {
  return (
    <div className={`header-auth ${state} ${className}`}>
      {state === "logged-out" && (
        <>
          <button className="button">
            <button className="div">Sign in</button>
          </button>
          <button className="button-wrapper">
            <button className="button-2">Register</button>
          </button>
        </>
      )}

      {["logged-in-hover", "logged-in"].includes(state) && (
        <>
          <div className="avatar" />
          <ChevronDown1 className="chevron-down" />
        </>
      )}
    </div>
  );
};

HeaderAuth.propTypes = {
  state: PropTypes.oneOf(["logged-out", "logged-in-hover", "logged-in"]),
};
