import * as React from 'react';
import Box from '@mui/material/Box';
import "./addchildrennavbar.css";
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import bgg from './student.png'






export default function ResponsiveAppBar() {

  const[lastname,setLastname]=React.useState('')
  const[firstname,setFirstname]=React.useState('')
  const[schoolname,setSchoolname]=React.useState('')
  const[homeadress,setHomeadress]=React.useState('')
  const[age,setAge]=React.useState('')

  const handleClick=(e)=>{
    const child={lastname,firstname,age,schoolname ,homeadress}
    console.log(child)
    fetch("http://localhost:8081/parent/addchild",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(child)
}).then(()=>{
    console.log("Successefully")})
  }



  const paperStyle = {
    opacity:'0.9', 
    width: '740px',
    height:'760px',
    padding: 9,
    margin:"50px 20px",
   marginLeft:"600px",
    backgroundColor: '#2C3333',
    boxShadow: '0 0 10px #ccc',

  };
  
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
 

      
<div>
      
         
          <Paper elevation={3} style={paperStyle} sx={{borderRadius: '10px'}} >
            <div>
          <img src ={bgg} width="60" height="60" alt='ok' style={{marginLeft:"0px",marginTop:'0 px',padding:"5px"}}  /> </div>
          <h1 className='h1h' >
            Children Details       
          </h1>
        
              <><br></br></>
              <><br></br></>
             
              <div className='divv'>
              <><br></br></> <><br></br></> 
           <TextField id="outlined-basic" label="Last Name" variant="filled"
           value={lastname}
           style={{ margin: '10px 10px 20px 10px' }}
           onChange={(e)=>setLastname(e.target.value)}
           />  
<div>
           <TextField id="outlined-basic" label="First Name" variant="filled"
          value={firstname}
           style={{ margin: '10px 10px 20px 10px' }}
           onChange={(e)=>setFirstname(e.target.value)}
          
           /> </div>
<div>
<TextField id="outlined-basic" label="School Name" variant="filled"
          value={schoolname}
           style={{ margin: '10px 10px 20px 10px' }}
           onChange={(e)=>setSchoolname(e.target.value)}
          
           /> </div>
           
<TextField id="outlined-basic" label="Age" variant="filled"
          value={age}
           style={{ margin: '10px 10px 20px 10px',width:'10vw' }}
           onChange={(e)=>setAge(e.target.value)}
          
           /> 

<TextField id="outlined-basic" label="Home Adress" variant="filled" 
                    
          value={homeadress}
           style={{ margin: '10px 40px 10px 10px' ,width:'20vw',height:'40px' }}
           onChange={(e)=>setHomeadress(e.target.value)}/> 
          
           <button style={{padding:"10px",opacity:"0.9",background:"#0E8388",color:"white",fontSize:"20px",height:"3vw",width:"17vw",borderRadius: '10px',margin:'40px 0px 30px 0px' }} onClick={handleClick}>Save Children</button>
           </div><br></br><br></br>
           <div><br></br></div>
         

          
  
  </Paper>
  </div>
 
    </Box>  </div>
  );
}
