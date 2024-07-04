import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './assets/Pages/AdminDashboard';
import UserDashboard from './assets/Pages/UserDashboard';
import StaffDashboard from './assets/Pages/StaffDashboard';
import Login from './assets/Pages/Login';
import SignUp from './assets/Pages/SignUp';
import FlightBooking from './assets/Pages/FlightBooking';
import FlightReservation from './assets/Pages/FlightReservation';
import FlightUpdate from './assets/Pages/FlightUpdate';
import PaymentProcessing from './assets/Pages/PaymentProcessing';
import SalesReport from './assets/Pages/SalesReport';
import CustomerFeedback from './assets/Pages/CustomerFeedback';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking" element={<FlightBooking />} />
        <Route path="/reserve" element={<FlightReservation />} />
        <Route path="/update" element={<FlightUpdate />} />
        <Route path="/payment" element={<PaymentProcessing />} />
        <Route path="/report" element={<SalesReport />} />
        <Route path="/feedback" element={<CustomerFeedback />} />
      </Routes>
    </Router>
  );
};

export default App;
