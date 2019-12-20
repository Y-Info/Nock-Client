import axios from "axios";
import Store from "../store/index";

export default function apiRequest(url, data) {
  let dataReturn;
  axios
    .post("https://nock-nock.herokuapp.com/api" + url, data, {
      headers: Store.getters.getConnectionInfos
    })
    .then(response => (dataReturn = response.data));
  return dataReturn;
}
