import LukeMoriLuxuryConcept, { metadata as conceptMetadata } from "./concepts/luke-mori-luxury/page";

export const metadata = conceptMetadata;

/* The root path renders the concept directly so opening the project at
   localhost:3000 lands on the work. The canonical route remains
   /concepts/luke-mori-luxury for sharing. */
export default function RootPage() {
  return <LukeMoriLuxuryConcept />;
}
