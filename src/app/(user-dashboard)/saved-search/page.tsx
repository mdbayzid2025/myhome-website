import { SavedSearch } from "@/components/UserDashboard/savedSearches/SavedSearchItem";
import SavedSearchList from "@/components/UserDashboard/savedSearches/SavedSearchList";

const MOCK_SEARCHES: SavedSearch[] = [
  { id: "1", title: "London, up to £1.5m", description: "Houses, 3+ Beds, Within 5 miles", alertOn: true },
  { id: "2", title: "Manchester City Centre", description: "Flats, up to £500k", alertOn: true },
];

export default function SavedSearchesPage() {
  return (
    <div className="">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Saved Searches</h1>
      <SavedSearchList initialData={MOCK_SEARCHES} />
    </div>
  );
}