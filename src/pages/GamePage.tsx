import { useState } from "react";
import PageCard from "../components/pageCard";
import useGame from "../hooks/useGame";
import GameOverView from "../views/GameOverView";
import GameStartView from "../views/GameStartView";
import GameView from "../views/GameView";
import PageLayout from "../components/pageLayout";

export default function GamePage() {
  const [playerName, setPlayerName] = useState(
    () => sessionStorage.getItem("playerName") ?? ""
  );

  const [hasStarted, setHasStarted] = useState(
    () => sessionStorage.getItem("playerName") !== null
  );

  const {
    score,
    words,
    error,
    gameOver,
    timeLeft,
    handleWordSubmit,
    resetGame,
  } = useGame(playerName);

  const handleStart = (name: string) => {
    const trimmed = name.trim();

    if (!trimmed) return;

    sessionStorage.setItem("playerName", trimmed);

    setPlayerName(trimmed);
    setHasStarted(true);
  };

  const handleRestart = () => {
    resetGame();
    setHasStarted(false);
    setPlayerName("");
    sessionStorage.removeItem("playerName");
  };

  return (
    <PageLayout>
      <PageCard className="max-w-xl">
        {!hasStarted ? (
          <GameStartView onStart={handleStart} />
        ) : gameOver ? (
          <GameOverView
            score={score}
            words={words}
            onRestart={handleRestart}
          />
        ) : (
          <GameView
            score={score}
            words={words}
            error={error}
            timeLeft={timeLeft}
            onSubmit={handleWordSubmit}
            disabled={false}
          />
        )}
      </PageCard>
    </PageLayout>
  );
}