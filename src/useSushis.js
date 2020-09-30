import { useQuery } from "react-query";
import fetchSushis from "./fetchSushis";
import { isEmpty } from "lodash";

export default function useSushis(search) {
  let route = ["/sushis"];
  if (!isEmpty(search)) route.push(`?q=${search}`);
  return useQuery(["sushis", search], () => fetchSushis(route.join("")));
}
