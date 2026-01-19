"use client"
import Slider from "react-slick";
import data from "../../Data/heroData.json";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { useEffect, useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import Link from "next/link";
import Image from "next/legacy/image";

const HomeSlider = () => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState<string>('about:blank');
  const [toggle, setToggle] = useState(false);
  const handelClick = () => {
    setIframeSrc("https://www.facebook.com/plugins/video.php?height=900&href=https%3A%2F%2Fwww.facebook.com%2FSolutionDouxConfort%2Fvideos%2F700035266372203%2F&show_text=false&width=1600&t=0");
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 5000,
  };

    return (
        <div className="homeSlider-area">
             <Slider  {...settings} >
             {data.map((item, i) => (
              <div key={i} className="cs_slider" >
                <div className="cs_hero cs_style_1 cs_bg_filed cs_primary_bg cs_center "  data-background={item.bgImg}>
                  <div className="container flex-column flex-lg-row cs_d-flex cs_align_items_center cs_justify_content_center">
                    <div className="cs_hero_text wow fadeInRight" data-wow-duration="0.9s" data-wow-delay="0.3s">
                      <h3 className="cs_hero_mini_title cs_accent_color cs_fs_18 cs_medium cs_mb_8">
                        <Image src="/assets/img/icons/fan.svg" alt="img" width={15} height={15}   />
                        {item.subTitle}
                      </h3>
                      <h1 className="cs_hero_title cs_white_color cs_fs_74 cs_mb_18">{item.title}</h1>
                      <p className="cs_hero_subtitle cs_white_color cs_mb_34">{item.desc}</p>
                      <div className="cs_hero_btns ">
                        <Link href={item.link} className="cs_btn cs_style_1 " >
                          <span >Demander un devis</span>
                          <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28125 0.71875L13.7812 5.96875C13.9271 6.11458 14 6.29167 14 6.5C14 6.70833 13.9271 6.88542 13.7812 7.03125L8.28125 12.2812C7.90625 12.5729 7.55208 12.5729 7.21875 12.2812C6.92708 11.9062 6.92708 11.5521 7.21875 11.2188L11.375 7.25H0.75C0.291667 7.20833 0.0416667 6.95833 0 6.5C0.0416667 6.04167 0.291667 5.79167 0.75 5.75H11.375L7.21875 1.78125C6.92708 1.44792 6.92708 1.09375 7.21875 0.71875C7.55208 0.427083 7.90625 0.427083 8.28125 0.71875Z" fill="currentColor"/>
                          </svg>
                        </Link>
                        <span className="cs_hero_player_btn cs_video_open" onClick={handelClick}>
                          <span className="cs_player_btn cs_center">
                            <span></span>
                          </span>
                          <span className="cs_hero_play_btn_text">Regardez la vidéo</span>
                        </span>
                      </div>
                    </div>
                  </div>
                
                    {/* <div >
                 <iframe width="902" height="850" src={iframeSrc} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div> */}
                  <div className="cs_hero_img iumg_fluid wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.25s">
                    <Image src={item.img} alt="img" width={902} height={850} objectFit={'cover'} />
                  </div>
                  </div>
              </div>
              ))}
                
        </Slider>

        
        <VideoModal
          isTrue={toggle}
          iframeSrc={iframeSrc}
          handelClose={handelClose}        
        ></VideoModal>

        </div>
    );
};

export default HomeSlider;