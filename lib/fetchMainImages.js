import { getClient } from "./sanity.server";

export async function getMainImages() {
   const res = await getClient().fetch(
      `*[_type == 'work']{"imageUrl": imageMain.asset->url, "slug":slug.current}`
   );

   return res;
}
