import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * No frontend-specific stuff here, and no API-aware stuff elsewhere in the frontend.
 * 
 */

class CryptoXApi {
  // the token for interacting with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${CryptoXApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }


  /** Get token for login from username, password. */
  static async login(data) {
    let res = await this.request(`api/auth/token`, data, "post");
    return res.token;
  }
  
  /** Signup for site. */
  static async signup(data) {
    let res = await this.request(`api/auth/register`, data, "post");
    return res.token;
  }

  /** Get the current user. */
  static async getCurrentUser(username) {
    let res = await this.request(`api/users/${username}`);
    return res.user;
  }

  /** Save user profile page. */
  static async saveProfile(username, data) {
    let res = await this.request(`api/users/${username}`, data, "patch");
    return res.user;
  }

  /** Get all cryptocurrencies */
  static async getAllCryptoCurrencies() {
    let res = await this.request('api/currencies');
    return res.data;
  }

  /** Get info on a specific cryptocurrency */
  static async getCryptoCurrency(cryptoX) {
    let res = await this.request(`api/currencies/${cryptoX}`);
    return res.data;
  }

  static async addToPortfolio(data) {
    let res = await this.request(`api/portfolio/`, data, "post");
    return res.data;
  }

  static async getPortfolioForUser(username) {
    let res = await this.request(`api/portfolio/${username}`);
    return res.cryptocurrencies;
  }

  static async getSpecificCurrencyForUser(username, cryptocurrency) {
    let res = await this.request(`api/portfolio/${username}/${cryptocurrency}`);
    return res.cryptocurrency;
  }

  static async deleteCurrency(username, cryptocurrency) {
    let res = await this.request(`api/portfolio/${username}/${cryptocurrency}`, {}, "delete");
    return res;
  }
}

export default CryptoXApi;