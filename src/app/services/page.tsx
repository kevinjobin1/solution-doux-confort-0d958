import React from 'react';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';
import SectionTitle from '../../../template/src/app/Components/Common/SectionTitle';

const ServicesPage = () => {
    return (
        <div className='services-page'>
            <BreadCumb Title="Nos services" />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Service d'urgence Section */}
                        <div id="urgence" className="cs_mb_50 pt-5">
                            <SectionTitle Title="Service d'urgence (24h/7)" SubTitle="Assistance immédiate" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18 cs_mb_20">Une urgence se présente à la maison pour votre équipement?! Pas de problème! Profitez de notre service 24h pour toute urgence, avec courtoisie et professionnalisme!</p>
                            <p className="cs_fs_18 cs_mb_20">Nous offrons un service 24h/7 pour les urgences en chauffage, climatisation et ventilation. Nous comprenons que les problèmes de confort peuvent survenir à tout moment, c’est pourquoi nous sommes disponibles pour vous aider en cas d’urgence. Contactez-nous dès que possible pour une assistance rapide et efficace.</p>
                            <p className="cs_fs_18 cs_bold">Appelez-nous au 1 (418) 554-7569 pour une assistance immédiate. Nous sommes là pour vous aider, jour et nuit.</p>
                        </div>

                        {/* Travaux d'électricité Section */}
                        <div id="electricite" className="cs_mb_50 pt-5">
                            <SectionTitle Title="Travaux d'électricité" SubTitle="Gamme complète de services" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18 cs_mb_20">Nous offrons une gamme complète de services d'électricité pour répondre à tous vos besoins résidentiels et commerciaux. Nos services incluent, mais ne sont pas limités à :</p>
                            <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font mb-4">
                                <li>Installation et branchement de borne électrique</li>
                                <li>Changement de panneau électrique</li>
                                <li>Branchement de spa ou de thermopompe de piscine</li>
                                <li>Autres travaux d'électricité générale</li>
                            </ul>

                            <h4 className="cs_fs_24 cs_mb_15 cs_semibold">Pourquoi choisir nos services d'électricité?</h4>
                            <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18">
                                <li><strong>Expertise :</strong> Nos électriciens sont hautement qualifiés et expérimentés, assurant des travaux de qualité supérieure.</li>
                                <li><strong>Fiabilité :</strong> Nous nous engageons à respecter les délais et à fournir un service fiable à nos clients.</li>
                                <li><strong>Sécurité :</strong> Nous suivons strictement les normes de sécurité pour garantir la sécurité de votre maison ou de votre entreprise.</li>
                                <li><strong>Service personnalisé :</strong> Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins spécifiques et offrir des solutions personnalisées.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
