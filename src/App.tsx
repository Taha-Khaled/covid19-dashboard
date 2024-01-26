import styled, { ThemeProvider } from "styled-components";
import { themes } from "./themes/themes";
import Content from "./components/Content";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Colors } from "chart.js";
import { useAppSelector } from "./stateManager/store";
import { selectTheme } from "./stateManager/features/themeSlice";

Chart.register(CategoryScale);
Chart.register(Colors);

const Layout = styled.main`
  background-color: ${(props) => props.theme.backgroundColor};
  min-height: 100vh;
  color: ${(props) => props.theme.fontColor};
  display: block;
  box-sizing: border-box;
`;

function App() {
  const queryClient = new QueryClient();
  const { theme } = useAppSelector(selectTheme);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themes[theme]}>
        <Layout>
          <Content />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
