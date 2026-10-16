export const BOOK_TITLE = "Insert Door Metaphor";
export const BOOK_SUBTITLE = "AI, Ideas and The New Cost of Trying";
export const BOOK_FULL_TITLE = `${BOOK_TITLE}: ${BOOK_SUBTITLE}`;
export const BOOK_ISBN = "9798160711751";
export const BOOK_PATH = "/book";
export const BOOK_COVER_SRC = "/images/book-cover.jpg";
export const BOOK_DESK_SRC = "/images/book-desk.jpg";
export const BOOK_DATE_LINE = "Coming October 27, 2026.";

export const BOOK_DESCRIPTION_PARAS = [
  "For most of our lives, good ideas have come with a price tag.",
  "You needed the right skills, the right people, enough money, or enough time. Sometimes an idea wasn't worth pursuing simply because finding out whether it would work was too expensive.",
  "Artificial intelligence is changing that equation.",
  "Things that once required specialized expertise, significant investment, or months of work can now be explored in an afternoon. But this isn't a book about replacing people with AI, automating everything, or getting rich overnight.",
  "It's about reconsidering what's possible.",
  "Through personal stories, practical examples, and a healthy dose of trial and error, Jordan Maruszak explores how AI is changing the way we create, solve problems, and pursue opportunities. You don't need to understand every new technology. You don't need to have all the answers.",
  "You might just need to try the door.",
] as const;

export const BOOK_DESCRIPTION = BOOK_DESCRIPTION_PARAS.join(" ");

export const BOOK_AUTHOR_PARAS = [
  "Jordan Maruszak is the founder of Pixel Narratives, where he helps businesses put AI to work. Before starting the company, he spent more than 15 years in financial services working with business owners and leadership teams.",
  "His interest in AI began with creative experimentation and grew into building software, developing business systems, and helping companies explore new opportunities.",
] as const;
