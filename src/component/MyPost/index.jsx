import { Image,X } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const MyPost = () => {
  return (
    <dialog id="my_modal_4" className="modal">
      <div
        className="modal-box w-11/12 max-w-5xl relative h-screen"
        style={{ height: "80vh" }}
      >
        <div
          className="modal-action absolute top-0 right-0"
          style={{ top: "-0.5rem" }}
        >
          <form method="dialog border">
            {/* if there is a button, it will close the modal */}
            <button
              className="btn btn-secondary btn-circle btn-sm"
              style={{ padding: "0.25rem" }}
            >
              <X size={18} weight="bold"/>
            </button>
          </form>
        </div>
        <button
          className="btn btn-success btn-sm absolulte"
          style={{ right: "1rem", position: "absolute", top: "1rem" }}
        >
          Kirim
        </button>
        <div
          className=""
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <h3
            className="text-lg"
            style={{ marginTop: "3rem", fontWeight: "bold" }}
          >
            Tambahkan Cerita
          </h3>
          <div
            className="border border-primary justify-center rounded w-full gap-2"
            style={{ minHeight: "10rem",alignItems:"center",display:"flex",flexDirection:"column" }}
          >
            <Image size={32} />
            <button className="btn btn-sm border-primary text-xs">Tambahkan Gambar</button>
          </div>
          <textarea
            className="textarea textarea-accent w-full"
            placeholder="Tulis apapun sesuka kalian"
          ></textarea>
        </div>
      </div>
    </dialog>
  );
};

export default MyPost;
