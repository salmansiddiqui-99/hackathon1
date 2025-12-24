import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  useThemeConfig,
  useMobileSecondaryMenuRenderer,
  MobileSecondaryMenuPlaceholder,
  ThemeClassNames,
  useHideableNavbar,
  useLockBodyScroll,
} from '@docusaurus/theme-common';
import { useNavbarMobile } from '@docusaurus/theme-common/internal';
import useLogo from '@theme/hooks/useLogo';
import NavbarItem from '@theme/NavbarItem';
import SearchBar from '@theme/SearchBar';
import styles from './styles.module.css';

function NavbarMobileSidebarToggle() {
  const { toggle, shown } = useNavbarMobile();
  return (
    <button
      onClick={toggle}
      aria-label={shown ? 'Close navigation bar' : 'Open navigation bar'}
      className={clsx(
        'navbar__toggle',
        'clean-btn',
        !shown && 'navbar__toggle--closed',
      )}
      type="button">
      <svg
        className="navbar__toggle-icon"
        xmlns="http://www.w3.org/2000/svg"
        height={30}
        width={30}
        viewBox="0 0 30 30"
        role="img"
        focusable={false}
        aria-hidden={true}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M4 7h22M4 15h22M4 23h22"
        />
      </svg>
    </button>
  );
}

function useSearchBar() {
  const {
    navbar: { hideOnScroll, search },
  } = useThemeConfig();
  const showSearchBar = search !== undefined;
  const hideSearchBar = !showSearchBar || hideOnScroll;
  return { showSearchBar, hideSearchBar };
}

function NavbarContent() {
  const { navbar } = useThemeConfig();
  const { items } = navbar;
  const logo = useLogo();
  const { showSearchBar, hideSearchBar } = useSearchBar();

  return (
    <div className="navbar__inner">
      <div className="navbar__items">
        <NavbarMobileSidebarToggle />
        {logo != null && (
          <Link
            className="navbar__brand"
            aria-label="Navbar brand"
            to={logo.href ?? '/'}>
            {logo.src != null ? (
              <img src={logo.src} alt={logo.alt} className="navbar__logo" />
            ) : null}
            {logo.unstable_src != null ? (
              <img
                src={logo.unstable_src}
                alt={logo.alt}
                className="navbar__logo"
              />
            ) : null}
            <strong
              className={clsx(
                'navbar__title',
                styles.navbar__title,
              )}>
              {logo.title}
            </strong>
          </Link>
        )}
        {items != null &&
          items.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
      </div>
      <div className="navbar__items navbar__items--right">
        {!hideSearchBar && <SearchBar />}
        {/* Theme Toggle Button */}
        <ThemeToggle />
      </div>
    </div>
  );
}

// Theme Toggle Component
function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check system preference or saved preference
    const savedTheme = localStorage.getItem('theme') ||
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={clsx('clean-btn', styles.themeToggle)}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}

function NavbarMobilePrimaryMenu() {
  const { items } = useThemeConfig().navbar;
  return (
    <ul className="menu__list">
      {items != null &&
        items.map((item, i) => (
          <NavbarItem mobile {...item} key={i} />
        ))}
    </ul>
  );
}

export default function Navbar() {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobile();
  const { isShown: mobileSidebarShown } = mobileSidebar;
  const { showMobileSecondaryMenu, toggleMobileSecondaryMenu } =
    useMobileSecondaryMenuRenderer();
  useLockBodyScroll(mobileSidebarShown);
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  return (
    <nav
      ref={navbarRef}
      className={clsx(
        'navbar',
        'navbar--fixed-top',
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],
        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary',
          'navbar-sidebar--show': mobileSidebarShown,
        },
        ThemeClassNames.navbar,
      )}>
      <div className="navbar__inner">
        <NavbarContent />
      </div>
      <div className="navbar-sidebar">
        <NavbarContent />
        <div
          className={clsx(
            'navbar-sidebar__items',
            !showMobileSecondaryMenu && 'navbar-sidebar__items--show-primary',
          )}>
          <NavbarMobilePrimaryMenu />
        </div>
        {showMobileSecondaryMenu && (
          <div className="navbar-sidebar__items navbar-sidebar__items--show-secondary">
            <MobileSecondaryMenuPlaceholder
              items={useThemeConfig().navbar.items}
              toggleSecondaryMenu={toggleMobileSecondaryMenu}
            />
          </div>
        )}
      </div>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={mobileSidebar.toggle}
      />
    </nav>
  );
}