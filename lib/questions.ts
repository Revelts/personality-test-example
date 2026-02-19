export interface Answer {
  id: string;
  text: string;
  trait: 'logical' | 'creative' | 'empathetic' | 'leader' | 'adventurer';
  microReaction: string;
}

export interface Question {
  id: number;
  text: string;
  textTemplate?: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 6,
    text: "Saat ada momen penting, refleks pertama lo apa?",
    textTemplate: "Kalau lagi ada momen penting, refleks pertama {name} tuh apa?",
    answers: [
      {
        id: "6a",
        text: "Rekam takut kelewatan",
        trait: "creative",
        microReaction: "Lo bukan takut kehilangan momen. Lo takut lupa rasanya. Karena lo tau, memori itu licin - sekali lewat, bisa gak balik utuh. Rekam itu cara lo bilang: 'ini penting buat gue.'"
      },
      {
        id: "6b",
        text: "Nikmatin - gak mau keganggu",
        trait: "empathetic",
        microReaction: "Lo pengen hadir sepenuhnya. Tanpa layar, tanpa distraksi. Karena buat lo, momen itu soal rasa - bukan bukti. Dan lo percaya, yang kerasa di dada... gak butuh file."
      },
      {
        id: "6c",
        text: "Simpan di kepala",
        trait: "logical",
        microReaction: "Lo percaya ingatan lo sendiri. Ada keyakinan kecil: 'yang penting, gak akan gue lupain.' Walau sebenernya... lo juga tau, memori kadang berubah seiring waktu."
      },
      {
        id: "6d",
        text: "Tergantung kondisi",
        trait: "adventurer",
        microReaction: "Lo adaptif. Lo baca situasi, bukan cuma momen. Kadang direkam, kadang dilepas. Karena lo ngerti: gak semua hal butuh perlakuan yang sama."
      }
    ]
  },
  {
    id: 9,
    text: "Hal ini paling sering lo tunda, padahal penting:",
    textTemplate: "{name}, hal apa nih yang paling sering lo tunda padahal sebenernya penting?",
    answers: [
      {
        id: "9a",
        text: "Beresin file",
        trait: "adventurer",
        microReaction: "Lo tau ini harusnya gampang. Tapi terlalu banyak kenangan numpuk jadi satu. Dan milih mana yang penting... itu capek emosional."
      },
      {
        id: "9b",
        text: "Backup",
        trait: "leader",
        microReaction: "Lo sadar risikonya. Tapi ada perasaan 'nanti aja' yang selalu menang. Bukan karena gak peduli - tapi karena lo gak siap kehilangan."
      },
      {
        id: "9c",
        text: "Sorting",
        trait: "logical",
        microReaction: "Lo ngerasa semuanya punya konteks. Ngurutin berarti ngadepin ulang. Dan gak selalu siap buat itu."
      },
      {
        id: "9d",
        text: "Ngehapus",
        trait: "creative",
        microReaction: "Bukan karena memori jelek. Tapi karena menghapus itu final. Dan lo tipe yang butuh waktu buat benar-benar melepaskan."
      }
    ]
  },
  {
    id: 10,
    text: "Pas nemu foto atau video lama di HP, reaksi lo biasanya...",
    textTemplate: "Kalau {name} tiba-tiba nemu foto atau video lama di HP, reaksi lo biasanya gimana?",
    answers: [
      {
        id: "10a",
        text: "Langsung dibuka, walau cuma sebentar",
        trait: "creative",
        microReaction: "Lo tau itu bakal nyentil dikit. Tapi lo tetep buka. Karena lo percaya, nostalgia itu bagian dari perjalanan - bukan beban."
      },
      {
        id: "10b",
        text: "Senyum kecil, terus lanjut",
        trait: "empathetic",
        microReaction: "Ada hangat sebentar. Terus lo jalan lagi. Lo menghargai masa lalu, tapi gak mau kejebak di sana."
      },
      {
        id: "10c",
        text: "Dicek, disimpen lagi",
        trait: "logical",
        microReaction: "Lo pengen tau kondisinya. Masih ada. Masih aman. Dan itu cukup. Gak perlu dibongkar sekarang."
      },
      {
        id: "10d",
        text: "Lewat aja",
        trait: "leader",
        microReaction: "Bukan berarti gak berarti. Kadang lo cuma lagi fokus ke depan. Dan itu juga bentuk bertumbuh."
      }
    ]
  },
  {
    id: 12,
    text: "Notifikasi \"storage almost full\" itu rasanya kayak...",
    textTemplate: "Buat {name}, kalau muncul notif 'storage almost full' itu rasanya kayak apa?",
    answers: [
      {
        id: "12a",
        text: "Teguran keras",
        trait: "creative",
        microReaction: "Rasanya kayak dimarahin padahal lagi berusaha. Ada nada menyalahkan yang bikin dada sesek. Dan lo gak suka ditekan tanpa solusi."
      },
      {
        id: "12b",
        text: "Gangguan kecil",
        trait: "leader",
        microReaction: "Lo notice, tapi gak langsung panik. Kayak suara AC terlalu kenceng - ganggu, tapi belum darurat. Lo terbiasa hidup dengan sedikit distraksi."
      },
      {
        id: "12c",
        text: "Tugas yang harus diberesin",
        trait: "logical",
        microReaction: "Lo orang tanggung jawab. Kalau ada notifikasi, berarti ada action item. Dan lo gak bisa tenang sebelum itu kelar."
      },
      {
        id: "12d",
        text: "Noise yang nanti juga ilang",
        trait: "adventurer",
        microReaction: "Lo punya kemampuan langka: mengabaikan tekanan. Kadang itu bikin hidup lebih ringan. Kadang... bikin masalah numpuk pelan-pelan."
      }
    ]
  },
  {
    id: 19,
    text: "Kalau harus pindah file ke device lain, lo maunya prosesnya...",
    textTemplate: "Kalau {name} harus pindah file ke device lain, lo maunya prosesnya gimana?",
    answers: [
      {
        id: "19a",
        text: "Sekencang mungkin",
        trait: "leader",
        microReaction: "Lo anti nunggu. Proses lambat bikin lo kehilangan mood. Buat lo, kecepatan itu bentuk respect ke waktu."
      },
      {
        id: "19b",
        text: "Seaman mungkin",
        trait: "empathetic",
        microReaction: "Pelan gak apa-apa. Asal aman. Karena kehilangan sekali itu cukup buat seumur hidup."
      },
      {
        id: "19c",
        text: "Serapi mungkin",
        trait: "logical",
        microReaction: "Lo pengen pindah sambil beres. Bukan cuma geser masalah ke tempat baru. Ini soal kualitas hidup."
      },
      {
        id: "19d",
        text: "Sesimpel mungkin",
        trait: "adventurer",
        microReaction: "Lo males drama. Kalau bisa satu langkah, kenapa harus lima? Hidup udah ribet, proses gak usah."
      }
    ]
  },
  {
    id: 20,
    text: "Kalimat ini paling mendekati cara hidup lo:",
    textTemplate: "Terakhir nih {name}, kalimat mana yang paling mendekati cara hidup lo?",
    answers: [
      {
        id: "20a",
        text: "Jangan dihapus dulu.",
        trait: "creative",
        microReaction: "Lo butuh waktu sebelum ngelepas. Dan lo gak suka dipaksa cepat. Semua hal ada momennya."
      },
      {
        id: "20b",
        text: "Biar gue urusin pelan-pelan.",
        trait: "empathetic",
        microReaction: "Lo tau tanggung jawabnya. Cuma lo pengen ngerjain dengan cara lo sendiri. Tanpa panik."
      },
      {
        id: "20c",
        text: "Harusnya ada sistem yang lebih rapi.",
        trait: "logical",
        microReaction: "Lo percaya hidup bisa lebih enak kalau sistemnya bener. Dan lo sering kesel karena sebenernya itu bisa dicegah."
      },
      {
        id: "20d",
        text: "Gak usah ribet.",
        trait: "leader",
        microReaction: "Lo nyari hidup yang ringan. Bukan ceroboh - cuma selektif sama energi. Yang gak penting, gak perlu dipikirin lama."
      }
    ]
  }
];

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Return 6 questions in random order
export function getRandomQuestions(count: number = 6, userName?: string): Question[] {
  // Shuffle all 6 questions
  const shuffledQuestions = shuffleArray(questions);
  const selectedQuestions = shuffledQuestions.slice(0, 6);
  
  if (userName) {
    return selectedQuestions.map(q => ({
      ...q,
      text: q.text
    }));
  }
  
  return selectedQuestions;
}
