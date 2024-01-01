import { Link } from "react-router-dom";
import {FaFacebookF, FaGithub, FaGoogle} from "react-icons/fa";
import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import { AuthContext } from "../../contexts/AuthProvider.tsx";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


const Model = () => {
    {/*start react hook form*/}
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const {signUpWithGmail,login} =useContext(AuthContext);
    const [errorMessage,setErrorMessage]=useState("")

    const onSubmit = (data) => {
        const email=data.email;
        const password=data.password;
      //  console.log(email,password)
        login(email,password).then((result) =>{
            const user =result.user;
            alert("Login successful");
        }).catch((error) =>{
            const errorMessage=error.message;
            setErrorMessage("Provide a correct email and password")
        })
    }

    //google sign in
    const handleLogin= () =>{
        signUpWithGmail().then((result) =>{
            const user=result.user;
            alert("Login Successfull");
        }).catch((error) => console.log(error))

    }

    {/*end react hook form*/}
    // @ts-ignore
    return (
        <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
            <div className="modal-box">

                <div className="flex flex-col justify-center mt-0 modal-action">

                    {/*start Form Section*/}
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body " method="dialog">
                        <h3 className="text-lg font-bold">Please Login</h3>

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
                            <label className="mt-1 label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/*end password*/}


                        {/*start error text*/}
                        {
                            errorMessage ? <p className="text-red text-xs italic">{setErrorMessage()}</p>:""
                        }
                        {/*end error text*/}
                        {/*start login button*/}
                        <div className="mt-6 form-control">
                            <input type="submit" value="Login" className="btn bg-[#FF9800] text-white"/>
                        </div>
                        {/*end login button*/}

                        <p className="my-2 text-center">Do not have an account ? <Link to="/signup" className="ml-1 underline text-red">signup now</Link>{""}</p>

                        <button
                           htmlFor="my_modal_5"
                           onClick={()=>document.getElementById('my_modal_5').close()}
                            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    </form>
                    {/*end Form Section*/}

                    {/*start log with social media*/}
                    <div className="mb-5 space-x-5 text-center">
                        <button className="btn btn-circle hover:bg-orange" onClick={handleLogin}>
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