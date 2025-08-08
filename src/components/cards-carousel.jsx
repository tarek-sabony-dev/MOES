"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

export default function CarouselWithDots ({cards}) {
  const [api, setApi] = React.useState()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const scrollTo = React.useCallback(
    (index) => {
      api?.scrollTo(index)
    },
    [api]
  )

  return (
    <div className="w-full h-fit flex flex-col justify-around items-center p-2 lg:p-4 border border-white rounded-3xl lg:rounded-[48px] ">
      <div className={`w-full h-full flex flex-col justify-center items-center gap-5 p-2 lg:p-4 border border-white rounded-2xl lg:rounded-[32px] `}>
        <Carousel setApi={setApi} className="w-full h-fit  ">
          <CarouselContent className={"w-full"}>
            {cards.map((card) => (
              <CarouselItem key={card.id}>
                <div className="w-full hit flex flex-col gap-5 ">
                  <img className="w-full rounded-lg lg:rounded-2xl " src={card.image} alt="" />
                  <div className="w-full h-fit flex flex-col justify-center items-center lg:items-end gap-2 px-2 lg:px-6 ">
                    <div className="h3 ">
                      {card.cardTitle}
                    </div>  
                    <div className="base lg:text-right ">
                      {card.text}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 py-3">
          {cards.map((card) => (
            <button
              key={card.id}
              className={cn(
                "h-3 w-3 rounded-full bg-[#D9D9D9] transition-all duration-200",
                current === card.id + 1
                  ? "opacity-100 "
                  : "opacity-25 "
              )}
              onClick={() => scrollTo(card.id)}
              aria-label={`Go to slide ${card.id + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
