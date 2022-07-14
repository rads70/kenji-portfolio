import ImageUrlBuilder from "@sanity/image-url";
import { getClient } from "./sanity.server";

const builder = ImageUrlBuilder(getClient());

export default function urlFor(source) {
   return builder.image(source);
}
