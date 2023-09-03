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
		gender: "", // Added gender field
		firstName: "", // Added firstName field
		lastName: "", // Added lastName field
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
			gender: Yup.string().required("Gender is required"), // Added gender validation
		firstName: Yup.string().required("First Name is required"), // Added firstName validation
		lastName: Yup.string().required("Last Name is required"), // Added lastName validation
	});

	const handleSubmit = async (values) => {
		try {
			const response = await axios.post(`${BASE_URL}/auth/signup`, values);
			
			window.alert("Successfully Signed Up");
			window.location.href = "/login";
		} catch (error) {
			// Handle login error
			window.alert(error.message || "An error occurred during SignUp");
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
					<h2 className="text-center">Create a account</h2>
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
								{/* <div className="form-group">
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
								</div> */}
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
					<div className="form-group">
						<label htmlFor="gender">Gender</label>
						<Field
							as="select"
							className="form-control mt-2"
							id="gender"
							name="gender"
						>
							<option value="">Select Gender</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Other">Other</option>
						</Field>
						<ErrorMessage name="gender" component="div" className="alert text-danger" />
					</div>
					<div className="form-group">
						<label htmlFor="firstName">First Name</label>
						<Field
							type="text"
							className="form-control mt-2"
							placeholder="Enter First Name"
							id="firstName"
							name="firstName"
						/>
						<ErrorMessage name="firstName" component="div" className="alert text-danger" />
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Last Name</label>
						<Field
							type="text"
							className="form-control mt-2"
							placeholder="Enter Last Name"
							id="lastName"
							name="lastName"
						/>
						<ErrorMessage name="lastName" component="div" className="alert text-danger" />
					</div>
								<button type="submit" to="/sidebar" className="btn mt-5 custom-buttonn">
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
