import Search from "@/components/Search";
import { Filter, Heart, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-40 md:min-h-screen w-full px-5 md:px-0">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-white font-semibold capitalize mb-3">
          Business Name Generator
        </h1>
        <Search />
      </div>

      <div className="mt-28 mb-8 flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto px-0 md:px-5">
        <div className="flex flex-col items-center text-center md:text-left">
          <Lightbulb className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-semibold mb-2">Generate Idea</h4>
          <p className="text-white text-sm md:text-base">
            Get innovative and unique business name ideas instantly based on your keyword and preferences. Our AI analyzes trends, industry keywords, and naming patterns to deliver fresh and creative options that resonate with your target audience. Explore multiple suggestions and find the one that perfectly captures your vision.
          </p>
        </div>
        <div className="flex flex-col items-center text-center md:text-left">
          <Filter className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-semibold mb-2">Filter Result</h4>
          <p className="text-white text-sm md:text-base">
            Refine your results by style, tone, or randomness to find the perfect match for your brand identity. Whether you want a modern, classic, or playful name, our filtering options help you narrow down suggestions efficiently. Save time and focus on the options that truly fit your vision.
          </p>
        </div>
        <div className="flex flex-col items-center text-center md:text-left">
          <Heart className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-semibold mb-2">Save Name</h4>
          <p className="text-white text-sm md:text-base">
            Save your favorite business names for later review or share them with your team effortlessly. Organize your preferred choices, revisit them anytime, and make the final decision with confidence. Collaboration and brainstorming are now easier, helping you select the most impactful name for your business.
          </p>
        </div>
      </div>
    </div>
  );
}
