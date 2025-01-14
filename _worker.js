export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    url.hostname = 'sub.cmliussss.workers.dev';
    return fetch(new Request(url, request));
  },
};
