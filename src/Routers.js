import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import UserDashboard from './components/UserDashboard'
import ProjectDetail from './components/ProjectDetail';
import GuideLines from './components/Guidelines'

import Contact from './components/Contact'

import TeamDetail from './components/TeamDetailForm'
import IdeaDescription from './components/IdeaDescription'
import PanelistProjectList from './components/PanelistProjectList';
import PanelReview from './components/PanelReview';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JudgeReview from './components/JudgeReview';
import DetailResult from './components/DetailResult';

import Admin from './components/Admin';
import JudgeProjectList from './components/judgeProjectlist';
import Implementation from './components/implementaion';
import Idea from './components/Idea';
import Reg2 from './components/Reg2';





export default function Router({alert}){
    const [user,setUser] = useState(false)


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
                <Route  path='/teamdetail'  element={<TeamDetail alert={alert}/> }/>
                <Route  path='/ideadescription'  element={<IdeaDescription alert={alert}/>}/>
                <Route path="/userdashboard" element={<UserDashboard user={user} setUser={setUser} />}></Route>
                <Route path="/projectDetail" element={<ProjectDetail alert={alert} />}></Route>
                <Route path="/panelistProjectList" element={<PanelistProjectList />}></Route>
                <Route path="/panelReview/:id" element={<PanelReview alert={alert} />}></Route>
                <Route path="/judgeReview/:id" element={<JudgeReview alert={alert} />}></Route>
                <Route path="/Reg2" element={<Reg2 user={user} setUser={setUser} alert={alert}/>}></Route>
                <Route path="/admin" element={<Admin user={user} setUser={setUser} alert={alert}/>}></Route>
                <Route path="/JudgeProjectList" element={<JudgeProjectList user={user} setUser={setUser}/>}></Route>
                <Route path="/impl" element={<Implementation/>}></Route>
                <Route path="/idea" element={<Idea/>}></Route>
                
                
                
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}