import {loadContent} from "@/lib/store";
export async function GET(){try{return Response.json(await loadContent(),{headers:{"Cache-Control":"no-store"}})}catch(e){console.error("Content read failed",e);return Response.json({error:"A tartalmak most nem tölthetők be."},{status:503})}}
