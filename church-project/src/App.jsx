/* eslint-disable react/jsx-no-undef */
import Router from "./routes/Router";
import MenuComponent from "./components/MenuComponent";
import MainArea from "./components/MainArea";
import { About } from './views'
import Footer from './components/footer';


function App() {
  return (
    <main>
      <MenuComponent/>
      <MainArea/>
      
      <Router />
      <Footer/>
    </main>
  );
}

export default App;
