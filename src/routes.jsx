import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Racas from './pages/Racas'
import Page404 from './pages/Page404'
import Pagebase from './pages/Pagebase'


function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Pagebase/>}>
            <Route index element= {<Home/>}></Route>
            <Route path='/contato' element= {<Contato/>}></Route>
            <Route path='/racas' element= {<Racas/>}></Route>
            <Route path='*' element= {<Page404/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes