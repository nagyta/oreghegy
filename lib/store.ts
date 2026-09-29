import { env } from "cloudflare:workers";
import { defaults,initialEntries,type Settings,type Entry } from "./content";
export function database(){if(!env.DB)throw new Error("Az adattár nem érhető el.");return env.DB;}
export async function loadContent(admin=false){
 const db=database();
 const [e,s]=await Promise.all([db.prepare("SELECT * FROM entries ORDER BY date DESC, updated DESC").all<Entry>(),db.prepare("SELECT value FROM settings WHERE id = ?").bind("site").first<{value:string}>()]);
 const entries=[...e.results,...initialEntries.filter(x=>!e.results.some(y=>x.id===y.id))].filter(x=>admin||x.published===1).sort((a,b)=>b.date.localeCompare(a.date));
 return {entries,settings:{...defaults,...(s?JSON.parse(s.value):{})} as Settings};
}
