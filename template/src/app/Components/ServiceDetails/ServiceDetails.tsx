"use client"
import Form from '../Form/Form';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import data from '../../Data/accordion.json';
import Link from 'next/link';
import Image from 'next/image';

const ServiceDetails = () => {

    const ServiceCategory = [
        {title:'Entretien BreezeCheck', link:'/service/service-details'},
        {title:'Nettoyage ChillMax', link:'/service/service-details'},
        {title:'Inspection CoolFlow', link:'/service/service-details'},
        {title:'Nettoyage de conduits FrostWave', link:'/service/service-details'},
        {title:'Installation CoolPro', link:'/service/service-details'},
        {title:'Services RapidRepair', link:'/service/service-details'},
        {title:'Dépannage d\'urgence CoolFix', link:'/service/service-details'}
      ];  

      const accordionContentRef = useRef(null);
      const [openItemIndex, setOpenItemIndex] = useState(-1);
      const [firstItemOpen, setFirstItemOpen] = useState(true);
    
      const handleItemClick = (index: SetStateAction<number>) => {
        if (index === openItemIndex) {
          setOpenItemIndex(-1);
        } else {
          setOpenItemIndex(index);
        }
      };
      useEffect(() => {
        if (firstItemOpen) {
          setOpenItemIndex(0);
          setFirstItemOpen(false);
        }
      }, [firstItemOpen]);
      
      
    return (
        <div className='service-details'>
            <section>
            <div className="cs_height_120 cs_height_lg_80"></div>
            <div className="container">
                <div className="row cs_gap_y_60">
                <div className="col-lg-8">
                    <div className="cs_pr_30">
                    <div className="cs_service_details">
                        <Image src="/assets/img/service_details_1.jpg" alt="img" width={746} height={427}   /> 
                        <h2 className="cs_fs_48 cs_mb_20">Un confort sur lequel vous pouvez compter</h2>
                        <p className="cs_mb_25">Installation rapide et efficace de nouveaux climatiseurs. Nos techniciens certifiés s&apos;assurent que votre système est correctement installé pour des performances optimales. Évaluation du site, livraison de l&apos;équipement et installation complète.<br/><br/>Services d&apos;entretien réguliers pour maintenir votre système de climatisation en bon état de fonctionnement et prévenir les pannes, tout en prolongeant sa durée de vie. Remplacement des filtres, nettoyage des serpentins, vérification du réfrigérant, calibration du thermostat et inspection du système. Mise à niveau de votre système existant de climatisation.</p>
                        <h3 className="cs_fs_30 cs_mb_15">Votre confort, notre mission</h3>
                        <p className="cs_mb_25">Mise à niveau de votre système de climatisation existant vers des modèles plus économes en énergie, vous aidant à économiser sur vos factures d&apos;énergie et à réduire votre empreinte carbone. Lubrification des pièces mobiles, inspection des connexions électriques,</p>
                        <div className="row">
                        <div className="col-lg-6">
                            <Image src="/assets/img/service_details_2.jpg" alt="img" width={361} height={317}   /> 
                        </div>
                        <div className="col-lg-6">
                            <Image src="/assets/img/service_details_3.jpg" alt="img" width={361} height={317}   /> 
                        </div>
                        </div>
                        <p className="cs_mb_25">Évaluation énergétique, retrait de l&apos;ancien appareil, installation du nouvel appareil et optimisation de l&apos;efficacité énergétique. Services de diagnostic avancés utilisant la dernière technologie pour détecter et résoudre les problèmes de votre système de climatisation avant qu&apos;ils ne deviennent majeurs.</p>
                        <h3 className="cs_fs_30 cs_mb_15">Services de climatisation et de chauffage</h3>
                        <p className="cs_mb_25">Analyse complète du système, détection des défauts, rapport détaillé et solutions recommandées. Services de calibration de précision pour garantir que votre système de climatisation fonctionne à des réglages optimaux pour un confort et une efficacité maximum.</p>
                        <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
                        <li>
                            {/* SVG */}
                            Installations de précision
                        </li>
                        <li>
                            {/* SVG */}
                            Nettoyage de conduits FrostWave
                        </li>
                        <li>
                            {/* SVG */}
                            Entretien CoolCare
                        </li>
                        <li>
                            {/* SVG */}
                            Inspection CoolFlow
                        </li>
                        <li>
                            {/* SVG */}
                            Dépannage TempGuard
                        </li>
                        <li>
                            {/* SVG */}
                            Inspection FrostGuard
                        </li>
                        </ul>
                        <h3 className="cs_fs_30 cs_mb_15">Nous vous aidons avec dévouement et affection</h3>
                        <p className="cs_mb_25">Services de nettoyage approfondi pour éliminer la saleté, la poussière et les débris de votre système de climatisation, améliorant ainsi la qualité de l&apos;air et l&apos;efficacité du système.</p>
                        <div className="cs_accordians cs_style_1">
                        {data.map((item, index)=>(    
                        <div key={index} className={`cs_accordian ${index === openItemIndex ? "active" : "" }`}>
                            <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                            <h2 className="cs_accordian_title cs_fs_18 cs_medium mb-0">{item.title}</h2>
                            <span className="cs_accordian_toggle"></span>
                            </div>
                            <div className="cs_accordian_body" ref={accordionContentRef}>
                            <p>{item.desc}</p>
                            </div>
                        </div>
                        ))} 
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="cs_right_sidebar">
                    <div className="cs_sidebar_widget cs_color_1">
                        <form action="#" className="cs_search_form">
                        <input type="text" placeholder="Entrer un mot-clé" className="cs_search_input" />
                        <button className="cs_search_submit_btn">
                            {/* SVG */}
                        </button>
                        </form>
                    </div>
                    <div className="cs_sidebar_widget">
                        <h2 className="cs_sidebar_widget_heading cs_fs_24 cs_semibold">Catégories</h2>
                        <ul className="cs_category_widget">
                        {ServiceCategory.map((item, i) => (                           
                        <li key={i}>
                            <Link href={item.link}>
                                {/* SVG */}
                                <span>{item.title}</span>
                                {/* SVG */}
                            </Link>
                        </li>
                        ))}
                        </ul>
                    </div>
                    <div className="cs_sidebar_widget">
                        <h2 className="cs_sidebar_widget_heading cs_fs_24 cs_semibold">Télécharger</h2>
                        <div>
                        <a href="#" className="cs_btn cs_style_1 w-100 cs_mb_15">
                            <i className="fa-solid fa-file-pdf"></i>
                            <span>TÉLÉCHARGER PDF</span>          
                        </a>
                        <a href="#" className="cs_btn cs_style_1 cs_color_2 w-100">
                            <i className="fa-solid fa-file"></i>
                            <span>TÉLÉCHARGER DOC</span>                
                        </a>
                        </div>
                    </div>
                    <div className="cs_sidebar_widget">
                        <Form></Form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
            </section>           

        </div>
    );
};

export default ServiceDetails;
