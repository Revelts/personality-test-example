export interface Answer {
  id: string;
  text: string;
  trait: 'logical' | 'creative' | 'empathetic' | 'leader' | 'adventurer';
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Lagi weekend nih, kamu pengennya ngapain?",
    answers: [
      { id: "1a", text: "Hangout bareng temen-temen", trait: "empathetic" },
      { id: "1b", text: "Nyobain tempat baru yang belum pernah dikunjungi", trait: "adventurer" },
      { id: "1c", text: "Bikin project kreatif atau DIY", trait: "creative" },
      { id: "1d", text: "Belajar skill baru atau ikut workshop", trait: "logical" }
    ]
  },
  {
    id: 2,
    text: "Temen kamu lagi punya masalah berat. Kamu akan:",
    answers: [
      { id: "2a", text: "Dengerin dulu ceritanya sampai tuntas", trait: "empathetic" },
      { id: "2b", text: "Kasih solusi praktis step-by-step", trait: "logical" },
      { id: "2c", text: "Ajak dia keluar buat refresh pikiran", trait: "adventurer" },
      { id: "2d", text: "Bantuin dia lihat masalah dari sudut pandang berbeda", trait: "creative" }
    ]
  },
  {
    id: 3,
    text: "Di grup project, peran kamu biasanya yang mana?",
    answers: [
      { id: "3a", text: "Yang ngatur timeline dan koordinasi", trait: "leader" },
      { id: "3b", text: "Yang kasih ide-ide gila tapi menarik", trait: "creative" },
      { id: "3c", text: "Yang riset dan analisis data", trait: "logical" },
      { id: "3d", text: "Yang jaga mood tim tetap positif", trait: "empathetic" }
    ]
  },
  {
    id: 4,
    text: "Kalau lagi scroll social media, kamu paling suka konten apa?",
    answers: [
      { id: "4a", text: "Tutorial atau educational content", trait: "logical" },
      { id: "4b", text: "Desain, art, atau konten aesthetic", trait: "creative" },
      { id: "4c", text: "Travel vlog atau petualangan", trait: "adventurer" },
      { id: "4d", text: "Story atau konten tentang kehidupan orang", trait: "empathetic" }
    ]
  },
  {
    id: 5,
    text: "Cara kamu ambil keputusan penting biasanya:",
    answers: [
      { id: "5a", text: "Bikin pro-cons list dulu", trait: "logical" },
      { id: "5b", text: "Tanya pendapat orang terdekat", trait: "empathetic" },
      { id: "5c", text: "Follow my heart aja", trait: "creative" },
      { id: "5d", text: "Langsung action, learning by doing", trait: "adventurer" }
    ]
  },
  {
    id: 6,
    text: "Meja kerja/belajar kamu tuh kayak gimana?",
    answers: [
      { id: "6a", text: "Rapi dan minimalis", trait: "logical" },
      { id: "6b", text: "Penuh dekorasi dan personal items", trait: "creative" },
      { id: "6c", text: "Ada foto-foto kenangan sama orang tersayang", trait: "empathetic" },
      { id: "6d", text: "Ada map, souvenirs, dan reminder petualangan", trait: "adventurer" }
    ]
  },
  {
    id: 7,
    text: "Kalau ditawarin jadi ketua organisasi, respon kamu:",
    answers: [
      { id: "7a", text: "Siap! Gue suka challenge kayak gini", trait: "leader" },
      { id: "7b", text: "Boleh sih, asal bisa bawa perubahan positif", trait: "creative" },
      { id: "7c", text: "Oke, kalau bisa bantu banyak orang", trait: "empathetic" },
      { id: "7d", text: "Hmm, prefer yang lebih fleksibel deh", trait: "adventurer" }
    ]
  },
  {
    id: 8,
    text: "Playlist musik kamu isinya mayoritas lagu:",
    answers: [
      { id: "8a", text: "Indie atau musik eksperimental", trait: "creative" },
      { id: "8b", text: "Motivational atau powerful", trait: "leader" },
      { id: "8c", text: "Chill dan mellow vibes", trait: "empathetic" },
      { id: "8d", text: "Upbeat dan energetic", trait: "adventurer" }
    ]
  },
  {
    id: 9,
    text: "Kamu lebih suka baca/nonton yang genre:",
    answers: [
      { id: "9a", text: "Mystery atau crime investigation", trait: "logical" },
      { id: "9b", text: "Fantasy atau sci-fi", trait: "creative" },
      { id: "9c", text: "Romance atau drama kehidupan", trait: "empathetic" },
      { id: "9d", text: "Action, adventure, atau survival", trait: "adventurer" }
    ]
  },
  {
    id: 10,
    text: "Dalam debat atau diskusi, kamu tuh orangnya:",
    answers: [
      { id: "10a", text: "Yang bawa data dan fakta", trait: "logical" },
      { id: "10b", text: "Yang kasih perspektif unik", trait: "creative" },
      { id: "10c", text: "Yang jaga supaya diskusi tetap sehat", trait: "empathetic" },
      { id: "10d", text: "Yang memimpin arah diskusi", trait: "leader" }
    ]
  },
  {
    id: 11,
    text: "Kalau stress, cara kamu cope yang mana?",
    answers: [
      { id: "11a", text: "Curhat ke orang terdekat", trait: "empathetic" },
      { id: "11b", text: "Nyalurin ke karya seni/tulisan", trait: "creative" },
      { id: "11c", text: "Olahraga atau aktivitas outdoor", trait: "adventurer" },
      { id: "11d", text: "Bikin rencana untuk solve masalahnya", trait: "logical" }
    ]
  },
  {
    id: 12,
    text: "Di perjalanan jauh, kamu paling suka:",
    answers: [
      { id: "12a", text: "Ngobrol deep sama temen sebelah", trait: "empathetic" },
      { id: "12b", text: "Liat pemandangan dan foto-foto", trait: "adventurer" },
      { id: "12c", text: "Dengerin podcast atau audiobook", trait: "logical" },
      { id: "12d", text: "Ngebayangin ide-ide buat project", trait: "creative" }
    ]
  },
  {
    id: 13,
    text: "Pas belanja, kamu tipenya:",
    answers: [
      { id: "13a", text: "Riset dulu review dan compare harga", trait: "logical" },
      { id: "13b", text: "Beli yang aesthetic atau unik", trait: "creative" },
      { id: "13c", text: "Beli yang recommended temen", trait: "empathetic" },
      { id: "13d", text: "Impulsif, suka yang spontan", trait: "adventurer" }
    ]
  },
  {
    id: 14,
    text: "Kalo kerja tim, yang bikin kamu frustrasi:",
    answers: [
      { id: "14a", text: "Anggota yang gak peduli atau gak effort", trait: "leader" },
      { id: "14b", text: "Proses yang terlalu kaku dan boring", trait: "creative" },
      { id: "14c", text: "Konflik atau vibes yang negatif", trait: "empathetic" },
      { id: "14d", text: "Terlalu banyak meeting, kurang action", trait: "adventurer" }
    ]
  },
  {
    id: 15,
    text: "Liburan impian kamu tuh kayak apa?",
    answers: [
      { id: "15a", text: "City tour dan explore culture", trait: "creative" },
      { id: "15b", text: "Beach atau mountain getaway yang chill", trait: "empathetic" },
      { id: "15c", text: "Hiking, diving, atau extreme sports", trait: "adventurer" },
      { id: "15d", text: "Historical tour atau museum hopping", trait: "logical" }
    ]
  },
  {
    id: 16,
    text: "Cara kamu handle kritik biasanya:",
    answers: [
      { id: "16a", text: "Analisis objektif, mana yang valid", trait: "logical" },
      { id: "16b", text: "Jadiin bahan bakar untuk improve", trait: "leader" },
      { id: "16c", text: "Ngerasa down dulu, terus move on", trait: "empathetic" },
      { id: "16d", text: "Transform jadi karya atau konten", trait: "creative" }
    ]
  },
  {
    id: 17,
    text: "Kalau ada waktu luang 2 jam, kamu bakal:",
    answers: [
      { id: "17a", text: "Video call atau ketemu temen", trait: "empathetic" },
      { id: "17b", text: "Explore tempat baru di sekitar", trait: "adventurer" },
      { id: "17c", text: "Belajar sesuatu yang baru", trait: "logical" },
      { id: "17d", text: "Ngutak-atik project kreatif", trait: "creative" }
    ]
  },
  {
    id: 18,
    text: "Yang paling bikin kamu excited di tempat kerja/kampus:",
    answers: [
      { id: "18a", text: "Challenge dan problem solving", trait: "logical" },
      { id: "18b", text: "Kesempatan untuk innovate", trait: "creative" },
      { id: "18c", text: "Kolaborasi dengan orang-orang keren", trait: "empathetic" },
      { id: "18d", text: "Tanggung jawab dan leadership role", trait: "leader" }
    ]
  },
  {
    id: 19,
    text: "Cara kamu celebrate achievement:",
    answers: [
      { id: "19a", text: "Party atau makan bareng orang-orang penting", trait: "empathetic" },
      { id: "19b", text: "Posting di social media dengan konten menarik", trait: "creative" },
      { id: "19c", text: "Langsung mikir next goal", trait: "leader" },
      { id: "19d", text: "Reward diri sendiri dengan petualangan baru", trait: "adventurer" }
    ]
  },
  {
    id: 20,
    text: "Dream project kamu itu yang kayak gimana?",
    answers: [
      { id: "20a", text: "Yang bisa impact banyak orang", trait: "empathetic" },
      { id: "20b", text: "Yang belum pernah ada sebelumnya", trait: "creative" },
      { id: "20c", text: "Yang butuh kepemimpinan dan execution kuat", trait: "leader" },
      { id: "20d", text: "Yang solve masalah kompleks dengan smart", trait: "logical" }
    ]
  }
];
