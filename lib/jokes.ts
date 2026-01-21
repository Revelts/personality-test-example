export interface JokeResponse {
  joke: string;
  emoji: string;
}

// Context-aware jokes dalam Bahasa Indonesia
export const getJoke = (questionId: number, answerId: string): JokeResponse => {
  const jokes: Record<string, JokeResponse> = {
    // Question 1 - Weekend plans
    "1a": { 
      joke: "Social butterfly detected! Kamu tipe orang yang energy-nya naik kalau ketemu orang banyak. Weekend gak seru kalau sendirian kan? 🎉",
      emoji: "🎉"
    },
    "1b": { 
      joke: "Petualang sejati nih! Kamu tipe yang Google Maps-nya penuh pin 'mau kesini'. Comfort zone? Nggak kenal! 🗺️",
      emoji: "🗺️"
    },
    "1c": { 
      joke: "Creative mode: ON! Weekend kamu produktif banget. Netflix? Nanti dulu, ada project yang belum selesai! ✨",
      emoji: "✨"
    },
    "1d": { 
      joke: "Always learning! Kamu tipe yang weekend juga tetep upgrade skill. Self-improvement adalah hobby kamu! 📚",
      emoji: "📚"
    },

    // Question 2 - Helping friends
    "2a": { 
      joke: "Pendengar professional! Kadang orang cuma butuh didengar, dan kamu ngerti banget itu. Therapy session gratis nih! 👂",
      emoji: "👂"
    },
    "2b": { 
      joke: "Mr./Ms. Solution! Kamu langsung mode problem-solver. Dalam 5 menit udah ada action plan A, B, dan C! 🎯",
      emoji: "🎯"
    },
    "2c": { 
      joke: "Healing through adventure! Sometimes the best solution is to get out and clear your head. Smart move! 🌿",
      emoji: "🌿"
    },
    "2d": { 
      joke: "Perspective shifter! Kamu bantu orang lihat masalahnya dari angle yang beda. Mind = blown! 💭",
      emoji: "💭"
    },

    // Question 3 - Team role
    "3a": { 
      joke: "The coordinator! Tanpa kamu, project bakal chaos. Kamu yang bikin semuanya jalan on track! 📋",
      emoji: "📋"
    },
    "3b": { 
      joke: "The ideator! 'Gimana kalau kita...' adalah opening line favorit kamu. Some call it crazy, you call it innovation! 💡",
      emoji: "💡"
    },
    "3c": { 
      joke: "The researcher! Kamu yang bikin project based on data, bukan asal-asalan. Facts don't lie! 📊",
      emoji: "📊"
    },
    "3d": { 
      joke: "The mood booster! Team lagi stress? Kamu yang bikin suasana tetep positif. Energy manager! ☀️",
      emoji: "☀️"
    },

    // Question 4 - Social media content
    "4a": { 
      joke: "Knowledge hunter! Feed kamu basically online university. Hiburan? That's educational content in disguise! 🎓",
      emoji: "🎓"
    },
    "4b": { 
      joke: "Aesthetic connoisseur! Feed kamu basically Pinterest. Everything must be *chef's kiss* 🎨",
      emoji: "🎨"
    },
    "4c": { 
      joke: "Wanderlust level: MAXIMUM! Kamu save 100+ tempat wishlist. Passport ready kapan aja! ✈️",
      emoji: "✈️"
    },
    "4d": { 
      joke: "Human stories enthusiast! Kamu percaya every person has a story worth hearing. Deep! 💫",
      emoji: "💫"
    },

    // Question 5 - Decision making
    "5a": { 
      joke: "The strategic thinker! Pro-cons list is your best friend. Keputusan harus logic-based! 📝",
      emoji: "📝"
    },
    "5b": { 
      joke: "Collective wisdom! Kamu percaya two heads are better than one. Squad, I need your opinion! 🤝",
      emoji: "🤝"
    },
    "5c": { 
      joke: "Follow your heart! Intuisi kamu jarang salah kok. The heart knows what the mind doesn't! ❤️",
      emoji: "❤️"
    },
    "5d": { 
      joke: "Action speaks louder! Analysis paralysis? Not in your vocabulary. Just do it! ⚡",
      emoji: "⚡"
    },

    // Question 6 - Desk style
    "6a": { 
      joke: "Minimalist king/queen! Less is more adalah mantra kamu. Clean desk, clear mind! 🖤",
      emoji: "🖤"
    },
    "6b": { 
      joke: "Personal gallery! Meja kamu basically personality showcase. Every item has a story! 🌈",
      emoji: "🌈"
    },
    "6c": { 
      joke: "Memory keeper! Meja kamu penuh reminder of loved ones. Wholesome banget! 💝",
      emoji: "💝"
    },
    "6d": { 
      joke: "Adventure shrine! Meja kamu penuh kenangan petualangan. Next destination loading... 🗺️",
      emoji: "🗺️"
    },

    // Question 7 - Leadership offer
    "7a": { 
      joke: "Born to lead! Kamu nggak takut tanggung jawab besar. Bring it on! 👑",
      emoji: "👑"
    },
    "7b": { 
      joke: "Change maker! Kamu mau lead kalau bisa bawa impact positif. Purpose-driven leadership! 🌟",
      emoji: "🌟"
    },
    "7c": { 
      joke: "Servant leader! Kamu lead untuk serve, bukan untuk power. Respect! 🙏",
      emoji: "🙏"
    },
    "7d": { 
      joke: "Freedom seeker! Kamu prefer role yang give you space to explore. Structure? Thanks but no thanks! 🦋",
      emoji: "🦋"
    },

    // Question 8 - Music taste
    "8a": { 
      joke: "Indie soul! Mainstream? Boring. Kamu dengerin musik yang orang lain belum tau. Hipster vibes! 🎧",
      emoji: "🎧"
    },
    "8b": { 
      joke: "Power anthem lover! Musik kamu basically soundtrack for conquering the world! 🔥",
      emoji: "🔥"
    },
    "8c": { 
      joke: "Chill master! Musik kamu therapy in audio form. Instant calm! 🌊",
      emoji: "🌊"
    },
    "8d": { 
      joke: "Energy booster! Musik kamu bikin semangat level 1000%. No sad songs allowed! ⚡",
      emoji: "⚡"
    },

    // Question 9 - Entertainment genre
    "9a": { 
      joke: "Detective mode! Kamu suka mystery karena love the thrill of solving puzzles. Sherlock who? 🔍",
      emoji: "🔍"
    },
    "9b": { 
      joke: "Imagination unlimited! Reality is boring, give me dragons and spaceships! 🐉",
      emoji: "🐉"
    },
    "9c": { 
      joke: "Heart on sleeve! Kamu nonton buat ngerasain feels. Tissue always ready! 😢",
      emoji: "😢"
    },
    "9d": { 
      joke: "Adrenaline junkie! Kalau nggak ada action, ngantuk. Go big or go home! 💥",
      emoji: "💥"
    },

    // Question 10 - Discussion style
    "10a": { 
      joke: "Facts over feelings! Kamu yang bawa receipts ke diskusi. Can't argue with data! 📈",
      emoji: "📈"
    },
    "10b": { 
      joke: "Fresh perspective! Kamu liat dari angle yang orang lain miss. Mind-blowing insights! 🎯",
      emoji: "🎯"
    },
    "10c": { 
      joke: "Peace keeper! Diskusi panas? Kamu yang cooling down suasana. Mediator professional! ☮️",
      emoji: "☮️"
    },
    "10d": { 
      joke: "Discussion leader! Kamu yang steer conversation ke arah produktif. Natural moderator! 🎙️",
      emoji: "🎙️"
    },

    // Question 11 - Stress coping
    "11a": { 
      joke: "Talk it out! Kamu process feelings dengan sharing. Temen curhat favorit detected! 💬",
      emoji: "💬"
    },
    "11b": { 
      joke: "Art therapy! Pain into art adalah coping mechanism kamu. Suffering = masterpiece! 🎨",
      emoji: "🎨"
    },
    "11c": { 
      joke: "Move your body! Physical activity is your reset button. Endorphins for the win! 🏃",
      emoji: "🏃"
    },
    "11d": { 
      joke: "Problem solver mode! Stress? Make a plan to eliminate it. Strategic coping! 📋",
      emoji: "📋"
    },

    // Question 12 - Long journey
    "12a": { 
      joke: "Deep talk lover! Road trip sama kamu basically life philosophy session. Heavy but good! 🚗",
      emoji: "🚗"
    },
    "12b": { 
      joke: "Window seat enthusiast! Pemandangan adalah entertainment terbaik. Camera roll will be full! 📸",
      emoji: "📸"
    },
    "12c": { 
      joke: "Audio learner! Long trip = learning opportunity. Brain tetep productive! 🎧",
      emoji: "🎧"
    },
    "12d": { 
      joke: "Daydream creative! Perjalanan adalah waktu untuk ide-ide gila muncul. Inspiration loading... 💭",
      emoji: "💭"
    },

    // Question 13 - Shopping style
    "13a": { 
      joke: "Educated buyer! Kamu research 2 jam untuk beli barang 50rb. Worth it! No regret purchases! 🔍",
      emoji: "🔍"
    },
    "13b": { 
      joke: "Aesthetic hunter! Fungsi penting, tapi harus cakep dulu. Beauty matters! ✨",
      emoji: "✨"
    },
    "13c": { 
      joke: "Trust the squad! Temen bilang bagus? Auto beli. Social proof is real! 👥",
      emoji: "👥"
    },
    "13d": { 
      joke: "YOLO shopper! Impulse buy adalah love language kamu. Regret? Maybe. Fun? Absolutely! 🛒",
      emoji: "🛒"
    },

    // Question 14 - Team frustration
    "14a": { 
      joke: "High standards! Kamu expect everyone to give their best. Mediocre is not an option! 💪",
      emoji: "💪"
    },
    "14b": { 
      joke: "Anti boring! Creativity needs freedom. Too many rules kill the vibe! 🎨",
      emoji: "🎨"
    },
    "14c": { 
      joke: "Vibes matter! Negative energy drains kamu. Good vibes only please! ✌️",
      emoji: "✌️"
    },
    "14d": { 
      joke: "Action bias! Meeting marathon is torture. Less talk, more do! ⚡",
      emoji: "⚡"
    },

    // Question 15 - Dream vacation
    "15a": { 
      joke: "Culture vulture! Museum, gallery, street art - kamu mau experience it all! 🎭",
      emoji: "🎭"
    },
    "15b": { 
      joke: "Peaceful retreat! Kamu butuh vacation yang actually relaxing. Recharge mode! 🧘",
      emoji: "🧘"
    },
    "15c": { 
      joke: "Extreme adventurer! Vacation tanpa adrenaline rush bukan vacation namanya! 🏔️",
      emoji: "🏔️"
    },
    "15d": { 
      joke: "History buff! Kamu travel buat belajar. Every place has lessons to teach! 📚",
      emoji: "📚"
    },

    // Question 16 - Handling criticism
    "16a": { 
      joke: "Objective analyzer! Kritik di-filter dulu: valid atau cuma noise? Scientific approach! 🔬",
      emoji: "🔬"
    },
    "16b": { 
      joke: "Fuel for fire! Kritik bikin kamu makin motivated to prove them wrong. Watch me! 🚀",
      emoji: "🚀"
    },
    "16c": { 
      joke: "Feel first, grow later! It's okay to feel hurt. Processing emotions is strength! 💪",
      emoji: "💪"
    },
    "16d": { 
      joke: "Pain into gain! Kritik jadi konten atau karya. Suffering = content material! 🎬",
      emoji: "🎬"
    },

    // Question 17 - Free time
    "17a": { 
      joke: "Quality time advocate! 2 jam with good people beats 2 days alone. Social battery charging! 💝",
      emoji: "💝"
    },
    "17b": { 
      joke: "Mini adventure! Even 2 jam bisa jadi petualangan kalau tau caranya. Explore local! 🗺️",
      emoji: "🗺️"
    },
    "17c": { 
      joke: "Never stop learning! Free time = learning time. Skill collector! 📚",
      emoji: "📚"
    },
    "17d": { 
      joke: "Creative hustle! 2 jam cukup untuk bikin something cool. Productivity level: maksimal! 🎨",
      emoji: "🎨"
    },

    // Question 18 - Work excitement
    "18a": { 
      joke: "Challenge accepted! Hard problems? That's what gets you out of bed. Bring the complexity! 🧩",
      emoji: "🧩"
    },
    "18b": { 
      joke: "Innovation junkie! Kamu boring kalau cuma ngikutin yang udah ada. Let's create new! 💡",
      emoji: "💡"
    },
    "18c": { 
      joke: "Team synergy! Solo work is meh, collaboration is where the magic happens! 🤝",
      emoji: "🤝"
    },
    "18d": { 
      joke: "Leadership calling! Tanggung jawab besar gives you purpose. Let me lead! 👑",
      emoji: "👑"
    },

    // Question 19 - Celebrating achievement
    "19a": { 
      joke: "Shared joy! Achievement is sweeter when celebrated together. Party time! 🎊",
      emoji: "🎊"
    },
    "19b": { 
      joke: "Content creator! Achievement harus di-package dengan bagus dulu. Aesthetics matter! 📱",
      emoji: "📱"
    },
    "19c": { 
      joke: "Always forward! Celebrate 5 menit, then what's next? Growth mindset! 🎯",
      emoji: "🎯"
    },
    "19d": { 
      joke: "Self-reward system! Achievement = excuse untuk petualangan baru. Treat yourself! 🎁",
      emoji: "🎁"
    },

    // Question 20 - Dream project
    "20a": { 
      joke: "Impact maker! Project must have meaning dan help people. Purpose-driven! 🌍",
      emoji: "🌍"
    },
    "20b": { 
      joke: "Innovation pioneer! Kalau udah ada, boring. Kamu mau create yang first-ever! 🚀",
      emoji: "🚀"
    },
    "20c": { 
      joke: "Execution master! Big vision needs strong execution. You're built for this! ⚡",
      emoji: "⚡"
    },
    "20d": { 
      joke: "Complex solver! Easy problems? Pass. Give me the impossible ones! 🧠",
      emoji: "🧠"
    },
  };

  // Return the specific joke or a generic one
  return jokes[answerId] || {
    joke: "Menarik banget pilihannya! Kamu full of surprises. Yuk lanjut! 🎯",
    emoji: "🎯"
  };
};
