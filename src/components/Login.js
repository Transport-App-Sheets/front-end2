import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import bgg from './logoo.png';
import styles from './login.css';



export default function Login() {
  
    const[login,setlogin]=React.useState('')
    const[password,setpassword]=React.useState('')

const handleClick=(e)=>{
    const Login={login,password}
    console.log(Login)
    fetch("http://localhost:8081/admin/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(Login)
}).then(()=>{
    console.log("login Successefully")
})
}

const paperStyle = {
  opacity:'0.7',  
  width: '24%',
  height:'510px',
  padding: 40,
  margin:'120px 0px 0px 470px',
  backgroundColor: '#867983',
  boxShadow: '0 0 10px #ccc',
  borderRadius: '40px',
  


};
  return (
    <div style={styles}>
    <Box 
    

      component="Login"
    >
       
        
        <Paper elevation={4} style={paperStyle} >
        
      <img src ={bgg} width="200" height="140" alt='sami'style={{margin:'10px 10px 10px 110px'}}   />
  
        
            <h1 style={{color: "White",opacity:'1',margin:'10px 10px 50px 180px'}} >Login</h1>
         <div  > 
         <TextField id="outlined-basic" label="Login" variant="outlined"
         value={login}
         style={{ margin: '10px 10px 10px 120px' }}
         onChange={(e)=>setlogin(e.target.value)}
         
         />  </div> 
         <div align="center"  style={{}}>
          <div><br></br></div>
         <TextField id="outlined-basic" label="password" type="password" variant="outlined"  margin='dense'  size='Normal'
         value={password}
         onChange={(e)=>setpassword(e.target.value)}
         /> </div>

<div><br></br></div>
      
         

<div></div>    

          
        <div> <button style={{padding:"10px",opacity:"0.9",background:"cyan",color:"black",width:"10vw",borderRadius: '10px',margin:'10px 0px 100px 135px' }} onClick={handleClick}>Login</button></div>
        <div><br></br></div>
        <div><br></br></div>
        
    
     
    

  
</Paper>



    </Box>
    </div>
  );
}


