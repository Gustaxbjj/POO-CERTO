import {Routes, Route} from 'react-router-dom'
import Profiles from './pages/Profiles'
import Home from './pages/Home'
import Config from './pages/Config'

function MainRoutes(){
    return(
        <Routes>
                <Route path='/' element={<Profiles />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/Config' element={<Config/>}/>
        </Routes>
    )
}
export default MainRoutes;