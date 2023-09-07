import { Route, Routes, Navigate } from 'react-router-dom';
import FinalContentBox from '../Component/Dashboard/CoverContentBox/FinalContentBox';
import Login from '../Pages/Login';
import SignUp from '../Pages/Signup';
import Workspace from '../Component/Workplace/CoverBoxofWorkplace/Workspace';
import Sidebar from '../Component/Sidebar/Sidebar';
import SocialProfile from '../Pages/socialProfile';
import SchedulePost from '../Pages/CalenderPost';
import PrivacyPolicy from '../Pages/privacyPolicy/privacyPolicy';
import Terms from '../Pages/terms/terms';

const AppRoutes = () => {
  const isAuthenticatedUser = localStorage.getItem('Bluebottoken');
  const role = localStorage.getItem('role');

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Sidebar />}>
        {
          isAuthenticatedUser ? (
            <>
              {/* Protected Routes */}
        <Route path="/workplace" element={<Workspace />} />
        <Route path="/dashboard" element={<FinalContentBox />} />
        <Route path="/socialProfile" element={<SocialProfile />} />
        <Route path="/schedulePost" element={<SchedulePost />} />
  
            </>
          ) : (
            // Redirect to login if not authenticated
            <Route path="/*" element={<Navigate to="/login" />} />
          )
        }
      </Route>
    </Routes>
  );
};

export default AppRoutes;
