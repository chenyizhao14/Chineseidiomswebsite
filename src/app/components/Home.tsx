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
    <div className="min-h-screen bg-gradient-to-b from-[#f5ebe0] via-[#ede0d4] to-[#f5ebe0]">
      {/* Header */}
      <header className="border-b-2 border-[#a67c52]/30 bg-[#faf6f1]/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-6xl mb-3 font-serif text-[#8b6f47] tracking-wider">
              成语典藏
            </h1>
            <p className="text-[#a67c52] text-lg tracking-widest">
              Chinese Idioms Collection
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b6f47]/60 w-5 h-5" />
              <input
                type="text"
                placeholder="Search idioms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[#a67c52]/40 rounded-lg text-[#4a3f35] placeholder-[#8b6f47]/50 focus:outline-none focus:border-[#8b6f47] transition-colors"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full border-2 transition-all ${
                  selectedCategory === category
                    ? "bg-[#8b6f47] border-[#8b6f47] text-white"
                    : "bg-white border-[#a67c52]/40 text-[#8b6f47] hover:border-[#8b6f47]"
                }`}
              >
                {category}
              </button>
            ))}
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
              <div className="h-full bg-gradient-to-br from-white to-[#faf6f1] border-2 border-[#a67c52]/30 rounded-lg p-6 hover:border-[#8b6f47] hover:shadow-[0_0_30px_rgba(139,111,71,0.2)] transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-[#8b6f47]/10 border border-[#a67c52]/40 rounded text-[#8b6f47] text-sm mb-3">
                    {categoryMap[idiom.category]}
                  </div>
                  <h3 className="text-3xl mb-2 text-[#6b5541] font-serif tracking-wider">
                    {idiom.chinese}
                  </h3>
                  <p className="text-[#8b6f47] text-sm mb-3">{idiom.pinyin}</p>
                </div>
                <p className="text-[#5a4a3a] leading-relaxed line-clamp-2">
                  {idiom.meaning}
                </p>
                <div className="mt-4 text-[#8b6f47] text-sm group-hover:translate-x-2 transition-transform inline-block">
                  More details →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredIdioms.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#8b6f47]/60 text-xl">No idioms found</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-[#a67c52]/30 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-[#8b6f47]/60 text-sm tracking-wider">
            传承中华文化 · Preserving Chinese Heritage
          </div>
        </div>
      </footer>
    </div>
  );
}
