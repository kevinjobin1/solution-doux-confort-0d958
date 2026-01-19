import React from 'react';
import About2 from '../../../template/src/app/Components/About/About2';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';
import Process from '../../../template/src/app/Components/Home/Process';
import Testimonial from '../../../template/src/app/Components/Home/Testimonial';
import Faq from '../../../template/src/app/Components/Home/Faq';


const page = () => {
    return (
        <div className='about-page'>
            <BreadCumb Title="À propos de nous"></BreadCumb>
            <About2 
                Img="/assets/img/about_img_2.png"
                TitleUp="À propos de nous"
                Title="Nous offrons les meilleurs services à nos clients."
                Content="Crée en 2019, Solution Doux Confort est née de la collaboration de deux passionnés cumulant plus de 30 ans d’expérience dans leur domaine."
                FeatureList={[
                    "Entretien du système de ventilation",
                    "Test de la qualité de l'air intérieur",
                    "Solutions personnalisées Cool Craft"
                ]}
                Experience="+25"
                BioImg="/assets/img/danny.jpeg"                
                BioName="Danny Doucet"                
                BioContent="Propriétaire et fondateur"                
            ></About2>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Process></Process>
        </div>
    );
};

export default page;