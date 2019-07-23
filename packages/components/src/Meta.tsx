import React from "react";

// taken from https://github.com/Leko/slides

type Props = {
  title: string;
  description?: string;
  locale?: string;
  publishedAt: Date;
  slug?: string;
};

const Meta = ({
  title,
  description = title,
  locale = "ja_JP",
  publishedAt,
  slug = title
}: Props) => (
  <>
    <meta name="twitter:description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content={locale} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content="article" />
    <meta
      property="og:url"
      content={`https://slides.naturalclar.dev/${slug}/`}
    />
    <meta
      property="og:image"
      content={`https://slides.naturalclar.dev/${slug}.png`}
    />
    <meta
      property="article:published_time"
      content={publishedAt.toISOString()}
    />
    <meta property="article:author" content="naturalclar" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta
      name="twitter:image"
      content={`https://slides.naturalclar.dev/${slug}.png`}
    />
    <title>{title}</title>
    <link
      rel="alternate"
      type="application/json+oembed"
      href={`https://slides.naturalclar.dev/${slug}/oembed.json`}
      title={title}
    />
  </>
);

export default Meta;
