import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>no tours left</h2>
        <button
          type="button"
          style={{ marginTop: "2rem" }}
          className="btn"
          onClick={() => fetchTours()}
        >
          Refresh Tours
        </button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
