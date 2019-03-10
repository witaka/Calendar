export default {
  getFile(url) {
    return fetch(url).then(response => response.text());
  }
};
