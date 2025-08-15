import React from "react";
import { Outlet } from "react-router-dom";
import { assets } from "@/assets/assets";
import Login from "@/pages/auth/Login";


function Auth() {
  return (
    <div className="w-[100vw] h-[100vh] relative flex">
      <div className=" w-[68%] h-full flex items-end justify-items-end autl p-8 sm-hidden">
        <div className="flex items-center pb-3">
          <h2 className="text-white  m-0 p-4 font-bold text-3xl  mb-2">
            Rejoignez +25 000 entreprise
            <br />
             et propulser votre croissance
          </h2>
          <div className="bg-white rounded flex p-4   w-[376px] h-[118px] items-center justify-between">
            <img
              className="me-2"
              width="100"
              src={assets.oneci}
              alt="Oneci"
            ></img>

            <img
              className="me-2"
              width="100"
              src={assets.sanlam}
              alt="sanlam"
            ></img>

            <img
              className="me-2"
              width="100"
              src={assets.addoha}
              alt="addoha"
            ></img>
          </div>
        </div>
      </div>
        <div className=" ">
          <Login />
        </div>
    </div>
  );
}

export default Auth;
