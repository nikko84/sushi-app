import { useQuery } from "react-query";
import fetchSushis from "./fetchSushis";
import config from "react-global-configuration";
import hasMinLength from "./hasMinLength";

const { minLength } = config.get("search");

export default function useSushis(search) {
  let route = ["/sushis"];
  if (hasMinLength(search, minLength)) route.push(`?q=${search}`);
  return useQuery(["sushis", hasMinLength(search, minLength) && search], () =>
    fetchSushis(route.join(""))
  );
}
