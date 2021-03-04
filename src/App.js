import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading</div>} persistor={persistor}>
        <Navbar />
        <Game />
      </PersistGate>
    </Provider>
  );
}

export default App;
