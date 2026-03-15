import axios from "axios";
import defaultPage from './assets/default.png';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { Context } from './context';
import office from './assets/office.jpg';
import girls from './assets/girls.jpg';
import boys from './assets/boys.png';
import children from './assets/children.jpg';
import student from './assets/student.png';
function Settings(){ 
    const {theme,setTheme}=useContext(Context);
    const {font,setFont}=useContext(Context);
    const [diplaySettings,setDisplaySettings]=useState(false);
    const [confrim,setConfrim]=useState(true)
    const [save,setSave]=useState(true)
    const [themeset,setThemeset]=useState("");
    const [fontset,setFontset]=useState("");
    const mainDiv={position:"relative",backgroundImage:`url(${theme})`,backgroundSize:"cover",height:"100vh",width:"100vw",minWidth:"80vw",minHeight:"80vh",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:font};
    const back={position:"absolute",backgroundColor:"red",color:"white",padding:"2px",border:"1px solid white",borderRadius:'10px',width:"5rem",height:"2rem",bottom:"2rem",left:"15rem"};
    const list={height:"1.5rem",width:"7rem",backgroundColor:"white",border:"3px solid silver",borderRadius:"7px",textAlign:"center"};
    const X={backgroundColor:"white",border:'3px solid silver',borderRadius:"5px" ,position:"absolute",height:"1.8rem",width:"4rem"};
    const settingsDiv={position:"absolute",top:"6rem",right:"2rem",backgroundColor:"black",width:"10rem",height:"12rem",textAlign:"center",padding:"0.5rem",border:'3px solid white',borderRadius:"50px",display:"flex",flexDirection:"column",margin:"1rem"};
    const loginButton={...back,position:"absolute",bottom:"2rem",backgroundColor:"#1E40AF",left:"2rem"};
    const navigate=useNavigate();
    const userId=localStorage.getItem("userId")
    const userTheme=localStorage.getItem("userTheme")
    const userFont=localStorage.getItem("userFont")
   useEffect(()=>{
axios.put(`http://localhost:5000/settings/${userId}`,{theme:themeset,font:fontset})          
            .then((res)=>{   
                console.log(`theme : ${res.data.theme} , font : ${res.data.font}`)
                const setUserTheme=localStorage.setItem("userTheme",res.data.theme);
                const setUserFont=localStorage.setItem("userFont",res.data.font);
                setTheme(userTheme);
                setFont(userFont);
            })
            .catch((err)=>{console.log(`Error : ${err}`)})
   },[theme,font])
    return(
        <>
             <div style={{backgroundImage:`url(${defaultPage})`}}> 
                  <div style={mainDiv}> 
                    <button style={{...back,bottom:"2rem",position:"absolute",left:"50vw"}} onClick={()=>navigate('/todo')}>Back</button>
                    <button style={{...loginButton,top:"3rem",left:"5vw"}} onClick={()=>navigate('/')}>Logout</button>
                    <button style={{...back,position:"absolute",top:"3rem",left:"90vw",backgroundColor:"green"}} onClick={()=>setDisplaySettings(true)}>Settings</button>
                                { diplaySettings && <div style={settingsDiv}>       
                                    <select onChange={(e)=>setThemeset(e.target.value)} style={{...list,marginTop:"1rem",marginLeft:"1.5rem"}}>      
                                        <option  hidden style={list}>Theme</option>
                                        <option value={defaultPage} >default</option>
                                        <option value={student} >Student</option>
                                        <option value={office} >Office</option>
                                        <option value={children} >Chidren</option>
                                        <option value={girls} >Girls</option>
                                        <option value={boys} >Boys</option>
                                    </select>
                                     <select onChange={(e)=>setFontset(e.target.value)} style={{...list,marginTop:"1rem",marginLeft:"1.5rem"}}>
                                        <option hidden>Font</option>
                                        <option value='serif'>Serif</option>
                                        <option value='sans-serif'>Sans-serif</option>
                                        <option value='cursive'>Cursive</option>
                                        <option value='system-ui'>System-UI</option>
                                        <option value='fantasy'>Fantasy</option>                    
                                    </select>  
                                    <div style={{display:"flex",height:"4rem",flexDirection:"column",alignContent:"space-evenly"}}>
                                    <button style={{...X,marginTop:"4rem",marginLeft:"3rem"}} onClick={()=>{setDisplaySettings(false);setTheme(defaultPage);setFont('serif')}}>Done</button>
                                    </div>        
                                </div>}
                  </div>
             </div>          
        </>
    )
}
export default Settings;