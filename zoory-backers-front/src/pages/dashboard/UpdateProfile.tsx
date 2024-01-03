import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../contexts/AuthProvider"
import { useLocation, useNavigate } from "react-router-dom"


const UpdateProfile = () => {
  {/* start react hook*/}
  const {updateuserProfile} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

   const location = useLocation();
        const navigate= useNavigate();

        const from =location.state?.from?.pathname || "/";

   const onSubmit = (data) => {
    const name =data.name;
    const photoURL=data.photoURL;
    updateuserProfile(name,photoURL).then(() => {
  // Profile updated!
  alert("profile updated success!!");
  navigate(from,{replace:true})
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
   }

  {/*end react hook */}
  return (
   <div className="flex items-center justify-center h-screen">
    <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-bold">Update Your Profile</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name")} type="text" placeholder="Your Name Here" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Uploard Photo</span>
          </label>
          
          <input {...register("photoURL")} type="text" placeholder="photoURL" className="input input-bordered required" />
          {/*<input type="file" className="w-full max-w-xs file-input" /> */}
          
        </div>
        <div className="mt-6 form-control">
          <button className="text-white btn bg-orange">update</button>
        </div>
      </form>
    </div>
   </div>
  )
}

export default UpdateProfile