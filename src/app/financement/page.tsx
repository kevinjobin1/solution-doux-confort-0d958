import React from 'react';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';
import SectionTitle from '../../../template/src/app/Components/Common/SectionTitle';

const FinancementPage = () => {
    return (
        <div className='financement-page'>
            <BreadCumb Title="Financement" />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="cs_mb_50 pt-5 text-center">
                            <SectionTitle Title="Options de financement" SubTitle="Rendez votre projet accessible" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18 mb-5">Il est possible d'obtenir du financement pour tous vos projets de chauffage, ventilation et climatisation grâce à nos partenaires de financement fiables et flexibles. Nous offrons des options de financement abordables pour rendre votre projet plus accessible que jamais. Contactez-nous dès aujourd'hui pour en savoir plus sur nos options de financement et commencez à planifier votre projet de confort résidentiel dès maintenant!</p>
                        </div>
                        
                        <div className="row mt-5">
                            {/* FinanceIt */}
                            <div className="col-md-6 mb-4">
                                <div className="card h-100 shadow-sm border-0 pt-4 pb-4 px-3" style={{backgroundColor: '#f8f9fa'}}>
                                    <div className="card-body text-center d-flex flex-column">
                                        <h3 className="card-title cs_fs_24 cs_semibold cs_mb_20">FinanceIt</h3>
                                        <p className="card-text cs_fs_18 mb-4 flex-grow-1">
                                            "Obtenez une réponse rapide et une approbation instantanée pour votre projet de chauffage, ventilation et climatisation avec FinanceIt. Profitez de paiements flexibles et de taux compétitifs pour rendre votre projet plus abordable que jamais. Contactez-nous dès aujourd'hui pour en savoir plus sur nos options de financement et commencez à planifier votre projet de confort résidentiel dès maintenant!"
                                        </p>
                                        <a href="https://www.financeit.ca/fr/direct/payment-plan/YT0mbD0mcD1OeWREQzdTVnRYOTFQSXRIVEhvdUl3JnE9dHJ1ZSZzPTAmdj0x/apply" 
                                           target="_blank" 
                                           rel="noopener noreferrer" 
                                           className="cs_btn cs_style_1 mx-auto mt-auto">
                                            <span>Faire une demande sur FinanceIt</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* iFinance Canada */}
                            <div className="col-md-6 mb-4">
                                <div className="card h-100 shadow-sm border-0 pt-4 pb-4 px-3" style={{backgroundColor: '#f8f9fa'}}>
                                    <div className="card-body text-center d-flex flex-column">
                                        <h3 className="card-title cs_fs_24 cs_semibold cs_mb_20">iFinance Canada</h3>
                                        <p className="card-text cs_fs_18 mb-4 flex-grow-1">
                                            "Découvrez les options de financement flexibles et abordables pour vos projets de chauffage, ventilation et climatisation avec iFinance Canada. Obtenez une réponse rapide et une approbation instantanée pour rendre votre projet plus accessible que jamais. Contactez-nous dès aujourd'hui pour en savoir plus sur nos options de financement et commencez à planifier votre projet de confort résidentiel dès maintenant!"
                                        </p>
                                        <a href="https://apply.ifinancecanada.com/21768" 
                                           target="_blank" 
                                           rel="noopener noreferrer" 
                                           className="cs_btn cs_style_1 mx-auto mt-auto">
                                            <span>Faire une demande sur iFinance Canada</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancementPage;
