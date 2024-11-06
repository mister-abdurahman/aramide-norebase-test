import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CoinTable from "./components/CoinTable";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-200 h-screen flex items-center justify-center">
        <CoinTable />
      </div>
    </QueryClientProvider>
  );
}

export default App;
