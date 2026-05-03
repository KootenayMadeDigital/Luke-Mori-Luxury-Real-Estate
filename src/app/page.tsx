import LukeMoriLuxuryExperience, { metadata as pageMetadata } from "./concepts/luke-mori-luxury/page";

export const metadata = pageMetadata;

/* The root path renders the full homepage experience directly. */
export default function RootPage() {
  return <LukeMoriLuxuryExperience />;
}
