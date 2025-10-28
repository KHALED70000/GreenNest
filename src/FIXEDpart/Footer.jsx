import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

             
                <div>
                    <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                    <ul>
                        <li className="mb-2 hover:underline cursor-pointer">About</li>
                        <li className="mb-2 hover:underline cursor-pointer">Contact</li>
                        <li className="mb-2 hover:underline cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>

            
                <div>
                    <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-2xl">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram /> <span className="mb-2 hover:underline cursor-pointer Font">Instagram</span>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF /> <span className="mb-2 hover:underline cursor-pointer">Facebook</span>
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                            <FaPinterestP /> <span className="mb-2 hover:underline cursor-pointer">Pinterest</span>
                        </a>
                    </div>
                </div>

               
                <div className="flex flex-col justify-end md:items-end mt-4 md:mt-0">
                    <p className="text-gray-300 text-sm text-center md:text-right">
                        © 2025 GreenNest. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
