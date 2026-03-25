import React from 'react';
import BreadCumb from '../../../../template/src/app/Components/Common/BreadCumb';
import { Suspense } from 'react';
import data from '../../../../template/src/app/Data/service2.json';
import ServiceDetailsClient from './ServiceDetailsClient';
/**
 * example data structure for service details page: 
 * 
 * [
 *  {
 *    "slug": "vente",
 *    "SubTitle": "Vente de systèmes de confort",
 *    "title": "Conseils et produits adaptés à vos besoins",
 *    "desc": "Procurez-vous les meilleurs produits de grands fabricants (Direct-air, Tosot, Gree, Convectair, Franklin, ACD, etc.) pour le chauffage, la climatisation et la qualité de l’air. Nos experts vous guident pour trouver la solution idéale.",
 *    "img": "/assets/img/service_details_vente.png",
 *    "iconName": "FaTools",
 *    "Features": [
 *     "Climatiseurs muraux et centraux",
 *     "Thermopompes murales et centrales",
 *     "Fournaises électriques",
 *     "Échangeurs d’air",
 *     "Humidificateurs et déshumidificateurs",
 *     "Systèmes de filtration"
 *   ]
 *  }, 
 *  // ... etc
 * ]
 */
export type ServiceDetailsType = {
  slug: string;
  SubTitle: string;
  title: string;
  desc: string;
  img: string;
  iconName: string;
  Features: string[];
};

/**
 * example data structure for accordion content:
 * [
  {
    "title": "Que dois-je faire en cas d'urgence électrique ?",
    "desc": "Les signes indiquant que vous pourriez avoir besoin de refaire le câblage de votre maison incluent des problèmes électriques fréquents, tels que des fusibles qui sautent ou des disjoncteurs qui se déclenchent, des types de câblage obsolètes, des prises décolorées ou une odeur de brûlé près des prises ou des interrupteurs."
  },
  {
    "title": "Quels sont les signes indiquant que je dois refaire le câblage de ma maison ?",
    "desc": "Les signes indiquant que vous pourriez avoir besoin de refaire le câblage de votre maison incluent des problèmes électriques fréquents, tels que des fusibles qui sautent ou des disjoncteurs qui se déclenchent, des types de câblage obsolètes, des prises décolorées ou une odeur de brûlé près des prises ou des interrupteurs."
  },
  {
    "title": "Que dois-je faire en cas d'urgence électrique ?",
    "desc": "Les signes indiquant que vous pourriez avoir besoin de refaire le câblage de votre maison incluent des problèmes électriques fréquents, tels que des fusibles qui sautent ou des disjoncteurs qui se déclenchent, des types de câblage obsolètes, des prises décolorées ou une odeur de brûlé près des prises ou des interrupteurs."
  }
]

 */
export type AccordionItem = {
  title: string;
  desc: string;
};


// For static params (if needed by Next.js)
export function generateStaticParams() {
  return data.map((service: ServiceDetailsType) => ({
    slug: service.slug,
  }));
}








async function Content({ slug }: { slug: string }) {
  const service = data.find((service: ServiceDetailsType) => service.slug === slug);
  if (!service) {
    return <div>Service non trouvé</div>;
  }
  return (
    <div className="service-details-page">
      <BreadCumb Title={service.SubTitle} />
      <ServiceDetailsClient service={service} />
    </div>
  );
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Content slug={slug} />
    </Suspense>
  );
}

