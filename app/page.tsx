import { Footer } from 'astronomy/components/footer'
import { Header } from 'astronomy/components/header'
import { Post } from 'astronomy/components/post'

export default function Home() {
  return (
    <>
      <Header />

      <main className="h-full">
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

      <Footer />
    </>
  )
}
