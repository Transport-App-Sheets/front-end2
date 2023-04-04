import logo from './logo.png'; 
import "./NavbarStyles.css"
function Navbar(){
return(
<>
<nav>
<a href='index.html'> <img alt="logo" src={logo} width="60" style={{marginLeft:"30px"}} ></img></a>
<div> 
    <ul id='navbar'>
       <li><a className="active" href='index.html'>Home</a></li>
       <li><a href='index.html'>About Us</a></li>
       <li><a href='index.html'>Services</a></li>
       <li><a href='index.html'>Sign In</a></li>
    </ul>
</div>



</nav>
</>
)
}
export default Navbar;