import { Heading } from "../../../components/ui";
import { overviewData } from "../../../lib/mock-data";
import { AnalyticCard } from "../../../components/widgets";

export default function OverviewPage() {
  return (
    <div>
      <Heading className="mb-4">Overview</Heading>
      <div className="grid grid-cols-3 gap-5">
        {overviewData.map((over, index) => (
          <AnalyticCard key={index + 1} {...over} />
        ))}
      </div>
    </div>
  );
}
