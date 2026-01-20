import Link from 'next/link';
import DropDown from './DropDown';

interface NavProps {
  setMobileToggle: (value: boolean) => void;
}

export default function Nav({ setMobileToggle }: NavProps) {
  return (
    <ul className="cs_nav_list fw-medium">
      {/* <li className="menu-item-has-children">
        <Link href="/">Accueil</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/" onClick={() => setMobileToggle(false)}>
                Accueil
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          À propos
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Nos services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Spécialités
              </Link>
            </li>
            <li>
              <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
                Plans d'entretien
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>      
      <li className="menu-item-has-children">
        <Link href="#">Entreprise</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
                Notre équipe
              </Link>
            </li>
            <li>
              <Link href="/team/team-details" onClick={() => setMobileToggle(false)}>
                Direction
              </Link>
            </li>
            <li>
              <Link href="/project" onClick={() => setMobileToggle(false)}>
                Photos
              </Link>
            </li>
            <li>
              <Link href="/project/project-details" onClick={() => setMobileToggle(false)}>
                 Nos réalisations
              </Link>
            </li>            
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Publications
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Articles
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Nous rejoindre
        </Link>
      </li>
    </ul>
  );
}
