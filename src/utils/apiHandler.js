import urls from "../config/api/urls";
import { store } from "../config/store/store";
const { getCeAlerts, getCeDoc, dssApi } = urls;

class ApiHandler {
  /****************** Headers
   */ static getHeaders(headers, auth) {
    let data = {
      "Content-Type": "application/json",
    };
    if (headers) {
      data = { ...data, ...headers };
    }
    if (auth) {
      const user = store.getState().userReducer.userData;
      const token = user?.accessToken || null;
      if (!token) return data;
      data = { ...data, ...headers, Authorization: `Bearer ${token}` };
    }
    return data;
  }

  static async apiPostCall(url = "", body = {}, header = null, auth = false) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: ApiHandler.getHeaders(header, auth),
        body: JSON.stringify(body),
      });
      const res = await response.json();
      return res;
    } catch (e) {
      return null;
    }
  }

  static async apiGetCall(url = "", header = null, auth = false) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: ApiHandler.getHeaders(header, auth),
      });
      const res = await response.json();
      return res;
    } catch (e) {
      return null;
    }
  }
}

export default ApiHandler;
