import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useCoins from "../features/coins/useGetCoins";
import { ICoin } from "../utils/types";
import ErrorComp from "./ErrorComp";
import Spinner from "./Spinner";
import { getQuery } from "../hooks/getQueryFromUrl";
import { setQuery } from "../hooks/setQueryOnUrl";
import { useEffect, useState } from "react";

function CoinTable() {
  const { isLoading, coins, error } = useCoins();
  const [page, setPage] = useState(1);

  useEffect(
    function () {
      if (!getQuery("page")) {
        setQuery("page", page.toString());
      }
    },
    [page]
  );

  const curPage = getQuery("page");

  function nextPage() {
    if (curPage) {
      setQuery("page", (+curPage + 1).toString());
      setPage((prev) => prev + 1);
    }
  }

  function prevPage() {
    if (curPage && +curPage > 1) {
      setQuery("page", (+curPage - 1).toString());
      setPage((prev) => prev - 1);
    }
  }

  if (isLoading) return <Spinner />;
  if (error) return <ErrorComp error={error.message} />;

  return (
    <div className="shadow-md bg-white rounded-sm">
      <table>
        <thead>
          <tr className="text-left">
            <th className="px-4 py-1">💰Coin</th>
            <th className="px-4 py-1">📄Code</th>
            <th className="px-4 py-1">🤑Price</th>
            <th className="px-4 py-1">💹Total Supply</th>
          </tr>
        </thead>
        <tbody className="">
          {coins.data.map((item: ICoin) => (
            <tr key={item.id} className="text-left odd:bg-gray-300">
              <td className="px-4 py-1">{item.name}</td>
              <td className="px-4 py-1">{item.symbol}</td>
              <td className="px-4 py-1">{item.price_usd}</td>
              <td className="px-4 py-1">
                {item.tsupply} {item.symbol}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="flex w-full justify-between p-2 mt-3 text-base font-semibold border-t border-gray-300">
        {curPage && +curPage > 1 ? (
          <button className="flex items-center gap-2" onClick={prevPage}>
            <FaArrowLeft /> Previous
          </button>
        ) : (
          <span></span>
        )}
        {
          <span className="bg-gray-300 rounded-full px-2 text-xs flex items-center">
            {curPage}
          </span>
        }
        {!curPage || (
          //   (curPage && +curPage <= 10 ? (
          <button className="flex items-center gap-2" onClick={nextPage}>
            Next <FaArrowRight />
          </button>
        )}
      </footer>
    </div>
  );
}

export default CoinTable;
