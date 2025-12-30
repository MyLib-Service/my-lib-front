import { Header } from "@/components/common";
import { Tabs } from "@/components/common";
import HomeComponents from "../../components/Home/HomeComponents";
import { useState } from "react";
import ReadingState from "../../components/ReadingState/ReadingState";

export type TabType = "BOOKSHELF" | "STATE";

export default function HomePage() {
  const [isGridView, setIsGridView] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("BOOKSHELF");

  const handleGridChange = () => {
    setIsGridView((isGridView) => !isGridView);
  };

  return (
    <>
      <Header />
      <Tabs activeTab={activeTab} onChange={setActiveTab} />
      {activeTab === "BOOKSHELF" && (
        <HomeComponents
          isGridView={isGridView}
          onGridChange={handleGridChange}
        />
      )}
      {activeTab === "STATE" && <ReadingState />}
    </>
  );
}
