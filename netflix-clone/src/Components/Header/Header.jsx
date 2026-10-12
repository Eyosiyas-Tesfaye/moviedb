
import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import {
  FiSearch,
  FiBell,
  FiUser,
  FiChevronDown,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const notificationCount = 5;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${style.header} ${
        isScrolled ? style.headerScrolled : ""
      }`}
    >
      {/* LEFT SIDE */}
      <div className={style.headerLeft}>
{/* FLIXORA LOGO */}
<div className={style.logo}>
  <span className={style.logoIcon}>▶</span>
  <span className={style.logoText}>Flixora</span>
</div>
        {/* NAVIGATION */}
        <nav className={style.navMenu}>
          <Link to="" className={style.navLink}>
            Home
          </Link>

          <Link to="" className={style.navLink}>
            TV Shows
          </Link>

          <Link to="" className={style.navLink}>
            Movies
          </Link>

          <Link to="" className={style.navLink}>
            New & Popular
          </Link>

          <Link to="" className={style.navLink}>
            My List
          </Link>

          <Link to="" className={style.navLink}>
            Browse by Language
          </Link>
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className={style.headerRight}>
        {/* SEARCH */}
        <div className={style.searchContainer}>
          <button
            className={style.searchButton}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            <FiSearch />
          </button>

          {isSearchOpen && (
            <input
              type="text"
              className={style.searchInput}
              placeholder="Search"
              autoFocus
            />
          )}
        </div>

        {/* NOTIFICATION */}
        <div className={style.notificationContainer}>
          <button
            className={style.notificationButton}
            aria-label="Notifications"
          >
            <FiBell />

            {notificationCount > 0 && (
              <span className={style.notificationBadge}>
                {notificationCount > 5 ? "5+" : notificationCount}
              </span>
            )}
          </button>
        </div>

        {/* PROFILE */}
        <div className={style.profileContainer}>
          {/* USER ICON */}
          <button
            className={style.profileButton}
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            aria-label="Profile"
          >
            <FiUser />
          </button>

          {/* DROPDOWN ARROW */}
          <button
            className={`${style.dropdownArrow} ${
              isProfileOpen ? style.arrowUp : ""
            }`}
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            aria-label="Profile menu"
          >
            <FiChevronDown />
          </button>

          {/* PROFILE DROPDOWN */}
          {isProfileOpen && (
            <div className={style.profileDropdown}>
              <button className={style.dropdownItem}>
                Account
              </button>

              <div className={style.dropdownLine}></div>

              <button className={style.dropdownItem}>
                Help Center
              </button>

              <div className={style.dropdownLine}></div>

              <button className={style.dropdownItem}>
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
