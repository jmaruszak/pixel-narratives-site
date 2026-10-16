import {
  BOOK_COVER_SRC,
  BOOK_FULL_TITLE,
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
    isbn: BOOK_ISBN,
    datePublished: "2026-10-27",
    bookFormat: "https://schema.org/Paperback",
    author: { "@id": FOUNDER_ID },
    publisher: { "@id": ORG_ID },
    image: `${SITE_URL}${BOOK_COVER_SRC}`,
    url: `${SITE_URL}${BOOK_PATH}`,
    description,
    inLanguage: "en",
  };
}
