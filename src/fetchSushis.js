import config from "react-global-configuration";

export default async function fetchSushis(route) {
  const baseUri = config.get("baseUri");
  const response = await fetch(`${baseUri}${route}`);
  if (!response.ok) throw new Error("error");

  return response.json();
}
