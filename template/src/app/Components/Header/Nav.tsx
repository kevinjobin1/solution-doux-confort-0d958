import Link from 'next/link';
import DropDown from './DropDown';

interface NavProps {
  setMobileToggle: (value: boolean) => void;
}

export default function Nav({ setMobileToggle }: NavProps) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Accueil
        </Link>
      </li>
      <li>
        <Link href="/a-propos" onClick={() => setMobileToggle(false)}>
          À propos
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="/expertises" onClick={() => setMobileToggle(false)}>
          Nos expertises
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/expertises#vente" onClick={() => setMobileToggle(false)}>
                Vente
              </Link>
            </li>
            <li>
              <Link href="/expertises#reparation" onClick={() => setMobileToggle(false)}>
                Réparation
              </Link>
            </li>
            <li>
              <Link href="/expertises#entretien" onClick={() => setMobileToggle(false)}>
                Entretien
              </Link>
            </li>
            <li>
              <Link href="/expertises#installation" onClick={() => setMobileToggle(false)}>
                Installation
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>      
      <li>
        <Link href="/services" onClick={() => setMobileToggle(false)}>
          Nos services
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="/produits" onClick={() => setMobileToggle(false)}>
          Produits
        </Link>
        <DropDown>
          <ul>
            <li><Link href="/produits#thermopompe-murale" onClick={() => setMobileToggle(false)}>Thermopompe murale</Link></li>
            <li><Link href="/produits#thermopompe-centrale" onClick={() => setMobileToggle(false)}>Thermopompe centrale</Link></li>
            <li><Link href="/produits#echangeur-air" onClick={() => setMobileToggle(false)}>Échangeur d'air</Link></li>
            <li><Link href="/produits#humidificateur" onClick={() => setMobileToggle(false)}>Humidificateur</Link></li>
            <li><Link href="/produits#filtration" onClick={() => setMobileToggle(false)}>Filtration</Link></li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/plans-entretien" onClick={() => setMobileToggle(false)}>
          Plans d'entretien
        </Link>
      </li>
      <li>
        <Link href="/financement" onClick={() => setMobileToggle(false)}>
          Financement
        </Link>
      </li>
      {/* 
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
      */}
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
