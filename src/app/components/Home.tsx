import { useState } from "react";
import { Link } from "react-router";
import { Search } from "lucide-react";
import { idioms, categories, categoryMap } from "../data/idioms";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredIdioms = idioms.filter((idiom) => {
    const matchesSearch =
      idiom.chinese.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idiom.pinyin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idiom.meaning.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || categoryMap[idiom.category] === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffffb3] via-[#ffffd9] to-[#ffffb3]">
      {/* Header */}
      <header className="border-b-2 border-[#774e24]/20 bg-[#ffffb3]/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-serif text-[#6e0d25] tracking-wider">
              成语典藏
            </h1>
            <p className="text-[#774e24] tracking-wide">
              Chinese Idioms Collection
            </p>
          </div>

          <div className="flex gap-4 items-center">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#774e24]/60 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search idioms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 bg-white border-2 border-[#dcab6b]/40 rounded-lg text-[#6a381f] placeholder-[#774e24]/50 focus:outline-none focus:border-[#6e0d25] transition-colors"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full border-2 transition-all text-sm ${
                    selectedCategory === category
                      ? "bg-[#6e0d25] border-[#6e0d25] text-[#ffffb3]"
                      : "bg-white border-[#dcab6b] text-[#774e24] hover:border-[#6e0d25]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Idioms Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdioms.map((idiom) => (
            <Link
              key={idiom.id}
              to={`/idiom/${idiom.id}`}
              className="group block"
            >
              <div className="h-full bg-gradient-to-br from-white to-[#ffffd9] border-2 border-[#dcab6b]/40 rounded-lg p-6 hover:border-[#6e0d25] hover:shadow-[0_0_30px_rgba(110,13,37,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-[#6e0d25]/10 border border-[#dcab6b]/50 rounded text-[#6e0d25] text-sm mb-3">
                    {categoryMap[idiom.category]}
                  </div>
                  <h3 className="text-3xl mb-2 text-[#6a381f] font-serif tracking-wider">
                    {idiom.chinese}
                  </h3>
                  <p className="text-[#774e24] text-sm mb-3">{idiom.pinyin}</p>
                </div>
                <p className="text-[#6a381f]/80 leading-relaxed line-clamp-2">
                  {idiom.meaning}
                </p>
                <div className="mt-4 text-[#6e0d25] text-sm group-hover:translate-x-2 transition-transform inline-block">
                  More details →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredIdioms.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#774e24]/60 text-xl">No idioms found</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-[#dcab6b]/30 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-[#774e24]/70 text-sm tracking-wider">
            传承中华文化 · Preserving Chinese Heritage
          </div>
        </div>
      </footer>
    </div>
  );
}
