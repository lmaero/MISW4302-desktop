import Image from 'next/image';
import profile from '/public/images/profile.png';
import map from '/public/images/map.png';
import { Khula } from 'next/font/google';

const khula = Khula({ subsets: ['latin'], weight: '400' });

function Dashboard() {
  return (
    <div
      className={`grid grid-cols-2 w-screen h-screen ${khula.className} text-xl`}
    >
      <div className="flex flex-col items-center p-8 border-r-2 border-solid border-gray-400">
        <Image
          className="max-w-[230px] rounded mb-4"
          src={profile}
          alt="A profile picture of a driver"
        />
        <p className="text-blue-600 font-bold mb-8">Hola, Ramiro</p>

        <h2 className="font-bold text-xl mb-4">Cambiar contraseña</h2>

        <label htmlFor="old-password" className="text-lg">
          Contraseña anterior
        </label>
        <input
          className="max-w-fit border-2 border-solid border-gray-200 px-4 py-2 rounded"
          type="password"
        />

        <label htmlFor="new-password" className="mt-6 text-lg">
          Contraseña nueva
        </label>
        <input
          className="max-w-fit border-2 border-solid border-gray-200 px-4 py-2 rounded"
          type="password"
        />

        <button
          type="button"
          className="text-sm mt-8 bg-blue-600 text-white px-12 py-2 rounded-xl hover:bg-blue-500 transition-all hover:scale-105 shadow shadow-gray-900/30"
        >
          Cambiar
        </button>
      </div>

      <div className="flex flex-col items-center p-10">
        <h2 className="text-blue-600 font-bold mb-10">Tus alarmas</h2>

        <div className="grid grid-cols-2">
          <Image src={map} alt="A location on a map" width="200" />
          <div className="flex flex-col items-center justify-center">
            <p className="text-blue-600 font-bold">Luis Miguel</p>
            <p>Conjunto Lucca</p>
            <p className="font-bold text-3xl">9pm</p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-20">
          <Image src={map} alt="A location on a map" width="200" />
          <div className="flex flex-col items-center justify-center">
            <p className="text-blue-600 font-bold">Diego</p>
            <p>Bucaramanga</p>
            <p className="font-bold text-3xl">3am</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
