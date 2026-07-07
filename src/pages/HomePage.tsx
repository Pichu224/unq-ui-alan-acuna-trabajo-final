import PageCard from "../components/pageCard";
import PageLayout from "../components/pageLayout";
import HomeView from "../views/HomeView";

export default function HomePage() {
  return (
    <PageLayout>
      <PageCard className="max-w-xl">
        <HomeView />
      </PageCard>
    </PageLayout>
  );
}