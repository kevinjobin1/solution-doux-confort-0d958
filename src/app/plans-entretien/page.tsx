import React from 'react';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';
import SectionTitle from '../../../template/src/app/Components/Common/SectionTitle';

const PlansEntretienPage = () => {
    return (
        <div className='plans-entretien-page'>
            <BreadCumb Title="Plans d'entretien" />
            
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="cs_mb_50 pt-5">
                            <SectionTitle Title="Thermopompe murale, système central et fournaise" SubTitle="Inspection" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18 mb-4">L'entretien de votre thermopompe comprend les étapes suivantes :</p>
                            <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium mb-5">
                                <li>Prise d’information (vérification du numéro de modèle et du numéro de série de votre appareil)</li>
                                <li>Vérification des pressions du réfrigérant</li>
                                <li>Vérification de l’ampérage du compresseur</li>
                                <li>Prise de mesure du différentiel de température</li>
                                <li>Vérification des filtres</li>
                                <li>Vérification visuelle des composantes, des appareils intérieur et extérieur, évaporateur et condenseur</li>
                                <li>(Si applicable) Vérification des éléments électriques du système central et/ou de la thermopompe central avec manipulateur d’air (fournaise)</li>
                                <li>Remise d’un rapport écrit de l’inspection</li>
                            </ul>
                            
                            <p className="cs_fs_18 mb-4">
                                <strong>*Option de nettoyage de l’appareil :</strong> Le nettoyage comprend le nettoyage en profondeur de l’unité intérieure et extérieure de votre thermopompe, comprenant le nettoyage des filtres de l’évaporateur et du condenseur avec une unité de nettoyage sous pression.
                            </p>

                            <div className="table-responsive mt-5 mb-5 shadow-sm rounded">
                                <table className="table table-bordered table-striped cs_fs_18 text-center align-middle mb-0">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Type / Nombre de têtes</th>
                                            <th>Prix d'inspection</th>
                                            <th>Prix d'inspection avec option de nettoyage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold">1 tête</td>
                                            <td>170 $</td>
                                            <td>215 $</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Centrale</td>
                                            <td>175 $</td>
                                            <td>290 $</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">2 têtes</td>
                                            <td>200 $</td>
                                            <td>350 $</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">3 têtes</td>
                                            <td>230 $</td>
                                            <td>410 $</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">4 têtes</td>
                                            <td>260 $</td>
                                            <td>460 $</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <hr className="my-5" />

                        <div className="cs_mb_50">
                            <SectionTitle Title="Plan de nettoyage de thermopompe" SubTitle="Sans inspection" />
                            <div className="cs_height_25"></div>
                            <p className="cs_fs_18 mb-4">Nous offrons également un plan de nettoyage pour votre thermopompe sans l'inspection complète. Ce service est idéal pour ceux qui souhaitent simplement un nettoyage régulier de leur appareil pour maintenir son efficacité.</p>
                            <p className="cs_fs_18 mb-4">Notre plan de nettoyage comprend le nettoyage en profondeur de l’unité intérieure et extérieure de votre thermopompe, comprenant le nettoyage des filtres de l’évaporateur et du condenseur avec une unité de nettoyage sous pression.</p>
                            
                            <div className="table-responsive mt-5 shadow-sm rounded">
                                <table className="table table-bordered table-striped cs_fs_18 text-center align-middle mb-0 w-75 mx-auto">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Type / Nombre de têtes</th>
                                            <th>Prix du plan de nettoyage (sans inspection)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold">1 tête</td>
                                            <td>230 $</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Centrale</td>
                                            <td>300 $</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">2 têtes</td>
                                            <td>380 $</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">3 têtes</td>
                                            <td>460 $</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">4 têtes</td>
                                            <td>500 $</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlansEntretienPage;
