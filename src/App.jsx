import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";

// TODO: https://youtu.be/suowP9mWAso?list=PLu_vAIOaYQ6Q5yLM3gtHmrrtYE-MywJg2&t=214

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
