
import Image from "next/image";

const TeamDetails = () => {
    return (
        <div className="team-details">
            <section>
                <div className="cs_height_120 cs_height_lg_80"></div>
                <div className="cs_team_member_details">
                    <div className="container">
                    <div className="row align-items-center cs_gap_y_30">
                        <div className="col-lg-6">
                        <div className="cs_team_member_thumb">
                            <Image src="/assets/img/team_member_details_1.jpg" alt="img" width={556} height={461}   />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <h2 className="cs_fs_48 cs_semibold cs_mb_8">Danny Doucet</h2>
                        <p className="cs_member_designation cs_accent_color cs_mb_30">Propriétaire et fondateur</p>
                        <div className="cs_social_btns cs_style_1 cs_type_1 cs_mb_35">
                            <a href="#" className="cs_social_btn cs_center">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.08398 7.9375H5.17969V13.625H2.64062V7.9375H0.558594V5.60156H2.64062V3.79883C2.64062 1.76758 3.85938 0.625 5.71289 0.625C6.60156 0.625 7.54102 0.802734 7.54102 0.802734V2.80859H6.5C5.48438 2.80859 5.17969 3.41797 5.17969 4.07812V5.60156H7.43945L7.08398 7.9375Z" fill="#010F34"/>
                                      </svg>
                            </a>
                            <a href="#" className="cs_social_btn cs_center">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.53906 12H0.177734V4.4082H2.53906V12ZM1.3457 3.39258C0.609375 3.39258 0 2.75781 0 1.99609C0 0.955078 1.11719 0.294922 2.03125 0.828125C2.46289 1.05664 2.7168 1.51367 2.7168 1.99609C2.7168 2.75781 2.10742 3.39258 1.3457 3.39258ZM11.3496 12H9.01367V8.31836C9.01367 7.42969 8.98828 6.3125 7.76953 6.3125C6.55078 6.3125 6.37305 7.25195 6.37305 8.24219V12H4.01172V4.4082H6.27148V5.44922H6.29688C6.62695 4.86523 7.38867 4.23047 8.53125 4.23047C10.918 4.23047 11.375 5.80469 11.375 7.83594V12H11.3496Z" fill="#010F34"/>
                                      </svg>
                            </a>
                            <a href="#" className="cs_social_btn cs_center">
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.6543 3.48438C11.6543 3.61133 11.6543 3.71289 11.6543 3.83984C11.6543 7.36914 8.98828 11.4062 4.08789 11.4062C2.56445 11.4062 1.16797 10.9746 0 10.2129C0.203125 10.2383 0.40625 10.2637 0.634766 10.2637C1.87891 10.2637 3.02148 9.83203 3.93555 9.12109C2.76758 9.0957 1.77734 8.33398 1.44727 7.26758C1.625 7.29297 1.77734 7.31836 1.95508 7.31836C2.18359 7.31836 2.4375 7.26758 2.64062 7.2168C1.42188 6.96289 0.507812 5.89648 0.507812 4.60156V4.57617C0.863281 4.7793 1.29492 4.88086 1.72656 4.90625C0.990234 4.42383 0.533203 3.61133 0.533203 2.69727C0.533203 2.18945 0.660156 1.73242 0.888672 1.35156C2.20898 2.95117 4.18945 4.01758 6.39844 4.14453C6.34766 3.94141 6.32227 3.73828 6.32227 3.53516C6.32227 2.0625 7.51562 0.869141 8.98828 0.869141C9.75 0.869141 10.4355 1.17383 10.9434 1.70703C11.5273 1.58008 12.1113 1.35156 12.6191 1.04688C12.416 1.68164 12.0098 2.18945 11.4512 2.51953C11.9844 2.46875 12.5176 2.31641 12.9746 2.11328C12.6191 2.64648 12.1621 3.10352 11.6543 3.48438Z" fill="#010F34"/>
                                      </svg>
                            </a>
                            <a href="#" className="cs_social_btn cs_center">
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.3496 2.53516C11.2988 3.65234 10.5371 5.15039 9.03906 7.08008C7.49023 9.08594 6.19531 10.1016 5.10352 10.1016C4.44336 10.1016 3.88477 9.49219 3.42773 8.27344C2.53906 4.97266 2.1582 3.06836 1.42188 3.06836C1.32031 3.06836 1.04102 3.24609 0.533203 3.60156L0 2.91602C1.29492 1.74805 2.53906 0.478516 3.32617 0.402344C4.21484 0.326172 4.77344 0.935547 4.97656 2.23047C5.6875 6.82617 6.01758 7.53711 7.33789 5.42969C7.82031 4.69336 8.07422 4.10938 8.125 3.72852C8.22656 2.56055 7.21094 2.63672 6.5 2.94141C7.05859 1.11328 8.125 0.224609 9.69922 0.275391C10.8672 0.300781 11.4258 1.0625 11.3496 2.53516Z" fill="#010F34"/>
                                        </svg>
                            </a>
                        </div>
                        <p className="cs_mb_25">Danny Doucet est le propriétaire et fondateur de Solution Doux Confort. Avec plus de 20 ans d'expérience dans l'industrie du chauffage, de la ventilation et de la climatisation (CVC), Danny est passionné par la fourniture de solutions de confort écoénergétiques et fiables à ses clients. Sous sa direction, Solution Doux Confort est devenue une entreprise de confiance dans la région, reconnue pour son engagement envers la qualité et le service à la clientèle.</p>
                        <ul className="cs_mp_0 cs_member_info_list">
                            <li>
                            <span className="cs_fs_18 cs_medium cs_heading_font cs_heading_color">Numéro de téléphone:</span>
                            <span>(+270) 555-0117</span>
                            </li>
                            <li>
                            <span className="cs_fs_18 cs_medium cs_heading_font cs_heading_color">Email:</span>
                            <a href="mailto:ddoucet@solutiondouxconfort.com">ddoucet@solutiondouxconfort.com</a>
                            </li>
                            <li>
                            <span className="cs_fs_18 cs_medium cs_heading_font cs_heading_color">Site Web:</span>
                            <a href="http://www.solutiondouxconfort.com">http://www.solutiondouxconfort.com</a>
                            </li>
                            <li>
                            <span className="cs_fs_18 cs_medium cs_heading_font cs_heading_color">Adresse:</span>
                            <span>
                                185 Avenue Saint-Sacrement, Québec, QC G1N 3X4
                            </span>
                            </li>
                            <li>
                            <span className="cs_fs_18 cs_medium cs_heading_font cs_heading_color">Expérience:</span>
                            <span>20 Ans</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="cs_height_72 cs_height_lg_72"></div>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="cs_pr_30">
                            <h3 className="cs_fs_30 cs_semibold cs_mb_25">À propos de moi</h3>
                            <p className="mb-0">Services de consultation professionnelle Évaluation du site, calcul de charge, recommandations de système et estimations détaillées des coûts Réponse rapide, diagnostics sur site, réparations immédiates et vérification de suivi Installation rapide et efficace de nouvelles unités de climatisation <br/><br/>Analyse complète du système, détection des défauts, rapport détaillé et solutions recommandées Calibration de précision pour garantir que votre système de climatisation fonctionne à ses réglages optimaux pour un confort et une efficacité maximaux</p>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <h2 className="cs_fs_30 cs_semibold cs_mb_25">Compétences personnelles</h2>
                        <p className="cs_mb_24">Services de nettoyage approfondis pour éliminer la saleté, la poussière et les débris de votre système de climatisation, améliorant la qualité de l'air et l'efficacité du système.</p>
                        <ul className="cs_progress_list cs_mp_0">
                            <li>
                            <div className="cs_progress_head cs_fs_18 cs_heading_color cs_heading_font">
                                <span>Nettoyage ChillMax</span>
                                <span>80%</span>
                            </div>
                            <div className="cs_progress" data-progress="80">
                                <div className="cs_progress_in cs_accent_bg"></div>
                            </div>
                            </li>
                            <li>
                            <div className="cs_progress_head cs_fs_18 cs_heading_color cs_heading_font">
                                <span>Réparation ArcticBlast</span>
                                <span>76%</span>
                            </div>
                            <div className="cs_progress" data-progress="76">
                                <div className="cs_progress_in cs_accent_bg"></div>
                            </div>
                            </li>
                            <li>
                            <div className="cs_progress_head cs_fs_18 cs_heading_color cs_heading_font">
                                <span>Maintenance FreshFlow</span>
                                <span>92%</span>
                            </div>
                            <div className="cs_progress" data-progress="92">
                                <div className="cs_progress_in cs_accent_bg"></div>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <div className="cs_height_120 cs_height_lg_80"></div>            
        </div>
    );
};

export default TeamDetails;