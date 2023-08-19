import { Route, Routes, Navigate } from "react-router-dom";
import FinalContentBox from "../Component/Dashboard/CoverContentBox/FinalContentBox";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";
import Workspace from "../Component/Workplace/CoverBoxofWorkplace/Workspace";
import Sidebar from "../Component/Sidebar/Sidebar";
import SocialProfile from "../Pages/socialProfile";
import SchedulePost from "../Pages/CalenderPost";

const AppRoutes = () => {
	const isAuthenticatedUser = localStorage.getItem("token");
	const role = localStorage.getItem("role");
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
		<Route path="/" element={<Sidebar />}>
			<Route path="/workplace" element={<Workspace />} />
			<Route path="/dashboard" element={<FinalContentBox />} />
			<Route path="/socialProfile" element={<SocialProfile />} />
			<Route path="/schedulePost" element={<SchedulePost />} />
			{
				// isAuthenticatedUser
				true ? (
					<Route path="/" element={<FinalContentBox />}>
	
					</Route>
				) : (
					<Route path="/*" element={<Navigate to="/login" />} />
				)
			}
			</Route>
		</Routes>
	);
};

export default AppRoutes;
