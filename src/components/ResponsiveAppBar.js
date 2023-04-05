import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './logo.png'; 
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
import "./addchildrennavbar.css";
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import bgg from './student.png'
import Button from '@mui/material/Button';





export default function ButtonAppBar() {

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
    width: '25%',
    height:'820px',
    padding: 33,
   marginLeft:'20px',
    backgroundColor: '#0050ff',
    boxShadow: '0 0 10px #ccc',

  };
  
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{borderRadius: '40px', height: '70px' }}>
        <Toolbar>
        <a href='index.html'> <img alt="logo" src={logo} width="60" style={{marginLeft:"20px"}} ></img></a>
          <Typography  align='center' variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Transport App
          </Typography>
          
          <button class="button5" ><ReplyAllRoundedIcon size="medium"/></button>

        </Toolbar>
      </AppBar>
      
<><br></br></>
      <h1 className='h1h' >
            Children Details       
          </h1>
         
        
          <><br></br></>  
          <Paper elevation={3} style={paperStyle} sx={{borderRadius: '40px'}} >
              <img src ={bgg} width="160" height="160" alt='ok' style={{marginLeft:"10px",marginTop:'0px'}}  /> 
              <><br></br></>
              <><br></br></>
              <><br></br></>
              <div className='divv'>
              <><br></br></> <><br></br></> 
           <TextField id="outlined-basic" label="Last Name" variant="filled"
           value={lastname}
           style={{ margin: '10px 10px 30px 10px' }}
           onChange={(e)=>setLastname(e.target.value)}
           />  
           <><br></br></>

           <TextField id="outlined-basic" label="First Name" variant="filled"
          value={firstname}
           style={{ margin: '10px 10px 30px 10px' }}
           onChange={(e)=>setFirstname(e.target.value)}
          
           /> 

<TextField id="outlined-basic" label="School Name" variant="filled"
          value={schoolname}
           style={{ margin: '10px 10px 30px 10px' }}
           onChange={(e)=>setSchoolname(e.target.value)}
          
           /> 
           
<TextField id="outlined-basic" label="Age" variant="filled"
          value={age}
           style={{ margin: '10px 10px 30px 10px' }}
           onChange={(e)=>setAge(e.target.value)}
          
           /> 

<TextField id="outlined-basic" label="Home Adress" variant="filled"
          value={homeadress}
           style={{ margin: '10px 10px 30px 10px' }}
           onChange={(e)=>setHomeadress(e.target.value)}
          
           /> 
           </div>
           
           <div><br></br></div>
          
          <div > <Button style={{ margin: '10px 10px 10px 130px' }} variant="contained"onClick={handleClick}>Save</Button></div>
          <div><br></br></div>
           
  
  </Paper>
 
    </Box>
  );
}
