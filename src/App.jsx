import LoginPage from "./login_page.jsx";
import CreateAccount from "./create_account.jsx";

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App(){

  return(
    <>
    
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/CreateAccount' element={<CreateAccount/>}/>
       </Routes>
    </BrowserRouter>
    
    
    </>
  )
}
export default App;