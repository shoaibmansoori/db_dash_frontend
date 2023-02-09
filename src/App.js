import './App.css';
import { Route, Routes } from 'react-router-dom';
import Authpage from './Pages/authPage';
import NewPage from './Pages/newPage';
import { AuthContextProvider } from './context/authContext';
import { useNavigation } from 'react-router-dom';
function App() {


  // const user = UserAuth();
  // const signup = user?.signUp;
  // const login = user?.signIn;
  // const signout = user?.logOut();
  // const email = useRef();
  // const password = useRef();
  // const [signupEmail,setSignupEmail] = useState("");
  // const [signupPassword,setSignupPassword] = useState("");
  // const [loginEmail,setLoginEmail] = useState("");
  // const [loginPassword,setLoginPassword] = useState("");
  // const [name,setName] = useState("");

  // async function handleSignup(e){
  //   console.log(user);
  //   e.preventDefault();
  //   console.log("signup",signupEmail,signupPassword);
  //   await signup(signupEmail,signupPassword,name)
  // }
  // async function handleLogin(e){
  //   e.preventDefault();
  //   console.log("login",loginEmail,loginPassword);
  //   await login(loginEmail,loginPassword)
  // }
 // <div className="App">
    //   <div>
    //     <h3>SIGN UP</h3>
    //     <form onSubmit={handleSignup}>
    //       <input  onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='UseName...' />
    //       <input  onChange={(e)=>{setSignupEmail(e.target.value)}} value={signupEmail} placeholder='Email...' />
    //       <input  onChange={(e)=>{setSignupPassword(e.target.value)}} value={signupPassword} placeholder='Password...'/>
    //       <input type="submit" value="Create User" name="Submit"/>
    //     </form>
    //   </div>

    //   <div>
    //     <h3>Login</h3>
    //     <form onSubmit={handleLogin}>
    //       <input  onChange={(e)=>{setLoginEmail(e.target.value)}} value={loginEmail} placeholder='Email...' />
    //       <input  onChange={(e)=>{setLoginPassword(e.target.value)}} value={loginPassword} placeholder='Password...'/>
    //       <input type="submit" value="Login" name="Loign"/>
    //     </form>
    //   </div>
    //   {/* <div>
    //     <h3>Login</h3>
    //     <input ref={email} placeholder='Email...'/>
    //     <input ref={password} placeholder='Password...' />
    //     <button onClick={handleLogin}>Login</button>
    //   </div> */}
    //   {/* <div>
    //     <h4>User Loged In:</h4>
    //     <button >Sign Out</button>
    //   </div> */}
    // </div>
  return (
   <>
   <AuthContextProvider>
    <Routes>
      <Route exact path ="/" element ={<Authpage/>} />
      <Route exact path ="/joker" element ={<NewPage/>} />
    </Routes>
    </AuthContextProvider>


   </>
  );
}

export default App;
