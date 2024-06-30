import React from "react";
import BubbleChat from "./BubbleChat";
import InputComment from "./InputComment";

const Comments = () => {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box relative" style={{height:"100vh"}}>
        <form method="dialog" className="">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            style={{ right: "8px", top: "8px" }}
          >
            ✕
          </button>
        </form>
        <h3
          className="font-bold"
          style={{ fontWeight: "bold", paddingBottom: "4px" }}
        >
          Komentar
        </h3>

        <div className="flex flex-col gap-4" style={{ gap: "8px",overflowY:"auto",height:"70vh",paddingBottom:"2rem"}}>
          <BubbleChat />
          <BubbleChat />
          <BubbleChat />
          <BubbleChat />
          <BubbleChat />
          <BubbleChat />
        </div>

        <InputComment />
      </div>
    </dialog>
  );
};
export default Comments;
