import Background from "@/components/background";
import { CarouselSection, Section } from "@/components/section";

export default function page () {
  const aboutUsSection = [
    {id: 0, cardTitle: "من نحن ؟", text: "نخبة من المهندسين المتخصصين نعمل على ابتكار حلول تقنية متقدمة في مجالات التحكم الآلي وكفاءة استخدام الطاقة من خلال حلول ذكية تلبي متطلبات الحياة العصرية. كما نقوم بتصميم وتنفيذ أنظمة المنازل الذكية التي توفر الراحة والأمان.", image: "about-us-image.png"},
  ]
  const workFieldsSection = [
    {id: 0,cardTitle: "برمجة المتحكمات الصغرية", text: "تطوير حلول مدمجة تعتمد على متحكمات دقيقة للتحكم في العمليات و الأجهزة الذكية", image: "microcontroler.png"},
    {id: 1,cardTitle: "أنظمة المنازل الذكية", text: "تصميم و تركيب أنظمة ذكية للتحكم في الإضاءة و التكييف و الطاقة لتوفير الراحة و كفاءة استهلاك الموارد", image: "smart-house.png"},
    {id: 2,cardTitle: "صيانة و تحديث خطوط الإنتاج", text: "تشخيص الأعطال و إعادة تأهيل الأنظمة القديمة و تطوير خطوط الإنتاج لزيادة الكفاءة و تقليل التوقفات", image: "production-line.png"},
    {id: 3,cardTitle: "التحكم اﻵلي", text: "تصميم و تنفيذ أنظمة التحكم للمعدات الصناعية و خطوط الإنتاج باستخدام تقنيات متقدمة", image: "robotic-controling.png"},
  ]
  const ourWorksSection = [
    {id: 0,cardTitle: "برمجة المتحكمات الصغرية", text: "تطوير حلول مدمجة تعتمد على متحكمات دقيقة للتحكم في العمليات و الأجهزة الذكية", image: "microcontroler.png"},
    {id: 1,cardTitle: "أنظمة المنازل الذكية", text: "تصميم و تركيب أنظمة ذكية للتحكم في الإضاءة و التكييف و الطاقة لتوفير الراحة و كفاءة استهلاك الموارد", image: "smart-house.png"},
  ]

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
          <Section flex={"flex-col lg:flex-row"} title={"حول شركتنا"} cards={aboutUsSection} ></Section>
          <CarouselSection cards={workFieldsSection} ></CarouselSection>
        </div>
      </div>
    </>
  )
}