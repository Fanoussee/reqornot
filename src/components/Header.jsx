import { logoSite } from '../img'

const Header = () => {
  return (
    <div className="header">
      <img src={logoSite.src} alt={logoSite.alt} />
    </div>
  )
}

export default Header;
