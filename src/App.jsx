import LoginPage from "./login_page.jsx";
import CreateAccount from "./create_account.jsx";
import { To_do } from "./to-do.jsx";
import Settings from "./settings.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App(){
  return(
    <>
    <BrowserRouter>
       <Routes>
        <Route path='/todo' element={<To_do/>}/>
        <Route path='/CreateAccount' element={<CreateAccount/>}/>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/GoSettings' element={<Settings/>}/>
       </Routes>
    </BrowserRouter> 
    </>
  )
}
export default App;