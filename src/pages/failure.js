import Link from 'next/link';
import { Khula, Righteous } from 'next/font/google';

const righteous = Righteous({ subsets: ['latin'], weight: '400' });
const khula = Khula({ subsets: ['latin'], weight: '400' });

function Failure() {
  return (
    <div
      className={`rain flex flex-col items-center justify-center w-screen h-screen ${righteous.className}`}
    >
      <p className="text-2xl">Ingreso fallido</p>

      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="120"
          height="120"
          className="fill-gray-500"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z" />
        </svg>
      </Link>

      <p className={`${khula.className} text-lg mt-20`}>
        Debes aceptar la notificación que aparece en tu teléfono
      </p>
    </div>
  );
}

export default Failure;
