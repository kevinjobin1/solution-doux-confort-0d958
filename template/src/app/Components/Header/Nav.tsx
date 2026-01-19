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
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
                Détails du service
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>      
      <li className="menu-item-has-children">
        <Link href="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
                Équipe
              </Link>
            </li>
            <li>
              <Link href="/team/team-details" onClick={() => setMobileToggle(false)}>
                Détails de l&#39;équipe
              </Link>
            </li>
            <li>
              <Link href="/project" onClick={() => setMobileToggle(false)}>
                Projet
              </Link>
            </li>
            <li>
              <Link href="/project/project-details" onClick={() => setMobileToggle(false)}>
                 Détails du projet
              </Link>
            </li>            
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
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
                Détails du blog
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
