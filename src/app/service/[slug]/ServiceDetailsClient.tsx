"use client";
import React, { useEffect, useRef, useState } from "react";
import dataAccordion from "../../../../template/src/app/Data/accordion.json";
import Link from "next/link";
import Image from "next/image";
import Form from "../../../../template/src/app/Components/Form/Form";
import type { ServiceDetailsType, AccordionItem } from "./page";

type ServiceDetailsProps = {
  service: ServiceDetailsType;
};

const ServiceDetailsClient: React.FC<ServiceDetailsProps> = ({ service }) => {
  const ServiceCategory = [
    { title: "Entretien BreezeCheck", link: "/service/service-details" },
    { title: "Nettoyage ChillMax", link: "/service/service-details" },
    { title: "Inspection CoolFlow", link: "/service/service-details" },
    { title: "Nettoyage de conduits FrostWave", link: "/service/service-details" },
    { title: "Installation CoolPro", link: "/service/service-details" },
    { title: "Services RapidRepair", link: "/service/service-details" },
    { title: "Dépannage d'urgence CoolFix", link: "/service/service-details" },
  ];

  const accordionContentRef = useRef<HTMLDivElement | null>(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index: number) => {
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
    <div className="service-details">
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_60">
            <div className="col-lg-8">
              <div className="cs_pr_30">
                <div className="cs_service_details">
                  <Image src={service.img} alt={service.title} width={746} height={427} objectFit="contain"  objectPosition="center"/>
                  <h2 className="cs_fs_48 cs_mb_20">{service.title}</h2>
                  <p className="cs_mb_25">{service.desc}</p>
                  <h3 className="cs_fs_30 cs_mb_15">Caractéristiques</h3>
                  <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
                    {service.Features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="cs_accordians cs_style_1">
                    {dataAccordion.map((item: AccordionItem, index: number) => (
                      <div key={index} className={`cs_accordian ${index === openItemIndex ? "active" : ""}`}> 
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
                    <button className="cs_search_submit_btn" aria-label="Rechercher">
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
                          <span>{item.title}</span>
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
                  <Form />
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

export default ServiceDetailsClient;