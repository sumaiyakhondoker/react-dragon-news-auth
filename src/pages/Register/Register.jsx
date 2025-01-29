import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name, photo, email, password);

    // create user
    createUser(email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error);
    })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div >
            <h3 className="text-3xl text-center">Please Register</h3>
           
  
  
    
           <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Name</span>
               </label>
               <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Photo URL</span>
               </label>
               <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
             </div>
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
               <button className="btn btn-neutral text-white">Register</button>
             </div>
           </form>
           <p className="text-center">Already Have An Account? <Link to='/login' className="text-red-500 font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;