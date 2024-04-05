import './Footer.css'
import { socials } from '../assets/socials';
import SocialLogo from './SocialLogo';
import ContactInfoCard from './ContactInfoCard';
import { contactInfo } from '../assets/socials';
import { v4 as uuidv4 } from 'uuid';

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container-footer">
                <div>
                    <h2 className='footer-name'>Romeus Clarens ©2024</h2>
                    <h2 className='footer-title'>Fullstack software developer</h2>
                </div>
                <div className='container-socials'>
                    {socials.map((s) => (
                        <SocialLogo key={uuidv4()} social={s} />
                    ))}
                </div>
                <div className='container-contact-info'>
                    {contactInfo.map((info) => (
                        <ContactInfoCard key={uuidv4()} info={info} />
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;