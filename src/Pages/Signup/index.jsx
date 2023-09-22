import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./signup.css";
import BASE_URL from "../../services/api";

const SignUp = () => {
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

	const handleSubmit = async (values) => {
		try {
			const response = await axios.post(`${BASE_URL}/auth/signup`, values);
			
			window.alert("Successfully Signed Up");
			window.location.href = "/login";
		} catch (error) {
		
			window.alert(error.message || "An error occurred during SignUp");
		}
	};
	

	return (
		<>
        <div className="main-container-login"> 

        <div className="container-fluid d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center" >
                  <img src= '/images/robot1.png' alt="Robot" className="robot-image" />
                <h4 className="logo-heading-create-account">Create Account</h4>
                    </div>
                    <div className="d-flex align-items-center">
        <div className="d-flex login-btn-cnt">
		Already have an account? <span className="login-button-signup-page"><Link to="/login">LOG IN</Link></span>
        </div>
      </div>
        </div>
			<div className="signup-container">
				<div className="card col-md-4">
					<h2 className="text-left create-account-heading">Create a account</h2>
					<p>No creditcard required.</p>
					<div className="card-body-signup">
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
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
                    <hr />
				  <Link to="/login" className="button btn custom-buttonn">
      Login to Your Account!
    </Link>
				</div>
			</div>
</div>
		</>
	);
};

export default SignUp;
