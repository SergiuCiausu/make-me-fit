import AlegeProgram from "./Alege program/AlegeProgram";
import HeroSection from "./components/Hero/HeroSection"
import Perks from "./components/Perks/Perks";
import PozeRețete from "./Poze rețete/PozeRețete";
import PreviewProgram from "./PreviewProgram/PreviewProgram";
import PreviewTutorial from "./PreviewTutorial/PreviewTutorial";
import ProgrameAntrenament from "./Programe de antrenament/ProgrameAntrenament";
import "@/app/make-me-fit/globals.css";
import TestimonialeFinal from "./Testimoniale/TestimonialeFinal";
import CTAFinal from "./CTAFinal/CTAFinal";

export default function Home() {

  const perksImg = [
      {
          src: "/Calendar icon_6.png",
          alt: "Ilustrație transformare în 30 de zile",
          width: 154,
          height: 124,
          text: "Transformare garantată în 30 de zile"
      }, 
      {
          src: "/Whatsapp icon_1.png",
          alt: "Ilustrație suport 24/7",
          width: 126,
          height: 124,
          text: "Suport 24/7 prin WhatsApp"
      }, 
      {
          src: "/Explicatie video icon.png",
          alt: "Ilustrație antrenamente și mese video",
          width: 206,
          height: 124,
          text: "Antrenamente și mese explicate video"
      }
    ]

  return (
    <div>
      <HeroSection 
        infoAccentText="Gata de transformare?"
        header="Fii pregătită pentru momentele în care vrei să fii pe val!"
        heroP="Tonifiază-te folosind programele noastre de transformare corporală, care se bazează pe antrenamente scurte și eficiente în sală și diete ușor de preparat, ce pun pe primul loc un stil de viață echilibrat." 
        textBtn="Alege program"
        nume=""
        img="/Banner-make-me-fit-hero-section-2.png"
        color="primary"/>
      <Perks imgs={perksImg}/>
      <div 
        className="flex flex-col justify-center make-me-fit-mb"
        style={{
          gap: "var(--section-mb)"
        }}>
          <ProgrameAntrenament />
          <AlegeProgram />
          <PreviewProgram />
          <PozeRețete />
          <PreviewTutorial />
          <TestimonialeFinal />
          <CTAFinal />
      </div>
    </div>
  );
}
