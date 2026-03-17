export default {
    async fetch(request, env) {
        const corsHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
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
                    "INSERT INTO reviews (id, date, lang, rating, name, address, purpose, message) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)"
                ).bind(
                    Date.now().toString(),
                    new Date().toLocaleString(),
                    data.lang || "",
                    data.rating || "",
                    data.name || "-",
                    data.address || "-",
                    data.purpose || "-",
                    data.message || "-"
                ).run();
                
                return new Response(JSON.stringify({ success: true }), {
                    headers: { ...corsHeaders, "Content-Type": "application/json" }
                });
            }

            if (request.method === "DELETE") {
                await env.DB.prepare("DELETE FROM reviews").run();
                return new Response(JSON.stringify({ success: true }), {
                    headers: { ...corsHeaders, "Content-Type": "application/json" }
                });
            }
        }

        return new Response("Not found", { status: 404, headers: corsHeaders });
    }
};
