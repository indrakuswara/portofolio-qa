export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/Indra_Kuswara_CV_ATS.pdf") {
      url.pathname = "/IndraKuswara_CV.pdf";
      return Response.redirect(url, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
