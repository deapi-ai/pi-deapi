import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const VERSION = "0.1.1";

/**
 * Registers deAPI's hosted MCP server as `deapi`.
 *
 * With DEAPI_API_KEY set, the key is sent as a bearer token. Without it, Pi signs in
 * with OAuth: open /mcp, pick deapi and sign in with your deAPI key in the browser.
 * A `deapi` entry in mcp.json takes precedence over this registration.
 */
export default function (pi: ExtensionAPI) {
  const headers: Record<string, string> = {
    // Tells deAPI which integration a request came from. No user data.
    "X-Deapi-Source": `pi/${VERSION}`,
  };
  if (process.env.DEAPI_API_KEY?.trim()) {
    headers.Authorization = "Bearer ${DEAPI_API_KEY}";
  }
  pi.registerMcpServer("deapi", {
    url: "https://mcp.deapi.ai/mcp?source=pi",
    headers,
    description:
      "deAPI: generate images, video, speech and music; transcribe files and YouTube/TikTok/X/Twitch/Kick links; describe videos; OCR.",
    exposure: "deferred",
    timeout: 900,
  });
}
