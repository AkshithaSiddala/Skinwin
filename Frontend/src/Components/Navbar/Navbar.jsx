
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"



const Navbar = () => {
  const navigate=useNavigate()
  


  return (
    <div className='navbar'>
      <div className="navbar-icon">SkinWin</div>
      <div className="navbar-content">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <li onClick={()=>navigate("/Concern&Treatment")}>Concerns & Treatment</li>
          <li>Before & After</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div onClick={() => navigate("/signup")} className="signup">Sign Up</div> 
      
    </div>
  )
}

export default Navbar