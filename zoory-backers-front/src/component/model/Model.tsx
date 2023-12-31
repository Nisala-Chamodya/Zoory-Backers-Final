import { Link } from "react-router-dom";
import {FaFacebookF, FaGithub, FaGoogle} from "react-icons/fa";
import {useForm} from "react-hook-form";


const Model = () => {
    {/*start react hook form*/}
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)

    {/*end react hook form*/}
    return (
        <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
            <div className="modal-box">

                <div className="modal-action flex flex-col justify-center mt-0">

                    {/*start Form Section*/}
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body " method="dialog">
                        <h3 className="font-bold text-lg">Please Login</h3>

                        {/*start emai*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"  {...register("email")}/>
                        </div>
                        {/*end email*/}

                        {/*start password*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />
                            <label className="label mt-1">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/*end password*/}


                        {/*start error text*/}

                        {/*end error text*/}
                        {/*start login button*/}
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn bg-[#FF9800] text-white"/>
                        </div>
                        {/*end login button*/}

                        <p className="text-center my-2">Do not have an account ? <Link to="/signup" className="underline text-red ml-1">signup now</Link></p>
                    </form>
                    {/*end Form Section*/}

                    {/*start log with social media*/}
                    <div className="text-center space-x-5 mb-5">
                        <button className="btn btn-circle hover:bg-orange">
                            <FaGoogle />
                        </button>
                        <button className="btn btn-circle hover:bg-orange">
                            <FaFacebookF />
                        </button>
                        <button className="btn btn-circle hover:bg-orange">
                            <FaGithub />
                        </button>

                    </div>
                    {/*end log with social media*/}


                </div>
            </div>
        </dialog>
    );
};

export default Model;