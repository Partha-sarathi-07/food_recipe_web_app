import '../styles/header.css';
import chefClaudeLogo from '../assets/chef-claude-icon.png';
export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="chef claude logo" />
            <span>Chef Claude</span>
        </header>
    )
}