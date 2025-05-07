import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { BarChart, FileCheck, PanelTop, Sun, Wrench, Zap } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl max-w-3xl mx-auto">Soluciones completas de energía solar para hogares y empresas</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sun size={32} />,
                title: "Instalación de Paneles Solares",
                description: "Diseño e instalación de sistemas fotovoltaicos adaptados a tus necesidades específicas.",
              },
              {
                icon: <BarChart size={32} />,
                title: "Consultoría Energética",
                description: "Análisis detallado de tu consumo y recomendaciones para maximizar la eficiencia.",
              },
              {
                icon: <Wrench size={32} />,
                title: "Mantenimiento",
                description:
                  "Servicios de mantenimiento preventivo y correctivo para garantizar el rendimiento óptimo.",
              },
              {
                icon: <FileCheck size={32} />,
                title: "Gestión de Trámites",
                description: "Nos encargamos de toda la documentación y permisos necesarios para tu instalación.",
              },
              {
                icon: <Zap size={32} />,
                title: "Sistemas de Almacenamiento",
                description: "Instalación de baterías para almacenar la energía y maximizar el autoconsumo.",
              },
              {
                icon: <PanelTop size={32} />,
                title: "Monitorización Remota",
                description: "Sistemas de seguimiento en tiempo real para controlar el rendimiento de tu instalación.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href="/contact"
                  className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-2"
                >
                  Saber más
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Para Hogares
              </span>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Soluciones Residenciales</h2>
              <p className="text-gray-600 mb-6">
                Nuestros sistemas solares residenciales están diseñados para maximizar el ahorro en tu factura eléctrica
                y reducir tu huella de carbono. Ofrecemos soluciones personalizadas que se adaptan a tu consumo, espacio
                disponible y presupuesto.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Sistemas de autoconsumo con o sin excedentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Instalaciones en tejados, terrazas o jardines</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Sistemas con baterías para maximizar el autoconsumo</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/485752154_18131686630404904_6510772137468669921_n.png"
                alt="Instalación residencial"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Para Empresas
              </span>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Soluciones Comerciales e Industriales</h2>
              <p className="text-gray-600 mb-6">
                Ayudamos a las empresas a reducir sus costes energéticos y a cumplir con sus objetivos de sostenibilidad
                mediante la implementación de sistemas solares a medida. Nuestras soluciones comerciales están diseñadas
                para ofrecer un alto rendimiento y un rápido retorno de la inversión.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Instalaciones en cubiertas industriales y comerciales</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Sistemas de gran potencia para fábricas y centros logísticos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">
                    Soluciones de autoconsumo colectivo para comunidades empresariales
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="\pasoancho1.jpg"
                alt="Instalación comercial"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Nuestro Proceso</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Trabajamos contigo en cada paso del camino para garantizar una instalación sin problemas
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-orange-200 -translate-y-1/2 z-0"></div>
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: 1,
                  title: "Consulta Inicial",
                  description: "Evaluamos tus necesidades y objetivos energéticos",
                },
                {
                  step: 2,
                  title: "Diseño del Sistema",
                  description: "Creamos una solución personalizada para tu espacio",
                },
                { step: 3, title: "Instalación", description: "Nuestro equipo experto instala tu sistema solar" },
                {
                  step: 4,
                  title: "Seguimiento",
                  description: "Monitorizamos el rendimiento y ofrecemos soporte continuo",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  )
}
