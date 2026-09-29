import { env } from "cloudflare:workers";
import { getChatGPTUser } from "@/app/chatgpt-auth";
export async function isAdmin(){const user=await getChatGPTUser();const email=(env as unknown as Record<string,string>).ADMIN_EMAIL;return !!(user&&email&&user.email.toLowerCase()===email.toLowerCase());}
export function sameOrigin(req:Request){const origin=req.headers.get("origin");return !!origin&&origin===new URL(req.url).origin;}
