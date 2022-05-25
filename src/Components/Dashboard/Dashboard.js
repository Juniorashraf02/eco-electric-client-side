import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content l items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard/myprofile">My profile</Link></li>
            <li><Link to="/dashboard/myorders">My orders</Link></li>
            <li><Link to="/dashboard/myreviews">Add a review</Link></li>
            <li><Link to="/dashboard/users">Make Admin</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;