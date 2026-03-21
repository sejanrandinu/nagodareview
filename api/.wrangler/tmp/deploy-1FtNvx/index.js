// src/index.js
var index_default = {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    const url = new URL(request.url);
    if (url.pathname === "/api/reviews") {
      if (request.method === "GET") {
        const { results } = await env.DB.prepare(
          "SELECT * FROM reviews ORDER BY id DESC"
        ).all();
        return new Response(JSON.stringify(results), {
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
      if (request.method === "POST") {
        const data = await request.json();
        await env.DB.prepare(
          "INSERT INTO reviews (id, date, lang, rating, name, phone, address, purpose, message) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)"
        ).bind(
          Date.now().toString(),
          (/* @__PURE__ */ new Date()).toLocaleString("en-GB", { timeZone: "Asia/Colombo" }),
          data.lang || "",
          data.rating || "",
          data.name || "-",
          data.phone || "-",
          data.address || "-",
          data.purpose || "-",
          data.message || "-"
        ).run();
        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
      if (request.method === "DELETE") {
        const id = url.searchParams.get("id");
        const clearAll = url.searchParams.get("clear");
        if (id) {
          await env.DB.prepare("DELETE FROM reviews WHERE id = ?").bind(id).run();
          return new Response(JSON.stringify({ success: true }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        } else if (clearAll === "true") {
          await env.DB.prepare("DELETE FROM reviews").run();
          return new Response(JSON.stringify({ success: true }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }
        return new Response(JSON.stringify({ success: false, error: "Missing id or clear parameter" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }
    return new Response("Not found", { status: 404, headers: corsHeaders });
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
