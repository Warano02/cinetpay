import React, { useState } from "react";

function Login() {
  const [veiw, setView] = useState(false);
  return (
    <div className="p-4">
      <h1 className="font-bold text-3xl">Nous sommes heureux de vous revoir</h1>
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
           <button type="submit" className="btn-primary m-4 px-26 py-2 rounded">Connexion</button>
     </div>
      </form>
    </div>
  );
}

export default Login;
