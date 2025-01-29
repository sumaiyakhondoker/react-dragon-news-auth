import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

  const location = useLocation()
  const navigate = useNavigate()
  console.log(location);


  const {signIn} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password);
    signIn(email, password)
    .then(result =>{
      console.log(result.user);
      navigate(location?.state ? location.state : '/')
     
    })
    .catch(error =>{
      console.error(error)
    })

    e.target.reset()
    }
    return (
        <div>
            <Navbar></Navbar>
            <div >
            <h3 className="text-3xl text-center my-5">Please Login</h3>
           
  
  
    
           <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Email</span>
               </label>
               <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Password</span>
               </label>
               <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
               <label className="label">
                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
               </label>
             </div>
             <div className="form-control mt-6">
               <button className="btn btn-neutral text-white">Login</button>
             </div>
           </form>
           <p className="text-center">Do Not Have An Account? <Link to='/register' className="text-red-500 font-bold">Register</Link></p>
            </div>
    
  

        </div>
    );
};

export default Login;