import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AddItems from "./Components/AddItems";
import AddMember from "./Components/AddMember";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-items" element={<AddItems />} />
            <Route path="/add-member" element={<AddMember />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
