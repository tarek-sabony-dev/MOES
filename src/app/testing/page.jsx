import Carousel from "@/components/carousel";

export default function Page() {
  return (
    <>
        <div className="w-full h-screen flex justify-center items-center bg-[#041728]">
            <Carousel
              baseWidth={300}
              autoplay={false}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
        </div>
    </>
  );
}