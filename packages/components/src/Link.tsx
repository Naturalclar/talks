import React from "react";

type Props = {
  href: string;
};

export const Link: React.FC<Props> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
