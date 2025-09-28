'use client'

import Background from "@/components/background";
import { Navbar } from "@/components/Navbar";
import { AskusSection, CarouselSection, FooterSection, Section } from "@/components/section";
import { redirect } from "next/navigation";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function page () {
  redirect('https://e-commerce-dashboard-roan.vercel.app/')
  const menuItems = [
    {id: 0, name: "حول الشركة", href: "#about" },
    {id: 1, name: "مجالات عملنا", href: "#workfields" },
    {id: 2, name: "أعمالنا", href: "#works" },
    {id: 3, name: "اسألنا", href: "#askus" },
    {id: 4, name: "اتصل بنا", href: "#contactus" },
  ]
  const socials = [
    {id: 0, name:"whatsApp", icon: <FaWhatsapp size={24} />, link: 'https://wa.me/+963994327898'},
    {id: 1, name:"facebook", icon: <FaFacebook size={24} />, link: 'https://www.facebook.com/share/17CektRmKn/'},
    // {id: 2, name:"instagram", icon: <FaInstagram size={24} />, link: '#'},
    // {id: 3, name:"linkedin", icon: <FaLinkedin size={24} />, link: '#'},
  ]
  const aboutUsSection = [
    {id: 0, cardTitle: "من نحن ؟", text: "نخبة من المهندسين المتخصصين نعمل على ابتكار حلول تقنية متقدمة في مجالات التحكم الآلي وكفاءة استخدام الطاقة من خلال حلول ذكية تلبي متطلبات الحياة العصرية. كما نقوم بتصميم وتنفيذ أنظمة المنازل الذكية التي توفر الراحة والأمان.", image: "about-us-image-3.png"},
  ]
  const workFieldsSection = [
    {id: 0,cardTitle: "برمجة المتحكمات الصغرية", text: "تطوير حلول مدمجة تعتمد على متحكمات دقيقة للتحكم في العمليات و الأجهزة الذكية", image: "microcontroler.png"},
    {id: 1,cardTitle: "أنظمة المنازل الذكية", text: "تصميم و تركيب أنظمة ذكية للتحكم في الإضاءة و التكييف و الطاقة لتوفير الراحة و كفاءة استهلاك الموارد", image: "smart-house.png"},
    {id: 2,cardTitle: "صيانة و تحديث خطوط الإنتاج", text: "تشخيص الأعطال و إعادة تأهيل الأنظمة القديمة و تطوير خطوط الإنتاج لزيادة الكفاءة و تقليل التوقفات", image: "production-line.png"},
    {id: 3,cardTitle: "التحكم اﻵلي", text: "تصميم و تنفيذ أنظمة التحكم للمعدات الصناعية و خطوط الإنتاج باستخدام تقنيات متقدمة", image: "robotic-controling.png"},
  ]
  // const ourWorksSection = [
  //   // {id: 0,cardTitle: "اسم العمل", text: "شرح عن العمل", image: "https://placeholder.pics/svg/400x300"},
  //   // {id: 1,cardTitle: "اسم العمل", text: "شرح عن العمل", image: "https://placeholder.pics/svg/400x300"},
  // ]

  return (
    <>
      <Background></Background>
      <Navbar menuItems={menuItems} ></Navbar>
      <div className="w-full h-fit flex flex-col gap-5 lg:gap-80 lg:mt-32 ">
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
          <Section title={"حول شركتنا"} cards={aboutUsSection} id="about" ></Section>
          <CarouselSection cards={workFieldsSection} id="workfields" ></CarouselSection>
          {/* <Section title={"من أعمالنا"} cards={ourWorksSection} id="works" ></Section> */}
          <AskusSection image={"askus-image.png"} id="askus"></AskusSection>
          <FooterSection socials={socials} menuItems={menuItems} id="contactus" ></FooterSection>
        </div>
      </div>
    </>
  )
}