import React from 'react';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';
import SectionTitle from '../../../template/src/app/Components/Common/SectionTitle';

const ExpertisesPage = () => {
    return (
        <div className='expertises-page'>
            <BreadCumb Title="Nos expertises" />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Vente Section */}
                        <div id="vente" className="cs_mb_50 pt-5">
                            <SectionTitle Title="Vente" SubTitle="Équipements de qualité" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18">Procurez-vous les meilleurs produits de grands fabricants comme <strong>Direct-air</strong> et <strong>Tosot</strong> à des prix plus que compétitifs ! Nos experts sauront vous guider et répondre à vos besoins. Nous sommes dépositaire de toute la ligne des réputés produits Direct-air : climatiseurs muraux et centraux, thermopompes murales et centrales, fournaises électriques, échangeurs d’air ainsi que tout produit pour vos besoins de confort intérieur. Nous pouvons également fournir des produits tels que Gree, Convectair, Franklin, ACD, etc.</p>
                        </div>

                        {/* Réparation Section */}
                        <div id="reparation" className="cs_mb_50 pt-5">
                            <SectionTitle Title="Réparation" SubTitle="Service rapide et efficace" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18">Notre département de service après-vente effectue la réparation de toutes marques de produits. Nous sommes fiers de notre expertise et de notre capacité à diagnostiquer et réparer rapidement les problèmes pour rétablir votre confort le plus rapidement possible. Notez que nous sommes en mesure de fournir les pièces d’origine de remplacement. N’hésitez pas à communiquer avec le département de service pour tous besoins en réparation.</p>
                        </div>

                        {/* Entretien Section */}
                        <div id="entretien" className="cs_mb_50 pt-5">
                            <SectionTitle Title="Entretien" SubTitle="Prolongez la durée de vie de vos systèmes" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18 cs_mb_20">Nous offrons différents plans d’entretien pour tous vos appareils en climatisation, chauffage et ventilation. L’entretien régulier de vos appareils est essentiel pour assurer leur bon fonctionnement, prolonger leur durée de vie et maintenir une efficacité optimale. Nos plans d’entretien sont conçus pour répondre à vos besoins spécifiques et garantir que vos systèmes fonctionnent de manière fiable tout au long de l’année.</p>
                            <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
                                <li>Nettoyage complet des unités</li>
                                <li>Remplacement des filtres</li>
                                <li>Vérification des composantes de vos éléments et fournaises</li>
                                <li>Ajout de réfrigérant</li>
                                <li>Vérification de l’efficacité de vos systèmes</li>
                                <li>Plan de vérification et entretien annuel</li>
                            </ul>
                        </div>

                        {/* Installation Section */}
                        <div id="installation" className="cs_mb_50 pt-5">
                            <SectionTitle Title="Installation" SubTitle="Rigueur et professionnalisme" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18">Nous effectuons l’installation de tous nos produits de A à Z. Notre équipe d’experts s’assure que chaque installation est réalisée avec rigueur et professionnalisme, en respectant les normes de l’industrie et les spécificités de votre maison. Nos techniciens certifiés sont formés pour installer tous nos produits ainsi que les vôtres. Nous garantissons des délais et des prix très compétitifs. Nos installations sont faites avec des outils et équipements à la fine pointe de la technologie. Nos techniciens sont très minutieux et effectuent les travaux proprement et efficacement, tout en étant à l’écoute de vos besoins.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertisesPage;
