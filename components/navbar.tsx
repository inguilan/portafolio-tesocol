"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Barra superior */}
      <div className="bg-black text-white text-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center h-auto py-2 md:py-0">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span>Bienvenidos a TESOCOL, Tecnología Solar de Colombia</span>
            <span>📞 +57 123 456 7890</span>
            <span>📧 contacto@tesocol.com</span>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <a
              href="https://www.facebook.com/tesocol.co/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-600"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/tesocol/?originalSubdomain=co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-600"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/tesocol.co/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-600"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/logotes.jpg" alt="TESOCOL Logo" className="h-8" />
              <span className="font-bold text-xl text-gray-800">TESOCOL</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
                Inicio
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">
                Sobre Nosotros
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-600 font-medium">
                Servicios
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-orange-600 font-medium">
                Proyectos
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium">
                Contacto
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-orange-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-orange-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nosotros
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-orange-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-700 hover:text-orange-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Proyectos
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-orange-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
                <Button
                  className="bg-orange-600 hover:bg-orange-700 text-white mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
