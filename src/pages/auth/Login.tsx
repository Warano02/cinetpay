import { assets } from "@/assets/assets";
import React, { useState } from "react";

function Login() {
  const [veiw, setView] = useState(false);
  return (
    <div className="d-flex col-12 col-lg-4 align-items-center authentication-bg p-sm-5 p-4">
      <div className="m-px-500 mx-auto">
        <img src={assets.logo} className="w-50 mb-3" />

        <h1 className="font-bold text-3xl font mb-2">
          Nous sommes heureux
          <br />
          de vous revoir
        </h1>
        <p>
          Veillez vous connecter à votre compte pour consulter et gérer vos
          transactions
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
              type={veiw ? "text" : "password"}
              className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1"
            />
            <i
              className={`fa-solid fa-eye absolute bottom-2 right-6 cursor-pointer`}
              onClick={(prev) => setView(!prev)}
            ></i>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="btn-primary m-4 px-35 py-2  rounded-lg"
            >
              Connexion
            </button>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-center">
              <a href="" className="text-red-500">
                <span>Mot de passe oublié ?</span>
              </a>
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
            <button
              type="submit"
              className="btn-primari m-4 px-26 py-2 rounded-lg"
            >
              Créer mon compte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
