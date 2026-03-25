// import About from "@/components/About";
// import HomeBlogSection from "@/components/Blog/HomeBlogSection";
// import CallToAction from "@/components/CallToAction";
// import Clients from "@/components/Clients";
// import ScrollUp from "@/components/Common/ScrollUp";
// import Contact from "@/components/Contact";
// import Faq from "@/components/Faq";
// import Features from "@/components/Features";
// import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Team from "@/components/Team";
// import Testimonials from "@/components/Testimonials";
// import { getAllPosts } from "@/utils/markdown";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Solution Doux Confort",
//   description: "Vous avez une question ? Appelez-nous : 1 (418) 554-7569",
// };

// export default function Home() {
//   const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

//   return (
//     <main>
//       <ScrollUp />
//       <Hero />
//       <Features />
//       <About />
//       <CallToAction />
//       <Pricing />
//       <Testimonials />
//       <Faq />
//       <Team />
//       <HomeBlogSection posts={posts} />
//       <Contact />
//       <Clients />
//     </main>
//   );
// }

import About from "@/../template/src/app/Components/Home/About";
import Blog from "@/../template/src/app//Components/Home/Blog";
import Choose from "@/../template/src/app//Components/Home/Choose";
import Faq from "@/../template/src/app//Components/Home/Faq";
import HomeSlider from "@/../template/src/app//Components/Home/HomeSlider";
import Pricing from "@/../template/src/app//Components/Home/Pricing";
import Process from "@/../template/src/app//Components/Home/Process";
import Services from "@/../template/src/app//Components/Home/Services";
import Team from "@/../template/src/app//Components/Home/Team";
import Testimonial from "@/../template/src/app//Components/Home/Testimonial";
import Services2 from "../../template/src/app/Components/Home2/Services2";
export default function Home() {
  return (
    <main className="home-page">
        <HomeSlider></HomeSlider>
        <About
                Img="/assets/img/poster.png"
                TitleUp="Solution Doux Confort"
                Title="Des spécialistes du confort résidentiel fait de la bonne façon"
                Content="Créée en 2019, Solution Doux Confort est née de la collaboration de passionnés cumulant plus de 30 ans d’expérience. Chauffage, climatisation et qualité de l’air : chaque installation est pensée pour être fiable, efficace et durable. Choisir Solution Doux Confort, c’est choisir le confort sans compromis, en été comme en hiver!"
                FeatureList={[
                    "Climatisation",
                    "Chauffage",
                    "Ventilation",
                    "Échangeur d'air",
                    "Thermopompe",
                    "Réparation et entretien",
                    "Service 24/7",
                    "Travaux d'électricité"
                ]}
                NumberContent="Appelez-nous dès maintenant"
                Number="+1 (418) 554-7569"
                ActionTitle="Demander un devis"
            ></About>
            <Choose></Choose>
            <Pricing></Pricing>
            <Testimonial></Testimonial>
             <Services></Services>
            <Faq></Faq>
            <Team></Team>
            <Process></Process>
            <Blog></Blog>
    </main>
  );
}
