import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function PublicNotFound() {
  return (
    <Container className="py-20">
      <p className="font-mono text-sm tracking-[0.16em] text-teal">404</p>
      <h1 className="mt-3 font-serif text-4xl">That page is not on the site</h1>
      <p className="mt-3 max-w-lg text-muted">
        The address does not match a public page. Use the navigation or return home.
      </p>
      <div className="mt-6">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </Container>
  );
}
