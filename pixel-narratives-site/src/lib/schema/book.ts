import {
  BOOK_AMAZON_URL,
  BOOK_APPLE_URL,
  BOOK_COVER_SRC,
  BOOK_FULL_TITLE,
  BOOK_HARDBACK_ISBN,
  BOOK_ISBN,
  BOOK_PATH,
  BOOK_SUBTITLE,
  BOOK_TITLE,
} from "../book";
import { SITE_URL } from "../siteMetadata";
import { FOUNDER_ID, ORG_ID } from "./organization";

export const BOOK_ID = `${SITE_URL}${BOOK_PATH}#book`;

export function bookEntity(description: string) {
  return {
    "@type": "Book" as const,
    "@id": BOOK_ID,
    name: BOOK_FULL_TITLE,
    alternateName: BOOK_TITLE,
    headline: BOOK_SUBTITLE,
    datePublished: "2026-10-27",
    workExample: [
      {
        "@type": "Book",
        bookFormat: "https://schema.org/Paperback",
        isbn: BOOK_ISBN,
      },
      {
        "@type": "Book",
        bookFormat: "https://schema.org/Hardcover",
        isbn: BOOK_HARDBACK_ISBN,
      },
      {
        "@type": "Book",
        bookFormat: "https://schema.org/EBook",
      },
    ],
    author: { "@id": FOUNDER_ID },
    publisher: { "@id": ORG_ID },
    image: `${SITE_URL}${BOOK_COVER_SRC}`,
    url: `${SITE_URL}${BOOK_PATH}`,
    sameAs: [BOOK_AMAZON_URL, BOOK_APPLE_URL],
    description,
    inLanguage: "en",
  };
}
