export interface Idiom {
  id: string;
  chinese: string;
  pinyin: string;
  meaning: string;
  story: string;
  category: string;
  imageQuery: string;
}

export const idioms: Idiom[] = [
  {
    id: "hua-long-dian-jing",
    chinese: "画龙点睛",
    pinyin: "huà lóng diǎn jīng",
    meaning: "The finishing touch that brings something to life",
    story: "During the Liang Dynasty, painter Zhang Sengyou painted four dragons on a temple wall but left out their eyes. When asked why, he said adding the eyes would make them fly away. When pressured to complete them, he painted eyes on two dragons, and they immediately came alive and flew into the sky, leaving only the two eyeless dragons on the wall.",
    category: "艺术",
    imageQuery: "chinese dragon painting temple"
  },
  {
    id: "ye-gong-hao-long",
    chinese: "叶公好龙",
    pinyin: "yè gōng hào lóng",
    meaning: "Professing to love something but being afraid when confronted with the real thing",
    story: "Lord Ye claimed to love dragons and decorated his entire house with dragon imagery. When a real dragon heard of his devotion and visited him, Lord Ye was terrified and ran away. This illustrates the difference between superficial interest and genuine appreciation.",
    category: "人性",
    imageQuery: "traditional chinese house dragon"
  },
  {
    id: "sai-weng-shi-ma",
    chinese: "塞翁失马",
    pinyin: "sài wēng shī mǎ",
    meaning: "A blessing in disguise; misfortune may be a blessing",
    story: "An old man living near the frontier lost his horse, but it returned with a fine wild horse. His son rode the new horse and broke his leg, but this injury saved him from being drafted into a war where many died. Each apparent misfortune turned into fortune, and vice versa.",
    category: "哲理",
    imageQuery: "old man horse ancient china countryside"
  },
  {
    id: "yu-gong-yi-shan",
    chinese: "愚公移山",
    pinyin: "yú gōng yí shān",
    meaning: "Perseverance can overcome any obstacle",
    story: "The Foolish Old Man lived facing two mountains that blocked his way. Despite being mocked, he began digging with his sons, saying future generations would continue. Moved by his determination, the gods sent immortals to remove the mountains. This teaches that persistent effort can achieve the impossible.",
    category: "毅力",
    imageQuery: "old man digging mountain ancient china"
  },
  {
    id: "zi-xiang-mao-dun",
    chinese: "自相矛盾",
    pinyin: "zì xiāng máo dùn",
    meaning: "Self-contradictory; to contradict oneself",
    story: "A weapon merchant boasted his spear could pierce any shield, then claimed his shield could block any spear. When asked what would happen if his spear struck his shield, he had no answer. The story illustrates the absurdity of contradictory claims.",
    category: "逻辑",
    imageQuery: "ancient chinese spear and shield"
  },
  {
    id: "ke-zhou-qiu-jian",
    chinese: "刻舟求剑",
    pinyin: "kè zhōu qiú jiàn",
    meaning: "Rigid thinking; failing to adapt to changing circumstances",
    story: "A man dropped his sword from a boat into the river and carved a mark on the boat's side to remember the spot. When the boat docked, he jumped in at the mark to search for his sword, not realizing the boat had moved. This illustrates foolish adherence to outdated methods.",
    category: "智慧",
    imageQuery: "ancient chinese boat river sword"
  },
  {
    id: "dui-niu-tan-qin",
    chinese: "对牛弹琴",
    pinyin: "duì niú tán qín",
    meaning: "Casting pearls before swine; talking to someone who cannot understand",
    story: "A skilled musician played beautiful music to a cow, but the cow just kept grazing, completely indifferent. The musician realized his sophisticated art was wasted on an audience that couldn't appreciate it. This teaches us to consider our audience when sharing knowledge.",
    category: "沟通",
    imageQuery: "musician playing instrument to cow ancient china"
  },
  {
    id: "wen-ji-qi-wu",
    chinese: "闻鸡起舞",
    pinyin: "wén jī qǐ wǔ",
    meaning: "Diligence and self-discipline; rising early to practice",
    story: "During the Jin Dynasty, friends Zu Ti and Liu Kun would wake up and practice swordplay whenever they heard the rooster crow at dawn. Through this disciplined training, they became great warriors. This idiom celebrates dedication to self-improvement.",
    category: "毅力",
    imageQuery: "warrior sword practice dawn rooster ancient china"
  },
  {
    id: "shou-zhu-dai-tu",
    chinese: "守株待兔",
    pinyin: "shǒu zhū dài tù",
    meaning: "Waiting idly for opportunities; trusting to luck rather than effort",
    story: "A farmer saw a rabbit run into a tree stump and die. He took the rabbit home for dinner and thereafter abandoned his farming to wait by the stump for more rabbits. None came, and his fields became overgrown. This warns against relying on luck instead of hard work.",
    category: "智慧",
    imageQuery: "farmer waiting by tree stump field ancient china"
  },
  {
    id: "jing-di-zhi-wa",
    chinese: "井底之蛙",
    pinyin: "jǐng dǐ zhī wā",
    meaning: "Limited perspective; narrow-mindedness",
    story: "A frog lived at the bottom of a well and thought the small circle of sky above was the entire universe. When a sea turtle told him about the vast ocean, the frog couldn't comprehend it. This illustrates how limited experience creates limited understanding.",
    category: "视野",
    imageQuery: "frog bottom of well looking up ancient china"
  },
  {
    id: "hua-she-tian-zu",
    chinese: "画蛇添足",
    pinyin: "huà shé tiān zú",
    meaning: "Ruining something by adding unnecessary details",
    story: "During a drinking contest where participants had to draw a snake, one man finished first but then added feet to his snake while waiting. Others pointed out snakes don't have feet, so his drawing was no longer a snake. He lost the contest by overembellishing.",
    category: "智慧",
    imageQuery: "drawing snake with feet ancient china"
  },
  {
    id: "san-gu-mao-lu",
    chinese: "三顾茅庐",
    pinyin: "sān gù máo lú",
    meaning: "Sincere and persistent effort to recruit talent",
    story: "Liu Bei visited Zhuge Liang's humble cottage three times to request his service as a strategist. The first two times, Zhuge Liang was not home. On the third visit, Liu Bei waited respectfully for him to wake from a nap. Moved by this sincerity, Zhuge Liang agreed to serve.",
    category: "诚意",
    imageQuery: "thatched cottage ancient china scholar"
  }
];

export const categories = [
  "All",
  "Art",
  "Human Nature",
  "Philosophy",
  "Perseverance",
  "Logic",
  "Wisdom",
  "Communication",
  "Perspective",
  "Sincerity"
];

export const categoryMap: Record<string, string> = {
  "艺术": "Art",
  "人性": "Human Nature",
  "哲理": "Philosophy",
  "毅力": "Perseverance",
  "逻辑": "Logic",
  "智慧": "Wisdom",
  "沟通": "Communication",
  "视野": "Perspective",
  "诚意": "Sincerity"
};
