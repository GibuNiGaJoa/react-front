import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
import SearchPage from "./pages/searchPage";
import SignupPage from "./pages/signupPage";
import SuggestionPage from "./pages/suggestionPage";
import TogetherActPage from "./pages/togetherActPage";
import TogetherDonatePage from "./pages/togetherDonatePage";
import SuggestPage from "./pages/suggestPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/suggest" element={<SuggestionPage />} />
        <Route path="/togetherAct" element={<TogetherActPage />} />
        <Route path="/togetherDonate" element={<TogetherDonatePage />} />
        <Route path="/suggest/id" element={<SuggestPage />} />
      </Routes>
    </div>
  );
}
export default App;
