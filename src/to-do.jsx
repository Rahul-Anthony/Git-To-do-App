import login_page from './assets/loginPage.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context';
export function To_do(){
    const navigate=useNavigate();
    const {theme}=useContext(Context);
    const [text,setText]=useState("");
    const [textList,setTextList]=useState([]);
    const [newTaxk,setNewTaxk]=useState(false);
    const {font}=useContext(Context);
    const page={backgroundColor:"beige",width:"90vw",height:"90%",border:"5px black solid",borderRadius:"30px",overflow:"auto",position:"relative" };
    const itemsDiv={display:"flex",position:"absolute",top:"9rem",left:"19rem"};
    const textBox ={fontSize:"20px",padding:"2px",border:"2px solid black",borderRadius:"5px",width:"30rem",height:"2rem",textAlign:"center"};
    const button={backgroundColor:"green",color:"white",padding:"2px",border:"1px solid black",borderRadius:'10px',width:"5rem",height:"2rem",marginLeft:"1rem"};
    const loginButton={...button,position:"absolute",bottom:"2rem",right:"2rem",backgroundColor:"#1E40AF"};
    const newWorkButton={...button,backgroundColor:"green",position:"absolute",top:"1rem",left:"1rem"};
    const content={backgroundColor:"white",color:"black",width:"50rem",height:"2rem",padding:"5px",border:'1px solid white',borderRadius:"5px",textAlign:"center",marginBottom:"0.5rem",marginRight:"0.3rem"};
    const contentsDiv={position:"absolute",top:"15rem",left:"7rem",fontSize:"20px"};
    const title={position:"absolute",top:"1rem",left:"44%",fontSize:"50px"};
    const contentDiv={display:"flex",alignItems:"center"};
    const mainDiv={position:"relative",backgroundImage:`url(${theme})`,backgroundSize:"cover",height:"100vh",minWidth:"80vw",minHeight:"80vh",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:font};
    function newArray(){
      if (text.trim()!==""){
        setTextList([...textList,text]);
        setText("");}
      else
        {alert("Enter Something")}        
    }
    function deleleWork(index){
      const editedArray=textList.filter((_,i)=>i!==index);
      setTextList(editedArray)
    }
    return(
      <>
      <div style={{backgroundImage:`url(${login_page})`}}> 
      <div style={mainDiv}>
        <div style={page}>
          <button style={newWorkButton} onClick={()=>setNewTaxk(true)}>New Work</button>
          <h1 style={title}>TO-DO</h1>
          {newTaxk && (<div style={itemsDiv}>
          <input style={textBox} placeholder='Text here...' type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
          <button style={button} onClick={newArray}>Add</button>
          <button style={{...button,backgroundColor:"red"}} onClick={()=>setNewTaxk(false)}>Cancel</button>
        </div>)}
        <div style={contentsDiv}>
          <ol>
            {textList.map((item,index)=>(<div style={contentDiv}><li style={content} key={index}>{item}</li><button onClick={()=>deleleWork(index)} style={{...button,backgroundColor:"red"}}>Delete</button></div>))}
          </ol>
        </div>
        <button style={loginButton} onClick={()=>navigate('/')}>Login Page</button>
        </div>
      </div>  
      </div>
      </>
    );
};
