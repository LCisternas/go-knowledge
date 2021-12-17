import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import Logo from '../../images/logo.png';

import style from '../../styles/Navbar.module.css';

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  return (
    <div className={style.navContainer} >
      <div className={style.navLogo} >
        <Link href='/'>
          <Image src={Logo} width={150} height={35} />
        </Link>
      </div>

      <div className={style.navLinks}>
        <Link href='/'>Home</Link>
        <Link href='/onboard'>Onboarding</Link>
        <Link href='/aliados-industrias'>Aliados</Link>
        <Link href='/academy'>Academy</Link>
        <Link href='/podcast'>Podcast</Link>
        <Link href='/help-online'>Help</Link>
      </div>
      <div className={style.menuIcon}>
        <button
          onClick={() => setSidebar(!sidebar)}
        ><i className="fas fa-bars"></i></button>
      </div>
      
      <div className={sidebar ? style.showSidebar : style.hiddenSidebar}>
        <div className={style.sidebarButton}>
          <button
            onClick={() => setSidebar(!sidebar)}
          ><i className="far fa-window-close"></i></button>
        </div>

        <div className={style.sidebarLinks}>
          <Link onClick={() => setSidebar(!sidebar)} href='/'>Home</Link>
          <Link onClick={() => setSidebar(!sidebar)} href='/onboard'>Onboard</Link>
          <Link onClick={() => setSidebar(!sidebar)} href='/aliados-industrias'>Aliados</Link>
          <Link onClick={() => setSidebar(!sidebar)} href='/academy'>Academy</Link>
          <Link onClick={() => setSidebar(!sidebar)} href='/podcast'>Podcast</Link>
          <Link onClick={() => setSidebar(!sidebar)} href='/help-online'>Help</Link>
        </div>
      </div>

    </div>
  );
}
 
export default Navbar;