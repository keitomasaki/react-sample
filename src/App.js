import "./App.css";
import AppContextProvider from "./context";
import Todo from "./templates/Todo";

function App() {
  return (
    <AppContextProvider>
      <Todo />
    </AppContextProvider>
  );
}

export default App;
