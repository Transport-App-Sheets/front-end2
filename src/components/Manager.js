import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';

import bgg from './logoo.png'



export default function Manager() {
  
    const[login,setlogin]=React.useState('')
    const[password,setpassword]=React.useState('')
const handleClick=(e)=>{
    const Manager={login,password}
    console.log(Manager)
    fetch("http://localhost:8081/admin/adddriver",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(Manager)
}).then(()=>{
    console.log("login Successefully")
})
}

const paperStyle = {
  width: '24%',
  height:'500px',
  padding: 30,
  margin:'50px 0px 0px 530px',
  backgroundColor: '#146C94',
  boxShadow: '0 0 10px #ccc',


};
  return (
    
    <Box
      component="Manager"
    >
       
        
        <Paper elevation={4} style={paperStyle} >
        
      <img src ={bgg} width="200" height="140" alt='sami'  />
  
        

            <h1 style={{color: "White"}} >Login</h1>
         <div  > 
         <TextField id="outlined-basic" label="Login" variant="outlined"
         value={login}
         style={{ margin: '10px 10px 10px 10px' }}
         onChange={(e)=>setlogin(e.target.value)}
         
         />  </div> 
         <div align="center"  style={{}}>
          <div><br></br></div>
         <TextField id="outlined-basic" label="password" type="password" variant="outlined"  margin='dense'  size='Normal'
         value={password}
         onChange={(e)=>setpassword(e.target.value)}
         /> </div>

<div><br></br></div>
      
         

<div><br></br></div>
          
        <div> <Button variant="contained"onClick={handleClick}>Login</Button></div>
        <div><br></br></div>
        <div><br></br></div>
    </Paper>
    
     
    

  




    </Box>
    
  );
}


