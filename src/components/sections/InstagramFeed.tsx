import Image from "next/image";
import { business } from "@/config/business";
import { instagramPosts } from "@/data/instagram";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { InstagramIcon } from "@/components/ui/BrandIcons";

/** Grilla estática estilo feed: liviana y sin iframes de terceros. */
export function InstagramFeed() {
  return (
    <section aria-labelledby="instagram-title" className="py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            id="instagram-title"
            eyebrow={business.instagram.handle}
            title="Seguinos en Instagram"
            description="Novedades, modelos que llegan al local y tips para cuidar tus anteojos."
          />
          <ButtonLink
            href={business.instagram.url}
            external
            variant="outline"
            icon={<InstagramIcon size={17} />}
            className="self-start sm:self-auto"
          >
            Ver Instagram
          </ButtonLink>
        </div>

        <RevealGroup as="ul" staggerChildren={0.06} className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:mt-14 lg:grid-cols-6">
          {instagramPosts.map((post) => (
            <RevealItem as="li" key={post.id}>
              <a
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${post.caption} — ver en Instagram`}
                className="group relative block aspect-square overflow-hidden rounded-sm bg-sand"
              >
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/55 p-4 text-center text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <InstagramIcon size={22} />
                  <span className="text-xs leading-snug font-medium">{post.caption}</span>
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
