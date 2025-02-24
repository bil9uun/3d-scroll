"use client";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const Home = () => {
  return (
    <main className="h-[100vh]">
      <Scene />
    </main>
  );
};

export default Home;
