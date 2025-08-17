import { assets } from "@/assets/assets";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <input
              type="tel"
              className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1 "
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
        <div className="mt-5">
          <label className="form-label">
            Quel produit souhaitez-vous utiliser ?
            <span className="text-red-500">*</span>
          </label>

          <div className="form-check form-switch form-check-reverse d-flex">
            <label className="form-check-label text-inherit">
              ENCAISSEMENT
            </label>
            <input
              className="form-check-input ms-auto"
              type="checkbox"
              role="switch"
            />
          </div>
          <div className="form-check form-switch form-check-reverse d-flex">
            <label className="form-check-label text-inherit">
              DECAISSEMENT
            </label>
            <input
              className="form-check-input ms-auto"
              type="checkbox"
              role="switch"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 relative mt-5">
          <label htmlFor="">
            Volume potentiel de transactions <span className="text-red-500">*</span>
            <select className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1">
              <option value=""></option>
              <option value="fr">[0 à 10 M] par mois</option>
              <option value="sn">[10 à 50 M] par mois</option>
              <option value="sn">[50 à 100 M] par mois</option>
              <option value="fr">]100 à 200 M] par mois</option>
              <option value="sn">[200 à +[ par mois</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col gap-2 px-4 relative mt-5">
          <label htmlFor="">
           Comment avez-vous connu CinetPay ?  <span className="text-red-500">*</span>
            <select className="w-full border-gray-200 border-2 rounded outline-0 px-4 py-1">
              <option value="">Sélectionnez un canal</option>
              <option value="fr">Facebook</option>
              <option value="sn">Twitter</option>
              <option value="sn">LinkedIn</option>
              <option value="fr">Affiche Publicitaire</option>
              <option value="sn">BDM / Commercial</option>
              <option value="sn">Bouche à oreille</option>
              <option value="sn">Moteur de recherche(Google, Yahoo, etc)</option>
              <option value="sn">Sur d'autre site</option>
              <option value="sn">Dans la presse écrite(article etc</option>
              <option value="sn">A la radio</option>
            </select>
          </label>
        </div>
        <div className="mt-5 row">

               <small className="mb-0">
                   <span className="text-red-500">*</span>
                   En cliquant sur 
                   <span className="fw-semibold text-primary text-red-500"> Créer mon compte</span> j’accepte
                   <a href="https://cinetpay.com/legal/privacy" target="_blank" className="text-decoration-none text-primary fw-bold text-red-500"> la politique de confidentialité
                   </a>
                   <br />
                   et <a href="https://cinetpay.com/legal/cgv" target="_blank" className="text-decoration-none text-red-500 text-primary fw-bold">
                       les conditions d’utilisation de CinetPay
                   </a>.
               </small>
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
  );
}

export default Signup;
