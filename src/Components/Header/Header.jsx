import React from 'react'
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
function Header() {

    const [isSearchOpen,setIsSearchOpen]=useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const[isScrolled, setIsScrolled] = useState(false)

useEffect(()=>{
    const handleScroll =()=>{
        if(window.scrollY > 50){
            setIsScrolled(true)
        }else{
            setIsScrolled(false)
        }
    }
    
    window.addEventListener('scroll',handleScroll)
    return ()=> window.removeEventListener('scroll',handleScroll)
},[])
    return (
    <header className={`${styles.header} ${isScrolled? styles.scrolled:""}` }>
      <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="" />

        {/* nav link */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} href="">
            Home
          </Link>
          <Link className={styles.navLink} href="">
            Tv show
          </Link>
          <Link className={styles.navLink} href="">
            Movies
          </Link>
          <Link className={styles.navLink} href="">
            New & Popular
          </Link>
          <Link className={styles.navLink} href="">
            My List
          </Link>
          <Link className={styles.navLink} href="">
            Browse by Language
          </Link>
        </nav>
        {/* right section */}
        <div className={styles.rightSection}>
          {/* search */}
          <div
            className={styles.searchContainer}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <button className={styles.searchButton}>
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
              />
            )}
          </div>

          {/* Notification */}
          <button className={styles.iconButton}>
            {/* notification icon */}
            <Bell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* Profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={()=>setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {/* user icon */}
              <div className={styles.profileAvater}>
                <User size={20} />
              </div>
              <ChevronDown size={20} />
              {/* dropdown icon */}
            </button>
            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem}>Account</Link>
                <Link className={styles.profileMenuItem}>Help Center</Link>
                <hr className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItem}>Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
