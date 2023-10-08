import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import GuideLines from './components/Guidelines'
import Result from './components/Results'
import Contact from './components/Contact'
import Reg from './components/Reg'
import TeamDetail from './components/TeamDetailForm'
import IdeaDescription from './components/IdeaDescription'


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
                
        
               
            </Routes>
            </BrowserRouter>
        </div>
    )
}