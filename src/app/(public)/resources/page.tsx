import type { Metadata } from "next";
import { PageHero } from "@/components/public/page-hero";
import { SampleNote } from "@/components/public/sample-note";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";
import { listFaqs, listPosts } from "@/server/content/queries";

export const metadata: Metadata = {
  title: "Resources",
  description: "Briefings and questions about Apsivra data modernization work.",
};

export default async function ResourcesPage() {
  const [posts, faqs] = await Promise.all([listPosts(), listFaqs()]);
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Briefings and common questions"
        lede="Short explanations of profiling, assessments, and legacy files. These articles are sample briefings, not customer research."
        image={pageImages.resources}
      />
      <Container className="space-y-12 py-14">
        <SampleNote>Sample briefings written for the site. They are not attributed to outside analysts.</SampleNote>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-t border-line pt-6">
              <h2 className="font-serif text-3xl">{post.title}</h2>
              <p className="mt-3 text-muted">{post.body}</p>
            </article>
          ))}
        </div>
        <div>
          <h2 className="font-serif text-3xl">Questions</h2>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <div key={faq.id} className="py-4">
                <dt className="font-semibold">{faq.question}</dt>
                <dd className="mt-2 text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </>
  );
}
