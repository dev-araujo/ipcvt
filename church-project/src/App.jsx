import Router from "./routes/Router";
import MenuComponent from "./components/MenuComponent";
import MainArea from "./components/MainArea";
import { About } from './views'

function App() {
  return (
    <main>
      <MenuComponent/>
      <MainArea/>
      
      <Router />
    </main>
  );
}

export default App;
