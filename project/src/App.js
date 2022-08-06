import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
import SearchPage from "./pages/searchPage";
import SignupPage from "./pages/signupPage";
import SuggestionPage from "./pages/suggestionPage";
import TogetherActPage from "./pages/togetherActPage";
import TogetherDonatePage from "./pages/togetherDonatePage";
import SuggestPage from "./pages/suggestPage";
import MyPage from "./pages/MyPage";

import FindPasswordPage from "./pages/FindPasswordPage";
import FindAccountGuidePage from "./pages/FindAccountGuidePage";
import FindAccountFirstPage from "./pages/FindAccountFirstPage";
import FindAccountSecondPage from "./pages/FindAccountSecondPage";


function App(props) {

  // function PrivateRoute(props) {
    
  //   const tk = localStorage.getItem('jwtToken');

  //   switch(props.action){
      
  //     case "suggest":
  //       return tk ? <SuggestionPage /> : <Navigate to="/login" />;


  //     default:
  //       return null;
  //   }
  // }

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route exact path="/" element={<PrivateRoute action={"home"}/> }/> */}
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/login/create_account" element={<SignupPage />} />
        <Route exact path="/login/find_account_guide" element={<FindAccountGuidePage />} />
        <Route exact path="/login/find_account_guide/first" element={<FindAccountFirstPage />} />
        <Route exact path="/login/find_account_guide/second" element={<FindAccountSecondPage />} />
        
        <Route exact path="/login/find_password" element={<FindPasswordPage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route path="/suggest" element={<SuggestionPage />} />
        
        {/* <Route path="/suggest" element={<PrivateRoute action={"suggest"}/> } /> */}
          
        
        <Route path="/togetherAct" element={<TogetherActPage />} />
        <Route path="/togetherDonate" element={<TogetherDonatePage />} />
        <Route path="/suggest/id" element={<SuggestPage />} />
      </Routes>
    </div>
  );
}
export default App;
