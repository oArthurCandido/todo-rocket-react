import  {BrowserRouter, Routes, Route} from "react-router"
import Components from "./pages/Components";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route Component={MainLayout}>
        <Route path="/components" Component={Components} />
        <Route index Component={Home} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
