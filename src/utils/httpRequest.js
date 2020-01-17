export default class HttpRequest {
  constructor() {
    this.domain = 'http://peugeot-new/';
  }

  getData = async (url) => {
    const res = await fetch(`${this.domain}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}; receveid ${res.status}`);
    }
    return await res.json();
  }

  getModelList = async () => {
    const res = await this.getData('/ajax/compare-models.php');
    return res;
  }
}
