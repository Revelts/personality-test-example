export interface PersonalityResult {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  quote: string;
  quoteEn: string;
  element: string;
  elementEn: string;
  colorName: string;
  colorHex: string;
  mostImportant: string;
  mostImportantEn: string;
  music: string;
  musicArtist: string;
  gear: string;
  gearDesc: string;
  gearDescEn: string;
  gearModel: string;
  gearImage: string;
  gearCapacity: string;
  gearSpecs: {
    usb: string;
    warranty: string;
  };
  gearLinks: {
    tokopedia: string;
    shopee: string;
    tiktokshop: string;
  };
  emoji: string;
  color: string; // Tailwind gradient class for compatibility
}

export interface Scores {
  logical: number;
  creative: number;
  empathetic: number;
  leader: number;
  adventurer: number;
}

export const personalityTypes: PersonalityResult[] = [
  {
    id: "the-extremist",
    title: "THE EXTREMIST",
    titleEn: "THE EXTREMIST",
    description: "Lo hidup di mode record on. Refleks pertama lo setiap ada momen bukan mikir, tapi ambil. Takut kehilangan lebih besar daripada takut penuh. Buat lo, kualitas bisa belakangan—yang penting kejadian dulu. Hidup terasa terlalu cepat buat diseleksi di tempat. Makanya memori lo berantakan, mentah, goyang, tapi jujur. Lo bukan orang yang rapi, tapi lo orang yang hadir penuh. Kalau hidup ini film, lo kamera handheld yang gak pernah mati baterai.",
    descriptionEn: "You live life with the record button always on. Your first reflex in any moment isn't to think — it's to capture. Your fear of missing out is stronger than your fear of running out of space. For you, quality can come later — what matters is that the moment happens first. Life moves too fast to be filtered on the spot. That's why your memories are messy, raw, shaky, but honest. You may not be neat, but you are fully present. If life were a movie, you'd be a handheld camera that never runs out of battery.",
    quote: "Kalau hidup berhenti sebentar, gue takut kelewatan.",
    quoteEn: "If life pauses for a second, I'm afraid I'll miss it.",
    element: "🔥 Api – cepat, liar, gak nunggu siap.",
    elementEn: "🔥 Fire — fast, wild, never waiting to be ready.",
    colorName: "Hot Orange",
    colorHex: "#FF6B35",
    mostImportant: "Video mentah. Versi goyang. Versi gagal. Yang penting kejadian.",
    mostImportantEn: "Raw footage. Shaky versions. Failed takes. What matters is that it happened.",
    music: "Faint",
    musicArtist: "Linkin Park",
    gear: "SanDisk Phone Drive Orange – 512 GB",
    gearDesc: "Rekam dulu. Simpan semua. Jangan mikir.",
    gearDescEn: "Record first. Save everything. Don't overthink.",
    gearModel: "SDDDC6-032C-G46P0",
    gearImage: "/images/sandisk-phone-drive-purple.png",
    gearCapacity: "32GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "5-Year Limited Warranty"
    },
    gearLinks: {
      tokopedia: "https://www.tokopedia.com/sandisk",
      shopee: "https://shopee.co.id/sandisk",
      tiktokshop: "https://www.tiktok.com/@sandisk"
    },
    emoji: "🔥",
    color: "from-orange-500 to-red-600"
  },
  {
    id: "the-endurer",
    title: "THE ENDURER",
    titleEn: "THE ENDURER",
    description: "Lo bukan tipe yang ribut, tapi lo nyimpen banyak. Bukan karena sentimentil berlebihan, tapi karena lo paham satu hal: proses itu mahal. Lo jarang hapus sesuatu bukan karena masih butuh, tapi karena belum siap melepaskan. File lama, foto blur, draft setengah jadi—itu semua bukti bahwa lo pernah bertahan di fase tertentu. Lo bukan orang yang cepat, tapi lo konsisten. Dan di dunia yang suka buru-buru, itu justru langka.",
    descriptionEn: "You're not loud, but you carry a lot. Not because you're overly sentimental, but because you understand one thing: the process is valuable. You rarely delete things — not because you still need them, but because you're not ready to let go yet. Old files, blurry photos, half-finished drafts — they're proof that you survived certain phases. You're not fast, but you're consistent. And in a world obsessed with speed, that's rare.",
    quote: "Mungkin gak kepake sekarang, tapi jangan dihapus dulu.",
    quoteEn: "Maybe it's not useful right now, but don't delete it yet.",
    element: "🪨 Tanah – stabil, nyimpen sejarah.",
    elementEn: "🪨 Earth — stable, storing history.",
    colorName: "Black",
    colorHex: "#1A1A1A",
    mostImportant: "Foto lama. File random. Bukti proses, bukan hasil.",
    mostImportantEn: "Old photos. Random files. Proof of process, not results.",
    music: "No Surprises",
    musicArtist: "Radiohead",
    gear: "SanDisk Phone Drive Black – 512 GB",
    gearDesc: "Colok, pindahin, lanjut hidup.",
    gearDescEn: "Plug in. Transfer. Keep moving.",
    gearModel: "SDDDC6-032C-G46P0",
    gearImage: "/images/sandisk-phone-drive-purple.png",
    gearCapacity: "32GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "5-Year Limited Warranty"
    },
    gearLinks: {
      tokopedia: "https://www.tokopedia.com/sandisk",
      shopee: "https://shopee.co.id/sandisk",
      tiktokshop: "https://www.tiktok.com/@sandisk"
    },
    emoji: "🪨",
    color: "from-gray-800 to-gray-950"
  },
  {
    id: "the-restrictor",
    title: "THE RESTRICTOR",
    titleEn: "THE RESTRICTOR",
    description: "Lo suka kontrol. Bukan buat pamer, tapi biar hidup gak bocor ke mana-mana. Segala sesuatu ada tempatnya, ada fungsinya, ada alasannya. Lo gak anti ribet—asal ribetnya masuk akal. Memori buat lo bukan nostalgia, tapi aset. Harus aman, harus jelas, harus bisa diakses kapan pun dibutuhkan. Lo bukan dingin, lo cuma gak mau chaos. Karena buat lo, ketenangan datang dari sistem yang jalan.",
    descriptionEn: "You like control. Not to show off, but to keep life from leaking everywhere. Everything has its place, function, and reason. You're not against complexity — as long as it makes sense. For you, memory isn't nostalgia; it's an asset. It must be secure, organized, and accessible anytime it's needed. You're not cold — you just don't like chaos. Because for you, peace comes from a system that works.",
    quote: "Ribet dikit gak apa, asal efisien.",
    quoteEn: "A little complicated is fine, as long as it's efficient.",
    element: "⚙️ Logam – presisi, dingin, terukur.",
    elementEn: "⚙️ Metal — precise, cool, measured.",
    colorName: "Black / Steel Grey",
    colorHex: "#2D2D2D",
    mostImportant: "Dokumen penting. Hal-hal yang 'harus aman'.",
    mostImportantEn: "Important documents. Things that must be kept safe.",
    music: "The Hand That Feeds",
    musicArtist: "Nine Inch Nails",
    gear: "SanDisk Phone Drive Black – 256 GB",
    gearDesc: "Satu alat. Banyak skenario.",
    gearDescEn: "One tool. Many scenarios.",
    gearModel: "SDDDC6-032C-G46P0",
    gearImage: "/images/sandisk-phone-drive-purple.png",
    gearCapacity: "32GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "5-Year Limited Warranty"
    },
    gearLinks: {
      tokopedia: "https://www.tokopedia.com/sandisk",
      shopee: "https://shopee.co.id/sandisk",
      tiktokshop: "https://www.tiktok.com/@sandisk"
    },
    emoji: "⚙️",
    color: "from-slate-700 to-slate-900"
  },
  {
    id: "the-absurdist",
    title: "THE ABSURDIST",
    titleEn: "THE ABSURDIST",
    description: "Kalau orang lain lihat HP lo, mereka mikir 'apaan sih ini?' Tapi lo tau persis kenapa semua itu ada. Screenshot receh, video random, hal gak penting—semuanya punya konteks emosional yang cuma lo yang ngerti. Lo hidup di antara logika dan absurditas, dan nyaman di situ. Buat lo, memori gak harus masuk akal untuk bernilai. Dunia sudah terlalu serius, jadi lo simpan yang aneh-aneh sebagai pengingat bahwa hidup boleh nyeleneh.",
    descriptionEn: "When other people see your phone, they think, 'What even is this?' But you know exactly why everything is there. Random screenshots, silly videos, seemingly useless things — all of them carry emotional context only you understand. You live between logic and absurdity, and you're comfortable there. For you, memories don't have to make sense to be meaningful. The world is already too serious, so you keep the weird stuff as a reminder that life is allowed to be strange.",
    quote: "Gue tau ini aneh. Tapi penting.",
    quoteEn: "I know this is weird. But it matters.",
    element: "🌀 Angin – random, bebas, gak bisa ditebak.",
    elementEn: "🌀 Wind — random, free, unpredictable.",
    colorName: "Electric Purple / Acid Green",
    colorHex: "#9D4EDD",
    mostImportant: "Screenshot gak jelas. Video random jam 3 pagi.",
    mostImportantEn: "Unclear screenshots. Random videos at 3 a.m.",
    music: "Clint Eastwood",
    musicArtist: "Gorillaz",
    gear: "SanDisk Phone Drive Purple – 512 GB",
    gearDesc: "Chaos diterima. Semua aman.",
    gearDescEn: "Chaos accepted. Everything is safe.",
    gearModel: "SDDDC6-032C-G46P0",
    gearImage: "/images/sandisk-phone-drive-purple.png",
    gearCapacity: "32GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "5-Year Limited Warranty"
    },
    gearLinks: {
      tokopedia: "https://www.tokopedia.com/sandisk",
      shopee: "https://shopee.co.id/sandisk",
      tiktokshop: "https://www.tiktok.com/@sandisk"
    },
    emoji: "🌀",
    color: "from-purple-500 to-fuchsia-600"
  },
  {
    id: "the-disruptor",
    title: "THE DISRUPTOR",
    titleEn: "THE DISRUPTOR",
    description: "Lo benci nunggu. Lo benci muter-muter. Kalau bisa langsung, ya langsung. Buat lo, waktu lebih berharga daripada estetika. File, konten, kerjaan—semua harus gesit pindah dari satu titik ke titik lain. Lo gak percaya sistem yang terlalu banyak tahap, karena hidup gak nunggu orang yang kebanyakan mikir. Lo bukan ceroboh, lo cuma alergi lambat. Dan memori? Itu bahan bakar, bukan pajangan.",
    descriptionEn: "You hate waiting. You hate unnecessary steps. If it can be done now, do it now. For you, time is more valuable than aesthetics. Files, content, work — everything must move fast from point to point. You don't trust systems with too many stages, because life doesn't wait for people who overthink. You're not careless — you're just allergic to slow. And memory? It's fuel, not decoration.",
    quote: "Kalau bisa sekarang, kenapa nunggu?",
    quoteEn: "If it can be done now, why wait?",
    element: "⚡ Listrik – cepat, nyamber, efisien.",
    elementEn: "⚡ Electricity — fast, striking, efficient.",
    colorName: "Yellow",
    colorHex: "#FFD60A",
    mostImportant: "File kerja. Konten mentah. Yang harus pindah cepat.",
    mostImportantEn: "Work files. Raw content. Things that need to move fast.",
    music: "Black Skinhead",
    musicArtist: "Kanye West",
    gear: "SanDisk Phone Drive Yellow – 512 GB",
    gearDesc: "Tanpa cloud. Tanpa nunggu.",
    gearDescEn: "No cloud. No waiting.",
    gearModel: "SDDDC6-032C-G46P0",
    gearImage: "/images/sandisk-phone-drive-purple.png",
    gearCapacity: "32GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "5-Year Limited Warranty"
    },
    gearLinks: {
      tokopedia: "https://www.tokopedia.com/sandisk",
      shopee: "https://shopee.co.id/sandisk",
      tiktokshop: "https://www.tiktok.com/@sandisk"
    },
    emoji: "⚡",
    color: "from-yellow-400 to-amber-500"
  },
  {
    id: "the-vanisher",
    title: "THE VANISHER",
    titleEn: "THE VANISHER",
    description: "Lo tipe yang kerjanya kelar tanpa perlu tepuk tangan. Gak banyak jejak, gak banyak noise. Tapi justru karena itu, lo nyimpen hal-hal kecil yang gak kelihatan penting buat orang lain. Voice note, chat lama, detail sunyi. Lo gak kolektor momen besar—lo penjaga hal-hal yang hampir hilang. Buat lo, memori itu bukan buat dipamerin, tapi buat dijagain. Tenang, fungsional, dan selalu siap kalau dibutuhkan.",
    descriptionEn: "You're the type who gets things done without needing applause. No loud traces, no unnecessary noise. Yet because of that, you keep small things that others might overlook. Voice notes, old chats, quiet details. You're not a collector of big moments — you're a guardian of things that almost disappear. For you, memory isn't for showing off, but for protecting. Calm, functional, and always ready when needed.",
    quote: "Gue simpan. Gue lanjut.",
    quoteEn: "I keep it. I move on.",
    element: "🌫️ Kabut",
    elementEn: "🌫️ Mist",
    colorName: "Black",
    colorHex: "#0D0D0D",
    mostImportant: "Voice note. Chat lama. Hal kecil yang gak boleh ilang.",
    mostImportantEn: "Voice notes. Old chats. Small things that must not be lost.",
    music: "Leave Out All The Rest",
    musicArtist: "Linkin Park",
    gear: "SanDisk Phone Drive Black – 256 GB",
    gearDesc: "Kecil. Tenang. Selalu siap.",
    gearDescEn: "Small. Quiet. Always ready.",
    gearModel: "SDDDC6-032C-G46P0",
    gearImage: "/images/sandisk-phone-drive-purple.png",
    gearCapacity: "32GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "5-Year Limited Warranty"
    },
    gearLinks: {
      tokopedia: "https://www.tokopedia.com/sandisk",
      shopee: "https://shopee.co.id/sandisk",
      tiktokshop: "https://www.tiktok.com/@sandisk"
    },
    emoji: "🌫️",
    color: "from-gray-900 to-black"
  },
  {
    id: "the-inverter",
    title: "THE INVERTER",
    titleEn: "THE INVERTER",
    description: "Saat semua orang ikut arus, lo justru mikir ulang. Bukan sok beda, tapi karena lo gak nyaman dipaksa sama pola umum. Lo lebih percaya apa yang bisa lo pegang, lo simpan, dan lo atur sendiri. Memori digital buat lo harus terasa nyata—punya kepemilikan, bukan sekadar numpang lewat. Lo jalan di ritme sendiri, dan itu tercermin dari cara lo memperlakukan data: mandiri, offline, dan gak tergantung siapa pun.",
    descriptionEn: "When everyone follows the flow, you stop and rethink. Not to be different, but because you're uncomfortable being forced into common patterns. You trust what you can hold, store, and manage yourself. Digital memory must feel real to you — owned, not borrowed. You move at your own rhythm, and it shows in how you treat your data: independent, offline, and not dependent on anyone.",
    quote: "Gue gak ikut. Gue jalan.",
    quoteEn: "I don't follow. I move.",
    element: "🌲 Kayu – natural, tahan, gak ikut tren.",
    elementEn: "🌲 Wood — natural, resilient, not trend-driven.",
    colorName: "Purple",
    colorHex: "#7209B7",
    mostImportant: "File fisik. Yang bisa lo pegang.",
    mostImportantEn: "Physical files. Things you can actually hold.",
    music: "Do I Wanna Know?",
    musicArtist: "Arctic Monkeys",
    gear: "SanDisk Phone Drive Purple – 256 GB",
    gearDesc: "Aman di tangan lo.",
    gearDescEn: "Safe in your hands.",
    gearModel: "SDDDC6-032C-G46P0",
    gearImage: "/images/sandisk-phone-drive-purple.png",
    gearCapacity: "32GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "5-Year Limited Warranty"
    },
    gearLinks: {
      tokopedia: "https://www.tokopedia.com/sandisk",
      shopee: "https://shopee.co.id/sandisk",
      tiktokshop: "https://www.tiktok.com/@sandisk"
    },
    emoji: "🌲",
    color: "from-purple-600 to-violet-700"
  },
  {
    id: "the-confessor",
    title: "THE CONFESSOR",
    titleEn: "THE CONFESSOR",
    description: "HP lo adalah ruang aman. Tempat lo nyimpen hal-hal yang gak semua orang perlu tau. Draft, voice note, versi gagal—itu semua bukan sampah, tapi proses jujur lo berdamai dengan diri sendiri. Lo gak nyari validasi dari memori, lo nyari kelegaan. Buat lo, kehilangan satu file pribadi rasanya kayak kehilangan potongan diri. Makanya lo simpan pelan-pelan, hati-hati, dan penuh rasa. Karena hidup lo bukan buat ditonton—tapi buat dipahami.",
    descriptionEn: "Your phone is a safe space. A place where you keep things not everyone needs to know. Drafts, voice notes, failed versions — they're not trash, they're your honest process of making peace with yourself. You're not seeking validation from memory; you're seeking relief. For you, losing a personal file feels like losing a piece of yourself. That's why you store things gently, carefully, and with feeling. Because your life isn't meant to be watched — it's meant to be understood.",
    quote: "Gak semua harus ditunjukin.",
    quoteEn: "Not everything has to be shown.",
    element: "💧 Air – dalem, tenang, jujur.",
    elementEn: "💧 Water — deep, calm, honest.",
    colorName: "Yellow",
    colorHex: "#FFC300",
    mostImportant: "Draft. Voice note. Versi gagal.",
    mostImportantEn: "Drafts. Voice notes. Failed versions.",
    music: "Happier Than Ever",
    musicArtist: "Billie Eilish",
    gear: "SanDisk Phone Drive Yellow – 256 GB",
    gearDesc: "Karena cerita pribadi gak boleh hilang.",
    gearDescEn: "Because personal stories shouldn't be lost.",
    gearModel: "SDDDC6-032C-G46P0",
    gearImage: "/images/sandisk-phone-drive-purple.png",
    gearCapacity: "32GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "5-Year Limited Warranty"
    },
    gearLinks: {
      tokopedia: "https://www.tokopedia.com/sandisk",
      shopee: "https://shopee.co.id/sandisk",
      tiktokshop: "https://www.tiktok.com/@sandisk"
    },
    emoji: "💧",
    color: "from-amber-400 to-yellow-500"
  }
];

export function calculatePersonality(scores: Scores): PersonalityResult {
  // Calculate total score for normalization  
  const total = scores.logical + scores.creative + scores.empathetic + scores.leader + scores.adventurer;
  
  // Find top 2 traits
  const scoreArray = [
    { type: 'logical', value: scores.logical },
    { type: 'creative', value: scores.creative },
    { type: 'empathetic', value: scores.empathetic },
    { type: 'leader', value: scores.leader },
    { type: 'adventurer', value: scores.adventurer }
  ].sort((a, b) => b.value - a.value);

  const primary = scoreArray[0].type;
  const secondary = scoreArray[1].type;
  const gap = scoreArray[0].value - scoreArray[1].value;
  
  // THE EXTREMIST - High creative + high adventurer (impulsive, capturing everything)
  // Lives in the moment, records everything, FOMO driven
  if (scores.creative >= 5 && scores.adventurer >= 4) {
    return personalityTypes[0]; // THE EXTREMIST
  }
  if ((primary === 'creative' && secondary === 'adventurer') || 
      (primary === 'adventurer' && secondary === 'creative')) {
    if (gap <= 2) {
      return personalityTypes[0]; // THE EXTREMIST
    }
  }
  
  // THE ENDURER - High logical + high empathetic (process-oriented, keeper)
  // Keeps everything for a reason, consistent, values process
  if (scores.logical >= 4 && scores.empathetic >= 4) {
    return personalityTypes[1]; // THE ENDURER
  }
  if ((primary === 'logical' && secondary === 'empathetic') || 
      (primary === 'empathetic' && secondary === 'logical')) {
    if (gap <= 2) {
      return personalityTypes[1]; // THE ENDURER
    }
  }
  
  // THE RESTRICTOR - Very high logical, low adventurer (control, structure)
  // Everything must have a system, organized, secure
  if (primary === 'logical' && gap >= 2) {
    if (scores.logical >= 6 || scores.adventurer <= 2) {
      return personalityTypes[2]; // THE RESTRICTOR
    }
  }
  if (scores.logical >= 6 && scores.empathetic <= 3) {
    return personalityTypes[2]; // THE RESTRICTOR
  }
  
  // THE ABSURDIST - High creative, scattered (random, weird, emotional context)
  // Keeps weird things that only make sense to them
  if (primary === 'creative' && gap >= 3) {
    return personalityTypes[3]; // THE ABSURDIST
  }
  if (scores.creative >= 6 && scores.logical <= 3) {
    return personalityTypes[3]; // THE ABSURDIST
  }
  
  // THE DISRUPTOR - High leader + low empathetic (fast, decisive, no-nonsense)
  // Speed is everything, hates waiting, efficiency over aesthetics
  if (primary === 'leader') {
    if (scores.leader >= 5 && scores.empathetic <= 3) {
      return personalityTypes[4]; // THE DISRUPTOR
    }
    if (gap >= 3) {
      return personalityTypes[4]; // THE DISRUPTOR
    }
  }
  if (scores.leader >= 6) {
    return personalityTypes[4]; // THE DISRUPTOR
  }
  
  // THE VANISHER - Balanced low scores (quiet, minimal, functional)
  // Gets things done quietly, keeps small things, no drama
  if (total <= 15 && total >= 8) {
    const maxScore = Math.max(...scoreArray.map(s => s.value));
    if (maxScore <= 4 && gap <= 1) {
      return personalityTypes[5]; // THE VANISHER
    }
  }
  // Also Vanisher if empathetic is high but everything else is low
  if (scores.empathetic >= 4 && total <= 14) {
    return personalityTypes[5]; // THE VANISHER
  }
  
  // THE INVERTER - High adventurer + high logical (independent, counter-culture)
  // Goes against the flow, offline > online, self-reliant
  if (scores.adventurer >= 4 && scores.logical >= 4) {
    if (scores.empathetic <= 3 && scores.leader <= 3) {
      return personalityTypes[6]; // THE INVERTER
    }
  }
  if ((primary === 'adventurer' && secondary === 'logical') || 
      (primary === 'logical' && secondary === 'adventurer')) {
    if (gap <= 2 && scores.empathetic <= 3) {
      return personalityTypes[6]; // THE INVERTER
    }
  }
  
  // THE CONFESSOR - High empathetic + high creative (emotional, private)
  // Phone is safe space, keeps personal stuff, emotionally driven
  if (scores.empathetic >= 5 && scores.creative >= 4) {
    return personalityTypes[7]; // THE CONFESSOR
  }
  if ((primary === 'empathetic' && secondary === 'creative') || 
      (primary === 'creative' && secondary === 'empathetic')) {
    if (gap <= 2 && scores.empathetic >= 4) {
      return personalityTypes[7]; // THE CONFESSOR
    }
  }
  
  // === SECONDARY FALLBACK LOGIC ===
  // If no perfect match, use primary trait with context
  
  if (primary === 'creative') {
    if (scores.adventurer >= 3) {
      return personalityTypes[0]; // THE EXTREMIST
    }
    if (scores.empathetic >= 3) {
      return personalityTypes[7]; // THE CONFESSOR
    }
    return personalityTypes[3]; // THE ABSURDIST
  }
  
  if (primary === 'logical') {
    if (scores.empathetic >= 3) {
      return personalityTypes[1]; // THE ENDURER
    }
    if (scores.adventurer >= 3) {
      return personalityTypes[6]; // THE INVERTER
    }
    return personalityTypes[2]; // THE RESTRICTOR
  }
  
  if (primary === 'adventurer') {
    if (scores.creative >= 3) {
      return personalityTypes[0]; // THE EXTREMIST
    }
    if (scores.logical >= 3) {
      return personalityTypes[6]; // THE INVERTER
    }
    return personalityTypes[0]; // THE EXTREMIST (default for adventurer)
  }
  
  if (primary === 'empathetic') {
    if (scores.creative >= 3) {
      return personalityTypes[7]; // THE CONFESSOR
    }
    if (scores.logical >= 3) {
      return personalityTypes[1]; // THE ENDURER
    }
    if (total <= 14) {
      return personalityTypes[5]; // THE VANISHER
    }
    return personalityTypes[7]; // THE CONFESSOR
  }
  
  if (primary === 'leader') {
    return personalityTypes[4]; // THE DISRUPTOR
  }
  
  // === ULTIMATE FALLBACK ===
  // Based on overall pattern
  if (total >= 18) {
    // High engagement = THE EXTREMIST or THE ABSURDIST
    return scores.adventurer >= scores.logical ? personalityTypes[0] : personalityTypes[3];
  }
  
  if (total <= 12) {
    // Low engagement = THE VANISHER or THE INVERTER
    return scores.adventurer >= 3 ? personalityTypes[6] : personalityTypes[5];
  }
  
  // Mid-range = THE ENDURER (most balanced/common)
  return personalityTypes[1];
}
