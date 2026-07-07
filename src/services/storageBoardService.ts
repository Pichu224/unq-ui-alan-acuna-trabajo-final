import type {
  LeaderboardEntry,
  NewLeaderboardEntry,
} from "../types/leaderBoardProps";

const STORAGE_KEY = "leaderboard";
const MAX_LEADERBOARD_SIZE = 10;

const storageLeaderBoardService = {

  getLeaderboard: (): LeaderboardEntry[] => {
    const leaderboard = localStorage.getItem(STORAGE_KEY);

    if (!leaderboard) {
      return [];
    }

    return JSON.parse(leaderboard) as LeaderboardEntry[];
  },

  saveLeaderboard: (leaderboard: LeaderboardEntry[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leaderboard));
  },

  sortLeaderboard: (leaderboard: LeaderboardEntry[]): LeaderboardEntry[] => {
    return leaderboard
      .sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }

        return a.createdAt - b.createdAt;
      })
      .slice(0, MAX_LEADERBOARD_SIZE);
  },

  addResult: ({
    name,
    score,
    wordsCount,
  }: NewLeaderboardEntry): LeaderboardEntry[] => {

    if (!name.trim()) {
      throw new Error("El nombre del jugador no puede estar vacío.");
    }

    const newEntry: LeaderboardEntry = {
      name: name.trim(),
      score,
      wordsCount,
      createdAt: Date.now(),
    };

    const leaderboard = storageLeaderBoardService.sortLeaderboard([
      ...storageLeaderBoardService.getLeaderboard(),
      newEntry,
    ]);

    storageLeaderBoardService.saveLeaderboard(leaderboard);

    return leaderboard;
  },

  clearLeaderboard: (): void => {
    localStorage.removeItem(STORAGE_KEY);
  },

};

export default storageLeaderBoardService;