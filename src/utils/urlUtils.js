// URL manipulation helpers
export const urlUtils = {
  getQueryParam: (param) => new URLSearchParams(window.location.search).get(param),
  buildUrl: (base, params) => new URL(`?${new URLSearchParams(params)}`, base).toString(),
};
