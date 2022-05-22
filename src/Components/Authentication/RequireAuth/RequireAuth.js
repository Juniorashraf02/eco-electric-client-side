import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from "react-router-dom";
import auth from './../../../firebase.init';
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    
    if(loading){
        return <div className="mt-20 flex justify-center items-center space-x-2">
        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-purple-500
            " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-green-500
            " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-yellow-500
            " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-gray-300" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    if (!user ) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children;
};

export default RequireAuth;