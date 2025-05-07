import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Instalación Residencial",
      location: "Barrancabermeja,santander",
      image: "/291123-web-tesocol-residencial_barrancabermeja_1-1536x864.jpg",
      description: "Sistema de 5kW para una vivienda familiar",
      category: "Residencial",
    },
    {
      id: 2,
      title: "Complejo Industrial",
      location: "Bogota, Cundinamarca",
      image: "/161123-web-tesocol-gaiarec_bogota_1-1536x864.jpg",
      description: "Instalación de 50kW para una fábrica",
      category: "Industrial",
    },
    {
      id: 3,
      title: "Complejo Industrial",
      location: "El carmelo, Cali",
      image: "/270923-web-tesocol-distriabonos1-1536x864.jpg",
      description: "Sistema de 100kW con seguimiento solar",
      category: "Industrial",
    },
    {
      id: 4,
      title: "Sistema de Bombeo Solar",
      location: "Palmira ,Valle",
      image: "/portadaulti.jpg",
      description: "Instalación de 200kW para una granja",
      category: "Agrícola",
    },
    {
      id: 5,
      title: "Sistema de fotovoltaico",
      location: "T-shirt, Cali",
      image: "/020224-web-tesocol-t-shirt_1-1536x864.jpg",
      description: "Sistema de 75kW para un edificio corporativo",
      category: "Industrial",
    },
    {
      id: 6,
      title: "Muebles El Paisa",
      location: "Turín, Valle",
      image: "/111023-web-tesocol-muebles_el_paisa1-1536x864.jpg",
      description: "Instalación comunitaria de 30kW",
      category: "Residencial",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Proyectos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explora nuestra galería de instalaciones solares completadas en diferentes sectores
          </p>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-600" />
              <span className="font-medium text-gray-800">Filtrar por:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                Todos
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Residencial
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Comercial
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Industrial
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Agrícola
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                location={project.location}
                image={project.image}
                description={project.description}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Caso de Éxito Destacado</h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Proyecto Industrial
                </span>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Fábrica Textil en Barcelona</h3>
                <p className="text-gray-600 mb-6">
                  Este proyecto de 120kW ha permitido a la empresa reducir su factura eléctrica en un 60% y disminuir su
                  huella de carbono significativamente.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Desafío</h4>
                      <p className="text-gray-600">
                        Alto consumo energético con costes elevados y dependencia de la red eléctrica.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Solución</h4>
                      <p className="text-gray-600">
                        Instalación de 300 paneles solares de alta eficiencia con sistema de monitorización avanzado.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Resultado</h4>
                      <p className="text-gray-600">
                        Reducción del 60% en la factura eléctrica y retorno de la inversión en 4 años.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">Ver detalles del proyecto</Button>
              </div>
              <div className="h-full">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Caso de éxito - Fábrica textil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
