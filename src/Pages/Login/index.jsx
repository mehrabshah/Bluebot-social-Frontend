import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BASE_URL from "../../services/api";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faPerson,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Auth = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  const initialValues = {
    email: "",
    password: "",
    firstName: "",
  };

  const [togglePassword, setTogglePassword] = useState(false);

  const handleSubmit = async (values) => {
    console.log("Login button clicked");
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email: values.email,
        password: values.password,
      });

      if (response.status === 200) {
        const responseData = response.data;
        // Store token and other information in local storage
        localStorage.setItem("Bluebottoken", responseData.token);
        localStorage.setItem("role", responseData.role);
        localStorage.setItem("email", responseData.email);
        localStorage.setItem("userName", responseData.username);
        localStorage.setItem("UserId", responseData.UserId);
        navigate("/dashboard");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      window.alert(error.message || "An error occurred during login");
    }
  };

  const handleSignupSubmit = async (values) => {
    console.log("Signup button clicked");
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, values);
        window.alert("Successfully Signed Up");
        setActiveTab("login");
    } catch (error) {
      window.alert(error.message || "An error occurred during SignUp");
    }
  };

  const switchToLogin = () => {
    setActiveTab("login");
  };

  const switchToSignup = () => {
    setActiveTab("signup");
  };

  return (
    <>
      <div className="main-container-login display-flex flex-column justify-content-center align-items-center">
        <div className="d-flex w-100 justify-content-center align-items-center">
          <div className="auth-tabs alig-items-center">
            <img src="/images/robot1.png" alt="Robot" className="-image" />
            <button
              className={`mt-3 mb-3 auth-tab ${
                activeTab === "login" ? "active" : ""
              }`}
              onClick={switchToLogin}
            >
              <div className="d-flex flex-column align-items-center p-3 switch-tabs-auth">
                <i
                  className="fas fa-user mb-2"
                  style={{ fontSize: "24px" }}
                ></i>

                <p className="m-0">Login</p>
              </div>
            </button>
            <button
              className={`mt-3 mb-3 auth-tab ${
                activeTab === "signup" ? "active" : ""
              }`}
              onClick={switchToSignup}
            >
              <div className="d-flex flex-column align-items-center p-2 switch-tabs-auth">
                <i
                  className="fas fa-user mb-2"
                  style={{ fontSize: "24px" }}
                ></i>

                <p className="m-0">SignUp</p>
              </div>
            </button>
          </div>

          {activeTab === "login" && (
            <div className="login-container scroll-animation">
              <img
                src="/images/loginPeople.png"
                alt="Image 2"
                className="img-container"
              />
              <div className="card">
                <h1 className="no-account">
                  Don't have an account?{" "}
                  <span onClick={switchToSignup}>Sign Up.</span>
                </h1>
                <Formik
                  initialValues={initialValues}
                  // validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div className="form-container">
                      <label htmlFor="email">E-Mail</label>
                      <div className="input-container">
                        <Field
                          type="email"
                          className="field-class"
                          placeholder="youremail@gmail.com"
                          id="email"
                          name="email"
                          required
                        />
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="email-icon"
                        />
                      </div>
                      <div className="error">
                        <ErrorMessage name="email" component="div" />
                      </div>
                    </div>
                    <div className="form-container">
                      <label htmlFor="password ">Password</label>
                      <div className="input-container">
                        <Field
                          type="password"
                          className="field-class"
                          placeholder="Enter password"
                          id="password"
                          name="password"
                          required
                        />
                        <FontAwesomeIcon icon={faLock} className="email-icon" />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>
                    <button type="submit" to="/sidebar" className="submit-btn">
                      SIGN IN
                    </button>
                    <h1 className="privacy">
                      By cLicking the Sign In Button, you therefore agree to the
                      Privacy Policy.
                      <br className="span-priv" />
                      For more information, read about our privacy policy{" "}
                      <span className="span-priv-link"><Link to='/privacyPolicy'>here</Link></span>
                    </h1>
                  </Form>
                </Formik>
              </div>
            </div>
          )}

          {activeTab === "signup" && (
            <div className="login-container scroll-animation">
              <img
                src="/images/signUpPeople.jpg"
                alt="Image 2"
                className="img-fluid"
              />
              <div className="card">
                <h1 className="no-account">
                  Already have an account?{" "}
                  <span onClick={switchToLogin}>Sign In.</span>
                </h1>
                <Formik
                  initialValues={initialValues}
                  // validationSchema={validationSchema}
                  onSubmit={handleSignupSubmit}
                >
                  <Form>
                    <div className="form-container">
                      <label htmlFor="firstName">Username</label>
                      <div className="input-container">
                        <Field
                          type="text"
                          className="field-class"
                          placeholder="myusername"
                          id="firstName"
                          name="firstName"
                        />
                        <FontAwesomeIcon icon={faUser} className="email-icon" />
                      </div>
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form-container">
                      <label htmlFor="email">E-Mail</label>
                      <div className="input-container">
                        <Field
                          type="email"
                          className="field-class"
                          placeholder="youremail@gmail.com"
                          id="email"
                          name="email"
                          required
                        />
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="email-icon"
                        />
                      </div>
                      <div className="error">
                        <ErrorMessage name="email" component="div" />
                      </div>
                    </div>
                    <div className="form-container">
                      <label htmlFor="password ">Password</label>
                      <div className="input-container">
                        <Field
                          type={togglePassword ? "text" : "password"}
                          className="field-class"
                          placeholder="Enter password"
                          id="password"
                          name="password"
                          required
                        />
                        <FontAwesomeIcon icon={faLock} className="email-icon" />
                      </div>
                      <div className="show-password">
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="error"
                        />
                        <span
                          style={{
                            color: "skyblue",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setTogglePassword(!togglePassword);
                          }}
                        >
                          Show Password
                        </span>
                      </div>
                    </div>

                    <button type="submit" className="submit-btn">
                      Sign Up
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
