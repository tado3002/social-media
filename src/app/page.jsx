import MyCard from "@/component/MyCard";
import MyPost from "@/component/MyPost";
import Menu from "@/component/utils/Menu";
import Image from "next/image";
export default function Home() {
  return (
    <div className=" min-h-screen py-20 px-4 container w-full relative lg:bg-base-200 lg:h-screen">
      <Menu />
      <MyPost />
      <div className="max-w-screen-sm mx-auto flex flex-col gap-8 lg:h-[90vh] lg:overflow-y-auto">
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </div>
    </div>
  );
}
