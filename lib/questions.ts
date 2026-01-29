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
    text: "Kalau ditawarin jadi ketua organisasi, respon kamu:",
    answers: [
      { id: "6a", text: "Siap! Gue suka challenge kayak gini", trait: "leader" },
      { id: "6b", text: "Boleh sih, asal bisa bawa perubahan positif", trait: "creative" },
      { id: "6c", text: "Oke, kalau bisa bantu banyak orang", trait: "empathetic" },
      { id: "6d", text: "Hmm, prefer yang lebih fleksibel deh", trait: "adventurer" }
    ]
  },
  {
    id: 7,
    text: "Kamu lebih suka baca/nonton yang genre:",
    answers: [
      { id: "7a", text: "Mystery atau crime investigation", trait: "logical" },
      { id: "7b", text: "Fantasy atau sci-fi", trait: "creative" },
      { id: "7c", text: "Romance atau drama kehidupan", trait: "empathetic" },
      { id: "7d", text: "Action, adventure, atau survival", trait: "adventurer" }
    ]
  },
  {
    id: 8,
    text: "Dalam debat atau diskusi, kamu tuh orangnya:",
    answers: [
      { id: "8a", text: "Yang bawa data dan fakta", trait: "logical" },
      { id: "8b", text: "Yang kasih perspektif unik", trait: "creative" },
      { id: "8c", text: "Yang jaga supaya diskusi tetap sehat", trait: "empathetic" },
      { id: "8d", text: "Yang memimpin arah diskusi", trait: "leader" }
    ]
  },
  {
    id: 9,
    text: "Yang paling bikin kamu excited di tempat kerja/kampus:",
    answers: [
      { id: "9a", text: "Challenge dan problem solving", trait: "logical" },
      { id: "9b", text: "Kesempatan untuk innovate", trait: "creative" },
      { id: "9c", text: "Kolaborasi dengan orang-orang keren", trait: "empathetic" },
      { id: "9d", text: "Tanggung jawab dan leadership role", trait: "leader" }
    ]
  },
  {
    id: 10,
    text: "Dream project kamu itu yang kayak gimana?",
    answers: [
      { id: "10a", text: "Yang bisa impact banyak orang", trait: "empathetic" },
      { id: "10b", text: "Yang belum pernah ada sebelumnya", trait: "creative" },
      { id: "10c", text: "Yang butuh kepemimpinan dan execution kuat", trait: "leader" },
      { id: "10d", text: "Yang solve masalah kompleks dengan smart", trait: "logical" }
    ]
  }
];
