"use client"
import { useEffect } from "react";
import ProcessCard from "../ProcessCard/ProcessCard";
import ProcessCard2 from "../ProcessCard/ProcessCard2";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import SectionTitle from "../Common/SectionTitle";

const Process = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
    <section className="cs_bg_filed" data-background="/assets/img/how_to_work_bg.svg">
      <div className="cs_height_115 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading_1_with_sub">
          <div className="cs_section_heading cs_style_1">
             <SectionTitle
                  Title="Processus de travail"
                  SubTitle="Qu&apos;est-ce qui nous distingue"
              ></SectionTitle>
          </div>
            <p className="mb-0">Garder l’unité extérieure propre et sceller toute fuite dans votre maison peut améliorer l’efficacité</p>
        </div>
        <div className="cs_height_45 cs_height_lg_45"></div>
        <div className="cs_card_1_wrap">
          <div className="cs_card_1_col">
            <ProcessCard
                    Title="Système Cool Wave"
                    Content="Améliorez votre système avec la dernière technologie de climatisation écoénergétique Frost d'Eco Cool"
                    Img="/assets/img/icons/how_to_work_icon_1.svg"
                >
            </ProcessCard>
          </div>
          <div className="cs_card_1_col">
            <ProcessCard2
                    Title="Installations Arctiques"
                    Content="Le service de réparation Arctic Blast répond à tous vos besoins en matière de réparation de climatisation Eco Cool"
                    Img="/assets/img/icons/how_to_work_icon_2.svg"                
                >
            </ProcessCard2>
          </div>
          <div className="cs_card_1_col">
            <ProcessCard
                    Title="Solutions de flux d'air"
                    Content="Notre installation et service Quick Cool fournit une installation rapide et efficace"
                    Img="/assets/img/icons/how_to_work_icon_3.svg"
                >
            </ProcessCard>
          </div>
          <div className="cs_card_1_col">
            <ProcessCard2
                    Title="Service d'urgence"
                    Content="Nous gérons tout, de l'évaluation de vos besoins en climatisation à la mise en place d'Arctic Blast"
                    Img="/assets/img/icons/how_to_work_icon_4.svg"                
                >
            </ProcessCard2>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_70"></div>
    </section>
    );
};

export default Process;