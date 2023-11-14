import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EntryPage from './pages/EntryPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import MainPage from './pages/MainPage.jsx';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.jsx';
import './App.css';
import ProfilePage from './pages/ProfilePage.jsx';
import EventManagersProfilePage from './pages/EventManagersProfilePage.jsx';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<EntryPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/mainpage" element={<MainPage/>}/>
                    <Route path="/termsAndConditions" element={<TermsAndConditionsPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/emprofile" element={<EventManagersProfilePage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
