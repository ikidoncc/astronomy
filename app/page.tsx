import { Post } from 'astronomy/components/post'
import { Link } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full space-y-8">
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
            <div className="flex items-center gap-2 hover:brightness-125 transition-all cursor-pointer">
              <Link className="size-4" />
              <a href="https://www.instagram.com/if_astronomia/">Instagram</a>
            </div>

            <div className="flex items-center gap-2 hover:brightness-125 transition-all cursor-pointer">
              <Link className="size-4" />
              <a href="linktr.ee/ifastronomia">Linktr</a>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full">
        <div className="container h-full mx-auto p-4 space-y-8">
          <h1 className="text-2xl font-bold pl-6">Postagens</h1>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            <Post
              title="Astrofísica multimensageira"
              author="Felipe"
              resume="A  astrofísica evoluiu a tal ponto de podermos contar com um excelente kit de ferramentas para estudar o funcionamento do cosmos. Veja os conceitos e eventos com os quais os cientistas têm lidado para entender as mensagens do universo."
            />
            <Post
              title="Astrofísica multimensageira"
              author="Gustavo"
              resume="A  astrofísica evoluiu a tal ponto de podermos contar com um excelente kit de ferramentas para estudar o funcionamento do cosmos. Veja os conceitos e eventos com os quais os cientistas têm lidado para entender as mensagens do universo."
            />
            <Post
              title="Astrofísica multimensageira"
              author="Gustavo"
              resume="A  astrofísica evoluiu a tal ponto de podermos contar com um excelente kit de ferramentas para estudar o funcionamento do cosmos. Veja os conceitos e eventos com os quais os cientistas têm lidado para entender as mensagens do universo."
            />
          </div>
        </div>
      </section>
    </main>
  )
}
