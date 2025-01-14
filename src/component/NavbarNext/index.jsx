"use client"
import Link from "next/link";
import React from "react";
import { House, Atom, Planet } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const NavbarNext = () => {
  return (
    <div className="w-full relative flex justify-center">
      <div
        className="navbar bg-black border-b container"
        style={{
          position: "fixed",
          top: "0",
          zIndex: "100",
          width: "100%",
        }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              className="swap swap-rotate btn btn-ghost lg:hidden"
              style={{ padding: "1rem" }}
            >
              {/* <!-- this hidden checkbox controls the state --> */}
              <Atom size={25} />
            </div>
            <ul
              className="menu bg-base-200 rounded-box dropdown-content"
              tabIndex={0}
              style={{ paddingBlock: "1rem" }}
            >
              <li>
                <button className="tooltip tooltip-right" data-tip="Home" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a className="tooltip tooltip-right" data-tip="Details">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a className="tooltip tooltip-right" data-tip="Stats">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">chemONE</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline outline-accent text-accent btn-sm">Masuk</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarNext;
