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
  { name: "Контакты", href: "/#contacts" },
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

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!window.confirm("Позвонить по номеру +7 (495) 123 35-85?")) {
      e.preventDefault();
    }
  };

  const handleRecordClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // If not on home page, navigate to home page with contacts anchor
    if (pathname !== "/") {
      window.location.href = "/#contacts";
      return;
    }

    const form = document.getElementById("application-form");
    if (form) {
      const yOffset = -80;
      const y = form.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      const firstInput = form.querySelector(
        "input, textarea, select",
      ) as HTMLInputElement | null;
      if (firstInput) {
        const focusInput = () => {
          firstInput.focus({
            preventScroll: true,
          });
        };

        const focusTimer = setTimeout(focusInput, 800);

        const onScroll = () => {
          if (
            (window.pageYOffset >= y - 10 && window.pageYOffset <= y + 10) ||
            window.innerHeight + window.pageYOffset >=
              document.body.offsetHeight - 2
          ) {
            window.removeEventListener("scroll", onScroll);
            clearTimeout(focusTimer);
            focusInput();
          }
        };

        setTimeout(() => {
          window.addEventListener("scroll", onScroll, { once: true });
        }, 100);
      }
    }
  };

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
                  onClick={closeMenu}
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
                  onClick={closeMenu}
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
