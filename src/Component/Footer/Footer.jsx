import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-[#f75023] text-base-content rounded">
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://web.facebook.com/antar.mitra.9"><FaFacebook className="text-4xl text-white"></FaFacebook></a>
                        <a href="https://www.linkedin.com/feed/"><FaLinkedin className="text-4xl text-white"></FaLinkedin></a>
                        <a href="https://github.com/antarmitra"><FaGithub className="text-4xl text-white"></FaGithub></a>
                    </div>
                 
                </nav>
                <aside>
                    <p className="text-base font-bold text-white"> © 2023 - Antar Mitra</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;