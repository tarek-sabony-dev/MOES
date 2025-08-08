import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

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
  const cards = [
    {id: 1,cardTitle: "برمجة المتحكمات الصغرية", text: "تطوير حلول مدمجة تعتمد على متحكمات دقيقة للتحكم في العمليات و الأجهزة الذكية", image: "microcontroler.png"},
    {id: 2,cardTitle: "أنظمة المنازل الذكية", text: "تصميم و تركيب أنظمة ذكية للتحكم في الإضاءة و التكييف و الطاقة لتوفير الراحة و كفاءة استهلاك الموارد", image: "smart-house.png"},
    {id: 3,cardTitle: "صيانة و تحديث خطوط الإنتاج", text: "تشخيص الأعطال و إعادة تأهيل الأنظمة القديمة و تطوير خطوط الإنتاج لزيادة الكفاءة و تقليل التوقفات", image: "production-line.png"},
    {id: 4,cardTitle: "التحكم اﻵلي", text: "تصميم و تنفيذ أنظمة التحكم للمعدات الصناعية و خطوط الإنتاج باستخدام تقنيات متقدمة", image: "robotic-controling.png"},
  ]
  return (
    <>
      <div className="w-full h-fit flex flex-col justify-around items-center gap-6 p-6 lg:px-40 lg:py-12 ">
        <div className="h2">
          مجالات أعمالنا
        </div>
        <div className="w-full h-fit flex flex-col justify-around items-center p-2 lg:p-4 border border-white rounded-3xl lg:rounded-[48px] ">
        <Carousel className="w-full h-fit  ">
          <CarouselContent className={"w-full"}>
            {cards.map((card) => (
              <CarouselItem key={card.id}>
                <div className={`w-full h-full flex flex-col justify-around items-center gap-5 p-2 lg:p-4 border border-white rounded-2xl lg:rounded-[32px] `}>
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
          
        </div>
      </div>
    </>
  )
}

export {Section, CarouselSection}