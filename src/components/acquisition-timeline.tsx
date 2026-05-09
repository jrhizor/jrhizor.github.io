import Link from "next/link";
import MealByMealCommits from "./mealbymeal-commits";

const changelog = [
  {
    title: "First Commit",
    description: <>Development begins (intermittently) on <strong>mealtext.app</strong>. The focus is on evaluating and testing accuracy of extracting ingredients (and their quantities) from a description of a meal using LLMs and finding a good method of matching the ingredients to nutrition databases.</>,
    date: "Jun 1, 2023",
    showCommitsChart: true,
  },
  {
    title: "Domain Purchase",
    description: <>In preparation for launch, I decided to switch to a <strong>.com</strong> domain. It turns out that most nutrition-related domains you can think of are taken. I ended up getting attached to the idea of improving diet "meal by meal" and ended up purchasing <strong>mealbymeal.com</strong> for a few hundred dollars.</>,
    date: "Sept 17, 2023",
  },
  {
    title: "Launched!",
    description: "The MVP is working so I start to share information about MealByMeal and post on directories.",
    date: "Nov 7, 2023",
  },
  {
    title: "First Paid User",
    description: "My mom shares info about the launch to my aunt, who shares it with my cousin (who coincidentally is the person that got me into software in the first place many years ago). He becomes the first paid user.",
    date: "Nov 8, 2023",
  },
  {
    title: "First Non-Affiliated Revenue",
    description: "A couple days later, I get my first paid subscriptions from two strangers. This is my first time getting real subscription revenue across any of my own personal projects. One is from Google Ads and one from the 'There's an AI for That' directory.",
    date: "Nov 10, 2023",
  },
  {
    title: "ProductHunt Launch",
    description: "After getting feedback from initial users and polishing up the product, I launch on ProductHunt, getting #3 for the day! This jumps revenue from $37 MRR to exactly $100 MRR post launch.",
    date: "Dec 14, 2023",
  },
  {
    title: "Peak MRR",
    description: "A month later, I reach the lifetime peak MRR of just $114.", 
    date: "Jan 5, 2024",
  },
  {
    title: "Searchable on Google",
    description: "It turned out that buying the domain was somewhat problematic. Until now, searches for mealbymeal wouldn't return the website; it would autocorrect to 'meal meal' and show just general meal-related information.",
    date: "Jan 15, 2024",
  },
  {
    title: "Poach Launch",
    description: <>I get my first revenue for one of several other projects I'm experimenting with (<a href="https://www.poach.vc" target="_blank" rel="nofollow">Poach</a>). This starts to grow much more rapidly and serves a wake-up call that I should not be spending as much time on MealByMeal.</>,
    date: "Dec 9, 2024",
  },
  {
    title: "Listed For Sale",
    description: "I decide to double down on other projects and list MealByMeal for sale. After looking into the options (Microns, Flippa, etc) I decide to go with Acquire. Their valuation tool estimated a valuation between $5-25k, so I decide to list for $20k, which at the time was an extremely aggressive 20x ARR multiple. I'm expecting to sell for about half, but I figure I may as well go for the higher end of the valuation calculator's range just to see. I build a small 'data room' file with screenshots from ChartMogul and details about which metrics are organic vs paid.",
    date: "Dec 26, 2024",
  },
  {
    title: "Approved by Acquire",
    description: "Since I shared my Stripe revenue and list in their recommended range, approval for listing is pretty fast.",
    date: "Dec 27, 2024",
  },
  {
    title: "Listing Goes Live",
    description: "I pay the fee and the listing goes live. Since this is around the holidays, I don't expect much interest.",
    date: "Dec 28, 2024",
  },
  {
    title: "First Interest",
    description: "I get my first NDA requests from prospective buyers. One of them offers $4.5k (3.75x MRR). Since it is so early after listing, I pass on the offer. In hindsight, this offer was extremely reasonable and I ended up taking less.",
    date: "Dec 31, 2024",
  },
  {
    title: "First Call",
    description: "Some of the potential buyers start to schedule video calls to discuss the product. My first call is with a VC who offers a laughably bad deal: $10k for 50%. This completely defeats the point of selling a micro-SaaS to focus on other projects, so of course I decline.",
    date: "Jan 2, 2025",
  },
  {
    title: "Second Call",
    description: "My second video call is with an investor who also heads a software agency. There's a room full of developers on the call who are solely interested in the implementation details. They have no interest in MealByMeal and are transparently digging for information that will help them build something similar...",
    date: "Jan 4, 2025",
  },
  {
    title: "Price Drop",
    description: "It's apparent that most of the potential buyers are not seriously interested, and the number of inbound NDA requests are decreasing. I decide to drop the list price to $10k, which is still aggressive at 10x ARR, but I'm hoping the decent domain rating, social proof, and organic traffic from some difficult to rank for directories like AlternativeTo will help the sale.",
    date: "Jan 8, 2025",
  },
  {
    title: "First Serious Call",
    description: "My third video call is my first and only serious call. It's with a trio of marketers who are buying a portfolio of tiny software products that they then grow with their marketing expertise. They ask good questions and seemed upfront and honest. Ultimately they decided to pass, but it was the only call I took that felt worth taking after the fact.",
    date: "Jan 10, 2025",
  },
  {
    title: "Serious Offer",
    description: "I receive a (seemingly) serious offer at $5k. They try out the product, ask specific questions, and send an official LOI through Acquire. It's a little strange that they use their own non-boilerplate LOI, but I make a counter offer for $6k.",
    date: "Mar 2, 2025",
  },
  {
    title: "Deal Falls Through",
    description: "They decide not to accept the counter offer and don't want to continue with their original offer either. Something strange is happening with this buyer too; they end up deleting their Acquire account (or perhaps they were banned). I'm not sure if they ever would have gone through with the original offer, but something felt off about the whole thing.",
    date: "Mar 7, 2025",
  },
  {
    title: "Actual Buyer Reaches Out",
    description: <span>I receive the first message and questions from the eventual actual buyer, Josh Shafley of <Link href="https://keenwa.co/" target="_blank">Keenwa</Link>.</span>,
    date: "Apr 5, 2025",
  },
  {
    title: "Final Offer",
    description: "They offer $3.5k. I counter with $4k and a promise to 'move fast'.",
    date: "Apr 7, 2025",
  },
  {
    title: "LOI Accepted",
    description: "They respond with an offer of $3.6k and offer to 'send it today'. This is at 3x revenue, which is also a reasonable amount for a low-growth app. After I agree, they send the LOI right away (which uses the standard boilerplate), which I accept immediately. Since we're going through the standard Acquire process which uses Escrow, it turns out that we can't actually do everything else in one day (we're both doing an acquistion like this for the first time and didn't realize).",
    date: "Apr 14, 2025",
  },
  {
    title: "Escrow Issues",
    description: "The seller is running into issues with Escrow which requires contacting their support. This makes me feel worried the deal might fall through or (especially given the last prospective buyer) that there's something shady going on.",
    date: "Apr 15, 2025",
  },
  {
    title: "Funds Sent",
    description: "False alarm! The issue is resolved and funds are sent right away. I make a Google Doc to track all of the assets that require transferring. It's surprising how many moving parts there are: domain, code, secrets, database contents, auth, email sending, Stripe, Twilio (phone number), other APIs, five social media accounts, ads and creative files, etc. I also removed a few dependencies (Redis, Crisp, etc) that the buyer wasn't interested in keeping.",
    date: "Apr 16, 2025",
  },
  {
    title: "Transfer Progress",
    description: "Everything is transferred except for the database, which requires a small downtime window. There's a bit of back and forth to verify access for so many different items.",
    date: "Apr 18, 2025",
  },
  {
    title: "Database Transfer",
    description: "I transfer a SQL dump. There are a couple of small issues that require debugging but we get everything working quickly.",
    date: "Apr 21, 2025",
  },
  {
    title: "Fully Functional",
    description: "There's one final webhook that needed configuring, and the site was fully functional under the buyer's control.",
    date: "Apr 22, 2025",
  },
  {
    title: "Escrow Complete",
    description: "The buyer marks everything as received in Escrow, and the money is sent over ($3.3k after the escrow fee).",
    date: "Apr 23, 2025",
  },
  {
    title: "Money in Bank",
    description: "I receive the money in my bank account.",
    date: "Apr 25, 2025",
  },
];

export default function AcquisitionTimeline() {
  return (
    <div className="max-w-2xl pl-2 pr-6 py-6 bg-muted rounded-lg">
      <div className="relative">
        {changelog
          .map(({ title, description, date, showCommitsChart }, index) => (
            <div key={index} className="group relative">
              {/* Content */}
              <div className="flex items-start">
                <div className="mt-3 mr-5 flex flex-col gap-2 shrink-0 w-[75px] sm:w-[90px] text-end">
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {date}
                  </span>
                </div>
                <div className="relative pb-10 border-l-2 group-last:pb-4 pl-6 sm:pl-8 space-y-2">
                  {/* Timeline Dot */}
                  <div className="absolute h-3 w-3 -translate-x-1/2 -left-px top-4 rounded-full border-2 border-primary bg-background" />

                  <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {description}
                  </p>
                  {showCommitsChart && (
                    <div className="mt-4">
                      <MealByMealCommits />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
