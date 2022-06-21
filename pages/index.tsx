import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="scroll-smooth font-DMSans">

      <Head>
        <title>Nicholas Goes - Portfolio Page</title>
        <link rel="icon" href="/loup_tribal.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin=''/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <header className='flex justify-between items-center w-full px-16 md:px-26 lg:px-32 py-8 transparent fixed '>
        <div className="">
          <h1 className="text-white text-2xl">Nicholas <span className="text-orange-300">Goes</span></h1>
        </div>

        <nav>
          <ul className='hidden md:flex justify-center items-center w-full text-white'>
            <li className='px-6'><Link href="#home">Home</Link></li>
            <li className='px-6'><Link href="#sobre">Sobre</Link></li>
            <li className='px-6'><Link href="#projetos">Projetos</Link></li>
            <li className='px-6'><Link href="#contatos">Contato</Link></li>
          </ul>

          <div className="md:hidden text-white">
            <MenuIcon></MenuIcon>
          </div>
        </nav>       
      </header>

      <main>
        <section className='flex flex-col md:flex-row justify-center items-center bg-hero-pattern bg-cover bg-center py-96 w-full' id='home'>
          <div className='flex flex-col justify-center items-center'>
            <address className='text-xl text-white z-10'>Front-End Web Developer</address>
            <h1 className='text-6xl text-white z-10'>Nicholas <span className='text-orange-300'>Goes</span></h1>
          </div>
          <div className='mx-8 flex absolute opacity-30'>
            <Image src="/loup_tribal.svg" alt='wolf logo' width={316} height={442}/>   
          </div>
        </section>

        <section className='flex flex-row justify-center items-center bg-zinc-900 p-16' id='sobre'>
          <div className="flex flex-Row justify-center items-center mt-10 mb-10">
              <Image src="/loup_tribal.svg" alt='wolf logo' width={512} height={512}/>  
            <div className=''>
              <h1 className='text-3xl text-white mb-6 text-left'>Sobre Mim</h1> 
              <p className='text-left text-sm text-white'>Olá, Tudo Bom? Meu Nome é Nicholas Sou Desenvolvedor Front-end Junior Atualmente Focado Em Estudar ReactJs e derivados.</p>
            </div>       
          </div>
        </section>

        <section className='flex flex-col justify-center items-center bg-zinc-900 p-16' id='projetos'>
            <h1 className='text-3xl text-white mb-6'>Projetos</h1>
            <div className='m-8 flex'>
              <div className='p-8'>
                <Image src="/AnimeChan.png" alt='wolf logo' width={1024} height={512}/>
              </div>
              <div className='p-8'>
                <Image src="/RiotGames.png" alt='wolf logo' width={1024} height={512}/>
              </div>
            </div>
        </section>
      </main>

      <footer className='flex flex-row justify-center items-center bg-zinc-900 p-6'>
        <address className="text-white">Feito com ❤ por Nicholas Goes</address>
      </footer>

    </div>
  )
}

export default Home
