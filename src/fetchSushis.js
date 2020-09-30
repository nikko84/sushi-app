import config from "react-global-configuration";

const responseToJson = (response) => response.json();

export default function fetchSushis(route) {
  const baseUri = config.get("baseUri");

  return fetch(`${baseUri}${route}`).then(responseToJson);
}
