export interface PersonalityResult {
  id: string;
  title: string;
  description: string;
  traits: string[];
  strengths: string[];
  tagline: string;
  emoji: string;
  color: string;
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
    id: "the-mastermind",
    title: "Si Mastermind",
    description: "Kamu itu tipe orang yang suka mikir strategis dan solve masalah dengan logika. Data dan fakta adalah sahabat terbaik kamu. Kalau ada problem, kamu udah punya 3 solusi sebelum orang lain selesai ngeluh.",
    traits: [
      "Analitis dan detail-oriented",
      "Suka research sebelum action",
      "Problem solver sejati",
      "Keputusan based on data"
    ],
    strengths: [
      "Critical thinking yang tajam",
      "Planning dan strategizing",
      "Objektif dalam judgement",
      "Konsisten dan terstruktur"
    ],
    tagline: "Mikir Dalam, Action Smart",
    emoji: "🧠",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "the-artist",
    title: "Si Artist",
    description: "Dunia kamu penuh warna dan imajinasi. Kamu melihat kemungkinan dimana orang lain cuma lihat batasan. Kreativitas mengalir dari segala yang kamu lakukan, dan kamu nggak takut untuk beda dari yang lain.",
    traits: [
      "Imaginative dan original",
      "Suka experiment hal baru",
      "Artistic dalam berbagai hal",
      "Out-of-the-box thinker"
    ],
    strengths: [
      "Kreativitas unlimited",
      "Innovation dan fresh ideas",
      "Aesthetic sense yang kuat",
      "Flexible dan adaptif"
    ],
    tagline: "Create Your Own Reality",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "the-connector",
    title: "Si Connector",
    description: "Kamu adalah orang yang bikin semua orang merasa dilihat dan didengar. Empati adalah superpower kamu. Kamu bisa ngerti perasaan orang bahkan sebelum mereka ngomong. Hubungan dan relasi adalah prioritas utama.",
    traits: [
      "Empati level maksimal",
      "Good listener sejati",
      "Supportive dan caring",
      "Sensitive terhadap vibes"
    ],
    strengths: [
      "Building meaningful connections",
      "Conflict resolution",
      "Team harmony keeper",
      "Emotional intelligence tinggi"
    ],
    tagline: "Connect Hearts, Build Bridges",
    emoji: "💝",
    color: "from-pink-500 to-rose-600"
  },
  {
    id: "the-commander",
    title: "Si Commander",
    description: "Born to lead! Kamu natural punya aura kepemimpinan. Kalau ada yang harus diambil keputusan atau koordinasi, orang langsung ngelirik kamu. Kamu tau cara bawa orang menuju goal dan nggak takut ambil tanggung jawab.",
    traits: [
      "Natural leader",
      "Decisive dan confident",
      "Visionary thinking",
      "Action-oriented"
    ],
    strengths: [
      "Leadership dan organizing",
      "Motivating others",
      "Strategic execution",
      "Taking responsibility"
    ],
    tagline: "Lead Bold, Inspire Many",
    emoji: "👑",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: "the-explorer",
    title: "Si Explorer",
    description: "Hidup adalah petualangan buat kamu! Kamu nggak bisa diem di comfort zone terlalu lama. Always craving for new experiences, places, and challenges. Spontanitas adalah middle name kamu.",
    traits: [
      "Adventurous spirit",
      "Spontan dan flexible",
      "Love new experiences",
      "Energetic dan aktif"
    ],
    strengths: [
      "Berani ambil risiko",
      "Quick adaptation",
      "High energy level",
      "Living in the moment"
    ],
    tagline: "Explore Everything, Fear Nothing",
    emoji: "🚀",
    color: "from-green-500 to-teal-600"
  },
  {
    id: "the-visionary",
    title: "Si Visionary",
    description: "Kamu adalah perpaduan antara logical thinking dan creative innovation. Kamu bisa lihat big picture sekaligus detail eksekusinya. Strategy meets creativity dalam diri kamu.",
    traits: [
      "Strategic dan innovative",
      "Big picture thinker",
      "Logical + Creative",
      "Future-oriented mindset"
    ],
    strengths: [
      "Innovation dengan structure",
      "Complex problem solving",
      "Strategic planning",
      "Visionary thinking"
    ],
    tagline: "Think Big, Build Smart",
    emoji: "💡",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "the-catalyst",
    title: "Si Catalyst",
    description: "Kamu adalah kombinasi leadership dan empathy. Kamu nggak cuma lead, tapi juga care sama semua orang di tim. People follow you bukan karena takut, tapi karena respect dan trust.",
    traits: [
      "Empowering leader",
      "People-centered",
      "Inspiring dan motivating",
      "Collaborative approach"
    ],
    strengths: [
      "Team empowerment",
      "Building trust",
      "Inclusive leadership",
      "Positive influence"
    ],
    tagline: "Lead with Heart, Win with Team",
    emoji: "🌟",
    color: "from-yellow-500 to-amber-600"
  },
  {
    id: "the-maverick",
    title: "Si Maverick",
    description: "Wild, creative, dan adventurous - that's you! Kamu bukan tipe yang ikut arus. Kamu create your own path dengan style yang unik. Conventional is boring buat kamu.",
    traits: [
      "Rebellious creative",
      "Highly independent",
      "Risk-taking innovator",
      "Unconventional methods"
    ],
    strengths: [
      "Creative risk-taking",
      "Bold innovation",
      "Fearless exploration",
      "Trend-setting mindset"
    ],
    tagline: "Break Rules, Make History",
    emoji: "🔥",
    color: "from-red-500 to-pink-600"
  },
  {
    id: "the-guardian",
    title: "Si Guardian",
    description: "Kamu adalah kombinasi empathy dan logical thinking. Kamu care sama orang lain tapi dengan cara yang praktis dan terstruktur. Kamu solve masalah orang dengan smart solutions.",
    traits: [
      "Caring dan practical",
      "Structured empathy",
      "Reliable problem solver",
      "Protective personality"
    ],
    strengths: [
      "Practical support",
      "Systematic caring",
      "Dependable advisor",
      "Balanced approach"
    ],
    tagline: "Care Deep, Think Clear",
    emoji: "🛡️",
    color: "from-teal-500 to-green-600"
  },
  {
    id: "the-pioneer",
    title: "Si Pioneer",
    description: "Leader dengan adventurous spirit! Kamu nggak cuma lead, tapi juga pioneer yang explore territory baru. Kamu bawa team ke tempat yang belum pernah dijelajahi sebelumnya.",
    traits: [
      "Pioneering leader",
      "Bold decision maker",
      "Adventure seeker",
      "Change driver"
    ],
    strengths: [
      "Leading change",
      "Exploring new territories",
      "Bold initiatives",
      "Inspirational courage"
    ],
    tagline: "Lead the Way, Explore the Unknown",
    emoji: "🧭",
    color: "from-indigo-500 to-purple-600"
  }
];

export function calculatePersonality(scores: Scores): PersonalityResult {
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
  
  // Map combinations to personality types
  const combination = `${primary}-${secondary}`;
  
  // Pure types (when primary dominates significantly)
  const gap = scoreArray[0].value - scoreArray[1].value;
  
  if (gap >= 3) {
    // Strong single trait
    if (primary === 'logical') return personalityTypes[0]; // Mastermind
    if (primary === 'creative') return personalityTypes[1]; // Artist
    if (primary === 'empathetic') return personalityTypes[2]; // Connector
    if (primary === 'leader') return personalityTypes[3]; // Commander
    if (primary === 'adventurer') return personalityTypes[4]; // Explorer
  }
  
  // Combination types
  if ((primary === 'logical' && secondary === 'creative') || 
      (primary === 'creative' && secondary === 'logical')) {
    return personalityTypes[5]; // Visionary
  }
  
  if ((primary === 'leader' && secondary === 'empathetic') || 
      (primary === 'empathetic' && secondary === 'leader')) {
    return personalityTypes[6]; // Catalyst
  }
  
  if ((primary === 'creative' && secondary === 'adventurer') || 
      (primary === 'adventurer' && secondary === 'creative')) {
    return personalityTypes[7]; // Maverick
  }
  
  if ((primary === 'empathetic' && secondary === 'logical') || 
      (primary === 'logical' && secondary === 'empathetic')) {
    return personalityTypes[8]; // Guardian
  }
  
  if ((primary === 'leader' && secondary === 'adventurer') || 
      (primary === 'adventurer' && secondary === 'leader')) {
    return personalityTypes[9]; // Pioneer
  }
  
  // Default fallback based on highest score
  if (primary === 'logical') return personalityTypes[0];
  if (primary === 'creative') return personalityTypes[1];
  if (primary === 'empathetic') return personalityTypes[2];
  if (primary === 'leader') return personalityTypes[3];
  if (primary === 'adventurer') return personalityTypes[4];
  
  // Ultimate fallback
  return personalityTypes[0];
}
