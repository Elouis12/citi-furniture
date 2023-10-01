import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import '../index.css';  



const logo = '/decorAItor_logo-removebg-preview.png';

function Footer() {
    return (
        <footer style={{backgroundColor: 'black'}} className="p-6 flex justify-between flex-col">
            <img src={logo} alt="Company Logo" className="self-start h-12 w-auto self-center" /> {/* Add logo with desired height and auto width */}
            <div className="text-white font-medium self-center">
                © 2023 by DecorAItor. Partnered with Habitat for Humanity.
            </div>
            <div className="flex space-x-4 justify-end">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                    <AiFillFacebook size={24} color="white" />
                </a>
                <a href="https://github.com/YourUsername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                    <AiFillGithub size={24} color="white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                    <FaTwitter size={24} color="white" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-300">
                    <AiFillYoutube size={24} color="white" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-300">
                    <AiOutlineInstagram size={24} color="white" />
                </a>
            </div>
           
        </footer>
    );
}

export default Footer;
