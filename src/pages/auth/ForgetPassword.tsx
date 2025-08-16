import { assets } from "@/assets/assets";
import React from "react";
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <div className="d-flex col-12 col-lg-4 align-items-center authentication-bg p-sm-5 p-4 mt-25">
      <div className="m-px-500 mx-auto">
        <img src={assets.logo} className="w-50 ml-full mb-3" />

        <h1 className="font-bold text-2xl font mb-2 ml-full">
          Mot de passe oublié
        </h1>
        <p className="">
          Entrez l'e-mail associé à votre compte et nous
          <br />
          vous enverrons un e-mail contenant un lien de
          <br />
          réinitialisation
        </p>
        <form className="mt-5 ">
        <div className="flex flex-col gap-2 px-4">
          <label htmlFor="">Adresse email</label>
          <input
            type="email"
            className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1 "
          />
        </div>
         <div className="w-full flex justify-center">
            <button
              type="submit"
              className="btn-primary m-4 px-25 py-2 w-full rounded-lg cursor-pointer"
            >
              Envoyer le lien
            </button>
          </div>
        <div className="w-full flex justify-center">
          <hr className="w-full my-4 flex" />
        </div>
        <div className="w-full flex justify-center">
          <Link
            to="/auth/signup"
            className="text-blue-500 mt-2 btn-primari m-4 px-25 py-2  rounded-lg"
          >
            Se connecter
          </Link>
        </div>
      </form>
      </div>
      
    </div>
  );
}

export default ForgetPassword;
