"use client";
import {
  ChatCircleDots,
  Heart,
  PaperPlane,
  X,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import BubbleChat from "./BubbleChat";

const OptionCard = () => {
  return (
    <div className="card-actions py-2">
      <div className="flex w-full justify-start" style={{gap:"1rem"}}>
        <Heart size={25} className="" cursor={"pointer"}/>
        <ChatCircleDots
          size={25}
          className="mx-2 "
          cursor={"pointer"}
          onClick={() => document.getElementById("my_modal_3").showModal()}
        />
        <PaperPlane size={25} cursor={"pointer"} className=""/>
      </div>
      
    </div>
  );
};
export default OptionCard;
