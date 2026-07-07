import PageCard from "../components/pageCard";
import LeaderboardView from "../views/LeaderBoardView";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <PageCard className="max-w-2xl">
        <LeaderboardView />
      </PageCard>

    </div>
  );
}