import { SiteFooter } from "@/components/public/site-footer";
import { SiteHeader } from "@/components/public/site-header";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main id="main" className="flex-1">
        <Container className="py-20">
          <p className="font-mono text-[11px] tracking-[0.16em] text-teal">404</p>
          <h1 className="mt-3 font-serif text-4xl">That page is not on the site</h1>
          <div className="mt-6">
            <ButtonLink href="/">Back to home</ButtonLink>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
