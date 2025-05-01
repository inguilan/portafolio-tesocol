import Link from "next/link"
import { ArrowRight, Sun, Users, CheckCircle, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Energía Solar para un Futuro Brillante</h1>
            <p className="text-xl md:text-2xl mb-8">
              Soluciones de paneles solares de alta calidad para hogares y empresas
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-orange-600 hover:bg-orange-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Contáctanos <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Ver Proyectos
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 w-full h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        ></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-xl text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Energía Renovable</h3>
              <p className="text-gray-600">
                Nuestros paneles solares aprovechan la energía del sol para proporcionar electricidad limpia y
                renovable.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Trabajamos con los mejores fabricantes para ofrecer paneles solares de alta eficiencia y larga duración.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Equipo Experto</h3>
              <p className="text-gray-600">
                Nuestro equipo de profesionales tiene años de experiencia en instalación y mantenimiento de sistemas
                solares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Equipo de trabajo"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Sobre Nosotros</h2>
              <p className="text-gray-600 mb-6">
                Somos una empresa líder en la instalación de paneles solares, comprometida con la transición hacia
                energías renovables y la reducción de la huella de carbono.
              </p>
              <p className="text-gray-600 mb-8">
                Con más de 10 años de experiencia en el sector, hemos completado cientos de proyectos exitosos para
                clientes residenciales y comerciales.
              </p>
              <Link href="/about" className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-2">
                Conoce más sobre nosotros <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nuestros Proyectos Destacados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora algunos de nuestros trabajos más recientes y descubre cómo hemos ayudado a nuestros clientes a
              aprovechar la energía solar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Instalación Residencial"
              location="Tulua, Valle"
              image="/placeholder.svg?height=300&width=400"
              description="Sistema de 5kW para una vivienda familiar"
            />
            <ProjectCard
              title="Complejo Industrial"
              location="Cali, Vlle"
              image="/placeholder.svg?height=300&width=400"
              description="Instalación de 50kW para una fábrica"
            />
            <ProjectCard
              title="Centro Comercial"
              location="Valencia, España"
              image="/placeholder.svg?height=300&width=400"
              description="Sistema de 100kW con seguimiento solar"
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors"
            >
              Ver todos los proyectos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
