import React from 'react';
import Navbar from './Navbar'; // Adjust the path as per your file structure
import './AdminDashboard.css'; // Import your CSS file for styling

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Navbar />

      <section className="dashboard-overview">
        <div className="container">
          <h2 className="section-title">Dashboard Overview</h2>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Flights Today</h3>
              <p className="card-content">Total flights scheduled for today: 20</p>
            </div>
            <div className="card">
              <h3 className="card-title">Booking Summary</h3>
              <p className="card-content">Total bookings this month: 350</p>
            </div>
            <div className="card">
              <h3 className="card-title">Revenue</h3>
              <p className="card-content">$50,000 earned this month</p>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-activities">
        <div className="container">
          <h2 className="section-title">Recent Activities</h2>
          <div className="grid">
            <div className="activity">
              <h3 className="activity-title">New Flight Added</h3>
              <p className="activity-content">Flight from Manila to Cebu added.</p>
            </div>
            <div className="activity">
              <h3 className="activity-title">Customer Feedback</h3>
              <p className="activity-content">New feedback received. Check details.</p>
            </div>
            <div className="activity">
              <h3 className="activity-title">Flight Update</h3>
              <p className="activity-content">Flight PR123 delayed by 1 hour.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-actions">
        <div className="container">
          <h2 className="section-title">Quick Actions</h2>
          <div className="grid">
            <div className="action">
              <button className="button primary">Add New Flight</button>
            </div>
            <div className="action">
              <button className="button">View Sales Report</button>
            </div>
            <div className="action">
              <button className="button">Manage Staff</button>
            </div>
          </div>
        </div>
      </section>

      <section className="notifications">
        <div className="container">
          <h2 className="section-title">Notifications</h2>
          <div className="grid">
            <div className="notification">
              <p className="notification-content"><strong>Flight PR456:</strong> Departure time changed to 14:00.</p>
            </div>
            <div className="notification">
              <p className="notification-content"><strong>Customer Feedback:</strong> New feedback received.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Airline Reservation System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AdminDashboard;
