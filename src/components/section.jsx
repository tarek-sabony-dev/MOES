import Card from "./card"
import CarouselWithDots from "./cards-carousel"

function Section ({ title, flex, cards }) {
  return (
    <>
      <div className="w-full h-fit flex flex-col justify-around items-center gap-6 p-6 lg:px-40 lg:py-12 ">
        <div className="h2">
          {title}
        </div>
        {cards.map((card) => (
          <Card key={card.id} image={card.image} cardTitle={card.cardTitle} text={card.text} flex={flex} ></Card>
        ))}
      </div>
    </>
  )
}

function CarouselSection ({cards}) {

  return (
    <>
      <div className="w-full h-fit flex flex-col justify-center items-center gap-6 p-6 lg:px-40 lg:py-12 ">
        <div className="h2">
          مجالات أعمالنا
        </div>
        <div className="w-full h-fit lg:hidden ">
          <CarouselWithDots cards={cards} ></CarouselWithDots>
        </div>
        <div className="w-full h-fit hidden lg:flex justify-center items-start flex-wrap gap-6 lg:gap-20 p-6 lg:px-0 lg:py-12 ">
          {cards.map((card) => (
            <div key={card.id} className="w-[calc(50%-80px)] h-fit flex flex-col justify-center items-center p-2 lg:p-4 border border-white rounded-3xl lg:rounded-[48px] ">
              <div className={`w-full h-full flex flex-col justify-center items-center gap-5 p-2 pb-5 lg:p-4 lg:pb-6 border border-white rounded-2xl lg:rounded-[32px] `}>
                <div className="w-full h-fit flex flex-col gap-5 ">
                  <img className="w-full rounded-lg lg:rounded-2xl " src={card.image} alt="" />
                  <div className="w-full h-fit flex flex-col justify-center items-center lg:items-end gap-2 px-2 lg:px-6 ">
                    <div className="w-full h3 text-center ">
                      {card.cardTitle}
                    </div>  
                    <div className="w-full base ">
                      {card.text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export {Section, CarouselSection}