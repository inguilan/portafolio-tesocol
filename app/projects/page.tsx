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
      location: "Madrid, España",
      image: "/placeholder.svg?height=300&width=400",
      description: "Sistema de 5kW para una vivienda familiar",
      category: "Residencial",
    },
    {
      id: 2,
      title: "Complejo Industrial",
      location: "Barcelona, España",
      image: "/placeholder.svg?height=300&width=400",
      description: "Instalación de 50kW para una fábrica",
      category: "Industrial",
    },
    {
      id: 3,
      title: "Centro Comercial",
      location: "Valencia, España",
      image: "/placeholder.svg?height=300&width=400",
      description: "Sistema de 100kW con seguimiento solar",
      category: "Comercial",
    },
    {
      id: 4,
      title: "Granja Solar",
      location: "Sevilla, España",
      image: "/placeholder.svg?height=300&width=400",
      description: "Instalación de 200kW para una granja",
      category: "Agrícola",
    },
    {
      id: 5,
      title: "Edificio de Oficinas",
      location: "Bilbao, España",
      image: "/placeholder.svg?height=300&width=400",
      description: "Sistema de 75kW para un edificio corporativo",
      category: "Comercial",
    },
    {
      id: 6,
      title: "Comunidad de Vecinos",
      location: "Zaragoza, España",
      image: "/placeholder.svg?height=300&width=400",
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
              <Button variant="outline" className="bg-orange-600 text-white hover:bg-orange-700">
                Todos
              </Button>
              <Button variant="outline" className="text-gray-700 hover:bg-orange-100 hover:text-orange-700">
                Residencial
              </Button>
              <Button variant="outline" className="text-gray-700 hover:bg-orange-100 hover:text-orange-700">
                Comercial
              </Button>
              <Button variant="outline" className="text-gray-700 hover:bg-orange-100 hover:text-orange-700">
                Industrial
              </Button>
              <Button variant="outline" className="text-gray-700 hover:bg-orange-100 hover:text-orange-700">
                Agrícola
              </Button>
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

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Quieres ser nuestro próximo caso de éxito?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudarte con tu proyecto solar.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 h-auto text-lg">
            Solicitar presupuesto gratuito
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
