import { assets } from "@/assets/assets";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {
  const [view, setView] = useState(false);
  return (
    <div className="col-12 col-lg-4 align-items-center authentication-bg p-sm-5 p-4 ">
      <div className="m-px-500 mx-auto">
        <img src={assets.logo} className="w-50 ml-full mb-3" />

        <h1 className="font-bold text-2xl font mt-5 mb-2 ml-full">
          Créez votre compte CinetPay
        </h1>
      </div>
      <form className="mt-5 ">
        <div className="flex gap-10">
          <label htmlFor="">
            Nom <span className="text-red-500">*</span>
            <input
              type="text"
              className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1 "
            />
          </label>
          <label htmlFor="">
            Prénom(s) <span className="text-red-500">*</span>
            <input
              type="text"
              className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1"
            />
          </label>
        </div>
        <div className="mt-5">
          <label htmlFor="">
            Sélectionnez votre pays <span className="text-red-500">*</span>
            <select className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1">
              <option value="">Côte d'Ivoire</option>
              <option value="fr">Cameroun</option>
              <option value="sn">Sénégal</option>
              <option value="ci">Mali</option>
              <option value="">Burkina Faso</option>
              <option value="fr">Togo</option>
              <option value="sn">Congo RDC</option>
              <option value="ci">Guinée</option>
              <option value="fr">Bénin</option>
              <option value="sn">Niger</option>
              <option value="ci">USA</option>
            </select>
          </label>
        </div>
        <div className="flex gap-10 mt-5">
          <label htmlFor="">
            Contact <span className="text-red-500">*</span>
            <div
              className="absolute ml-2 mt-1 input-group-text bg-gray-500 w-15 h-9 text-center"
              id="country_logo_prefix"
            >
              <span id="country_logo">🇨🇮</span>
              <span id="country_prefix">+225</span>
            </div>
            <input
              type="tel"
              className="w-50 border-gray-200 border-2 rounded outline-0 px-4 py-1 "
            />
          </label>
          <label htmlFor="">
            Email <span className="text-red-500">*</span>
            <input
              type="email"
              className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1"
            />
          </label>
        </div>
        <div className="flex flex-col gap-2 px-4 relative mt-5">
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
        <div className="flex flex-col gap-2 px-4 relative mt-5">
          <label htmlFor="">
            Nom de l'entreprise<span className="text-red-500">*</span>
            <input
              type="text"
              className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1"
            />
          </label>
        </div>
        <div className="flex flex-col gap-2 px-4 relative mt-5">
          <label htmlFor="">
            Site web de l'entreprise
            <input
              type="text"
              className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1"
            />
          </label>
        </div>
        <div className="flex gap-10">
          <label htmlFor="">
            Secteur d'activité <span className="text-red-500">*</span>
            <select className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1">
              <option value=""></option>
              <option value="">Industrie Agroalimentaire</option>
              <option value="fr">Industrie minier</option>
              <option value="sn">Industrie de transport</option>
              <option value="ci">Industrie de construction</option>
              <option value="">Industrie énergétique</option>
              <option value="fr">Bookmakers</option>
              <option value="sn">Services publics</option>
              <option value="ci">Education</option>
              <option value="fr">Cabinet de RH</option>
              <option value="sn">Entreprise de construction</option>
              <option value="ci">Coopératives</option>
              <option value="fr">Société de sécurité</option>
              <option value="sn">Assurances</option>
              <option value="ci">Autres</option>
            </select>
          </label>
          <label htmlFor="">
            Taille de l'entrprise <span className="text-red-500">*</span>
            <select className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1">
              <option value=""></option>
              <option value="fr">Moins de 20 salariés</option>
              <option value="sn">Entre 20 et 50 salariés</option>
              <option value="sn">Plus de 50 salariés</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Signup;
