
import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import Form3 from '../Form/Form3';

const Contact = () => {
    return (
        <div className="contact-page">
            <section>
                <div className="cs_height_120 cs_height_lg_80"></div>
                <div className="container">
                    <div className="row cs_gap_y_50">
                    <div className="col-xxl-6 col-lg-7">
                        <h2 className="cs_fs_48 cs_semibold cs_mb_22">Information pour nous joindre</h2>
                        <p className="cs_mb_30">Besoin d’informations, d’une estimation ou d’une consultation pour un système de chauffage ou de climatisation ? N’hésitez pas à nous contacter pour toute demande d’information sur nos systèmes de chauffage et de climatisation. Un expert-conseil se fera un plaisir de répondre à vos questions.</p>
                        <div className="row cs_gap_y_30 cs_row_gap_30">
                        <ContactCard
                            img="/assets/img/icons/contact_icon_1.svg"
                            Title="Notre Adresse"
                            Content="185 Avenue Saint-Sacrement Québec, QC G1N 3X4"
                        >
                        </ContactCard>
                        <ContactCard
                            img="/assets/img/icons/contact_icon_2.svg"
                            Title="Numéro de téléphone"
                            Content="+1 (418) 554-7569"
                        >
                        </ContactCard>
                        <ContactCard
                            img="/assets/img/icons/contact_icon_3.svg"
                            Title="Adresse e-mail"
                            Content="soumissions@solutiondouxconfort.com <br>"
                        >
                        </ContactCard>
                        <ContactCard
                            img="/assets/img/icons/contact_icon_4.svg"
                            Title="Heures d'ouverture"
                            Content="Lundi au Vendredi <br>9h00 à 16h00"
                        >
                        </ContactCard>                        
                        </div>
                        <div className="cs_height_35 cs_height_lg_35"></div>
                        <h3 className="cs_fs_24 cs_semibold cs_mb_10">Nous suivre sur les réseaux sociaux : </h3>
                        <p className="cs_mb_20">Suivez-nous sur les réseaux sociaux pour rester informé des dernières nouvelles et offres spéciales.</p>
                        <div className="cs_social_btns cs_style_1 cs_type_1">
                        <a href="https://www.facebook.com/SolutionDouxConfort/" target="_blank" className="cs_social_btn cs_center">
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.75391 8.625H5.70312V14.75H2.96875V8.625H0.726562V6.10938H2.96875V4.16797C2.96875 1.98047 4.28125 0.75 6.27734 0.75C7.23438 0.75 8.24609 0.941406 8.24609 0.941406V3.10156H7.125C6.03125 3.10156 5.70312 3.75781 5.70312 4.46875V6.10938H8.13672L7.75391 8.625Z" fill="#010F34"/>
                         </svg>
                        </a>
                        {/* tiktok */}
                        <a href="https://www.tiktok.com/@solution.doux.con"  target="_blank" className="cs_social_btn cs_center">
                           <svg width="15" height="15" fill="#010F34" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>tiktok</title> <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path> </g>
                            </svg>
                        </a> 
                        {/* <a href="#" className="cs_social_btn cs_center">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5508 2.90625C12.5508 3.04297 12.5508 3.15234 12.5508 3.28906C12.5508 7.08984 9.67969 11.4375 4.40234 11.4375C2.76172 11.4375 1.25781 10.9727 0 10.1523C0.21875 10.1797 0.4375 10.207 0.683594 10.207C2.02344 10.207 3.25391 9.74219 4.23828 8.97656C2.98047 8.94922 1.91406 8.12891 1.55859 6.98047C1.75 7.00781 1.91406 7.03516 2.10547 7.03516C2.35156 7.03516 2.625 6.98047 2.84375 6.92578C1.53125 6.65234 0.546875 5.50391 0.546875 4.10938V4.08203C0.929688 4.30078 1.39453 4.41016 1.85938 4.4375C1.06641 3.91797 0.574219 3.04297 0.574219 2.05859C0.574219 1.51172 0.710938 1.01953 0.957031 0.609375C2.37891 2.33203 4.51172 3.48047 6.89062 3.61719C6.83594 3.39844 6.80859 3.17969 6.80859 2.96094C6.80859 1.375 8.09375 0.0898438 9.67969 0.0898438C10.5 0.0898438 11.2383 0.417969 11.7852 0.992188C12.4141 0.855469 13.043 0.609375 13.5898 0.28125C13.3711 0.964844 12.9336 1.51172 12.332 1.86719C12.9062 1.8125 13.4805 1.64844 13.9727 1.42969C13.5898 2.00391 13.0977 2.49609 12.5508 2.90625Z" fill="#010F34"/>
                                </svg>
                        </a>
                        <a href="#" className="cs_social_btn cs_center">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.10938 13H0.566406V4.82422H3.10938V13ZM1.82422 3.73047C1.03125 3.73047 0.375 3.04688 0.375 2.22656C0.375 1.10547 1.57812 0.394531 2.5625 0.96875C3.02734 1.21484 3.30078 1.70703 3.30078 2.22656C3.30078 3.04688 2.64453 3.73047 1.82422 3.73047ZM12.5977 13H10.082V9.03516C10.082 8.07812 10.0547 6.875 8.74219 6.875C7.42969 6.875 7.23828 7.88672 7.23828 8.95312V13H4.69531V4.82422H7.12891V5.94531H7.15625C7.51172 5.31641 8.33203 4.63281 9.5625 4.63281C12.1328 4.63281 12.625 6.32812 12.625 8.51562V13H12.5977Z" fill="#010F34"/>
                                </svg>
                        </a>
                        <a href="#" className="cs_social_btn cs_center">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.40625C9.96875 3.40625 11.5938 5.03125 11.5938 7C11.5938 9 9.96875 10.5938 8 10.5938C6 10.5938 4.40625 9 4.40625 7C4.40625 5.03125 6 3.40625 8 3.40625ZM8 9.34375C9.28125 9.34375 10.3125 8.3125 10.3125 7C10.3125 5.71875 9.28125 4.6875 8 4.6875C6.6875 4.6875 5.65625 5.71875 5.65625 7C5.65625 8.3125 6.71875 9.34375 8 9.34375ZM12.5625 3.28125C12.5625 2.8125 12.1875 2.4375 11.7188 2.4375C11.25 2.4375 10.875 2.8125 10.875 3.28125C10.875 3.75 11.25 4.125 11.7188 4.125C12.1875 4.125 12.5625 3.75 12.5625 3.28125ZM14.9375 4.125C15 5.28125 15 8.75 14.9375 9.90625C14.875 11.0312 14.625 12 13.8125 12.8438C13 13.6562 12 13.9062 10.875 13.9688C9.71875 14.0312 6.25 14.0312 5.09375 13.9688C3.96875 13.9062 3 13.6562 2.15625 12.8438C1.34375 12 1.09375 11.0312 1.03125 9.90625C0.96875 8.75 0.96875 5.28125 1.03125 4.125C1.09375 3 1.34375 2 2.15625 1.1875C3 0.375 3.96875 0.125 5.09375 0.0625C6.25 0 9.71875 0 10.875 0.0625C12 0.125 13 0.375 13.8125 1.1875C14.625 2 14.875 3 14.9375 4.125ZM13.4375 11.125C13.8125 10.2188 13.7188 8.03125 13.7188 7C13.7188 6 13.8125 3.8125 13.4375 2.875C13.1875 2.28125 12.7188 1.78125 12.125 1.5625C11.1875 1.1875 9 1.28125 8 1.28125C6.96875 1.28125 4.78125 1.1875 3.875 1.5625C3.25 1.8125 2.78125 2.28125 2.53125 2.875C2.15625 3.8125 2.25 6 2.25 7C2.25 8.03125 2.15625 10.2188 2.53125 11.125C2.78125 11.75 3.25 12.2188 3.875 12.4688C4.78125 12.8438 6.96875 12.75 8 12.75C9 12.75 11.1875 12.8438 12.125 12.4688C12.7188 12.2188 13.2188 11.75 13.4375 11.125Z" fill="#010F34"/>
                        </svg>
                        </a> */}
                        </div>
                    </div>
                    <div className="col-xxl-5 offset-xxl-1 col-lg-5">
                        <Form3></Form3>
                    </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80"/>
                </section>
                <div className="cs_map">
                   <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.956001514729!2d-71.26958114560367!3d46.8051725969098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb899c33f78ddc3%3A0x3b6f7042f596f69d!2sSolution%20Doux%20Confort%20inc!5e0!3m2!1sfr!2sca!4v1768775863852!5m2!1sfr!2sca" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                   </div>

        </div>
    );
};

export default Contact;