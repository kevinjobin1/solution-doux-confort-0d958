import parse from 'html-react-parser';
import Image from 'next/image';

type ContactCardProps = {
    img: string;
    Title: string;
    Content: string;
};

const ContactCard = ({img, Title, Content}: ContactCardProps) => {
    return (
        <div className="col-xl-12">
        <div className="cs_iconbox cs_style_3">
          <div className="cs_iconbox_icon cs_center">
            <Image src={img} alt="Icon" width={30} height={30}/>
          </div>
          <div className="cs_iconbox_right">
            <h3 className="cs_fs_20 cs_medium cs_mb_5">{Title}</h3>
            <p className="mb-0">{parse(Content)}</p>
          </div>
        </div>
      </div>
    );
};

export default ContactCard;