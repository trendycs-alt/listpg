"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { menu } from "../data/menu";

function MenuItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  return (
    <li
      className="menu-item"
      onMouseEnter={() => hasChildren && setOpen(true)}
      onMouseLeave={() => hasChildren && setOpen(false)}
    >
      {item.path ? (
        <Link href={item.path} onClick={onNavigate}>
          {item.title}
        </Link>
      ) : (
        <span className="menu-label">{item.title}</span>
      )}

      {hasChildren && (
        <ul className={`submenu ${open ? "submenu-open" : ""}`}>
          {item.children.map((child) => (
            <MenuItem key={child.title} item={child} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  // Tutup menu saat klik di luar area navbar
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tutup menu saat salah satu link diklik
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="navbar" ref={navRef}>
      <div className="navbar-inner">
        <Link href="/" className="brand" onClick={closeMenu}>
          PAYMENT GATEWAY SYSTEM
        </Link>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>

        <nav className={`nav-links ${mobileOpen ? "nav-links-open" : ""}`}>
          <ul className="menu-root">
            {menu.map((item) => (
              <MenuItem key={item.title} item={item} onNavigate={closeMenu} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}