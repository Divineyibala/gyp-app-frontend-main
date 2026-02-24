import { useState } from 'react';
import App from '../App';
import LoginPage from '../pages/LoginPage';
import ForgotPasswordPage from '../pages/ForgetPassword';
import ResetPasswordPage from '../pages/ResetPassword';
import SignupPage from '../pages/SignupPage';
import AdminLoginPage from '../pages/AdminLoginPage';
import ContactPage from '../pages/ContactPage';
import PaymentPage from '../pages/PaymentPage';
import MembershipPage from '../pages/MembershipPage';
import WelcomePage from '../pages/WelcomePage';
import AdminLayout from './AdminLayout';
import UserLayout from './UserLayout';
import Dashboard from '../pages/admin/Dashboard';
import Members from '../pages/admin/Members';
import Trainers from '../pages/admin/Trainers';
import Equipment from '../pages/admin/Equipment';
import Classes from '../pages/admin/Classes';
import Plans from '../pages/admin/Plans';
import Payments from '../pages/admin/Payments';
import Reports from '../pages/admin/Reports';
import Settings from '../pages/admin/Settings';
import UserDashboard from '../pages/user/Dashboard';
import Workouts from '../pages/user/Workouts';
import Schedule from '../pages/user/Schedule';
import Profile from '../pages/user/Profile';
import WorkoutLibrary from '../pages/WorkLiberary';
import AddEquipmentForm from '../pages/admin/AddEquipment';

export default function Router() {
  const [currentPage, setCurrentPage] = useState('welcome');
  
  // Initialize userData from localStorage or use defaults
  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (e) {
        return {
          fullName: 'Ebri Emmanuel',
          email: 'ebri@example.com',
          phone: '090-847-2067'
        };
      }
    }
    return {
      fullName: 'Rita Daniel',
      email: 'Riri@example.com',
      phone: '+1 (555) 123-4567'
    };
  });

  const navigate = (page, data = null) => {
    if (data) {
      const newUserData = { ...userData, ...data };
      setUserData(newUserData);
      // Save to localStorage
      localStorage.setItem('userData', JSON.stringify(newUserData));
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    // Admin pages with layout
    const adminPages = {
      'admin-dashboard': <Dashboard navigate={navigate} />,
      'admin-members': <Members navigate={navigate} />,
      'admin-trainers': <Trainers navigate={navigate} />,
      'admin-equipment': <Equipment navigate={navigate} />,
      'admin-classes': <Classes navigate={navigate} />,
      'admin-plans': <Plans navigate={navigate} />,
      'admin-payments': <Payments navigate={navigate} />,
      'admin-reports': <Reports navigate={navigate} />,
      'admin-settings': <Settings navigate={navigate} />
    };

    // User pages with layout
    const userPages = {
      'user-dashboard': <UserDashboard navigate={navigate} userData={userData} />,
      'user-workouts': <Workouts navigate={navigate} userData={userData} />,
      'user-schedule': <Schedule navigate={navigate} userData={userData} />,
      'user-profile': <Profile navigate={navigate} userData={userData} />
    };

    // Check if current page is an admin page
    if (adminPages[currentPage]) {
      return (
        <AdminLayout navigate={navigate} currentPage={currentPage}>
          {adminPages[currentPage]}
        </AdminLayout>
      );
    }

    // Check if current page is a user page
    if (userPages[currentPage]) {
      return (
        <UserLayout navigate={navigate} currentPage={currentPage} userData={userData}>
          {userPages[currentPage]}
        </UserLayout>
      );
    }

    // Regular pages
    switch (currentPage) {
      case 'home':
        return <App navigate={navigate} />;
      case 'login':
        return <LoginPage navigate={navigate} />;
      case 'signup':
        return <SignupPage navigate={navigate} />;
      case 'forget-password':
        return <ForgotPasswordPage navigate={navigate} />;
      case 'reset-password':
        return <ResetPasswordPage navigate={navigate} />;
      case 'admin-login':
        return <AdminLoginPage navigate={navigate} />;
      case 'contact':
        return <ContactPage navigate={navigate} />;
      case 'payment':
        return <PaymentPage navigate={navigate} />;
      case 'membership':
        return <MembershipPage navigate={navigate} />;
      case 'work-liberary':
        return <WorkoutLibrary navigate={navigate} />;
      case 'add-equipment':
        return <AddEquipmentForm navigate={navigate} />;
      case 'welcome':
      default:
        return <WelcomePage navigate={navigate} />;
    }
  };

  return renderPage();
}