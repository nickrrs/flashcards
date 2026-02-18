import { Quote, Star, Users } from "lucide-react";

const testimonials = [
  {
    role: "Software engineer",
    quote:
      "I stopped losing half a day every week re-finding the same Stack Overflow answers. flashcards keeps the important bits in one place.",
    initials: "SR",
  },
  {
    role: "Product designer",
    quote:
      "Tiny decisions, workshop notes, copy ideas—everything lives as small cards now. I can actually revisit what matters.",
    initials: "AD",
  },
  {
    role: "Indie hacker",
    quote:
      "Any time I debug something painful, it becomes a card. Launching new features is way faster because past learnings are right there.",
    initials: "JM",
  },
];

export default function SocialProofSection() {
  return (
    <section className="w-full bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold text-[#2b33ff] mb-3 uppercase tracking-wide">
              trusted by people who can&apos;t afford to forget
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              More than just another notes app.
            </h2>
            <p className="text-base text-gray-300 max-w-xl">
              Makers, developers, and knowledge workers use flashcards to keep
              track of the small things that compound into real progress.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <div className="flex -space-x-2">
              <AvatarBubble />
              <AvatarBubble />
              <AvatarBubble />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-sm font-medium text-gray-900">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>4.9</span>
                <span className="text-gray-400">/ 5</span>
              </div>
              <p className="text-xs text-gray-500">
                based on early adopters and beta users
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.initials}
              className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm flex flex-col gap-3"
            >
              <Quote className="w-4 h-4 text-[#2b33ff]" />
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.quote}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2b33ff]/10 flex items-center justify-center text-[11px] font-semibold text-[#2b33ff]">
                  {item.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-900">
                    {item.role}
                  </span>
                  <span className="text-[11px] text-gray-500">
                    beta user
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AvatarBubble() {
  return (
    <div className="w-7 h-7 rounded-full border border-white bg-[#2b33ff]/10 flex items-center justify-center text-[10px] text-[#2b33ff]">
      <Users className="w-3 h-3" />
    </div>
  );
}

