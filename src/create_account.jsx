import login_page from './assets/loginPage.png';
import { useState } from 'react';
import { useNavigate  } from  'react-router-dom'; 
import { Context } from './context';
import { useContext } from 'react';
function CreateAccount(){
    const{setUserData}=useContext(Context);
    const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [password,setpassword]=useState("");
    const [confrimPassword,setConfrimPassword]=useState("");
    const title={textAlign:"center",fontFamily:"Arial,sans-serif",fontWeigth:"bold",fontSize:"3rem",minWidth:"10rem"}
    const info={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"10rem",minWidth:"15rem"}
    const namepw={width:"25vw",height:"2rem",borderRadius:"10px",backgroundColor:"black",color:"white",paddingLeft:"1rem"};
    const button={backgroundColor:"green",color:"white",width:"5vw",height:"2rem",borderRadius:"10px",bottom:"1rem",minWidth:"3rem"}
    const buttonDiv={display:"flex",width:"30vw",justifyContent:"space-around"}
    function validation(e){
        e.preventDefault();
        if (username==="" || password==="" || confrimPassword==="")
        {
            alert("Fill Everything")
        }
        else if (password!==confrimPassword) {
            alert("Check Password")
        }
        else {
            setUserData({username:username,password:password});
            alert("updated");
            navigate('/');   
        }
        
    }
    return(
        <>
        <div style={{position:"relative",backgroundImage:`url(${login_page})`,backgroundSize:"cover",height:"100vh",minWidth:"80vw",minHeight:"80vh",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>
             <div style={{backgroundColor:"white",width:"40vw",height:"50vh",borderRadius:"30px",minWidth:"300px",minHeight:"300px",}}>
                  <h1 style={title}>Create Account</h1>
                  <div style={info}>
                       <input style={namepw} placeholder='Enter username' value={username} type="text" onChange={(e)=>setUsername(e.target.value)} />
                       <input style={namepw} placeholder='Enter password' value={password} type='password'onChange={(e)=>setpassword(e.target.value)}/>
                       <input style={namepw} placeholder='Confrim password' value={confrimPassword} type='password'onChange={(e)=>setConfrimPassword(e.target.value)}/>
                       <div style={buttonDiv}>
                       <button style={button} type="button" onClick={(e)=>validation(e)}>Save</button>                   
                       </div>
                  </div>     
             </div>
        </div>
      
        </>
    )
}
export default CreateAccount;