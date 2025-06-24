import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { FavouritesProvider } from "./context/FavouritesProvider";
import Menu from "./pages/Menu";
import Header from "./ui/Header";
import store from "./store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <FavouritesProvider>
          <BrowserRouter>
            <Header />
            <main className="pt-16">
              <Routes>
                <Route index element={<Navigate to="/menu" />} />
                <Route path="/menu" element={<Menu />}>
                  <Route path=":menuItemName" />
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </FavouritesProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
