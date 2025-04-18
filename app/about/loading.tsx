import Loader from "@/components/loader";

export default function Loading() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-black">
      <Loader />
    </div>
  );
}
