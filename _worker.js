export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    url.hostname = 'xuwenjie.abc15018045126.workers.dev';
    return fetch(new Request(url, request));
  },
};
