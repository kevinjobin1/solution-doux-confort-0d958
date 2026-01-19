import Image from "next/image";

const ProjectDetails = () => {
    return (
        <div className="project-details">
            <section>
                <div className="cs_height_110 cs_height_lg_75"></div>
                <div className="container">
                    <div className="cs_project_details">
                    <div className="row cs_mb_45 cs_reverse_col cs_gap_y_50">
                        <div className="col-xl-9 col-lg-8">
                        <div className="cs_pr_30">
                            <h2 className="cs_fs_48 cs_semibold cs_mb_22">
                                Installation de climatisation résidentielle
                            </h2>
                                <p>Les unités à haut rendement peuvent réduire considérablement la consommation d'énergie, diminuer les factures d'électricité, offrir un meilleur refroidissement et avoir une empreinte environnementale plus faible. Consultation professionnelle,<br/><br/>
                                Services de réparation complets pour tous types d'unités de climatisation. Des réparations mineures aux révisions majeures, nos techniciens sont équipés pour résoudre tout problème : tests de diagnostic, réparation ou remplacement de composants, rééquilibrage du système et optimisation des performances.<br/><br/>
                                Il est recommandé d'entretenir votre climatiseur au moins une fois par an pour garantir son efficacité et son bon fonctionnement. Remplacer les filtres, garder l'unité extérieure propre et sceller les fuites dans votre maison peuvent améliorer l'efficacité. Une évaluation par une équipe professionnelle est recommandée.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                        <div className="cs_project_info_card">
                            <h2 className="cs_sidebar_widget_heading cs_fs_24 cs_semibold">Catégories</h2>
                            <ul className="cs_mp_0">
                            <li>
                                <p className="cs_fs_14 mb-0">Clients :</p>
                                <h3 className="mb-0 cs_fs_18 cs_medium">Marvin McKinney</h3>
                            </li>
                            <li>
                                <p className="cs_fs_14 mb-0">Catégorie :</p>
                                <h3 className="mb-0 cs_fs_18 cs_medium">Remplacement de climatisation</h3>
                            </li>
                            <li>
                                <p className="cs_fs_14 mb-0">Date :</p>
                                <h3 className="mb-0 cs_fs_18 cs_medium">12 mai 2024</h3>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="cs_project_details_in">
                        <div className="row">
                        <div className="col-md-6">
                        <Image src="/assets/img/realisation-1_400x533.jpg" alt="img" width={636} height={481}   />
                        </div>
                        <div className="col-md-6">
                        <Image src="/assets/img/realisation-2_400x533.jpg" alt="img" width={636} height={481}   />
                        </div>
                        </div>
                        <h3>Défis du projet</h3>
                        <p>Nos techniciens experts évalueront votre espace et recommanderont la meilleure unité de climatisation selon vos besoins. Nous prenons en charge l'ensemble du processus d'installation, assurant le bon emplacement, le câblage et la configuration pour des performances optimales.</p>
                        <ol>
                        <li>L'entretien régulier est essentiel pour la longévité et l'efficacité de votre climatiseur. Notre service comprend une inspection approfondie, le nettoyage, la lubrification, le remplacement des filtres et des tests de performance pour maintenir votre système.</li>
                        <li>Services de réparation complets pour les unités de climatisation défectueuses, traitant des problèmes tels que les fuites de réfrigérant, les compresseurs défectueux et les problèmes électriques. Installation professionnelle de nouveaux systèmes de climatisation.</li>
                        </ol>
                        <div className="row">
                        <div className="col-md-4">
                            <Image src="/assets/img/realisation-3_400x533.jpg" alt="img" width={416} height={504}   />
                        </div>
                        <div className="col-md-4">
                            <Image src="/assets/img/realisation-4_400x533.jpg" alt="img" width={416} height={504}   />
                        </div>
                        <div className="col-md-4">
                            <Image src="/assets/img/realisation-5_400x533.jpg" alt="img" width={416} height={504}   />
                        </div>
                        </div>
                        <h3>Résultat final</h3>
                        <p>
                        Installation complète du système, connexion des conduits, intégration du thermostat et test approfondi pour garantir le bon fonctionnement et une efficacité maximale pendant les mois les plus chauds. Entretien régulier.<br/>
                        Remplacement des filtres, nettoyage des serpentins, lubrification des pièces mobiles, calibration du système et inspection complète. Un entretien approfondi conçu pour améliorer la performance de votre climatiseur et garantir son efficacité maximale pendant les périodes de chaleur.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80"></div>
                </section>            
        </div>
    );
};

export default ProjectDetails;
