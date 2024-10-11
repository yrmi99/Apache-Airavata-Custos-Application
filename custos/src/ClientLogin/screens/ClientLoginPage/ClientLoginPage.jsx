import React from "react";
import { HeaderAuth } from "../../components/HeaderAuth";
import { TextLink } from "../../components/TextLink";
import "./style.css";

export const ClientLoginPage = () => {
  return (
    <div className="client-login-page">
      <div className="div-2">
        <div className="chrome-browser-bar">
          <img className="icons" alt="Icons" src="/img/icons.svg" />
          <div className="address-bar">
            <div className="URL">
              <img className="lock" alt="Lock" src="/img/lock.svg" />
              <div className="text">www.clientapp/login.com</div>
            </div>
            <img className="star" alt="Star" src="/img/star.svg" />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">M</div>
          </div>
          <img className="more" alt="More" src="/img/more.svg" />
        </div>
        <div className="overlap-group">
          <div className="form-log-in">
            <div className="input-field">
              <input className="label" placeholder="Username/Email" type="email" />
              <input className="input" placeholder="username" type="text" />
            </div>
            <div className="input-field">
              <div className="label-2">Password</div>
              <div className="value-wrapper">
                <div className="value">password</div>
              </div>
            </div>
            <div className="button-group">
              <button className="button-3">
                <button className="button-4">Sign In</button>
              </button>
            </div>
          </div>
          <div className="input-2">
            <div className="text-wrapper-3">Login with Custos</div>
          </div>
          <div className="input-3">
            <div className="text-wrapper-3">Login with Google</div>
          </div>
          <div className="input-4">
            <div className="text-wrapper-3">Login with University</div>
          </div>
          <TextLink
            className="text-link-instance"
            divClassName="design-component-instance-node"
            text="Forgot password?"
          />
          <img className="line" alt="Line" src="/img/line-1.svg" />
          <img className="google" alt="Google" src="/img/google.png" />
          <div className="text-wrapper-4">or</div>
          <p className="p">Don’t have an account? Register Here</p>
          <TextLink className="text-link-2" divClassName="design-component-instance-node" text="Forgot username?" />
        </div>
        <HeaderAuth className="header-auth-instance" state="logged-out" />
        <div className="text-wrapper-5">Client App Login</div>
      </div>
    </div>
  );
};

export default ClientLoginPage;