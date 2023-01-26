import { SocialIcon } from 'react-social-icons';
function Footer() {
    return (
    <footer>
        <div className='socials'>
            <span><SocialIcon url="https://facebook.com/" network="facebook"/></span>
            <span><SocialIcon url="https://instagram.com/" network="instagram"/></span>
            <span><SocialIcon url="https://twitter.com/" network="twitter"/></span>
            <span><SocialIcon url="https://youtube.com/" network="youtube"/></span>
        </div>
        <small>© 2023 Green Gardens. All rights reserved.</small>
    </footer>
    );
}

export default Footer;