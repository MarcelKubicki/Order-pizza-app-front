import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "./pages/Menu";
import Header from "./ui/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MenuItemDetails from "./features/menu/MenuItemDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <main className="pt-16">
          <Routes>
            <Route index element={<Menu />} />
            <Route path="/menu/:menuItemName" element={<MenuItemDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
