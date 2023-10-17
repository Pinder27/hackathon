import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import UserDashboard from './components/UserDashboard'
import ProjectDetail from './components/ProjectDetail';
import GuideLines from './components/Guidelines'
import Result from './components/Results'
import Contact from './components/Contact'
import Reg from './components/Reg'
import TeamDetail from './components/TeamDetailForm'
import IdeaDescription from './components/IdeaDescription'
import PanelistProjectList from './components/PanelistProjectList';
import PanelReview from './components/PanelReview';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JudgeReview from './components/JudgeReview';
import DetailResult from './components/DetailResult';

import Login from './components/login';
import Admin from './components/Admin';
import JudgeProjectList from './components/judgeProjectlist';





export default function Router(){
    const [user,setUser] = useState(false)
    console.log(localStorage.getItem("token1"))
    if(!user&&localStorage.getItem("token")!=null){
       setUser(true);
    }
    return(
        <div>
            <BrowserRouter>
            <Navbar user={user} setUser={setUser}/>
            <Routes>
                <Route  path='/'  element={<Home user={user} setUser={setUser}/>}/>
                <Route  path='/guidelines'  element={<GuideLines user={user} setUser={setUser}/>}/>
                <Route  path='/results'  element={<DetailResult/>}/>
                <Route  path='/contact'  element={<Contact/>}/>
                <Route  path='/reg'  element={<Reg user={user} setUser={setUser}/>}/>
                <Route  path='/teamdetail'  element={<TeamDetail/>}/>
                <Route  path='/ideadescription'  element={<IdeaDescription/>}/>
                <Route path="/userdashboard" element={<UserDashboard user={user} setUser={setUser} />}></Route>
                <Route path="/projectDetail/:id" element={<ProjectDetail />}></Route>
                <Route path="/panelistProjectList" element={<PanelistProjectList />}></Route>
                <Route path="/panelReview/:id" element={<PanelReview />}></Route>
                <Route path="/judgeReview/:id" element={<JudgeReview />}></Route>
                <Route path="/login" element={<Login user={user} setUser={setUser}/>}></Route>
                <Route path="/admin" element={<Admin user={user} setUser={setUser}/>}></Route>
                <Route path="/JudgeProjectList" element={<JudgeProjectList user={user} setUser={setUser}/>}></Route>
                
                
                
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}