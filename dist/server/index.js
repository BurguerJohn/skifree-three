const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/country") {
      return Response.json(
        { country: request.cf?.country || null },
        { headers: { "Cache-Control": "private, no-store" } },
      );
    }
    return env.ASSETS.fetch(request);
  },
};

export default worker;
