import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Sun, Award, TrendingUp, Leaf, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce nuestra historia, misión y el equipo detrás de nuestra empresa de paneles solares
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Fundada en 2010, nuestra empresa nació con la visión de transformar el sector energético en España,
                promoviendo el uso de energías renovables y contribuyendo a un futuro más sostenible.
              </p>
              <p className="text-gray-600 mb-4">
                Lo que comenzó como un pequeño equipo de tres ingenieros apasionados por la energía solar, ha crecido
                hasta convertirse en una empresa líder en el sector, con más de 50 profesionales y cientos de proyectos
                completados con éxito.
              </p>
              <p className="text-gray-600">
                A lo largo de estos años, hemos evolucionado constantemente, incorporando las últimas tecnologías y
                mejorando nuestros procesos para ofrecer soluciones cada vez más eficientes y adaptadas a las
                necesidades de nuestros clientes.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Historia de la empresa"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Misión y Visión</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestros valores fundamentales guían cada aspecto de nuestro trabajo
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sun className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Nuestra Misión</h3>
              <p className="text-gray-600">
                Proporcionar soluciones energéticas sostenibles y accesibles que permitan a hogares y empresas reducir
                su huella de carbono y sus costes energéticos, contribuyendo a la transición hacia un modelo energético
                más limpio y descentralizado.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Nuestra Visión</h3>
              <p className="text-gray-600">
                Ser reconocidos como líderes en el sector de las energías renovables, impulsando la innovación y
                estableciendo nuevos estándares de calidad y servicio. Aspiramos a un futuro donde la energía solar sea
                la principal fuente de electricidad en hogares y empresas de toda España.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Estos principios definen nuestra cultura y guían nuestras decisiones
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Excelencia</h3>
              <p className="text-gray-600">
                Nos esforzamos por alcanzar los más altos estándares en cada proyecto que emprendemos.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sostenibilidad</h3>
              <p className="text-gray-600">
                Estamos comprometidos con la protección del medio ambiente y la promoción de prácticas sostenibles.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Innovación</h3>
              <p className="text-gray-600">
                Buscamos constantemente nuevas tecnologías y métodos para mejorar nuestros servicios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Nuestro Equipo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Profesionales apasionados y comprometidos con la energía solar
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Carlos Rodríguez",
                position: "Director General",
                image: "/placeholder.svg?height=300&width=300",
              },
              { name: "Laura Martínez", position: "Directora Técnica", image: "/placeholder.svg?height=300&width=300" },
              {
                name: "Miguel Sánchez",
                position: "Jefe de Instalaciones",
                image: "/placeholder.svg?height=300&width=300",
              },
              { name: "Ana García", position: "Responsable Comercial", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-orange-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
