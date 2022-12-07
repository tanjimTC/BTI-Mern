import "./App.css";
import SearchBar from "./components/SearchBar";
import { robots } from "./robots";

function App() {
  const handleSearch = (value) => {
    console.log("I am from Handle Searh", value);
  };

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">
            We have the best Robots
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome Robots
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {robots.map((robot) => (
            <div
              key={robot.id}
              className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center border-2"
            >
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={`https://robohash.org/${robot.id}?size=200x200`}
                  alt="robot"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  {robot.name}
                </p>
                <p className="text-base text-gray-400 font-normal">
                  {robot.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
