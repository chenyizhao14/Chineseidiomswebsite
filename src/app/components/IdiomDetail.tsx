import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { idioms, categoryMap } from "../data/idioms";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function IdiomDetail() {
  const { id } = useParams<{ id: string }>();
  const idiom = idioms.find((i) => i.id === id);

  if (!idiom) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#ffffb3] via-[#ffffd9] to-[#ffffb3] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl text-[#6a381f] mb-4">Idiom not found</h2>
          <Link
            to="/"
            className="text-[#6e0d25] hover:text-[#774e24] transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffffb3] via-[#ffffd9] to-[#ffffb3]">
      {/* Header */}
      <header className="border-b-2 border-[#774e24]/20 bg-[#ffffb3]/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#6e0d25] hover:text-[#6a381f] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to list
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#6e0d25]/10 border border-[#dcab6b]/50 rounded text-[#6e0d25] mb-6">
            {categoryMap[idiom.category]}
          </div>
          <h1 className="text-7xl mb-4 text-[#6a381f] font-serif tracking-wider">
            {idiom.chinese}
          </h1>
          <p className="text-[#774e24] text-2xl mb-6 tracking-wide">
            {idiom.pinyin}
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="h-1 bg-gradient-to-r from-transparent via-[#dcab6b] to-transparent mb-8"></div>
            <p className="text-[#6a381f] text-xl leading-relaxed">
              {idiom.meaning}
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="mb-12">
          <div className="relative rounded-lg overflow-hidden border-4 border-[#dcab6b]/50 shadow-[0_0_40px_rgba(110,13,37,0.1)]">
            <div className="aspect-video bg-[#ffffd9]">
              <ImageWithFallback
                src={`https://images.unsplash.com/photo-1516198928572-c9203df4c1ed?w=1200&q=80`}
                alt={idiom.chinese}
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#6e0d25]"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#6e0d25]"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#6e0d25]"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#6e0d25]"></div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-br from-white to-[#ffffd9] border-2 border-[#dcab6b]/50 rounded-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 flex-1 bg-gradient-to-r from-[#6e0d25] to-transparent"></div>
            <h2 className="text-3xl text-[#6a381f] font-serif tracking-wider">
              Origin Story
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-l from-[#6e0d25] to-transparent"></div>
          </div>

          <div className="prose max-w-none">
            <p className="text-[#6a381f] text-lg leading-loose tracking-wide text-justify indent-8">
              {idiom.story}
            </p>
          </div>

          {/* Decorative elements */}
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-2 h-2 bg-[#6e0d25] rounded-full"></div>
            <div className="w-2 h-2 bg-[#dcab6b] rounded-full"></div>
            <div className="w-2 h-2 bg-[#774e24] rounded-full"></div>
          </div>
        </div>

        {/* Scroll pattern decoration */}
        <div className="mt-12 text-center">
          <div className="inline-block text-[#dcab6b]/50 text-6xl font-serif">
            卷
          </div>
        </div>
      </main>
    </div>
  );
}
