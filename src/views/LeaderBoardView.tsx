import { Link } from "react-router-dom";
import type { LeaderboardEntry } from "../types/leaderBoardProps";
import storageBoardService from "../services/storageBoardService";
import { useState, useEffect } from "react";

export default function LeaderboardView() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    setLeaderboard(storageBoardService.getLeaderboard());
  }, []);

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold text-center text-slate-800">
        Leaderboard
      </h1>

      {leaderboard.length === 0 ? (
        <p className="text-center text-slate-500">
          Todavía no hay puntajes registrados.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base border border-slate-200 rounded-lg overflow-hidden">

            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="p-2 text-left">Jugador</th>
                <th className="p-2 text-left">Puntos</th>
                <th className="p-2 text-left">Cantidad de Palabras</th>
              </tr>
            </thead>

            <tbody>
              {leaderboard.map((entry, index) => (
                <tr key={index} className="border-t border-slate-200">
                  <td className="p-2">{entry.name}</td>
                  <td className="p-2">{entry.score}</td>
                  <td className="p-2">{entry.wordsCount}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

      <Link
        to="/"
        className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Volver al inicio
      </Link>

    </div>
  );
}