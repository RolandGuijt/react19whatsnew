import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import HouseRow from "./components/HouseRow";
import AddHouseButton from "./components/AddHouseButton";

export default async function Home() {
  const houses = await fetch("http://localhost:4001/house")
    .then(r => r.json());

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          <ErrorBoundary fallback="Error loading house rows!">
            {houses.map((h) => (
              <HouseRow key={h.id} house={h} />
            ))}
          </ErrorBoundary>
        </tbody>
      </table>
      <ErrorBoundary fallback="Error adding house!">
        <AddHouseButton />
      </ErrorBoundary>
    </>
  );
}
