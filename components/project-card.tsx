import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  location: string
  image: string
  description: string
  category?: string
}

export default function ProjectCard({ title, location, image, description, category }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        {category && (
          <span className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-medium px-2 py-1 rounded">
            {category}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <div className="flex items-center gap-1 text-gray-500 mb-4">
          <MapPin size={16} />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
          Ver detalles
        </Button>
      </div>
    </div>
  )
}
