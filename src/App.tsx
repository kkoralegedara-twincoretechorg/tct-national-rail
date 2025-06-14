import { Route, Routes } from "react-router";
import HomePage from "@/pages/HomePage";
import { ThemeProvider } from "@/components/theme-provider";

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
