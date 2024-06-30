"use client";
import { Atom } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
import {signIn} from "next-auth/react"

const page = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  function onChangeHandler(event, type) {
    event.preventDefault();
    if (type === "username") {
      setUserName(event.target.value);
    } else if (type === "password") {
      setPassword(event.target.value);
    }
  }
  const clickHandle = async (event) => {
    event.preventDefault();
    if (username == undefined || password == undefined) {
      window.alert("masukan username dan password");
      return;
    }
    const data = { username, password };
    let res = await signIn("credentials",{username,password,redirect: false})
     if (res?.ok) {
      // toast success
      console.log("success");
      return;
    } else {
      // Toast failed
      setError("Failed! Check you input and try again.");
      // return;
      console.log("Failed", res);
    }
    return res;
  }
    // const response = await fetch("/api/v1/login", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
    
    // signIn('credentials', {username: data.username,password: data.password,redirect:false})
    
  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0 z-[999] absolute">
      <a href="#">
        <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
          <div>
            <Atom size={25} />
          </div>
          chemONE
        </div>
      </a>
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div
          className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
          bis_skin_checked="1"
        ></div>
        <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter">
              Login
            </h3>
            <p className="mt-1.5 text-sm font-medium text-white/50">
              Selamat Datang di Website unofficial Kimia Industri 1 SKENSAGRA
              19/22
            </p>
          </div>
          <div className="p-6 pt-0">
            <div>
              <div>
                <div>
                  <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                        Username
                      </label>
                      <div className="absolute right-3 translate-y-2 text-green-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      autoComplete="off"
                      className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                      onChange={(e) => onChangeHandler(e, "username")}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                        Password
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                        onChange={(e) => onChangeHandler(e, "password")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end gap-x-2">
                <button
                  className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                  type="submit"
                  onClick={clickHandle}
                >
                  Masuk
                </button>
              </div>

              <span className="text-sm mt-4">
                Tidak bisa login? <br />
                Silahkan sambat ke Tado.{" "}
                <a href="/" className="text-accent">
                  Click me!
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
