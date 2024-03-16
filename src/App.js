import { useContext } from "react";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import "./style.scss"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";


function App() {

const {currentUser} = useContext(AuthContext)

//console.log(currentUser)

const ProtectedRoute = ({children})=>{
  if(!currentUser){
    return<Navigate to="/login" />
  }
  return children
}

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/">
      <Route index element= {
      <ProtectedRoute>
         <HomePage/>
         </ProtectedRoute>
        }/>
      <Route path="login" element= {<Login/>}/>
      <Route path="register" element= {<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
