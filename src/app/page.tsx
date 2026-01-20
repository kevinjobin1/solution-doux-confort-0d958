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
                Title="Tous vos besoins en chauffage, ventilation et climatisation"
                Content="Nous utilisons les dernières et meilleures technologies pour des économies accrues et une efficacité énergétique optimale. Optez pour les chauffages les plus performants du marché, et économiser sur vos factures. Renouvelle l’air intérieur en introduisant de l’air frais de l’extérieur, améliorant ainsi la qualité de l’air dans un espace tout en préservant la température ambiante. "
                FeatureList={[
                    "Climatisation",
                    "Chauffage",
                    "Ventilation",
                    "Échangeur d'air",
                    "Thermopompe",
                    "Réparation et entretien",
                    "Service 24/7",
                    "Vente de pièces et installation"
                ]}
                NumberContent="Appelez-nous dès maintenant"
                Number="+1 (418) 554-7569"
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
