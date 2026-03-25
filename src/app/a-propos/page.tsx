import React from 'react';
import About2 from '../../../template/src/app/Components/About/About2';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';
import Testimonial from '../../../template/src/app/Components/Home/Testimonial';

const page = () => {
    return (
        <div className='about-page'>
            <BreadCumb Title="À propos de nous"></BreadCumb>
            <About2 
                Img="/assets/img/about_img_2.png"
                TitleUp="À propos de nous"
                Title="Votre confort, notre priorité depuis nos débuts."
                Content="Créée en 2019, Solution Doux Confort est née de la collaboration de deux passionnés cumulant plus de 30 ans d’expérience dans leur domaine. Nous sommes une entreprise spécialisée en chauffage, climatisation et confort résidentiel qui met la qualité et la confiance au centre de ce que nous faisons. Depuis nos débuts, nous avons bâti notre réputation sur la rigueur de nos installations, l’honnêteté de nos conseils et le respect de nos clients et de leur maison. Choisir Solution Doux Confort, c’est choisir la tranquillité d’esprit, un travail soigné et du confort qui se ressent jour après jour."
                FeatureList={[
                    "Installations faites avec rigueur",
                    "Conseils honnêtes et transparents",
                    "Respect des clients et de leur maison",
                    "Solutions durables et performantes"
                ]}
                Experience="+25"
                BioImg="/assets/img/danny.jpeg"                
                BioName="Danny Doucet"                
                BioContent="Propriétaire et fondateur"                
            ></About2>
            <Testimonial></Testimonial>
        </div>
    );
};

export default page;
