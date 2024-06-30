import React from "react";

const BubbleChat = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div
        className="chat-bubble chat-bubble-primary text-sm max-w-full"
        style={{
          maxWidth: "100%",
          display:"flex",
          flexDirection:"column",
          gap:"4px"
        }}
      >
        <span
          className="text-sm font-bold"
          style={{ fontWeight:"600" }}
        >
          Orang tidak dikenal
        </span>
        <p className="text-sm">It was said that you would, destroy the Sith, not join them.</p>
        <span
          style={{textAlign:"end",fontSize:"12px"}}
        >
          07.00 WIB 11/09/2024
        </span>
      </div>
    </div>
  );
};

export default BubbleChat;
