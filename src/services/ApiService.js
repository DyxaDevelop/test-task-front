export default class ApiService {
  constructor(token) {
    this.token = token;
  }

  async getDate(token = "") {
    const res = await fetch("./experiment/", {
      headers: {
        DeviceToken: token,
      },
    });

    if (!res.ok) {
      throw new Error(`Something went wrong, received ${res.status}`);
    }

    return await res.json();
  }

  getPersonalizedData(token) {
    return this.getDate(token);
  }

  getAllData() {
    return this.getDate();
  }
}
