import Image from "next/image";
import React from "react";
import OptionCard from "./OptionCard";
import BubbleChat from "./BubbleChat";
import Comments from "./Comments";

const MyCard = () => {
  return (
      <div className="card bg-neutral">
        {/* Card Header*/}
        <div className="card-title px-4 py-2">
          <div className="avatar">
            <Image
              src={
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              }
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <h3 className="text-sm px-2 tracking-wide">ini adalah saya</h3>
        </div>
        {/* Card Image */}
        <figure className="w-auto">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        {/* Card body */}
        <div className="card-normal px-4 py-2">
          {/* Card Action */}
          <OptionCard />

          {/* Card capt */}
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem accusamus perspiciatis dolores mollitia sit aperiam
            tempora sed, veniam eum aspernatur, aut quaerat veritatis ut eaque
            incidunt expedita illo excepturi? In.
          </p>
          <span className="text-xs py-2 flex text-end">12 Oktober 2024</span>
        </div>
        {/* Comment */}
        <Comments />
      </div>
  );
};
export default MyCard;
