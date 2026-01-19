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

export default function Home() {
  return (
    <main className="home-page">
        <HomeSlider></HomeSlider>
        <About
                Img="/assets/img/about_img_1.png"
                TitleUp="À propos de nous"
                Title="Où chaque souffle est frais et pur"
                Content="Diagnostic rapide et réparation de tout problème avec votre unité de climatisation pour assurer des performances optimales. Inspection des conduits pour détecter les fuites ou les dommages, suivie d'une étanchéification pour améliorer l'efficacité énergétique."
                FeatureList={[
                    "Optimisation du flux d'air",
                    "Test de qualité de l'air pur",
                    "Installation du système FreezeGuard",
                    "Entretien Cool Care",
                    "Contrôle ClimateControl",
                    "Services d'urgence ChillOut",
                ]}
                NumberContent="Appelez à tout moment pour les services Freseir"
                Number="+1 (418) 554-7569"
            ></About>
            <Services></Services>
            <Team></Team>
            <Choose></Choose>
            <Pricing></Pricing>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Process></Process>
            <Blog></Blog>
    </main>
  );
}
