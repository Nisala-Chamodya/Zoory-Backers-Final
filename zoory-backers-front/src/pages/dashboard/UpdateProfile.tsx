

const UpdateProfile = () => {
  {/* */}
  return (
   <div className="flex items-center justify-center h-screen">
    <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
      <form className="card-body">
        <h3 className="font-bold">Update Your Profile</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name Here" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Uploard Photo</span>
          </label>
          
          <input type="text" placeholder="photoURL" className="input input-bordered required" />
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