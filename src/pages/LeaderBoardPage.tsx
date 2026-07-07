import PageCard from "../components/pageCard";
import PageLayout from "../components/pageLayout";
import LeaderboardView from "../views/LeaderBoardView";

export default function LeaderboardPage() {
  return (
    <PageLayout>
      <PageCard className="max-w-2xl">
        <LeaderboardView />
      </PageCard>
    </PageLayout>
  );
}