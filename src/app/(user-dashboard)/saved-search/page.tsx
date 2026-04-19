import { SavedSearch } from "@/components/UserDashboard/savedSearches/SavedSearchItem";
import SavedSearchList from "@/components/UserDashboard/savedSearches/SavedSearchList";

const MOCK_SEARCHES: SavedSearch[] = [
  { id: "1", title: "London, up to £1.5m", description: "Houses, 3+ Beds, Within 5 miles", alertOn: true },
  { id: "2", title: "Manchester City Centre", description: "Flats, up to £500k", alertOn: true },
];

export default function SavedSearchesPage() {
  return (
    <div className="">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-5">
        Saved Searches
      </h2>
      <SavedSearchList initialData={MOCK_SEARCHES} />
    </div>
  );
}