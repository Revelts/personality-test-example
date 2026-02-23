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
    text: "Saat ada momen penting, refleks pertama kamu apa?",
    textTemplate: "Kalau lagi ada momen penting, refleks pertama {name} tuh apa?",
    answers: [
      {
        id: "6a",
        text: "Rekam takut kelewatan",
        trait: "creative",
        microReaction: "Kamu bukan takut kehilangan momen. kamu takut lupa rasanya. Karena kamu tau, memori itu licin - sekali lewat, bisa gak balik utuh. Rekam itu cara kamu bilang: 'ini penting buat gue.'"
      },
      {
        id: "6b",
        text: "Nikmatin - gak mau keganggu",
        trait: "empathetic",
        microReaction: "Kamu pengen hadir sepenuhnya. Tanpa layar, tanpa distraksi. Karena buat kamu, momen itu soal rasa - bukan bukti. Dan kamu percaya, yang kerasa di dada... gak butuh file."
      },
      {
        id: "6c",
        text: "Simpan di kepala",
        trait: "logical",
        microReaction: "Kamu percaya ingatan kamu sendiri. Ada keyakinan kecil: 'yang penting, gak akan gue lupain.' Walau sebenernya... kamu juga tau, memori kadang berubah seiring waktu."
      },
      {
        id: "6d",
        text: "Tergantung kondisi",
        trait: "adventurer",
        microReaction: "Kamu adaptif. kamu baca situasi, bukan cuma momen. Kadang direkam, kadang dilepas. Karena kamu ngerti: gak semua hal butuh perlakuan yang sama."
      }
    ]
  },
  {
    id: 9,
    text: "Hal ini paling sering kamu tunda, padahal penting:",
    textTemplate: "{name}, hal apa nih yang paling sering kamu tunda padahal sebenernya penting?",
    answers: [
      {
        id: "9a",
        text: "Backup File",
        trait: "adventurer",
        microReaction: "Kamu sadar pentingnya backup. Tapi ada perasaan 'nanti aja' yang selalu menang. Bukan karena gak peduli—tapi karena kamu gak siap menghadapi prosesnya."
      },
      {
        id: "9b",
        text: "Pindahin File",
        trait: "leader",
        microReaction: "Kamu tau ini harus dilakukan. Tapi mikir soal milah satu-satu, takut ada yang kehilangan... itu bikin kamu malas mulai. Jadi ditunda sampai beneran kepaksa."
      },
      {
        id: "9c",
        text: "Ngerapihin File",
        trait: "logical",
        microReaction: "Kamu ngerasa semuanya punya konteks. Ngurutin berarti ngadepin ulang kenangan yang udah lewat. Dan gak selalu siap buat itu—jadi dibiarkan berantakan."
      },
      {
        id: "9d",
        text: "Upgrade Storage",
        trait: "creative",
        microReaction: "Ada bagian yang bilang 'storage masih cukup kok.' Padahal notifikasi udah muncul berkali-kali. Ngeluarin uang buat yang gak kelihatan... rasanya berat."
      }
    ]
  },
  {
    id: 10,
    text: "Pas nemu foto atau video lama di HP, reaksi kamu biasanya...",
    textTemplate: "Kalau {name} tiba-tiba nemu foto atau video lama di HP, reaksi kamu biasanya gimana?",
    answers: [
      {
        id: "10a",
        text: "Langsung dibuka, walau cuma sebentar",
        trait: "creative",
        microReaction: "Kamu tau itu bakal nyentil dikit. Tapi kamu tetep buka. Karena kamu percaya, nostalgia itu bagian dari perjalanan - bukan beban."
      },
      {
        id: "10b",
        text: "Senyum kecil, terus lanjut",
        trait: "empathetic",
        microReaction: "Ada hangat sebentar. Terus kamu jalan lagi. kamu menghargai masa lalu, tapi gak mau kejebak di sana."
      },
      {
        id: "10c",
        text: "Dicek, disimpen lagi",
        trait: "logical",
        microReaction: "Kamu pengen tau kondisinya. Masih ada. Masih aman. Dan itu cukup. Gak perlu dibongkar sekarang."
      },
      {
        id: "10d",
        text: "Lewat aja",
        trait: "leader",
        microReaction: "Bukan berarti gak berarti. Kadang kamu cuma lagi fokus ke depan. Dan itu juga bentuk bertumbuh."
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
        microReaction: "Rasanya kayak dimarahin padahal lagi berusaha. Ada nada menyalahkan yang bikin dada sesek. Dan kamu gak suka ditekan tanpa solusi."
      },
      {
        id: "12b",
        text: "Gangguan kecil",
        trait: "leader",
        microReaction: "Kamu notice, tapi gak langsung panik. Kayak suara AC terlalu kenceng - ganggu, tapi belum darurat. kamu terbiasa hidup dengan sedikit distraksi."
      },
      {
        id: "12c",
        text: "Tugas yang harus diberesin",
        trait: "logical",
        microReaction: "Kamu orang tanggung jawab. Kalau ada notifikasi, berarti ada action item. Dan kamu gak bisa tenang sebelum itu kelar."
      },
      {
        id: "12d",
        text: "Noise yang nanti juga ilang",
        trait: "adventurer",
        microReaction: "Kamu punya kemampuan langka: mengabaikan tekanan. Kadang itu bikin hidup lebih ringan. Kadang... bikin masalah numpuk pelan-pelan."
      }
    ]
  },
  {
    id: 19,
    text: "Kalau harus pindah file ke device lain, kamu maunya prosesnya...",
    textTemplate: "Kalau {name} harus pindah file ke device lain, kamu maunya prosesnya gimana?",
    answers: [
      {
        id: "19a",
        text: "Sekencang mungkin",
        trait: "leader",
        microReaction: "Kamu anti nunggu. Proses lambat bikin kamu kehilangan mood. Buat kamu, kecepatan itu bentuk respect ke waktu."
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
        microReaction: "Kamu pengen pindah sambil beres. Bukan cuma geser masalah ke tempat baru. Ini soal kualitas hidup."
      },
      {
        id: "19d",
        text: "Sesimpel mungkin",
        trait: "adventurer",
        microReaction: "Kamu males drama. Kalau bisa satu langkah, kenapa harus lima? Hidup udah ribet, proses gak usah."
      }
    ]
  },
  {
    id: 20,
    text: "Kalimat ini paling mendekati cara hidup kamu:",
    textTemplate: "Terakhir nih {name}, kalimat mana yang paling mendekati cara hidup kamu?",
    answers: [
      {
        id: "20a",
        text: "Jangan dihapus dulu.",
        trait: "creative",
        microReaction: "Kamu butuh waktu sebelum ngelepas. Dan kamu gak suka dipaksa cepat. Semua hal ada momennya."
      },
      {
        id: "20b",
        text: "Biar gue urusin pelan-pelan.",
        trait: "empathetic",
        microReaction: "Kamu tau tanggung jawabnya. Cuma kamu pengen ngerjain dengan cara kamu sendiri. Tanpa panik."
      },
      {
        id: "20c",
        text: "Harusnya ada sistem yang lebih rapi.",
        trait: "logical",
        microReaction: "Kamu percaya hidup bisa lebih enak kalau sistemnya bener. Dan kamu sering kesel karena sebenernya itu bisa dicegah."
      },
      {
        id: "20d",
        text: "Gak usah ribet.",
        trait: "leader",
        microReaction: "Kamu nyari hidup yang ringan. Bukan ceroboh - cuma selektif sama energi. Yang gak penting, gak perlu dipikirin lama."
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

// Return all 6 questions in fixed order (no shuffling)
export function getRandomQuestions(count: number = 6, userName?: string): Question[] {
  // Return first 6 questions without shuffling
  const selectedQuestions = questions.slice(0, 6);
  
  if (userName) {
    return selectedQuestions.map(q => ({
      ...q,
      text: q.text
    }));
  }
  
  return selectedQuestions;
}
