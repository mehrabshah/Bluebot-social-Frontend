import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BASE_URL from "../../services/api";
import './login.css'
const Auth = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  const initialValues = {
    email: "",
    password: "",
    gender: "",
    firstName: "",
    lastName: "",
  };

  const [togglePassword, setTogglePassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    gender: Yup.string().required("Gender is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
  });

  const handleLoginSubmit = async (values) => {
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
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, values);

      if (response.status === 200) {
        window.alert("Successfully Signed Up");
        navigate("/login");
      } else {
        throw new Error("Signup failed");
      }
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
            <i className="fas fa-user mb-2" style={{ fontSize: '24px' }}></i>

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
            <i className="fas fa-user mb-2" style={{ fontSize: '24px' }}></i>
            
              <p className="m-0">SignUp</p>
            </div>
          </button>
        </div>

      {activeTab === "login" && (
        
        <div className="login-container scroll-animation">
          <img src="/images/loginPeople.png" alt="Image 2" className="img-fluid" />
          <div className="card">
            <h2 className="text-center">Sign in to Continue</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLoginSubmit}
            >
                <Form>
                  <div className="form-group">
                    <label htmlFor="email ">Email</label>
                    <Field type="email" className="form-control mt-2" placeholder="Enter email address" id="email" name="email" required />
                    <ErrorMessage name="email" component="div" className="alert text-danger" />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="password ">Password</label>
                    <Field type={togglePassword ? 'text' : 'password'} className="form-control mt-2" placeholder="Enter password" id="password" name="password" required />
                    <div
                      style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'flex-end',
                        marginTop: '0.3rem',
                      }}
                    >
                      <span
                        style={{ color: 'skyblue', textDecoration: 'underline', cursor: 'pointer' }}
                        onClick={() => {
                          setTogglePassword(!togglePassword)
                        }}
                      >
                        Show Password
                      </span>
                    </div>
                    <ErrorMessage name="password" component="div" className="alert text-danger" />
                  </div>
                  <button type="submit" to="/sidebar" className="btn mt-5 custom-buttonn">
                    Login
                  </button>
                </Form>
            </Formik>
          </div>
        </div>
      )}

      {activeTab === "signup" && (
        <div className="login-container scroll-animation">
          <img src="/images/signUpPeople.jpg" alt="Image 2" className="img-fluid" />
          <div className="card">
            <h2 className="text-left create-account-heading">Create an account</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSignupSubmit}
            >
							<Form>
							<div className="form-group">
						<label htmlFor="firstName">Your Name</label>
						<Field
							type="text"
							className="form-control"
							placeholder="Enter First Name"
							id="firstName"
							name="firstName"
						/>
						<ErrorMessage name="firstName" component="div" className="alert text-danger" />
					</div>
								<div className="form-group">
									<label htmlFor="email ">Email</label>
									<Field
										type="email"
										className="form-control"
										placeholder="Enter email address"
										id="email"
										name="email"
										required
									/>
									<ErrorMessage name="email" component="div" className="alert text-danger" />
								</div>
								<div className="form-group">
									<label htmlFor="password ">Password</label>
									<Field
										type={togglePassword ? "text" : "password"}
										className="form-control"
										placeholder="Enter password"
										id="password"
										name="password"
										required
									/>
									<div
										style={{
                                            display: "flex",
											width: "100%",
											justifyContent: "flex-end",
											marginTop: "",
										}}
									>
										<span
                                        style={{ color: "skyblue", textDecoration: "underline", cursor: "pointer" }}
											onClick={() => {
                                                setTogglePassword(!togglePassword);
											}}
										>
											Show Password
										</span>
									</div>
									<ErrorMessage name="password" component="div" className="alert text-danger" />
								</div>

								<button type="submit" to="/sidebar" className="btn custom-buttonn">
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
