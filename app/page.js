import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function Home() {
  return (
    <main>  
      <div class="contain "> 
        <div class="card-container "> 
          <div class="descripcion title-font"> 
            <h1 className="text-3xl">Kelvin Mburu</h1> 
            <h2>Web Developer</h2> 
            <p className="leading-5">
              Hi there! I'm John, a seasoned web developer passionate about crafting clean and dynamic websites. With 2 years of experience, I specialize in front-end and back-end development using HTML, CSS, JavaScript, SEO, Mongodb and frameworks like React and Nodejs.

              I thrive on creating user-centric designs and optimizing performance for seamless browsing experiences.

              Let's collaborate TOGHETER!
            </p> 
            <div class="icons"> 
              <a href="https://www.linkedin.com/in/#" class="hover-text" target="_blank"> 
                <span class="tooltip-text" id="fade"> LinkedIn</span> 
                <FaLinkedin />
              </a> 
              <a href="https://github.com/Mburu-Waa-Waanjiku" class="hover-text" target="_blank"> 
                <span class="tooltip-text" id="fade"> GitHub </span> 
                <IoLogoGithub /> 
              </a> 
              <a href="/KELVIN-MBURU-PORTFOLIO.pdf" class="hover-text" target="_blank"> <span class="tooltip-text" id="fade"> Resume </span> 
                <HiOutlineDocumentDownload/> 
              </a> 
            </div> 
          </div> 
          <div class="image " style={{minWidth: 260}}> 
            <Image src="/profile2.jpg" width={200} height={200} alt=""/> 
          </div> 
        </div> 
      </div>  
    </main> 
  );
}
