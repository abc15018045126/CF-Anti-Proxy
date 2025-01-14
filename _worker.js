export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    url.hostname = '85.194.246.115';
    return fetch(new Request(url, request));
  },
};
