import { Link } from "react-router-dom";

export default function HomeView() {
  return (
    <div className="text-center space-y-6 sm:space-y-8">

      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
          Palabras Encadenadas
        </h1>

        <p className="text-sm sm:text-base text-slate-500 mt-2">
          Formá la cadena más larga posible antes de que se termine el tiempo.
        </p>
      </div>

      <div className="flex flex-col gap-4">

        <Link
          to="/game"
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Jugar
        </Link>

        <Link
          to="/leaderboard"
          className="border border-slate-300 py-3 rounded-lg hover:bg-slate-100 transition"
        >
          Ver Leaderboard
        </Link>

      </div>

    </div>
  );
}