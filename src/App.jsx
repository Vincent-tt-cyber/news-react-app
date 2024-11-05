import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";

// TODO:  https://youtu.be/bD0UXb7kD_k?list=PLu_vAIOaYQ6Q5yLM3gtHmrrtYE-MywJg2&t=1881

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
