import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}