import { useState } from 'react';
import login_page from './assets/loginPage.png';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context';
function LoginPage(){
    const {userData}=useContext(Context);
    const newAcc={bottom:"0.5rem",left:"20rem",backgroundColor:"blue",borderRadius:"10px",color:"white",cursor:"pointer",padding:"0.1rem",minWidth:"3rem",};
    const title={textAlign:"center",fontFamily:"Arial,sans-serif",fontWeigth:"bold",fontSize:"3rem",minWidth:"10rem"};
    const info={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"10rem",minWidth:"15rem"};
    const namepw={width:"25vw",height:"2rem",borderRadius:"10px",backgroundColor:"black",color:"white",paddingLeft:"1rem"};
    const button={backgroundColor:"green",color:"white",width:"5vw",height:"2rem",borderRadius:"10px",bottom:"1rem",minWidth:"3rem"};
    const buttonDiv={display:"flex",width:"30vw",justifyContent:"space-around"};
    const [username,setUsername]=useState("");
    const [userpw,setUserpw]=useState("");
    
    const navigate=useNavigate();
    function validation(){
        if(username===userData.username && userpw===userData.password)
        {
            alert("Login Successful");
        }
        else if(username==="") 
        {
            alert("Username required");
        }
        else if(userpw==="")
        {
            alert("Password required");
        }
        else if (username!==userData.username)
        {
            alert("Incorrect username")
        }
        else if (userpw!==userData.password)
        {
            alert("Incorrect password")
        }
        else{
            alert("Login Failed");
        }
        setUsername("");
        setUserpw("");
    }
    function goCreateAccount(e){
        e.preventDefault();
        navigate('/CreateAccount');
    }
    
    return(
        <>
        <div style={{position:"relative",backgroundImage:`url(${login_page})`,backgroundSize:"cover",height:"100vh",minWidth:"80vw",minHeight:"80vh",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{backgroundColor:"white",width:"40vw",height:"50vh",borderRadius:"30px",minWidth:"300px",minHeight:"300px",}}>
             <h1 style={title}>Login Page</h1>
             <div style={info}>
             <input style={namepw} placeholder='user name' value={username} type="text" onChange={(e)=>setUsername(e.target.value)} />
             <input style={namepw} placeholder='password' value={userpw} type='password'onChange={(e)=>setUserpw(e.target.value)}/>
             <div style={buttonDiv}>
             <button style={button} type="button" onClick={validation}>Enter</button>
             <button type='submit' style={newAcc} onClick={(e)=>{goCreateAccount(e)}}>Create account</button> 
             </div>
             </div> 
            </div>     
        </div>
        </>
    )
}
export default LoginPage;