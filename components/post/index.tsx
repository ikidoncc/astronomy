import { TransformTextToLinik } from 'astronomy/helps/transform-text-to-link.tsx/transform-text-to-link'
import { ArrowRight } from 'lucide-react'

export interface PostProps {
  title: string
  author?: string
  resume: string
}

export function Post({ title, resume, author }: PostProps) {
  const link = TransformTextToLinik(title)

  return (
    <div className="group p-6 bg-rosePineDawn-surface rounded-xl cursor-pointer">
      <a href={link} className="grid gap-4">
        <div className="space-y-2">
          <h2 className="text-xl font-bold group-hover:text-rosePineDawn-love transition-all">
            {title}
          </h2>
          <p className="text-rosePineDawn-subtle text-sm">
            Publicado por {author}
          </p>
        </div>

        <div>
          <p>{resume}</p>
        </div>

        <button className="text-base font-bold w-max flex items-center gap-2">
          <span>Ler mais</span>
          <span>
            <ArrowRight className="size-4 group-hover:opacity-100 opacity-0 transition-all" />
          </span>
        </button>
      </a>
    </div>
  )
}
