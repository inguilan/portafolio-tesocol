import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Sun } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12 items-start">
          {/* Company Info */}
          <div className="text-left">
            <div className="flex items-center gap-2 mb-6">
              <Sun className="text-orange-500" size={32} />
              <span className="font-bold text-xl">TESOCOL</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empresa líder en instalación de paneles solares, comprometida con la transición hacia energías renovables.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/tesocol.co/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/tesocol.co/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/tesocol/?originalSubdomain=co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Instalación de Paneles
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Consultoría Energética
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Mantenimiento
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Sistemas de Almacenamiento
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Monitorización Remota
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex justify-center items-center gap-3">
                <MapPin size={20} className="text-orange-500" />
                <span className="text-gray-400">Barrio las Mercedes</span>
              </li>
              <li className="flex justify-center items-center gap-3">
                <Phone size={20} className="text-orange-500" />
                <span className="text-gray-400">3234567890</span>
              </li>
              <li className="flex justify-center items-center gap-3">
                <Mail size={20} className="text-orange-500" />
                <span className="text-gray-400">info@tesocol.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TESOCOL. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
