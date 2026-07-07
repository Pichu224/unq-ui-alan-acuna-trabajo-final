import PageCard from "../components/pageCard";
import HomeView from "../views/HomeView";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <PageCard className="max-w-xl">
        <HomeView />
      </PageCard>

    </div>
  );
}