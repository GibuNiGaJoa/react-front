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
import ChangePasswordPage from "./pages/ChangePasswordPage";
import PostingTestPage from "./pages/PostingTestPage";


function App(props) {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mypage" element={<MyPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/create_account" element={<SignupPage />} />
        <Route path="/login/find_account_guide" element={<FindAccountGuidePage />} />
        <Route path="/login/find_account_guide/first" element={<FindAccountFirstPage />} />
        <Route path="/login/find_account_guide/second" element={<FindAccountSecondPage />} />

        <Route path="/login/find_password" element={<FindPasswordPage />} />
        <Route path="/login/find_password/change_password" element={<ChangePasswordPage />} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/fundraisings/now" element={<TogetherDonatePage />} />
        <Route path="/fundraisings/10001" element={<PostingTestPage />} />
        <Route path="/fundraisings/propose" element={<SuggestionPage />} />
        <Route path="/fundraisings/propose/project" element={<SuggestPage />} />
      
        <Route path="/togetherAct" element={<TogetherActPage />} />
      </Routes>
    </div>
  );
}
export default App;
