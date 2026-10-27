import Link from "next/link";
import NewsArticlePage from "../../../components/NewsArticlePage";
import { requireNewsItem } from "../../../lib/news";
import { buildPageMetadata } from "../../../lib/siteMetadata";

const item = requireNewsItem("from-unexpected-setback-to-ai-entrepreneur");

export const metadata = buildPageMetadata({
  title: item.metaTitle,
  description: item.metaDescription,
  path: `/news/${item.slug}`,
});

export default function BookPressReleasePage() {
  return (
    <NewsArticlePage item={item}>
      <p>
        What started with a curiosity about AI-generated commercials, followed
        by an unexpected broken leg, eventually led Madison entrepreneur Jordan
        Maruszak to launch an artificial intelligence business and write his
        first book.
      </p>
      <p>
        Insert Door Metaphor: AI, Ideas and The New Cost of Trying, released
        October 27th on Amazon and Apple Books, explores how artificial
        intelligence is changing the economics of pursuing new ideas, solving
        problems, and building businesses.
      </p>
      <p>
        Maruszak&apos;s interest in AI began in 2025, when advancements in
        AI-generated video made him wonder whether he could create social media
        ads and tv commercials using the technology. A few weeks later, a
        broken leg left him with plenty of time to experiment.
      </p>
      <p>
        One of those early experiments was Island Time in Oxford, a song about
        Ole Miss quarterback Trinidad Chambliss that spread through the Ole Miss
        fanbase and surpassed one million views.
      </p>
      <p>
        As more people began approaching him with ideas and requests, Maruszak
        recognized opportunities extending well beyond creative projects.
      </p>
      <p>
        He went on to establish Pixel Narratives, a Mississippi-based company
        that helps businesses apply AI and technology through implementation,
        training, online visibility, and marketing.
      </p>
      <p>
        Working with business owners also exposed him to a recurring challenge:
        much of the conversation surrounding AI focused on quick fixes,
        automation, and efficiency, while overlooking broader business
        objectives.
      </p>
      <p>
        &ldquo;I kept seeing businesses approached about AI by asking what tasks
        they could automate or how much time they could save,&rdquo; Maruszak
        said. &ldquo;Those are fair questions, but I think there&apos;s a much
        bigger opportunity. What are you trying to accomplish? How do you
        measure results? What would you do if the perceived cost of trying
        something new wasn&apos;t holding you back?&rdquo;
      </p>
      <p>That perspective became the foundation of Insert Door Metaphor.</p>
      <p>
        Written for business owners, professionals, and anyone curious about
        AI&apos;s possibilities, the book offers an accessible, firsthand
        perspective on navigating technological change.
      </p>
      <p>
        Drawing on his own experiences, Maruszak encourages readers to
        reconsider assumptions about what they can accomplish and recognize
        opportunities that may have previously seemed too expensive,
        complicated, or time-consuming to pursue.
      </p>
      <p>
        The book also reflects its own premise. Maruszak used AI tools
        throughout the creative and publishing process, bringing an idea from
        concept to publication in a matter of months.
      </p>
      <p>
        &ldquo;AI has changed the cost of trying things,&rdquo; Maruszak said.
        &ldquo;The question is whether we&apos;ve changed the way we think about
        what&apos;s possible.&rdquo;
      </p>
      <p>
        Insert Door Metaphor: AI, Ideas and The New Cost of Trying is available
        in ebook, paperback, and hardcover editions through Amazon, with the
        ebook also available through Apple Books.
      </p>
      <p>
        Readers can learn more about the book, access the first chapter for
        free, and find purchase links at{" "}
        <Link href="/book">https://www.pixelnarratives.studio/book</Link>.
      </p>
    </NewsArticlePage>
  );
}
