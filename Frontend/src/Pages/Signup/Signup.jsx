import "./Signup.css";
import { Link } from 'react-router-dom';



const Signup = () => {
  return (
    <>
      <div className='sign-In'>
        <Link to="/Doctorlogin"><div><button className="doctor-sign-in">Doctor Sign In</button></div></Link>
        <Link to="/Clientlogin"><div><button className="client-sign-in">Client Sign In</button></div></Link>
      </div>
    </>
  );
}

export default Signup;
