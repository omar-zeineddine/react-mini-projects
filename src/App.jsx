import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

function App() {
  return (
    <div>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </div>
  );
}

export default App;
