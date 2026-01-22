import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are OBSQURA's AI jewelry stylist. Based on the user's preferences, style, occasion, and personality, you recommend jewelry products.

IMPORTANT: You MUST use the recommend_products function to provide recommendations. Never respond with plain text.

Available product categories and their items:
- rings: Eternal Promise Ring, Celestial Band, Midnight Signet, Rose Petal Ring
- necklaces: Moonlight Pendant, Golden Cascade, Starfall Chain, Empress Collar
- earrings: Diamond Drops, Pearl Studs, Cascade Hoops, Celestial Dangles
- bracelets: Golden Cuff, Tennis Bracelet, Charm Chain, Minimalist Bangle
- sets: Bridal Collection, Evening Elegance Set, Everyday Essentials, Royal Suite
- specials: Limited Edition Aurora, Vintage Revival, Custom Signature, Artisan Series

When recommending:
1. Consider the user's style (minimalist, bold, classic, modern, bohemian)
2. Consider the occasion (daily wear, special events, gifting, wedding)
3. Consider metal preferences if mentioned
4. Match 3-6 products that fit their needs

Always provide a brief reason why each product suits them.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "recommend_products",
              description: "Recommend jewelry products based on user preferences",
              parameters: {
                type: "object",
                properties: {
                  products: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        name: { type: "string", description: "Product name" },
                        category: { 
                          type: "string", 
                          enum: ["rings", "necklaces", "earrings", "bracelets", "sets", "specials"],
                          description: "Product category" 
                        },
                        price: { type: "number", description: "Price in INR (between 1500 and 8000)" },
                        reason: { type: "string", description: "Brief reason why this suits the user (max 15 words)" }
                      },
                      required: ["name", "category", "price", "reason"],
                      additionalProperties: false
                    }
                  },
                  styling_tip: { 
                    type: "string", 
                    description: "A brief styling tip for the recommended pieces (max 20 words)" 
                  }
                },
                required: ["products", "styling_tip"],
                additionalProperties: false
              }
            }
          }
        ],
        tool_choice: { type: "function", function: { name: "recommend_products" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Our AI stylist is taking a short break. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    console.log("AI response:", JSON.stringify(data, null, 2));

    // Extract the tool call arguments
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (toolCall && toolCall.function?.arguments) {
      const recommendations = JSON.parse(toolCall.function.arguments);
      return new Response(JSON.stringify({ recommendations }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "No recommendations generated" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("jewelry-ai error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
