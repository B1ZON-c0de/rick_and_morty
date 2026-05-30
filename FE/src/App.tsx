import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/api/characters");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  });
  return <div>HEllo</div>;
};
export default App;
