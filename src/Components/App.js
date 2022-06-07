import '../App.css';
import {useEffect, useState} from "react";
import Loading from "./Loading";
import Homepage from "./Homepage";

function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() =>
  {
    setIsLoading(true)
    setTimeout(() =>
    {
      setIsLoading(false)
    }, 6000)
  }, [])


  return (
    <div className="App">
      {isLoading ? <Loading /> : <Homepage />}
    </div>
  );
}

export default App;
