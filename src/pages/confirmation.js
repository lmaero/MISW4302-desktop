import { Khula, Righteous } from 'next/font/google';
import Link from 'next/link';

const khula = Khula({ subsets: ['latin'], weight: '400' });
const righteous = Righteous({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      <main className="max-w-sm mx-auto">
        <div className="home w-full h-[calc(40vh)] items-center justify-center flex">
          <h1
            className={`${righteous.className} text-7xl font-bold text-white`}
          >
            Hola!
          </h1>
        </div>
        <div
          className={`h-[calc(60vh)] flex flex-col items-center justify-center text-2xl ${khula.className}`}
        >
          <p className="mb-8 text-center max-w-[320px]">
            ¿Estás intentando ingresar en el sitio web?
          </p>
          <div className="text-lg flex items-center">
            <Link href="/successful">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="120"
                height="120"
                className="fill-blue-600"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
              </svg>
            </Link>

            <Link href="/failure">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="80"
                height="80"
                className="fill-gray-500"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z" />
              </svg>
            </Link>
          </div>

          <p className="text-gray-600 text-sm">Zipaquirá, Colombia</p>
          <p className="text-gray-600 text-sm">192.80.30.1</p>
        </div>
      </main>
    </>
  );
}
