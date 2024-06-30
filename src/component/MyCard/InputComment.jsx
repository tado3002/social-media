import { PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const InputComment = () => {
  return (
    <div
      className="flex flex-row justify-between bg-base-200"
      style={{
        position: "fixed",
        bottom: "0",
        paddingBlock: "1rem",
        gap: "1rem",
        left: "0",
        paddingInline: "1rem",
        width: "100%"
      }}
    >
      <textarea
        className="textarea textarea-info w-full"
        placeholder="Tulis Komentar"
      ></textarea>
      <button className="btn btn-accent" style={{paddingInline:"0.75rem"}}>
        <PaperPlaneRight size={25} />
      </button>
    </div>
  );
};

export default InputComment;
