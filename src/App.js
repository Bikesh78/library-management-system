import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import AddItems from "./Components/AddItems";
import AddMember from "./Components/AddMember";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import IssueItem from "./Components/IssueItem";
import ReturnReissue from "./Components/ReturnReissue";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <HashRouter> */}
        <header>
          <Header />
        </header>
        <main>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-items" element={<AddItems />} />
            <Route path="/add-member" element={<AddMember />} />
            <Route path="/issue-item" element={<IssueItem />} />
            <Route path="/return-reissue" element={<ReturnReissue />} />
          </Routes>
        </main>
        {/* </HashRouter> */}
      </BrowserRouter>
    </>
  );
}

export default App;
