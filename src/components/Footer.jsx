import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <div>
    <hr className='border-slate-200' />

    <footer className=' footer font-poppins flex justify-center items-center'>

      <div className='footer-container'>
        <p>
          © 2023 <a href=""><strong>VuViet</strong></a>. All rights reserved.
        </p>

        {/* <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img 
                src={link.iconUrl}
                alt={link.name}
                className='w-3 h- object-contain'
              />
            </Link>
          ))}
        </div> */}
      </div>
    </footer>
    </div>
  );
};

export default Footer;
