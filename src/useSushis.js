import { useQuery } from "react-query";
import fetchSushis from "./fetchSushis";
import { isEmpty } from "lodash";
import config from "react-global-configuration";

const { minLength } = config.get("search");

export default function useSushis(search) {
  const hasMinLength = search.length >= minLength;

  let route = ["/sushis"];
  if (!isEmpty(search) && hasMinLength) route.push(`?q=${search}`);
  return useQuery(["sushis", hasMinLength && search], () =>
    fetchSushis(route.join(""))
  );
}
