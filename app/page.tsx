import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Image src={"/download.png"} alt="logo" width={200} height={200} />
    </div>
  );
}
