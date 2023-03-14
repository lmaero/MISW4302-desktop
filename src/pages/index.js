import { Khula, Righteous } from 'next/font/google';
import Link from 'next/link';

const khula = Khula({ subsets: ['latin'], weight: '400' });
const righteous = Righteous({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      <main>
        <div className="home w-screen h-[calc(50vh)] items-center justify-center flex">
          <h1
            className={`${righteous.className} text-7xl font-bold text-white`}
          >
            Hola!
          </h1>
        </div>
        <div
          className={`h-[calc(50vh)] flex flex-col items-center justify-center text-2xl ${khula.className}`}
        >
          <p className="mb-2">Aquí puedes administrar tus alarmas</p>
          <p className="mb-8">
            Ingresa con el mismo número con el que te registraste en la app
          </p>
          <div className="text-lg flex flex-col items-center">
            <label htmlFor="phone"># de celular: </label>
            <br />
            <input
              className="max-w-fit border-2 border-solid border-gray-200 px-4 py-2 rounded"
              type="number"
              placeholder="(000) 000-0000"
            />
            <Link
              href="/wait"
              className="mt-8 bg-blue-600 text-white px-12 py-2 rounded-xl hover:bg-blue-500 transition-all hover:scale-105 shadow shadow-gray-900/30"
            >
              Ingresar
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
