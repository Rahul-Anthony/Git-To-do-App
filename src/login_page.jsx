import { useState,useEffect } from 'react';
import defaultPage from './assets/default.png';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context';
import axios from 'axios';
function LoginPage(){
    const userTheme=localStorage.getItem("userTheme")
    const userFont=localStorage.getItem("userFont")
    const navigate=useNavigate();   
    const {theme}=useContext(Context);
    const {font}=useContext(Context);
    const [username,setUsername]=useState("");
    const [userpw,setUserpw]=useState("");
    const newAcc={bottom:"0.5rem",left:"20rem",backgroundColor:"blue",borderRadius:"10px",color:"white",cursor:"pointer",padding:"0.1rem",minWidth:"3rem",};
    const title={textAlign:"center",fontWeigth:"bold",fontSize:"3rem",minWidth:"10rem"};
    const info={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"10rem",minWidth:"15rem"};
    const namepw={width:"25vw",height:"2rem",borderRadius:"10px",backgroundColor:"black",color:"white",paddingLeft:"1rem"};
    const button={backgroundColor:"green",color:"white",width:"5vw",height:"2rem",borderRadius:"10px",bottom:"1rem",minWidth:"3rem"};
    const buttonDiv={display:"flex",width:"30vw",justifyContent:"space-around"};
    const mainDiv={position:"relative",backgroundImage:`url(${theme})`,width:"100vw",backgroundSize:"cover",height:"100vh",minWidth:"80vw",minHeight:"80vh",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:font};
    const infoDiv={backgroundColor:"white",width:"40vw",height:"50vh",borderRadius:"30px",minWidth:"300px",minHeight:"300px",};
    function validation(){ 
                        console.log("Verifying login ")
                     if (username==="" && userpw=="")
         {
            alert("Fill all details");
         }
        else if(username==="") 
         {
             alert("Username required");
         }
         else if(userpw=="")
         {
             alert("Password required");
         }
       else{
         axios.post(`http://localhost:5000/loginAccount`,{name:username,password:userpw})
        .then((res)=>{      
        const setUserId=localStorage.setItem("userId",res.data.user._id);
        const userId=localStorage.getItem("userId")
        console.log(`Edutachu mapla : ${res.data.user._id}`)
        const fetchedUsername=res.data.user.name;
        const fetchedPassword=res.data.user.password;
         if (username!==fetchedUsername){alert("Incorrect username")}
         else if (userpw!==fetchedPassword){alert("Incorrect password")}
         else if(username===fetchedUsername && userpw===fetchedPassword)
        { 
         alert("Login Successful")
         console.log(`ID : ${userId}`);
         navigate('/todo')     
        }
         else{alert("Login Failed");}  
         setUsername("");
         setUserpw(""); 
     } 
        )   
    .catch((err)=>{console.log(`Error : ${err}`)}) 
    }
    }
    function goCreateAccount(e){
        e.preventDefault();
        navigate('/CreateAccount');
    }  
    return(
        <>
        <div style={{backgroundImage:`url(${defaultPage})`}}> 
        <div style={mainDiv}> 
            <div style={infoDiv}>
             <h1 style={title}>Login Page</h1>
             <div style={info}>
             <input style={namepw} placeholder='user name' value={username} type="text" onChange={(e)=>setUsername(e.target.value)} />
             <input style={namepw} placeholder='password' value={userpw} type='password'onChange={(e)=>setUserpw(e.target.value)}/>
             <div style={buttonDiv}>
             <button style={button} type="button" onClick={()=>{validation()}}>Enter</button>   
             <button type='submit' style={newAcc} onClick={(e)=>{goCreateAccount(e)}}>Create account</button> 
             </div>
             </div> 
            </div>   
        </div>   
        </div>
        </>
    )
}
export default LoginPage;