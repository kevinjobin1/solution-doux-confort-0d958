type VideoModalProps = {
    isTrue: boolean;
    iframeSrc:  string;
    handelClose: () => void;
};

const VideoModal = ({ isTrue, iframeSrc, handelClose }: VideoModalProps) => {
    return (
        <div className={`cs_video_popup ${isTrue === true ? 'active' : ''}`}>
          <div className="cs_video_popup-overlay"></div>
          <div className="cs_video_popup-content">
            <div className="cs_video_popup-layer"></div>
            <div className="cs_video_popup-container">
              <div className="cs_video_popup-align">
                    <div className="facebook-responsive bg-black">
                    <iframe src={iframeSrc} width="1600" height="900" className="embed-responsive-item" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
              </div>
              <div className="cs_video_popup-close" onClick={handelClose}></div>
            </div>
          </div>
        </div>            
    );
};

export default VideoModal;