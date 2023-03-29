import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';

import bgg from './3366336.png'



export default function Manager() {
  
    const[driverlastname,setDriverLastname]=React.useState('')
    const[driverfirstname,setDriverFirstname]=React.useState('')
    const[cin,setCin]=React.useState('')
    const[email,setEmail]=React.useState('')
    const[phone,setPhone]=React.useState('')
    const[sector,setSector]=React.useState('')
const handleClick=(e)=>{
    const Manager={driverlastname,driverfirstname,cin,phone,email,sector}
    console.log(Manager)
    fetch("http://localhost:8081/admin/adddriver",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(Manager)
}).then(()=>{
    console.log("added Driver Successefully")
})
}

const paperStyle = {
  width: '40%',
 height: '10%',
  padding: 10,
  margin:'20px 10px 0px 400px',
  backgroundColor: 'CYAN',
  boxShadow: '0 0 10px #ccc',


};
  return (
    <Box
      component="Manager"
      sx={{
        display: 'flex',
        
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       
        
        <Paper elevation={8} style={paperStyle} >
        <div>
      <img src ={bgg} width="190" height="170" alt='sami'  />
    </div>
        

            <h1 >Add driver</h1>
     
         <TextField id="outlined-basic" label="Driver lastName" variant="outlined" 
         value={driverlastname}
         onChange={(e)=>setDriverLastname(e.target.value)}
         
         />  
         <TextField id="outlined-basic" label="Driver FirstName" variant="outlined" 
         value={driverfirstname}
         onChange={(e)=>setDriverFirstname(e.target.value)}
         
         />
         <div><br></br></div>
         <TextField id="outlined-basic" label="CIN" variant="outlined"
           value={cin}
           onChange={(e)=>setCin(e.target.value)}
         
         />  
         <div><br></br></div>
        <TextField id="outlined-basic" label="phone number " variant="outlined"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />
          <div><br></br></div>
        <TextField id="outlined-basic" label="Email " variant="outlined"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />  <div><br></br></div>
        <TextField id="outlined-basic" label="Sector" variant="outlined"
          value={sector}
          onChange={(e)=>setSector(e.target.value)}
        
        />


         <div><br></br></div> 
        <div> <Button variant="contained"onClick={handleClick}>Save</Button></div>
        
    </Paper>
    
     
    

  




    </Box>
    
  );
}


