import Router from "./routes/Router";
import MenuComponent from "./components/MenuComponent";
import MainArea from "./components/MainArea";

function App() {
  return (
    <div>
      <MenuComponent />
      <MainArea />
      <Router />
    </div>
  );
}

export default App;
