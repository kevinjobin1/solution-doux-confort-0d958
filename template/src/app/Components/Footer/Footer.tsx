"use client"
import Link from "next/link";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/legacy/image";
import CookieConsentComponent from "../CookieConsent/CookieConsent";
import data from "../../Data/service2.json";
const Footer = () => {
    // const Services = [
    //     'Thermopompes',
    //     'Ventillation',
    //     'Échangeurs d\'air',
    //     'Climatisation résidentielle',
    //     'Climatisation commerciale',
    //     'Chauffage résidentiel',
    //     'Chauffage commercial',
    //     'Vente de pièces et installation',
    //     'Réparations, entretiens et maintenance',
    //     'Services d\'urgence 24/7'
    //   ];
    const Services = data;

    const WorkingHours = [
        {day:'Lundi', time:'9h00 - 16h00'},
        {day:'Mardi', time:'9h00 - 16h00'},
        {day:'Mercredi', time:'9h00 - 16h00'},
        {day:'Jeudi', time:'9h00 - 16h00'},
        {day:'Vendredi', time:'9h00 - 16h00'},
        {day:'Samedi', time:'Fermé'},
        {day:'Dimanche', time:'Fermé'},
      ];

      const QuickLinks = [
        {title:'Accueil', link:'/'},
        {title:'À propos', link:'/about'},
        {title:'Services', link:'/service'},
        {title:'Blog', link:'/blog'},
        {title:'Contact', link:'/contact'}
      ];      

      useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <footer className="cs_footer cs_style_1">
          <div className="cs_footer_top">
            <div className="container">
              <div className="cs_footer_top_in">
                <div className="cs_social_btns cs_style_1">
                  <Link href="https://www.facebook.com/SolutionDouxConfort/" target="_blank" className="cs_social_btn cs_center">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.71875 9H6.375V16H3.25V9H0.6875V6.125H3.25V3.90625C3.25 1.40625 4.75 0 7.03125 0C8.125 0 9.28125 0.21875 9.28125 0.21875V2.6875H8C6.75 2.6875 6.375 3.4375 6.375 4.25V6.125H9.15625L8.71875 9Z" fill="white"/>
                  </svg>
                  </Link>
                   <Link href="https://www.tiktok.com/@solution.doux.con" target="_blank" className="cs_social_btn cs_center">
                  <svg width="18" height="18" fill="white" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>tiktok</title> <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path> </g>
                        </svg>
                  </Link>
                  <Link href="https://www.trouverunentrepreneur.com/profile/quebec/solution-doux-confort-inc" target="_blank" className="cs_social_btn cs_center">
                    <svg width={26} height={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 126 76" data-name="graphic-only" aria-hidden="true"><path fill="currentColor" d="m21 60.799 21 15.2V45.6L21 30.4 0 45.598V76zM63 30.402l21 15.196V15.201L63 0 42 15.2v30.398zM105 60.799l21 15.2V45.6L105 30.4 84 45.598V76z" ></path></svg>
                    </Link>
                  {/* <Link href="#" className="cs_social_btn cs_center">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5508 2.90625C12.5508 3.04297 12.5508 3.15234 12.5508 3.28906C12.5508 7.08984 9.67969 11.4375 4.40234 11.4375C2.76172 11.4375 1.25781 10.9727 0 10.1523C0.21875 10.1797 0.4375 10.207 0.683594 10.207C2.02344 10.207 3.25391 9.74219 4.23828 8.97656C2.98047 8.94922 1.91406 8.12891 1.55859 6.98047C1.75 7.00781 1.91406 7.03516 2.10547 7.03516C2.35156 7.03516 2.625 6.98047 2.84375 6.92578C1.53125 6.65234 0.546875 5.50391 0.546875 4.10938V4.08203C0.929688 4.30078 1.39453 4.41016 1.85938 4.4375C1.06641 3.91797 0.574219 3.04297 0.574219 2.05859C0.574219 1.51172 0.710938 1.01953 0.957031 0.609375C2.37891 2.33203 4.51172 3.48047 6.89062 3.61719C6.83594 3.39844 6.80859 3.17969 6.80859 2.96094C6.80859 1.375 8.09375 0.0898438 9.67969 0.0898438C10.5 0.0898438 11.2383 0.417969 11.7852 0.992188C12.4141 0.855469 13.043 0.609375 13.5898 0.28125C13.3711 0.964844 12.9336 1.51172 12.332 1.86719C12.9062 1.8125 13.4805 1.64844 13.9727 1.42969C13.5898 2.00391 13.0977 2.49609 12.5508 2.90625Z" fill="white"/>
                    </svg>
                    </Link>
                    <Link href="#" className="cs_social_btn cs_center">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.10938 13H0.566406V4.82422H3.10938V13ZM1.82422 3.73047C1.03125 3.73047 0.375 3.04688 0.375 2.22656C0.375 1.10547 1.57812 0.394531 2.5625 0.96875C3.02734 1.21484 3.30078 1.70703 3.30078 2.22656C3.30078 3.04688 2.64453 3.73047 1.82422 3.73047ZM12.5977 13H10.082V9.03516C10.082 8.07812 10.0547 6.875 8.74219 6.875C7.42969 6.875 7.23828 7.88672 7.23828 8.95312V13H4.69531V4.82422H7.12891V5.94531H7.15625C7.51172 5.31641 8.33203 4.63281 9.5625 4.63281C12.1328 4.63281 12.625 6.32812 12.625 8.51562V13H12.5977Z" fill="white"/>
                    </svg>
                    </Link> */}
                  
                </div>
                {/* <div className="cs_footer_logo wow zoomIn" data-wow-duration="0.9s" data-wow-delay="0.25s">
                  <Link href="/">
                    <Image src="/assets/img/icons/logo.svg" alt="Logo" width={139} height={111}   />
                  </Link> 
                </div>  */}
                <div className="cs_footer_contact_card">
                  <div className="cs_footer_contact_card_icon cs_white_bg cs_center">
                    <Image src="/assets/img/icons/call.svg" alt="img" width={25} height={25}   />
                  </div>
                  <div>
                    <p className="cs_white_color cs_fs_14 mb-0">Contactez-nous</p>
                    <h3 className="mb-0 cs_fs_24 cs_semibold cs_white_color">+1 (418) 554-7569</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_main_footer cs_bg_filed cs_primary_bg cs_white_color" data-background="/assets/img/footer_bg_1.jpg">
            <div className="container">
              <div className="cs_footer_row cs_type_1">
                <div className="cs_footer_col">
                  <div className="cs_footer_widget">
                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Nos Services</h2>
                    <div className="cs_footer_widget_seperator">
                      <span className="cs_accent_bg"></span>
                      <span className="cs_white_bg"></span>
                      <span className="cs_white_bg"></span>
                    </div>
                    <ul className="cs_footer_menu_2">
                    {Services.map((item, i) => ( 
                      <li key={i}><Link className="text-decoration-none cs_white_color" href={`/service/${item.slug}`}>{item.name}</Link></li>
                    ))}
                    </ul>
                  </div>
                </div>
                <div className="cs_footer_col">
                  <div className="cs_footer_widget">
                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Heures d&apos;ouverture :</h2>
                    <div className="cs_footer_widget_seperator">
                      <span className="cs_accent_bg"></span>
                      <span className="cs_white_bg"></span>
                      <span className="cs_white_bg"></span>
                    </div>
                    <ul className="cs_working_hours">
                    {WorkingHours.map((item, i) => (                        
                      <li key={i}>
                        <span className="fw-bold">{item.day}</span>
                        <span>{item.time}</span>
                      </li>
                     ))}
                    </ul>
                  </div>
                </div>
                <div className="cs_footer_col">
                  <div className="cs_footer_widget">
                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Liens rapides</h2>
                    <div className="cs_footer_widget_seperator">
                      <span className="cs_accent_bg"></span>
                      <span className="cs_white_bg"></span>
                      <span className="cs_white_bg"></span>
                    </div>
                    <ul className="cs_footer_menu_2">
                    {QuickLinks.map((item, i) => ( 
                      <li key={i}><Link className="text-decoration-none cs_white_color" href={item.link}>{item.title} </Link></li>
                    ))}
                    </ul>
                  </div>
                </div>
                <div className="cs_footer_col">
                  <div className="cs_footer_widget">
                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Articles récents</h2>
                    <div className="cs_footer_widget_seperator">
                      <span className="cs_accent_bg"></span>
                      <span className="cs_white_bg"></span>
                      <span className="cs_white_bg"></span>
                    </div>
                    <ul className="cs_recent_post_widget">
                      <li>
                        <div className="cs_recent_post">
                        <Link href="/blog/blog-details" className="cs_recent_post_thumb">
                            <Image src="/assets/img/recent_post_1.jpg" alt="img" width={86} height={86}   />
                          </Link>
                          <div className="cs_recent_post_right">
                            <p className="cs_recent_posted_by cs_fs_14">
                            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.9124 1.625V2.5H8.4124V1.625C8.4124 1.36979 8.49443 1.16016 8.65849 0.996094C8.82255 0.832031 9.03219 0.75 9.2874 0.75C9.54261 0.75 9.75224 0.832031 9.9163 0.996094C10.0804 1.16016 10.1624 1.36979 10.1624 1.625V2.5H11.4749C11.8395 2.51823 12.1494 2.64583 12.4046 2.88281C12.6416 3.13802 12.7692 3.44792 12.7874 3.8125V5.125H0.537398V3.8125C0.555627 3.44792 0.683231 3.13802 0.92021 2.88281C1.17542 2.64583 1.48531 2.51823 1.8499 2.5H3.1624V1.625C3.1624 1.36979 3.24443 1.16016 3.40849 0.996094C3.57255 0.832031 3.78219 0.75 4.0374 0.75C4.29261 0.75 4.50224 0.832031 4.6663 0.996094C4.83037 1.16016 4.9124 1.36979 4.9124 1.625ZM0.537398 6H12.7874V13.4375C12.7692 13.8021 12.6416 14.112 12.4046 14.3672C12.1494 14.6042 11.8395 14.7318 11.4749 14.75H1.8499C1.48531 14.7318 1.17542 14.6042 0.92021 14.3672C0.683231 14.112 0.555627 13.8021 0.537398 13.4375V6ZM2.2874 9.0625C2.30563 9.33594 2.45146 9.48177 2.7249 9.5H3.5999C3.87334 9.48177 4.01917 9.33594 4.0374 9.0625V8.1875C4.01917 7.91406 3.87334 7.76823 3.5999 7.75H2.7249C2.45146 7.76823 2.30563 7.91406 2.2874 8.1875V9.0625ZM5.7874 9.0625C5.80563 9.33594 5.95146 9.48177 6.2249 9.5H7.0999C7.37334 9.48177 7.51917 9.33594 7.5374 9.0625V8.1875C7.51917 7.91406 7.37334 7.76823 7.0999 7.75H6.2249C5.95146 7.76823 5.80563 7.91406 5.7874 8.1875V9.0625ZM9.7249 7.75C9.45146 7.76823 9.30563 7.91406 9.2874 8.1875V9.0625C9.30563 9.33594 9.45146 9.48177 9.7249 9.5H10.5999C10.8733 9.48177 11.0192 9.33594 11.0374 9.0625V8.1875C11.0192 7.91406 10.8733 7.76823 10.5999 7.75H9.7249ZM2.2874 12.5625C2.30563 12.8359 2.45146 12.9818 2.7249 13H3.5999C3.87334 12.9818 4.01917 12.8359 4.0374 12.5625V11.6875C4.01917 11.4141 3.87334 11.2682 3.5999 11.25H2.7249C2.45146 11.2682 2.30563 11.4141 2.2874 11.6875V12.5625ZM6.2249 11.25C5.95146 11.2682 5.80563 11.4141 5.7874 11.6875V12.5625C5.80563 12.8359 5.95146 12.9818 6.2249 13H7.0999C7.37334 12.9818 7.51917 12.8359 7.5374 12.5625V11.6875C7.51917 11.4141 7.37334 11.2682 7.0999 11.25H6.2249ZM9.2874 12.5625C9.30563 12.8359 9.45146 12.9818 9.7249 13H10.5999C10.8733 12.9818 11.0192 12.8359 11.0374 12.5625V11.6875C11.0192 11.4141 10.8733 11.2682 10.5999 11.25H9.7249C9.45146 11.2682 9.30563 11.4141 9.2874 11.6875V12.5625Z" fill="white"/>
                              </svg>
                                12 Janvier 2026
                            </p>
                            <h3 className="cs_white_color cs_fs_18 cs_medium mb-0">
                            <Link href="/blog/blog-details">
                              Comment choisir le système CVC adapté à votre maison
                            </Link>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="cs_recent_post">
                          <Link href="/blog/blog-details" className="cs_recent_post_thumb">
                            <Image src="/assets/img/recent_post_2.jpg" alt="img" width={86} height={86}   />
                          </Link>
                          <div className="cs_recent_post_right">
                            <p className="cs_recent_posted_by cs_fs_14">
                            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.9124 1.625V2.5H8.4124V1.625C8.4124 1.36979 8.49443 1.16016 8.65849 0.996094C8.82255 0.832031 9.03219 0.75 9.2874 0.75C9.54261 0.75 9.75224 0.832031 9.9163 0.996094C10.0804 1.16016 10.1624 1.36979 10.1624 1.625V2.5H11.4749C11.8395 2.51823 12.1494 2.64583 12.4046 2.88281C12.6416 3.13802 12.7692 3.44792 12.7874 3.8125V5.125H0.537398V3.8125C0.555627 3.44792 0.683231 3.13802 0.92021 2.88281C1.17542 2.64583 1.48531 2.51823 1.8499 2.5H3.1624V1.625C3.1624 1.36979 3.24443 1.16016 3.40849 0.996094C3.57255 0.832031 3.78219 0.75 4.0374 0.75C4.29261 0.75 4.50224 0.832031 4.6663 0.996094C4.83037 1.16016 4.9124 1.36979 4.9124 1.625ZM0.537398 6H12.7874V13.4375C12.7692 13.8021 12.6416 14.112 12.4046 14.3672C12.1494 14.6042 11.8395 14.7318 11.4749 14.75H1.8499C1.48531 14.7318 1.17542 14.6042 0.92021 14.3672C0.683231 14.112 0.555627 13.8021 0.537398 13.4375V6ZM2.2874 9.0625C2.30563 9.33594 2.45146 9.48177 2.7249 9.5H3.5999C3.87334 9.48177 4.01917 9.33594 4.0374 9.0625V8.1875C4.01917 7.91406 3.87334 7.76823 3.5999 7.75H2.7249C2.45146 7.76823 2.30563 7.91406 2.2874 8.1875V9.0625ZM5.7874 9.0625C5.80563 9.33594 5.95146 9.48177 6.2249 9.5H7.0999C7.37334 9.48177 7.51917 9.33594 7.5374 9.0625V8.1875C7.51917 7.91406 7.37334 7.76823 7.0999 7.75H6.2249C5.95146 7.76823 5.80563 7.91406 5.7874 8.1875V9.0625ZM9.7249 7.75C9.45146 7.76823 9.30563 7.91406 9.2874 8.1875V9.0625C9.30563 9.33594 9.45146 9.48177 9.7249 9.5H10.5999C10.8733 9.48177 11.0192 9.33594 11.0374 9.0625V8.1875C11.0192 7.91406 10.8733 7.76823 10.5999 7.75H9.7249ZM2.2874 12.5625C2.30563 12.8359 2.45146 12.9818 2.7249 13H3.5999C3.87334 12.9818 4.01917 12.8359 4.0374 12.5625V11.6875C4.01917 11.4141 3.87334 11.2682 3.5999 11.25H2.7249C2.45146 11.2682 2.30563 11.4141 2.2874 11.6875V12.5625ZM6.2249 11.25C5.95146 11.2682 5.80563 11.4141 5.7874 11.6875V12.5625C5.80563 12.8359 5.95146 12.9818 6.2249 13H7.0999C7.37334 12.9818 7.51917 12.8359 7.5374 12.5625V11.6875C7.51917 11.4141 7.37334 11.2682 7.0999 11.25H6.2249ZM9.2874 12.5625C9.30563 12.8359 9.45146 12.9818 9.7249 13H10.5999C10.8733 12.9818 11.0192 12.8359 11.0374 12.5625V11.6875C11.0192 11.4141 10.8733 11.2682 10.5999 11.25H9.7249C9.45146 11.2682 9.30563 11.4141 9.2874 11.6875V12.5625Z" fill="white"/>
                                </svg>
                             10 mai 2025
                            </p>
                            <h3 className="cs_white_color cs_fs_18 cs_medium mb-0">
                            <Link href="/blog/blog-details">Mises à niveau et maintenance des panneaux</Link>
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_footer_bottom cs_accent_bg cs_white_color">
            <div className="container">
              <div className="cs_footer_bottom_in">
                <div className="cs_footer_copyright fw-lighter ">Tous droits réservés (c) 2026- Solution Doux Confort inc.</div>
                <ul className="cs_footer_menu cs_mp_0">
                   <li><CookieConsentComponent /></li>
                  <li><Link className="text-decoration-none cs_white_color" href="/faq">FAQ</Link></li>
                  <li><Link className="text-decoration-none cs_white_color" href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;