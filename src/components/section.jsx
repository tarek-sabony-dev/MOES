import Carousel from "./carousel"

function Section ({ title, image, cardTitle, text, flex }) {
  return (
    <>
      <div className="w-full h-fit flex flex-col justify-around items-center gap-6 p-6 lg:px-40 lg:py-12 ">
        <div className="h2">
          {title}
        </div>
        <div className="w-full h-fit flex flex-col justify-around items-center p-2 lg:p-4 border border-white rounded-3xl lg:rounded-[48px] ">
          <div className={`w-full h-fit flex ${flex} justify-around items-center gap-5 p-2 lg:p-4 border border-white rounded-2xl lg:rounded-[32px] `}>
            <img className="w-full rounded-lg lg:rounded-2xl " src={image} alt="" />
            <div className="w-full h-fit flex flex-col justify-center items-center lg:items-end gap-2 px-2 lg:px-6 ">
              <div className="h3 ">
                {cardTitle}
              </div>  
              <div className="base lg:text-right ">
                {text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function CarouselSection () {
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center ">
        <Carousel
          baseWidth={300}
          autoplay={false}
          pauseOnHover={true}
          loop={false}
          round={false}
          />
      </div>
    </>
  )
}

export {Section, CarouselSection}