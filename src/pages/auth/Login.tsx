import { assets } from "@/assets/assets";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
/**
 *  Mise a jours du lien pour le mot de passe oublier
 *  */
function Login() {
  const [view, setView] = useState(false);
  return (
    <div className="d-flex col-12 col-lg-4 align-items-center authentication-bg p-sm-5 p-4">
      <div className="m-px-500 mx-auto">
        <img src={assets.logo} className="w-50 ml-full mb-3" />

        <h1 className="font-bold text-3xl font mt-5 mb-2 ml-full">
          Nous sommes heureux
          <br />
          de vous revoir
        </h1>
        <p className="">
          Veillez vous connecter à votre compte pour
          <br />
          consulter et gérer vos transactions
        </p>

        <form className="mt-5 ">
          <div className="flex flex-col gap-2 px-4">
            <label htmlFor="">Adresse email</label>
            <input
              type="email"
              className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1 "
            />
          </div>
          <div className="flex flex-col gap-2 px-4 relative">
            <label htmlFor=""> Mot de passe</label>
            <input
              type={view ? "text" : "password"}
              className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1"
            />
            <span
              onClick={() => setView(!view)}
              className="absolute bottom-2 right-6 cursor-pointer"
            >
              {view ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="btn-primary m-4 px-35 py-2 w-full rounded-lg"
            >
              Connexion
            </button>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-center">
              <Link to="/auth/fotgot-password" className="text-red-500 mt-2">
                Mot de passe oublié ?
              </Link>
            </p>
          </div>
          <div className="w-full flex justify-center">
            <hr className="w-full my-4 flex" />
          </div>
          <div className="w-full flex justify-center">
            <p className="text-center">
              <span>Vous n'avez pas de compte ?</span>
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Link
              to="/auth/signup"
              className="text-blue-500 mt-2 btn-primari m-4 px-25 py-2  rounded-lg"
            >
              Créer mon compte
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
