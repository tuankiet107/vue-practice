import Axios from "axios";

export default Axios.create({
  baseURL: "http://api.vndevhost.com/api/v1/admin/categories",
});
