import { useQuery } from "@tanstack/react-query";
// import { RES_PER_PAGE } from "../../utils/constants";
import { getQuery } from "../../hooks/getQueryFromUrl";
import { getCoinList } from "../../services/apiCoinList";

const useCoins = () => {
  //   const queryClient = useQueryClient();

  const currentPage = !getQuery("page") ? 1 : Number(getQuery("page"));

  const {
    isLoading,
    data: coins,
    error,
  } = useQuery({
    queryKey: ["coins", currentPage],
    queryFn: () => getCoinList(currentPage),
  });

  // PRE-FETCHING:
  //   const pageCount = Math.ceil(count / RES_PER_PAGE);

  //   if (currentPage > 1) {
  //     queryClient.prefetchQuery({
  //       queryKey: ["bookings", filter, sortBy, currentPage - 1],
  //       queryFn: () =>
  //         getCoinList(currentPage),
  //     });
  //   }
  //   if (currentPage < pageCount) {
  //     queryClient.prefetchQuery({
  //       queryKey: ["bookings", filter, sortBy, currentPage + 1],
  //       queryFn: () =>
  //         getAllBookings({ filter, sortBy, currentPage: currentPage + 1 }),
  //     });
  //   }

  return { isLoading, coins, error };
};

export default useCoins;
