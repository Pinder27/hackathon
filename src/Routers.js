import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import CompletedHackathon from './components/CompletedHackathon'
import ProjectDetail from './components/ProjectDetail';
import GuideLines from './components/Guidelines'
import Result from './components/Results'
import Contact from './components/Contact'
import Reg from './components/Reg'
import TeamDetail from './components/TeamDetailForm'
import IdeaDescription from './components/IdeaDescription'
import PanelistProjectList from './components/PanelistProjectList';
import PanelReview from './components/PanelReview';


export default function Router(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route  path='/'  element={<Home/>}/>
                <Route  path='/guidelines'  element={<GuideLines/>}/>
                <Route  path='/results'  element={<Result/>}/>
                <Route  path='/contact'  element={<Contact/>}/>
                <Route  path='/reg'  element={<Reg/>}/>
                <Route  path='/teamdetail'  element={<TeamDetail/>}/>
                <Route  path='/ideadescription'  element={<IdeaDescription/>}/>
                <Route path="/CompletedHackathon" element={<CompletedHackathon />}></Route>
                <Route path="/projectDetail/:id" element={<ProjectDetail />}></Route>
                <Route path="/panelistProjectList" element={<PanelistProjectList />}></Route>
                <Route path="/panelReview/:id" element={<PanelReview />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}