export type GameViewProps = {
  score: number;
  words: string[];
  error: string | null;
  timeLeft: number;
  onSubmit: (word: string) => void;
  disabled?: boolean;
};