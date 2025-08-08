import Background from "@/components/background";
import { CarouselSection, Section } from "@/components/section";

export default function page () {
  return (
    <>
      <Background></Background>
      <div className="w-full h-16 lg:h-48 ">
      
      </div>
      <div className="w-full h-fit flex flex-col gap-5 lg:gap-56 ">
        <div className="w-full h-fit px-6 " >
          <div className="w-full h-fit flex flex-col justify-center items-center " >
            <div className="h1 " >
              حلول تقنية متقدمة تواكب المعايير العالمية
            </div>
            <div className="text-base lg:text-[32px] text-white opacity-70 text-center " >
              نقدم حلولا متكاملة في مجال أنظمة المنازل الذكية لتحسين أمان و راحة العملاء
            </div>
          </div>
        </div>
        <div className="w-full h-fit ">
          <Section flex={"flex-col lg:flex-row"} title={"حول شركتنا"} image={"about-us-image.png"} cardTitle={"من نحن ؟"} text={"نخبة من المهندسين المتخصصين نعمل على ابتكار حلول تقنية متقدمة في مجالات التحكم الآلي وكفاءة استخدام الطاقة من خلال حلول ذكية تلبي متطلبات الحياة العصرية. كما نقوم بتصميم وتنفيذ أنظمة المنازل الذكية التي توفر الراحة والأمان."} ></Section>
          <CarouselSection></CarouselSection>
        </div>
      </div>
    </>
  )
}