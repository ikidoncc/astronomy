import { Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'
import { Link } from '../link/Link'

export function Header() {
  return (
    <header className="w-full h-16 flex items-center">
      <div className="p-4 container mx-auto flex items-center justify-between">
        <div className="w-52 flex items-center gap-2">
          <a href="/">
            <Image src="/astronomy.svg" alt="logo" width={282} height={54} />
          </a>
          <span className="text-xs rounded-full px-2 py-1 bg-rosePineDawn-iris text-rosePineDawn-highlight-low">
            beta
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/if_astronomia/"
            className="flex items-center gap-2"
          >
            <LinkIcon className="size-4" />
            <span>Instagram</span>
          </Link>

          <Link
            href="linktr.ee/ifastronomia"
            className="flex items-center gap-2"
          >
            <LinkIcon className="size-4" />
            <span>Linktr</span>
          </Link>

          <button className="bg-rosePineDawn-rose transition-all rounded text-rosePineDawn-highlight-low hover:brightness-110">
            <a href="/sign-in" className="py-1 px-4 block">
              Entrar
            </a>
          </button>
        </div>
      </div>
    </header>
  )
}
