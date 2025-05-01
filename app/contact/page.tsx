import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aquí para responder a tus preguntas y ayudarte con tu proyecto solar
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Ponte en contacto</h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y uno de nuestros expertos se pondrá en contacto contigo para resolver tus dudas
                y ofrecerte la mejor solución para tus necesidades energéticas.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Dirección</h3>
                    <p className="text-gray-600">Barrio las mercedes </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600 mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Teléfono</h3>
                    <p className="text-gray-600">3234566789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600 mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@tesocol.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600 mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Horario</h3>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sábados: 10:00 AM- 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Preguntas frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "¿Cuánto cuesta instalar paneles solares?",
                answer:
                  "El coste de instalación varía según el tamaño del sistema, tipo de paneles y complejidad de la instalación. Ofrecemos presupuestos personalizados para cada proyecto.",
              },
              {
                question: "¿Cuánto tiempo dura la instalación?",
                answer:
                  "Para una instalación residencial típica, el proceso suele durar entre 1 y 3 días. Los proyectos comerciales o industriales pueden llevar más tiempo dependiendo de su complejidad.",
              },
              {
                question: "¿Qué mantenimiento requieren los paneles solares?",
                answer:
                  "Los paneles solares requieren un mantenimiento mínimo. Recomendamos una limpieza anual y una revisión técnica para asegurar el óptimo funcionamiento del sistema.",
              },
              {
                question: "¿Cuál es el periodo de amortización?",
                answer:
                  "El periodo de amortización típico para una instalación solar es de 5 a 8 años, dependiendo del consumo energético y las condiciones específicas de cada proyecto.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
