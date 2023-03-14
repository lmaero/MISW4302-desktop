import { Righteous } from 'next/font/google';
import Link from 'next/link';

const righteous = Righteous({ subsets: ['latin'], weight: '400' });

function Wait() {
  return (
    <div className="w-screen h-screen wait pt-20 flex items-center flex-col">
      <p className={`${righteous.className} text-4xl text-white`}>
        Esperando por confirmación en el teléfono...
      </p>

      <Link
        href="/confirmation"
        className="mt-8 bg-white text-blue-600 px-12 py-2 rounded-xl hover:bg-gray-300 transition-all hover:scale-105 shadow shadow-gray-900/30"
      >
        Avanzar
      </Link>
    </div>
  );
}

export default Wait;
