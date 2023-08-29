import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";

const Login = () => {
	const initialValues = {
		email: "",
		password: "",
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
	});

	const handleSubmit = async (values) => {

		try {
			const response = await fetch("http://localhost:8000/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: values.email,
					password: values.password,
				}),
			});
			
			if (!response.ok) {
				// Check for non-2xx HTTP response status
				const errorResponseData = await response.json();
				throw new Error(errorResponseData.message || "An error occurred");
			}
			
			const responseData = await response.json();
			console.log(responseData);
			// Store token and other information in local storage
			localStorage.setItem("token", responseData.token);
			localStorage.setItem("role", responseData.role);
			localStorage.setItem("email", responseData.email);
			localStorage.setItem("userName", responseData.username);
			localStorage.setItem("UserId", responseData.UserId);
			window.alert("Logged In Successfully");
	        window.location.href = "/dashboard";
			// Redirect to dashboard or any other protected route
		} catch (error) {
			// Handle login error
			window.alert(error.message || "An error occurred during login");
		}
	};
	

	return (
		<>
        <div className="main-container-login"> 

        <div className="container-fluid d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center" >
                  <img src= '/images/robot1.png' alt="Robot" className="robot-image" />
                <h4 className="logo-heading1">BLUEBOT SOCIAL</h4>
                    </div>
                    <div className="d-flex align-items-center">
        {/* <button className="btn custom-buttonn me-2">add post</button> */}
        <div className="d-flex settings-button-container">
          <img className="me-2" src='/images/das.png' alt="Dashboard" />
          <img className="me-2" src='/images/noti.png' alt="Notifications" />
          <img className="me-2" src='/images/setting.png' alt="Profile" />
          <img className="" src='/images/pro.png' alt="Settings" />
        </div>
      </div>
        </div>
			<div className="login-container">
				<div class="card col-md-4">
					<h2 className="text-center">Sign in to Continue </h2>
					<div class="card-body">
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
                            >
							<Form>
								<div className="form-group">
									<label htmlFor="email ">Email</label>
									<Field
										type="email"
										className="form-control mt-2"
										placeholder="Enter email address"
										id="email"
										name="email"
										required
									/>
									<ErrorMessage name="email" component="div" className="alert text-danger" />
								</div>
								<div className="form-group mt-4">
									<label htmlFor="password ">Password</label>
									<Field
										type={togglePassword ? "text" : "password"}
										className="form-control mt-2"
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
											marginTop: "0.3rem",
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
								<button type="submit" to="/sidebar" className="btn mt-5 custom-buttonn">
									Login
								</button>
							</Form>
						</Formik>
                    <hr />
                    <Link to="/signup" className="button btn custom-buttonn">
      Don't have an account? Signup
    </Link>
					</div>
				</div>
			</div>
</div>
		</>
	);
};

export default Login;
