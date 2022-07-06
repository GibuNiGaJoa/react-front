import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
import SearchPage from "./pages/searchPage";
import SuggestionPage from "./pages/suggestionPage";
import TogetherActPage from "./pages/togetherActPage";
import TogetherDonatePage from "./pages/togetherDonatePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/suggest" element={<SuggestionPage />} />
        <Route path="/togetherAct" element={<TogetherActPage />} />
        <Route path="/togetherDonate" element={<TogetherDonatePage />} />
      </Routes>
    </div>
  );
}
export default App;
