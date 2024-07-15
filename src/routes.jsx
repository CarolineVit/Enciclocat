import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Ajuda from './pages/Ajuda'
import Page404 from './pages/Page404'
import Pagebase from './pages/Pagebase'


function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Pagebase/>}>
            <Route index element= {<Home/>}></Route>
            <Route path='/contato' element= {<Contato/>}></Route>
            <Route path='/ajuda' element= {<Ajuda/>}></Route>
            <Route path='*' element= {<Page404/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes