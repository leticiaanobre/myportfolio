import { Code, PlayCircle, MessageCircle } from 'lucide-react'

const skills = [
  {
    icon: <Code className="w-5 h-5" />,
    items: ['Desenvolvimento Web', 'Design Web', 'Mobile', 'Frontend', 'Backend']
  },
  {
    icon: <PlayCircle className="w-5 h-5" />,
    items: ['Jogos', 'Livros', 'Séries', 'Amigos', 'Familia']
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    items: ['Proativa', 'Comunicativa', 'Trabalho em equipe', 'Rápido aprendizado', 'Passional']
  }
]

export function InfiniteScroll() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r py-8">
      {skills.map((skillSet, index) => (
        <div key={index} className="relative flex mb-8 last:mb-0">
          {/* First scroll container */}
          <div className="flex animate-scroll">
            <div className="flex items-center gap-8 px-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8">
                  {skillSet.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full"
                    >
                      {skillSet.icon}
                      <span className="text-white/90 whitespace-nowrap">{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="flex animate-scroll" aria-hidden="true">
            <div className="flex items-center gap-8 px-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8">
                  {skillSet.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full"
                    >
                      {skillSet.icon}
                      <span className="text-white/90 whitespace-nowrap">{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

