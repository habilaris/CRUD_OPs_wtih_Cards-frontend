import CardPage from "./pages/CardsPage";
import HomePage from "./pages/HomePage";
import CreateCardPage from "./pages/CreateCardPage";
import List from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral-200 w-dvw min-h-dvh flex flex-col items-center justify-center py-10 mb-32">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<List />} />
          <Route path="/admin/cards" element={<CardPage />} />
          <Route path="/admin/create-card" element={<CreateCardPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Next task!
// 1. User will be able add its info(name, age, gender etc)
// through input fields(form).
// 2. The user will be then able to see its information on a page.
// 3. You can store that information permanently by adding a database (MongoDB).
// 4. Also practice with .filter() and .sort() method.
