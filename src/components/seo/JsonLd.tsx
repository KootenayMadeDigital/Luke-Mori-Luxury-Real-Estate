import { toJsonLd } from "@/lib/seo";

type Props = {
  data: unknown;
};

export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toJsonLd(data) }}
    />
  );
}
