import { Metadata } from "next";
import Link from "next/link";

const title = "Projects";
export const metadata: Metadata = {
  title: title,
  description: `Software projects developed by Jared Rhizor.`,
  openGraph: {
    images: [`/api/og?text=${encodeURIComponent(title)}`],
  },
};

export default function ProjectsPage() {
  return (
    <main className="max-w-2xl">
      <h1 className="text-4xl font-light leading-tight">Projects</h1>

      <div className="prose -mt-4 max-w-2xl prose-h2:mt-8 prose-h2:text-sm prose-h2:font-bold prose-h2:uppercase prose-h2:tracking-wider prose-h2:text-neutral-400 prose-h3:mb-0 prose-p:mb-4 prose-p:text-[clamp(1.8rem,_2.0vw,_1.9rem)] prose-p:text-lg prose-p:leading-normal prose-p:text-black prose-p:antialiased prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-neutral-400 hover:prose-a:underline-offset-1">
        <h2>Active</h2>

        <h3>
          <a href="https://www.elmohq.com/">Elmo</a>
        </h3>
        <p>Open source AI search optimization.</p>

        <h3>
          <a href="https://www.poach.vc/">Poach</a>
        </h3>
        <p>Find early stage founders by tracking the best VCs.</p>

        <h2>Sold</h2>

        <h3>
          <a href="https://mealbymeal.com/">MealByMeal</a>
        </h3>
        <p>
          Track calories and macros over text message. Sold in 2025 for a small
          amount.
        </p>

        <h2>Maintenance Mode</h2>

        <h3>
          <a href="https://www.shelved.domains/">Shelved.Domains</a>
        </h3>
        <p>Helping founders buy and sell their unused domain names.</p>
        <h3>
          <a href="https://otamatunes.com/">Otamatunes</a>
        </h3>
        <p>Sheet music for the Otamatone.</p>
        <h3>
          <a href="https://invite.sh/">Invite</a>
        </h3>
        <p>Easily create calendar events in any timezone.</p>
        <h3>
          <a href="https://robinwords.com/">RobinWords</a>
        </h3>
        <p>Fun word game with a daily challenge.</p>
        <h3>
          <a href="https://www.favicon.to/">Favicon Generator</a>
        </h3>
        <p>Generate a simple favicon from 10,000+ React Icons.</p>
        <h3>
          <a href="https://fauna.so/">Fauna</a>
        </h3>
        <p>A store featuring products with AI art. Used for testing ads.</p>

        <h2>Graveyard</h2>
        <h3>
          <a href="https://www.amor.dev/">Amor</a>
        </h3>
        <p>Find cracked engineers with green GitHubs.</p>
        <h3>
          <a href="https://www.koala.fyi/">Koala</a>
        </h3>
        <p>Track your domain authority and backlinks across all your sites.</p>
        <h3>
          <a href="https://keywordgems.com/">KeywordGems</a>
        </h3>
        <p>Automatic, comprehensive keyword research for SEO.</p>
        <h3>
          <a href="https://www.altnado.com/">Altnado</a>
        </h3>
        <p>
          Generate alt text for images directly in your CMS. The non-plugin
          installation approach did not resonate with users. It&apos;s also hard
          to attribute SEO differences specifically to adding alt text. The
          people that really need this are large e-commerce brands with millions
          of SKUs.
        </p>
        <h3>
          <a href="https://stoat.dev/">Stoat</a>
        </h3>
        <p>
          Helped developers understand their build artifacts and build metrics.
          If this was built into GitHub people would love it, but selling it as
          a separate product proved to be a challenge.
        </p>
        <h3>
          <a href="https://www.presetbot.com/">PresetBot</a>
        </h3>
        <p>
          Applied Lightroom presets with an API. You can read about why
          PresetBot failed in{" "}
          <Link href="/posts/building-a-waitlist-the-wrong-way/">
            this blog post
          </Link>
          .
        </p>
        <h3>
          <a href="https://www.audiencegarden.com/">AudienceGarden</a>
        </h3>
        <p>
          Helped grow your following on Twitter via replies. Abandoned due to
          high costs, long ramp up time to build credibility, and significant
          platform risk.
        </p>
        <h3>
          <a href="https://www.interlinked.fyi/">Interlinked</a>
        </h3>
        <p>
          Compared connector coverage across data integration platforms.
          There&apos;s definitely value in understanding the feature space of
          connectors, but accurately synthesizing the data is difficult and
          finding people at exactly the right time during the purchasing process
          is even more difficult.
        </p>
        <h3>
          <a href="https://withcalories.com/">WithCalories</a>
        </h3>
        <p>
          Directory of restaurants in San Francisco with calorie information on
          the menu. This drove a small amount of traffic to MealByMeal.
        </p>
        <h3>
          <a href="https://www.vinylinspector.com/">Vinyl Inspector</a>
        </h3>
        <p>
          Chrome extension to better visually inspect photos of records on eBay
          to see if they are scratched. Built for a specific online community
          that ultimately hated it.
        </p>
        <h3>
          <a href="https://github.com/jrhizor/elelem">Elelem</a>
        </h3>
        <p>
          A simple LLM framework in TypeScript with OpenTelemetry baked in. This
          was built for MealByMeal before other frameworks had nice interfaces
          for working with multiple LLM providers and tracing, but Vercel&apos;s{" "}
          <a href="https://sdk.vercel.ai/">AI SDK</a> and others are much better
          now and should be used instead.
        </p>
      </div>
    </main>
  );
}
