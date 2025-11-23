import office from './assets/office.jpg';
import girls from './assets/girls.jpg';
import boys from './assets/boys.png';
import children from './assets/children.jpg';
import student from './assets/student.png';
import { useState } from 'react';
import defaultPage from './assets/default.png';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context';
function LoginPage(){
    const navigate=useNavigate();   
    const {userData}=useContext(Context);
    const {theme,setTheme}=useContext(Context);
    const {font,setFont}=useContext(Context);
    const [diplaySettings,setDisplaySettings]=useState(false);
    const [username,setUsername]=useState("");
    const [userpw,setUserpw]=useState("");
    const newAcc={bottom:"0.5rem",left:"20rem",backgroundColor:"blue",borderRadius:"10px",color:"white",cursor:"pointer",padding:"0.1rem",minWidth:"3rem",};
    const title={textAlign:"center",fontWeigth:"bold",fontSize:"3rem",minWidth:"10rem"};
    const info={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"10rem",minWidth:"15rem"};
    const namepw={width:"25vw",height:"2rem",borderRadius:"10px",backgroundColor:"black",color:"white",paddingLeft:"1rem"};
    const button={backgroundColor:"green",color:"white",width:"5vw",height:"2rem",borderRadius:"10px",bottom:"1rem",minWidth:"3rem"};
    const buttonDiv={display:"flex",width:"30vw",justifyContent:"space-around"};
    const list={width:"7rem",backgroundColor:"white",border:"2px solid black",borderRadius:"7px",textAlign:"center"};
    const X={backgroundColor:"white",border:'2px solid black',borderRadius:"5px" ,marginLeft:'2px',position:"absolute",top:"1rem",right:"1rem"};
    const settingsDiv={position:"absolute",top:"6rem",right:"2rem",backgroundColor:"whiteSmoke",width:"10rem",height:"12rem",textAlign:"center",padding:"0.5rem",border:'3px solid black',borderRadius:"10px",display:"flex",flexDirection:"column"};
    const mainDiv={position:"relative",backgroundImage:`url(${theme})`,backgroundSize:"cover",height:"100vh",minWidth:"80vw",minHeight:"80vh",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:font};
    const infoDiv={backgroundColor:"white",width:"40vw",height:"50vh",borderRadius:"30px",minWidth:"300px",minHeight:"300px",};
    function validation(){ 
        if (username==="" && userpw=="")
         {
            alert("Fill all details");
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
         else if(username===userData.username && userpw===userData.password)
        {
             alert("Login Successful");
             navigate('/todo')
        }
         else
        {
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
        <div style={{backgroundImage:`url(${defaultPage})`}}> 
        <div style={mainDiv}> 
                <button style={{...button,position:"absolute",top:"3rem",right:"2rem"}} onClick={()=>setDisplaySettings(true)}>Settings</button>
            { diplaySettings && <div style={settingsDiv}>
                <div><button style={X} onClick={()=>setDisplaySettings(false)}>X</button></div>         
                <select onChange={(e)=>setTheme(e.target.value)} style={list}>      
                    <option  hidden style={list}>Theme</option>
                    <option value={defaultPage} >default</option>
                    <option value={student} >Student</option>
                    <option value={office} >Office</option>
                    <option value={children} >Chidren</option>
                    <option value={girls} >Girls</option>
                    <option value={boys} >Boys</option>
                </select>
                 <select onChange={(e)=>setFont(e.target.value)} style={list}>
                    <option hidden>Font</option>
                    <option value='serif'>Serif</option>
                    <option value='sans-serif'>Sans-serif</option>
                    <option value='cursive'>Cursive</option>
                    <option value='system-ui'>System-UI</option>
                    <option value='fantasy'>Fantasy</option>                    
                </select>        
            </div>}
            <div style={infoDiv}>
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
        </div>
        </>
    )
}
export default LoginPage;