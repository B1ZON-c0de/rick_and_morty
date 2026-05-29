import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:8080/api/episodes").then((res) =>
      console.log(res.json()),
    );
  });
  return <div>HEllo</div>;
};
export default App;
