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
                Title="Transformez votre confort intérieur avec nos solutions de climatisation"
                Content="Cela implique l'installation d'un nouveau système de climatisation dans votre maison ou bureau. Il est crucial de s'assurer que l'unité est correctement dimensionnée pour l'espace et installée correctement pour une efficacité optimale."
                FeatureList={[
                    "Entretien du système de ventilation",
                    "Test de la qualité de l'air intérieur",
                    "Solutions personnalisées Cool Craft"
                ]}
                Experience="25+"
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