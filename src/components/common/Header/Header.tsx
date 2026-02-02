"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/../public/images/logo/logo.webp";
import styles from "./Header.module.css";

const navigation = [
  { name: "Главная", href: "/" },
  {
    name: "Курсы",
    href: "/#courses",
    dropdown: [
      { name: "Очные курсы программирования", href: "/offline/programming" },
      { name: "Очные курсы робототехники", href: "/offline/robotics" },
      { name: "Онлайн курсы программирования", href: "/online/programming" },
    ],
  },
  { name: "Проекты учеников", href: "/projects" },
  { name: "Контакты", href: "/#footer" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileCoursesOpen(false);
  };

  const scrollToBottom = () => {
    let attempts = 0;
    const maxAttempts = 3;
    let lastHeight = 0;

    const doScroll = () => {
      const currentHeight = document.documentElement.scrollHeight;
      const currentScroll = window.pageYOffset + window.innerHeight;
      const isAtBottom = currentScroll >= currentHeight - 10;

      // Scroll to bottom
      window.scrollTo({
        top: currentHeight,
        behavior: "smooth",
      });

      attempts++;

      // Костыль Из-за изменения размеров блоков под анимашки
      if (
        attempts < maxAttempts &&
        (!isAtBottom || currentHeight !== lastHeight)
      ) {
        lastHeight = currentHeight;
        setTimeout(doScroll, 750);
      }
    };

    doScroll();
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href === "/#footer") {
      e.preventDefault();
      closeMenu();

      const footer = document.getElementById("footer");

      if (footer) {
        scrollToBottom();
      } else {
        window.location.href = "/#footer";
      }
      return;
    }

    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      closeMenu();
      const id = href.substring(2);
      scrollToElement(id);
      return;
    }
    closeMenu();
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!window.confirm("Позвонить по номеру +7 (495) 123 35-85?")) {
      e.preventDefault();
    }
  };

  const scrollToElement = (elementId: string, focusFirstInput = false) => {
    let attempts = 0;
    const maxAttempts = 3;
    const yOffset = -100;

    const doScroll = () => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const targetY =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      const currentScroll = window.pageYOffset;
      const isAtTarget = Math.abs(currentScroll - targetY) < 20;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      attempts++;
      // Костыль Из-за изменения размеров блоков под анимашки

      if (attempts < maxAttempts && !isAtTarget) {
        setTimeout(doScroll, 750);
      } else if (focusFirstInput) {
        // Focus first input after scrolling is complete
        setTimeout(() => {
          const firstInput = element.querySelector(
            "input, textarea, select",
          ) as HTMLInputElement | null;
          if (firstInput) {
            firstInput.focus({ preventScroll: true });
          }
        }, 300);
      }
    };

    doScroll();
  };

  const handleRecordClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Check if contacts section exists on current page
    const contactsElement = document.getElementById("contacts");

    if (contactsElement) {
      // If contacts section exists on current page, scroll to it
      scrollToElement("contacts", true);
    } else {
      // If not found, navigate to home page with application form
      window.location.href = "/#contacts";
    }
  };

  // Handle hash on page load (when navigating from other pages)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        if (hash === "#footer") {
          scrollToBottom();
        } else if (hash === "#contacts") {
          scrollToElement("contacts", true);
        } else {
          const id = hash.substring(1);
          scrollToElement(id);
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* Логотип */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src={logo || "/placeholder.svg"}
              alt="Айтишкино"
              width={140}
              height={40}
              priority
              fetchPriority="high"
              quality={90}
              className={styles.logoImage}
            />
          </Link>

          {/* Навигация для десктопа */}
          <div className={styles.desktopNav}>
            {navigation.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className={styles.dropdownContainer}
                  ref={dropdownRef}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`${styles.navLink} ${styles.dropdownTrigger}`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-expanded={dropdownOpen}
                  >
                    {item.name}
                    <svg
                      className={`${styles.dropdownArrow} ${
                        dropdownOpen ? styles.dropdownArrowOpen : ""
                      }`}
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className={styles.dropdownMenu}>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={styles.dropdownItem}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </Link>
              ),
            )}

            <a
              href="tel:+74951233585"
              className={styles.phoneLink}
              onClick={handlePhoneClick}
            >
              +7 (495) 123 35-85
            </a>
          </div>

          {/* Кнопки */}
          <div className={styles.buttonsContainer}>
            <button
              className={styles.recordButton}
              onClick={(e) => {
                closeMenu();
                handleRecordClick(e);
              }}
            >
              Запись
            </button>
            <a
              href="https://itishkino.pro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.loginButton}
            >
              Войти
            </a>
          </div>

          {/* Кнопка мобильного меню */}
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`${styles.menuIcon} ${
                isMenuOpen ? styles.menuIconOpen : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </nav>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name} className={styles.mobileDropdown}>
                  <button
                    className={styles.mobileDropdownTrigger}
                    onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                    aria-expanded={mobileCoursesOpen}
                  >
                    {item.name}
                    <svg
                      className={`${styles.mobileDropdownArrow} ${
                        mobileCoursesOpen ? styles.mobileDropdownArrowOpen : ""
                      }`}
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {mobileCoursesOpen && (
                    <div className={styles.mobileDropdownMenu}>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={styles.mobileDropdownItem}
                          onClick={closeMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </Link>
              ),
            )}
            <a
              href="tel:+74951233585"
              className={styles.mobilePhoneLink}
              onClick={(e) => {
                closeMenu();
                handlePhoneClick(e);
              }}
            >
              +7 (495) 123 35-85
            </a>
            <div className={styles.mobileButtons}>
              <button
                className={styles.mobileRecordButton}
                onClick={(e) => {
                  closeMenu();
                  handleRecordClick(e);
                }}
              >
                Запись
              </button>
              <a
                href="https://itishkino.pro"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileLoginButton}
              >
                Войти
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
