"use client"
import { useState } from "react";
import PricingCard from "../PricingCard/PricingCard";
import SectionTitle from "../Common/SectionTitle";

const Pricing = () => {
    const [isActive, setIsActive] = useState('monthly');
    
    return (
        <section>
          <div className="cs_height_115 cs_height_lg_70"></div>
          <div className="container">
            <div className="cs_tabs">
              <div className="cs_slider_heading_1">
                <div className="cs_section_heading cs_style_1">
                <SectionTitle
                    Title="Offres de prix adaptées à vos besoins"
                    SubTitle="Nos plans offerts"
                ></SectionTitle>
                </div>
                <ul className="cs_tab_links cs_style_2 cs_semibold cs_heading_font cs_mp_0 cs_heading_color">
                  <li className={`${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')}><a>Par mois</a></li>
                  <li className={`${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')}><a>Par an</a></li>
                </ul>
              </div>
              <div className="cs_height_45 cs_height_lg_45"></div>
              <div className="cs_tab_body">
                <div className={`cs_tab ${isActive === 'monthly' ? 'active' : ''}`}>
                  <div className="row cs_gap_y_30 cs_row_gap_30">
                    <div className="col-lg-4">
                       <PricingCard
                        Price="150"
                        Monthly="/ mois"
                        Title="Plan de base"
                        FeatureList={[ 
                            "Réparation et détection de fuites de réfrigérant",
                            'Remplacement du thermostat',
                            'Nettoyage de la bobine du condenseur',
                            'Remplacement du filtre à air',
                            'Nettoyage de la bobine du condenseur',
                            'Remplacement du ventilateur de climatisation'
                        ]} >
                        </PricingCard> 
                    </div>
                    <div className="col-lg-4">
                    <PricingCard
                        Price="200"
                        Monthly="/ mois"
                        Title="Plan standard"
                        FeatureList={[ 
                            "Réparation et détection de fuites de réfrigérant",
                            'Remplacement du thermostat',
                            'Nettoyage de la bobine du condenseur',
                            'Remplacement du filtre à air',
                            'Nettoyage de la bobine du condenseur',
                            'Remplacement du ventilateur de climatisation'
                        ]} >
                        </PricingCard> 
                    </div>
                    <div className="col-lg-4">
                    <PricingCard
                        Price="250"
                        Monthly="/ mois"
                        Title="Plan premium"
                        FeatureList={[ 
                            "Réparation et détection de fuites de réfrigérant",
                            'Remplacement du thermostat',
                            'Nettoyage de la bobine du condenseur',
                            'Remplacement du filtre à air',
                            'Nettoyage de la bobine du condenseur',
                            'Remplacement du ventilateur de climatisation'
                        ]} >
                        </PricingCard> 
                    </div>
                  </div>
                </div>
                <div className={`cs_tab ${isActive === 'yearly' ? 'active' : ''}`} >
                  <div className="row cs_gap_y_30 cs_row_gap_30">
                    <div className="col-lg-4">
                    <PricingCard
                        Price="350"
                        Monthly="/ an"
                        Title="Plan de base"
                        FeatureList={[ 
                            "Réparation et détection de fuites de réfrigérant",
                            'Remplacement du thermostat',
                            'Nettoyage de la bobine du condenseur',
                            'Remplacement du filtre à air',
                            'Nettoyage de la bobine du condenseur',
                            'Remplacement du ventilateur de climatisation'
                        ]} >
                        </PricingCard> 
                    </div>
                    <div className="col-lg-4">
                    <PricingCard
                        Price="500"
                        Monthly="/ an"
                        Title="Plan standard"
                        FeatureList={[ 
                            "Réparation et détection de fuites de réfrigérant",
                            'Remplacement du thermostat',
                            'Nettoyage de la bobine du condenseur',
                            'Remplacement du filtre à air',
                            'Nettoyage de la bobine du condenseur',
                            'Remplacement du ventilateur de climatisation'
                        ]} >
                        </PricingCard> 
                    </div>
                    <div className="col-lg-4">
                    <PricingCard
                        Price="600"
                        Monthly="/ an"
                        Title="Plan premium"
                        FeatureList={[ 
                            "Réparation et détection de fuites de réfrigérant",
                            'Remplacement du thermostat',
                            'Nettoyage de la bobine du condenseur',
                            'Remplacement du filtre à air',
                            'Nettoyage de la bobine du condenseur',
                            'Remplacement du ventilateur de climatisation'
                        ]} >
                        </PricingCard> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_height_120 cs_height_lg_80"></div>
        </section>
    );
};

export default Pricing;