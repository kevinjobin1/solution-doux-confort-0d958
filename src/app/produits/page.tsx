import React from 'react';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';
import SectionTitle from '../../../template/src/app/Components/Common/SectionTitle';

const ProduitsPage = () => {
    return (
        <div className='produits-page'>
            <BreadCumb Title="Nos produits" />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">

                        {/* Thermopompe murale */}
                        <div id="thermopompe-murale" className="cs_mb_50 pt-5">
                            <SectionTitle Title="Thermopompe murale" SubTitle="Contrôle efficace et économique" />
                            <div className="cs_height_25"></div>
                            <h4 className="cs_fs_24 cs_mb_15 cs_semibold">C'est quoi une thermopompe murale ?</h4>
                            <p className="cs_fs_18 mb-4">La thermopompe murale est un appareil qui permet de chauffer et de climatiser une maison grâce au principe de transfert de chaleur. En effet, la thermopompe est une machine qui fait circuler l'air entre l'intérieur et l'extérieur de la maison pour soit la refroidir, soit la réchauffer.</p>
                            <p className="cs_fs_18 mb-4">Elle est généralement utilisée lorsque vous n'avez pas de système central. C'est une façon efficace et économique de contrôler la température de votre habitation.</p>
                            <p className="cs_fs_18 mb-4">Nous avons une vaste sélection de thermopompes murales fabriquées selon les normes de qualité canadiennes élevées, ce qui nous permet de fournir au marché des produits à fiabilité supérieures qui possèdent l'une des garanties les plus avantageuses de l'industrie.</p>
                            <p className="cs_fs_18">Il est aussi possible pour un moindre coût de vous procurer un climatiseur mural qui a la même apparence qu'une thermopompe murale mais contrairement à cette dernière qui peut chauffer l'air, celle-ci le refroidit uniquement.</p>
                        </div>

                        {/* Thermopompe centrale */}
                        <div id="thermopompe-centrale" className="cs_mb_50 pt-5">
                            <SectionTitle Title="Thermopompe centrale" SubTitle="Confort toute l'année" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18 mb-4">Bien que ce soit un achat généralement envisagé au début de la saison estivale, il est possible d’investir dans une thermopompe toute l’année. Cet appareil possède plusieurs qualités qui en font un meilleur choix par rapport à un climatiseur, peu importe que vous optiez pour une thermopompe centrale ou murale.</p>
                            
                            <h4 className="cs_fs_24 cs_mb_15 cs_semibold mt-4">Mieux qu’un climatiseur</h4>
                            <p className="cs_fs_18 mb-4">Le principal avantage d’une thermopompe est probablement sa capacité à fonctionner toute l’année. En effet, alors qu’un climatiseur ne sert que deux à trois mois par année pour rafraîchir la maison, la thermopompe centrale peut être utilisée toute l’année. En plus d’offrir la fonction de climatisation, ce type de système peut également servir de chauffage en hiver. Nous offrons des appareils de grande qualité qui peuvent même fonctionner jusqu’à -35 °C ! Cela permet donc de réduire votre utilisation du chauffage électrique ou d’un autre type de chauffage.</p>
                            
                            <p className="cs_fs_18 mb-4">Cette technologie est considérée comme plus écoresponsable. Il est donc possible de participer à un programme de subvention grâce à cet achat. Vérifiez auprès de votre conseiller les subventions applicables.</p>

                            <h4 className="cs_fs_24 cs_mb_15 cs_semibold mt-4">D’autres avantages appréciables</h4>
                            <p className="cs_fs_18 mb-4">En raison de son mode de fonctionnement, la thermopompe permet de réaliser des économies d’électricité et de chauffage, ce qui contribue à amortir le coût d’investissement assez rapidement, ce qui n’est pas possible avec un appareil de climatisation. Un climatiseur normal consomme énormément d’énergie pour créer de l’air frais, ce qui augmente donc la facture d’électricité annuelle.</p>
                            <p className="cs_fs_18 mb-4">Par ailleurs, la thermopompe est moins énergivore, les frais de climatisation sont donc inférieurs. De plus, la fonction de chauffage d’appoint réduit aussi les coûts de chauffage en hiver. L’appareil permet donc de réaliser des économies toute l’année !</p>
                            <p className="cs_fs_18 mb-4">Enfin, la thermopompe procure un environnement confortable dans la maison à longueur d’année en la maintenant à une température agréable. En été, le surplus d’humidité est généralement poussé à l’extérieur en même temps que la chaleur, tandis qu’en hiver, l’air n’est pas asséché, ce qui réduit les effets de l’électricité statique. Cette caractéristique élimine donc la nécessité de posséder un humidificateur et un déshumidificateur, deux appareils qui sont très énergivores. Du même coup, la chaleur que procure une thermopompe est beaucoup plus enveloppante que celle d’un autre type de chauffage.</p>
                            <p className="cs_fs_18">Beaucoup de modèles offrent un niveau de bruit tout à fait acceptable. Il suffit donc de visiter votre spécialiste des thermopompes et de la climatisation pour choisir l’appareil qui sera le plus adapté à votre maison.</p>
                        </div>

                        {/* Échangeur d'air */}
                        <div id="echangeur-air" className="cs_mb_50 pt-5">
                            <SectionTitle Title="Échangeur d'air (et récupérateur de chaleur)" SubTitle="Renouvelez votre air intérieur" />
                            <div className="cs_height_25"></div>
                            <h4 className="cs_fs_24 cs_mb_15 cs_semibold">À quoi sert un échangeur d'air ?</h4>
                            <p className="cs_fs_18 mb-4">Le rôle de l'échangeur d'air est d'apporter de l'air neuf dans votre résidence et d'évacuer l'air vicié vers l'extérieur afin de renouveler l'air intérieur. Il assure une aération adéquate et élimine l'excès d'humidité, empêchant ainsi la formation de moisissures pouvant occasionner des problèmes de santé. Un échangeur d'air limite également la formation de condensation sur les murs et les fenêtres.</p>
                            <p className="cs_fs_18 mb-4">Cet appareil sert aussi à gérer les excès d'humidité dans l'air. Avec des filtres efficaces, ou en lui greffant un purificateur d'air, il fait une véritable différence sur la qualité de l'air.</p>
                            <p className="cs_fs_18 mb-4">L'utilisation d'un échangeur d'air est maintenant obligatoire dans les constructions neuves, selon le Règlement sur l'efficacité énergétique, car elles sont si bien isolées que cela empêche le renouvellement naturel de l'air, emprisonnant ainsi l'humidité et les polluants à l'intérieur de la maison.</p>
                            <p className="cs_fs_18">Idéalement, l'échangeur d'air doit contrôler le changement d'air dans toutes les pièces de la maison. En particulier pour l'air des chambres, qui sont des pièces fermées où nous passons plusieurs heures consécutives tous les jours.</p>
                        </div>

                        {/* Humidificateur */}
                        <div id="humidificateur" className="cs_mb_50 pt-5">
                            <SectionTitle Title="Humidificateur" SubTitle="Contrôle précis de l'humidité" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18 mb-4">Un humidificateur est un appareil destiné à augmenter le pourcentage d'humidité dans l'air.</p>
                            <p className="cs_fs_18">Il contrôle parfaitement le degré d'humidité désiré de votre habitation. Sachez qu'il existe plusieurs modèles dont certain ont des buses en acier inoxydable avec bouilloire intégrée ce qui permet de dégager une humidité chaude.</p>
                        </div>

                        {/* Déshumidificateur */}
                        <div id="deshumidificateur" className="cs_mb_50 pt-5">
                            <SectionTitle Title="Déshumidificateur" SubTitle="Luttez contre l'humidité excessive" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18 mb-4">Pour vivre dans un environnement sain, il est capital d'avoir une bonne aération du logement tout en évitant la formation de moisissures. Puisque les diverses formes de pollutions impactent déjà notre capital, mieux vaut veiller à la qualité de son air intérieur !</p>
                            <p className="cs_fs_18 mb-4">En effet, les spores sont connues pour altérer la bonne santé respiratoire des personnes sensibles telles que les enfants, les personnes âgées mais aussi les patients souffrant d'une sensibilité au niveau des bronches et des poumons (asthmatiques notamment).</p>
                            <p className="cs_fs_18 mb-4">Le saviez-vous ? Les champignons peuvent aussi avoir un impact sur la concentration, les maux de tête ou encore la fatigue.</p>
                            <p className="cs_fs_18 mb-4">Les experts recommandent d'utiliser ces appareils qui permettent de réguler le taux d'humidité dans l'air dès 60% d'humidité.</p>
                            <p className="cs_fs_18">Le déshumidificateur est un appareil efficace puisqu'il permet de lutter contre un air trop chargé en eau pouvant entraîner des problèmes respiratoires et un phénomène de moisissures.</p>
                        </div>

                        {/* Filtration */}
                        <div id="filtration" className="cs_mb_50 pt-5">
                            <SectionTitle Title="Filtration" SubTitle="Filtrez les polluants invisibles" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18 mb-4">Nous offrons plusieurs types de filtration allant du filtre standard électrostatique à un filtre plus performant EPA.</p>
                            <p className="cs_fs_18 mb-4">Un filtre HEPA est un filtre à air à haute efficacité, on utilise également l'expression « filtre THE » (signifiant « très haute efficacité »).</p>
                            <p className="cs_fs_18 mb-4">Ne laissez pas les polluants invisibles de l'air intérieur dégrader votre maison et nuire à la santé de votre famille :</p>
                            <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 mb-4">
                                <li>Squames animales, odeurs de cuisson et particules de fumée</li>
                                <li>Poussière, spores de moisissure et virus</li>
                                <li>Acariens</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProduitsPage;
