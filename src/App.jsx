import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";

// TODO: https://youtu.be/3iE8BbL0038?list=PLu_vAIOaYQ6Q5yLM3gtHmrrtYE-MywJg2&t=913

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
