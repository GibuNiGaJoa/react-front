import React from 'react';
import { Navigate, Redirect, Route, Routes } from 'react-router-dom';
import SuggestionPage from './pages/suggestionPage';

const PrivateRoute = ({component: Component, ...rest}) => {

  const tk = localStorage.getItem('jwtToken');

  return (
    <Routes>
      {/* Show the component only when the user is logged in */}
      {/* Otherwise, redirect the user to /signin page */}
      <Route
          {...rest}
          render={(props) => {
          
          !tk ?
            <Component {...props} />
          : <Route path="/login" />
        }} />

    </Routes>
  );
};

export default PrivateRoute;


