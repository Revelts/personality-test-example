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
        microReaction: "Kamu nggak takut kehilangan momen. Kamu cuma takut lupa rasanya. Soalnya kamu tahu, ingatan itu bisa memudar."
      },
      {
        id: "6b",
        text: "Nikmatin - gak mau keganggu",
        trait: "empathetic",
        microReaction: "Kamu pengen benar-benar ada di momen itu. Buat kamu, yang penting nikmatin dulu, nggak semua hal harus difoto atau direkam."
      },
      {
        id: "6c",
        text: "Simpan di kepala",
        trait: "logical",
        microReaction: "Kamu percaya nggak semua hal harus jadi file. Ada momen yang nilainya justru karena cuma tersimpan di ingatan, bukan di galeri."
      },
      {
        id: "6d",
        text: "Tergantung kondisi",
        trait: "adventurer",
        microReaction: "Kamu lebih ngikutin perasaan di saat itu. Kadang pengen abadikan, kadang cukup nikmatin aja. Yang penting, kamu benar-benar hadir dan ngerasain momennya."
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
        microReaction: "Kamu tahu backup itu penting. Tapi biasanya selalu ada rasa 'ah, nanti aja deh' yang menang. Bukan karena nggak peduli, cuma belum mood buat ngadepin prosesnya."
      },
      {
        id: "9b",
        text: "Pindahin File",
        trait: "leader",
        microReaction: "Kamu tahu ini harus dilakukan, tapi milih-milihnya kadang terasa ribet. Takut ada yang kelewat atau hilang, jadi biasanya ditunda sampai kepaksa."
      },
      {
        id: "9c",
        text: "Ngerapihin File",
        trait: "logical",
        microReaction: "Kamu ngerasa setiap file punya ceritanya sendiri. Buat kamu, merapikan kadang berarti membuka lagi kenangan lama, dan kadang kamu belum tentu siap untuk itu."
      },
      {
        id: "9d",
        text: "Upgrade Storage",
        trait: "creative",
        microReaction: "Setiap kali notifikasi muncul, kamu cuma senyum dan bilang, 'Ah, storage masih cukup.' Padahal, notifikasi sudah muncul berkali kali."
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
        microReaction: "Walaupun tahu bakal nyentil dikit, kamu tetep buka. Karena nostalgia buat kamu bukan beban tapi bagian dari perjalanan hidup yang pengen kamu inget terus."
      },
      {
        id: "10b",
        text: "Senyum kecil, terus lanjut",
        trait: "empathetic",
        microReaction: "Kamu tiba-tiba keinget momen itu, senyum sebentar, lalu langsung balik lagi ke hari-hari yang biasa."
      },
      {
        id: "10c",
        text: "Dicek, disimpen lagi",
        trait: "logical",
        microReaction: "Kamu cuma pengen memastikan semuanya masih ada dan aman. Abis itu, kamu tutup lagi, karena rasanya belum perlu dilihat sekarang."
      },
      {
        id: "10d",
        text: "Lewat aja",
        trait: "leader",
        microReaction: "Bukan berarti momennya nggak penting. Kadang kamu cuma lagi memilih untuk benar-benar fokus sama apa yang sedang ada di depanmu sekarang."
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
        microReaction: "Kamu ngeh, tapi belum merasa perlu panik. Mirip suara AC yang agak berisik. Kerasa tapi belum cukup mengganggu untuk langsung bereaksi."
      },
      {
        id: "12c",
        text: "Tugas yang harus diberesin",
        trait: "logical",
        microReaction: "Notifikasi buat kamu bukan sekadar lewat, tapi tanda ada yang harus dituntaskan, dan susah hilang dari pikiran sebelum beres."
      },
      {
        id: "12d",
        text: "Noise yang nanti juga ilang",
        trait: "adventurer",
        microReaction: "Selama belum terasa urgent, kamu cenderung menunda. Awalnya bikin hidup terasa ringan, sampai akhirnya sadar sudah banyak yang menunggu."
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
        microReaction: "Buat kamu, kalau sudah pindah, maunya sekalian beres. Nggak cuma memindahkan semuanya ke tempat baru, tapi juga sekalian menata ulang."
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
        microReaction: "Buat kamu, hidup jadi lebih ringan kalau semuanya sudah tertata dari awal. Jadi kadang gemas sendiri, karena tahu ini sebenarnya bisa dibereskan lebih cepat."
      },
      {
        id: "20d",
        text: "Gak usah ribet.",
        trait: "leader",
        microReaction: "Buat kamu, nggak semua hal harus dibawa berat. Kamu jadi lebih tahu mana yang perlu perhatian, mana yang bisa dilepas."
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
