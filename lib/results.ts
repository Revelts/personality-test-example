export interface PersonalityResult {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionVariants?: string[]; // 10 variants for freshness
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
  gearImage: string;
  gearCapacity: string;
  gearSpecs: {
    usb: string;
    warranty: string;
  };
  gearLinks: {
    lazada: string;
    shopee: string;
    tiktokshop: string;
  };
  emoji: string;
  color: string;
}

// Helper function to get random description variant
export function getPersonalityWithRandomDescription(personality: PersonalityResult): PersonalityResult {
  if (!personality.descriptionVariants || personality.descriptionVariants.length === 0) {
    return personality;
  }
  
  const randomIndex = Math.floor(Math.random() * personality.descriptionVariants.length);
  return {
    ...personality,
    description: personality.descriptionVariants[randomIndex]
  };
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
    title: "Si Spontan",
    titleEn: "THE SPONTANEOUS",
    description: "Kamu terbiasa menangkap momen apa adanya tanpa mikir urusan teknis. Yang penting momennya keburu tersimpan, soal storage belakangan. Hidup di saat ini lebih penting daripada mengatur file.",
    descriptionVariants: [
      "Kamu menangkap momen apa adanya tanpa mikir urusan teknis. Yang penting tersimpan dulu, soal storage belakangan. Rekam semua, rapikan nanti. Berantakan tapi lengkap—tidak ada momen yang terlewat.",
      "Kamu hidup di momen yang sedang terjadi. File bisa numpuk karena kamu fokus menikmati sekarang. Alami dulu, atur belakangan. Kamu gak mau kehilangan momen hanya karena sibuk ngatur file.",
      "Kamu lebih milih menangkap momen sekarang daripada atur-atur file. Urusan teknis sering bukan prioritas sampai storage penuh. Kehilangan momen itu permanen, storage penuh bisa diatasi. Pilihan kamu sudah jelas.",
      "Kamu spontan dan responsif terhadap momen. Selama bisa disimpan, kamu jalan terus sampai storage penuh. Hadapi masalah nanti, hidup sekarang. Dokumentasi lengkap lebih penting daripada rapih.",
      "Pengalaman paling penting buat kamu. Ngerapihin file belakangan, pas butuh aja. Kamu pilih hidup penuh sekarang, bereskan nanti. Organisasi bisa diperbaiki, momen hilang gak bisa diulang.",
      "Rekam dulu, mikir belakangan. Itu motto kamu. Kamu tangkap momen yang orang lain lewatkan karena sibuk ngatur. Kuantitas jamin kualitas ada di sana. Berantakan tapi lengkap lebih baik daripada rapih tapi bolong.",
      "Momen datang sekali, jadi rekam semua. Urusan storage nanti aja. Lebih baik punya lalu hapus daripada butuh tapi gak punya. Kamu rekam segalanya karena di saat itu kamu gak tau mana yang bakal penting.",
      "Hidup terlalu cepat untuk dipause. Jadi semua direkam tanpa filter. Kamu gak pilih-pilih di momen, simpan semua lalu putuskan nanti. Karena saat momen terjadi, penilaian sering keliru.",
      "Kamu impulsif dalam arti baik. Spontanitas bikin hidup lebih bermakna. Struktur itu aman, spontanitas itu hidup. Kamu pilih hidup. Berantakan tapi bermakna. Dokumentasi hidup yang dijalani penuh, walau gak teratur.",
      "Urus storage kalau udah darurat. Sekarang hidup dan rekam aja. Kadang bikin stres tapi gak pernah membosankan. Momen tercipta, organisasi opsional. Kamu gak akan nyesel rekam banyak, tapi bakal nyesel kehilangan momen."
    ],
    descriptionEn: "You're used to capturing moments as they are, without overthinking the technical stuff. What matters is saving the moment first. Storage management usually comes later.",
    quote: "Rekam dulu, pikir belakangan.",
    quoteEn: "Record first, think later.",
    element: "🔥 Api - spontan & berani",
    elementEn: "🔥 Fire — spontaneous & bold.",
    colorName: "Hot Orange",
    colorHex: "#FF6B35",
    mostImportant: "Video mentah. Versi goyang. Versi gagal. Yang penting kejadian.",
    mostImportantEn: "Raw footage. Shaky versions. Failed takes. What matters is that it happened.",
    music: "Faint",
    musicArtist: "Linkin Park",
    gear: "SanDisk® Phone Drive Orange",
    gearDesc: "Rekam dulu. Simpan semua. Jangan mikir.",
    gearDescEn: "Record first. Save everything. Don't overthink.",
    gearImage: "/images/orange.png",
    gearCapacity: "32GB - 512GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "Terbatas 5 Tahun"
    },
    gearLinks: {
      lazada: "https://www.lazada.co.id/products/sandisk-phone-drive-for-android-usb-type-a-dan-otg-type-c-i8265588670-s14676420564.html",
      shopee: "https://shopee.co.id/SANDISK-Phone-Drive-for-Android-USB-Type-C-A-32GB-64GB-128GB-256GB-512GB-USB-3.2-Up-To-100MB-s-i.1657263.24536652989",
      tiktokshop: "https://vt.tokopedia.com/t/ZS91fMe6Xyvhb-TXgeb/"
    },
    emoji: "🔥",
    color: "from-orange-500 to-red-600"
  },
  {
    id: "the-endurer",
    title: "Si Paling Beres",
    titleEn: "THE ORGANIZER",
    description: "Kamu baru tenang kalau semuanya beres. File, momen, dan kerjaan harus jelas tempatnya biar hidup gak ribet sendiri. Kamu percaya sistem yang baik itu investasi jangka panjang. Kerapian adalah bentuk menghormati diri sendiri.",
    descriptionVariants: [
      "Kamu baru tenang kalau semuanya beres. File, momen, dan kerjaan harus jelas tempatnya biar hidup gak ribet sendiri. Sistem yang baik itu investasi jangka panjang, bukan cuma soal perfeksionis. Kerapian adalah cara menghormati diri sendiri.",
      "Buat kamu, rapi bukan perfeksionis tapi cara biar gak panik saat penting. Kamu udah sering alami kalau berantakan bikin rugi waktu dan kesempatan. Lebih baik atur 5 menit sekarang daripada cari-cari 2 jam nanti.",
      "Kamu jarang kelabakan karena udah mikir satu langkah lebih depan. Termasuk soal nyimpen data. Kamu bantu diri sendiri di masa depan dengan persiapan sekarang. Proaktif lebih baik daripada reaktif.",
      "Hidup terasa ringan kalau semuanya tertata. Gak banyak kejutan tapi aman. Kamu suka yang bisa diprediksi dan stabil. Drama itu melelahkan, stabilitas memberikan kebebasan.",
      "Kamu percaya ribet sedikit di awal bisa selamatkan dari drama gak penting nanti. Sepuluh menit beresin sekarang hemat berjam-jam stres nanti. Usaha di awal, tenang di kemudian hari.",
      "Buat kamu, kerapian bukan soal estetika tapi soal ketenangan pikiran saat butuh cepat. Pas momen penting, kamu gak panik cari file. Semuanya udah di tempatnya, siap dipakai kapan saja.",
      "Kamu tau persis dimana setiap file berada karena kekacauan bikin kamu kehilangan kontrol. Organisasi itu kekuatan. Orang minta tolong sama kamu karena tau kamu beres. Itu hasil dari kebiasaan kecil yang konsisten.",
      "Sistem rapi itu investasi. Satu menit beresin sekarang hemat sepuluh menit nanti. Kamu otomatis keputusan rutin jadi bisa fokus ke hal yang lebih penting. Optimasi bukan demi kesempurnaan tapi demi efisiensi.",
      "Kamu suka hidup yang bisa diprediksi. Bukan karena membosankan tapi karena lebih berkelanjutan. Drama itu melelahkan, stabilitas itu kebebasan. Fondasi kuat memungkinkan kamu ambil risiko di area lain yang lebih penting.",
      "Buat kamu, backup teratur bukan paranoid tapi tanggung jawab sama diri sendiri. Kehilangan data bukan cuma kehilangan file tapi kehilangan ketenangan pikiran. Pencegahan lebih baik daripada penyesalan."
    ],
    descriptionEn: "You're the type who can only relax when everything is in order. Files, moments, and tasks need their proper place so life doesn't complicate itself.",
    quote: "Harusnya ada sistem yang lebih rapi.",
    quoteEn: "There should be a better system.",
    element: "🪨 Tanah - stabil & bisa diandalkan",
    elementEn: "🪨 Earth — stable & reliable",
    colorName: "Black",
    colorHex: "#1A1A1A",
    mostImportant: "Foto lama. File random. Bukti proses, bukan hasil.",
    mostImportantEn: "Old photos. Random files. Proof of process, not results.",
    music: "No Surprises",
    musicArtist: "Radiohead",
    gear: "SanDisk® Phone Drive Black",
    gearDesc: "Colok, pindahin, lanjut hidup.",
    gearDescEn: "Plug in. Transfer. Keep moving.",
    gearImage: "/images/black.png",
    gearCapacity: "32GB - 512GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "Terbatas 5 Tahun"
    },
    gearLinks: {
      lazada: "https://www.lazada.co.id/products/sandisk-phone-drive-for-android-usb-type-a-dan-otg-type-c-i8265588670-s14676420564.html",
      shopee: "https://shopee.co.id/SANDISK-Phone-Drive-for-Android-USB-Type-C-A-32GB-64GB-128GB-256GB-512GB-USB-3.2-Up-To-100MB-s-i.1657263.24536652989",
      tiktokshop: "https://vt.tokopedia.com/t/ZS91fMe6Xyvhb-TXgeb/"
    },
    emoji: "🪨",
    color: "from-gray-800 to-gray-950"
  },
  {
    id: "the-disruptor",
    title: "Si Serba Cepat",
    titleEn: "THE FAST MOVER",
    description: "Hidup kamu jalan cepat dan gak suka ditahan-tahan. Semua harus praktis dan langsung bisa dipakai. Kamu anti proses berbelit yang ujungnya buang waktu. Efisiensi bukan kemewahan tapi kebutuhan. Setiap detik punya nilai.",
    descriptionVariants: [
      "Hidup kamu jalan cepat dan gak suka ditahan-tahan. Semua harus praktis dan langsung bisa dipakai. Kamu anti proses berbelit yang ujungnya buang waktu. Efisiensi bukan kemewahan tapi kebutuhan. Kalau bisa satu langkah, kenapa harus lima?",
      "Kamu fokus ke sekarang dan langkah selanjutnya, bukan urusan teknis yang ribet. Detail boleh penting tapi kecepatan lebih penting. Momentum itu rapuh, sekali hilang susah dapat lagi. Eksekusi tepat waktu lebih berharga.",
      "File pindah-pindah, perangkat ganti-ganti? Gak masalah asal gak tiba-tiba berhenti. Kamu fleksibel dan cair. Yang penting alur kerja jalan, alat bisa disesuaikan nanti. Progres lebih penting dari kenyamanan.",
      "Kamu butuh penyimpanan yang bisa ngikutin ritme hidupmu, bukan sebaliknya. Kamu gak mau sesuaikan gaya hidup gara-gara keterbatasan teknis. Teknologi harus melayani, bukan memperlambat. Hambatan itu musuh.",
      "Buat kamu, lambat itu lebih nyebelin daripada berantakan. Berantakan tapi selesai lebih baik daripada sempurna tapi tertunda. Kamu prioritaskan progres daripada kesempurnaan. Aksi lebih baik daripada rencana berlarut.",
      "Kamu anti menunggu. Loading lama? Loncat. Transfer lambat? Frustrasi. Hidup itu momentum. Jeda satu detik bisa pecahkan alur yang udah dibangun. Kecepatan adalah bentuk menghargai waktu sendiri.",
      "Kamu jarang backup karena butuh waktu. Padahal tau risikonya tapi kecepatan itu segalanya. Hidup di momen kadang berarti ambil risiko terkalkulasi. Bukan ceroboh, cuma prioritas berbeda.",
      "Buat kamu, jeda satu detik itu kerugian. Makanya semua harus instan atau gak sama sekali. Keputusan cepat, eksekusi cepat, hasil cepat. Umpan balik cepat memungkinkan kamu belajar lebih cepat dari yang lain.",
      "Kamu gak suka proses panjang. Satu klik, selesai. Dua langkah maksimal. Lebih dari itu ribet. Kamu sederhanakan segalanya. Buang yang gak perlu, simpan yang berpengaruh. Setiap langkah ekstra itu hambatan.",
      "Kecepatan bukan kemewahan buat kamu tapi kebutuhan. Karena waktu kamu berharga. Setiap detik berarti. Sementara menunggu, peluang lewat. Sementara memuat, ide memudar. Kecepatan jaga kesegaran. Waktu satu-satunya sumber daya yang gak bisa diperbarui."
    ],
    descriptionEn: "Your life moves fast and you don't like being held back. Everything must be practical and ready to use.",
    quote: "Gak usah ribet.",
    quoteEn: "Don't make it complicated.",
    element: "💨 Angin - cepat & fleksibel",
    elementEn: "💨 Wind — fast & flexible.",
    colorName: "Yellow",
    colorHex: "#FFD60A",
    mostImportant: "File kerja. Konten mentah. Yang harus pindah cepat.",
    mostImportantEn: "Work files. Raw content. Things that need to move fast.",
    music: "Black Skinhead",
    musicArtist: "Kanye West",
    gear: "SanDisk® Phone Drive Yellow",
    gearDesc: "Tanpa cloud. Tanpa nunggu.",
    gearDescEn: "No cloud. No waiting.",
    gearImage: "/images/yellow.png",
    gearCapacity: "32GB - 512GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "Terbatas 5 Tahun"
    },
    gearLinks: {
      lazada: "https://www.lazada.co.id/products/sandisk-phone-drive-for-android-usb-type-a-dan-otg-type-c-i8265588670-s14676420564.html",
      shopee: "https://shopee.co.id/SANDISK-Phone-Drive-for-Android-USB-Type-C-A-32GB-64GB-128GB-256GB-512GB-USB-3.2-Up-To-100MB-s-i.1657263.24536652989",
      tiktokshop: "https://vt.tokopedia.com/t/ZS91fMe6Xyvhb-TXgeb/"
    },
    emoji: "⚡",
    color: "from-yellow-400 to-amber-500"
  },
  {
    id: "the-inverter",
    title: "Si Paling Eksis",
    titleEn: "THE MOMENT COLLECTOR",
    description: "HP kamu penuh bukan karena berantakan, tapi karena hidupmu penuh cerita. Setiap tangkapan layar, video acak, foto blur—ada konteks, ada momen, ada perasaan di baliknya yang kamu ingat. Kamu pendokumentasi kehidupan sendiri.",
    descriptionVariants: [
      "HP kamu penuh bukan karena berantakan tapi karena hidupmu penuh cerita. Setiap tangkapan layar, video acak, foto blur—ada konteks, ada momen, ada perasaan di baliknya yang kamu ingat. Kamu arsivis momen sehari-hari yang orang lain anggap biasa.",
      "Foto blur, video acak, catatan suara receh semuanya punya arti. Buat orang lain mungkin sampah, buat kamu dokumentasi hidup apa adanya. Mentah, tanpa filter, jujur. Kamu gak mengatur momen, kamu menangkapnya. Realitas berantakan lebih baik dari kesempurnaan yang dipoles.",
      "Kamu simpan momen bukan buat arsip tapi buat diingat lagi suatu hari. Nostalgia itu kuat. Ingatan memudar, tapi file tidak. Kamu hargai jaminan ini terhadap lupa. Diri sekarang buat hadiah untuk diri masa depan.",
      "Buat kamu, kehilangan file itu sama dengan kehilangan bagian dari kehidupan. Setiap file remah roti dari perjalanan. Hapus satu, kamu kehilangan konteks. Kehilangan banyak, kamu kehilangan diri sendiri. Identitas itu kumpulan pengalaman. Foto itu buktinya.",
      "Momen datang dan pergi, tapi kenangan yang tersimpan dengan aman bisa bertahan lebih lama dari waktu. Ingatan digital itu keabadian. Kamu paham pelestarian adalah bentuk cinta. Cinta untuk diri sendiri, untuk orang-orang di foto, untuk momen yang membentuk kamu.",
      "Setiap foto punya konteks, setiap video punya cerita, dan kamu ingat semuanya. Istana ingatan di HP. Orang lain lihat kekacauan, kamu lihat kekacauan yang bermakna. Buat mereka acak, buat kamu otobiografi kronologis.",
      "Kamu bukan penimbun, kamu cuma menghargai detail kecil yang bikin hidup terasa hidup. Momen kecil di antara momen besar—di situ hidup benar-benar terjadi. Kamu tangkap itu. Kehidupan sehari-hari itu konstan, momen besar itu langka.",
      "Ingatan buat kamu bukan data tapi dokumentasi perjalanan yang terus berjalan. Hidup adalah cerita yang ditulis waktu nyata. Penyimpanan kamu otobiografi, berantakan tapi jujur. Belum diedit, belum dikurasi, belum dipoles. Nyata. Itu langka.",
      "Kamu rekam segalanya karena takut lupa rasanya. Dan itu wajar. Perasaan memudar lebih cepat dari yang kita kira. Foto bawa kembali bukan cuma gambar tapi emosi. Itu layak ruang penyimpanan yang dipakai.",
      "Penyimpanan penuh? Bukan masalah. Kenangan penuh? Itu berkah. Beberapa orang hidup minimal, kamu hidup kaya. Keduanya wajar, cuma milikmu butuh lebih banyak ruang. Layak. Sejarah kamu itu harta. Tak ternilai."
    ],
    descriptionEn: "Your phone is full not because you're messy, but because your life is full of stories.",
    quote: "Jangan dihapus dulu.",
    quoteEn: "Don't delete it yet.",
    element: "💧 Air - emosional & penuh cerita",
    elementEn: "💧 Water — emotional & full of stories.",
    colorName: "Purple",
    colorHex: "#7209B7",
    mostImportant: "File fisik. Yang bisa kamu pegang.",
    mostImportantEn: "Physical files. Things you can actually hold.",
    music: "Do I Wanna Know?",
    musicArtist: "Arctic Monkeys",
    gear: "SanDisk® Phone Drive Purple",
    gearDesc: "Aman di tangan lo.",
    gearDescEn: "Safe in your hands.",
    gearImage: "/images/purple.png",
    gearCapacity: "32GB - 512GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "Terbatas 5 Tahun"
    },
    gearLinks: {
      lazada: "https://www.lazada.co.id/products/sandisk-phone-drive-for-android-usb-type-a-dan-otg-type-c-i8265588670-s14676420564.html",
      shopee: "https://shopee.co.id/SANDISK-Phone-Drive-for-Android-USB-Type-C-A-32GB-64GB-128GB-256GB-512GB-USB-3.2-Up-To-100MB-s-i.1657263.24536652989",
      tiktokshop: "https://vt.tokopedia.com/t/ZS91fMe6Xyvhb-TXgeb/"
    },
    emoji: "🌲",
    color: "from-purple-600 to-violet-700"
  },
  {
    id: "the-confessor",
    title: "Si Santai Tapi Ngeh",
    titleEn: "THE CHILL AWARE",
    description: "Kamu gak suka ribet tapi tetap peduli. Selama file aman dan gampang diakses, hidup terasa cukup tenang. Kamu gak terlalu mikir tapi juga gak ceroboh. Keseimbangan adalah kunci. Jalan tengah antara kekacauan dan kekakuan.",
    descriptionVariants: [
      "Kamu gak suka ribet tapi tetap peduli. Selama file aman dan gampang diakses, hidup terasa cukup tenang. Kamu gak terlalu mikir tapi juga gak ceroboh. Keseimbangan adalah hal kamu. Jalan tengah antara kekacauan dan kekakuan.",
      "Buat kamu, yang penting simpel. Gak perlu paling rapih asal aman dan gak bikin stres. Cukup baik itu benar-benar baik. Kesempurnaan itu dilebih-lebihkan dan melelahkan. Kamu tau kapan harus berhenti mengusahakan.",
      "Kamu santai tapi tau mana yang penting. Pokoknya gak banyak drama. Perhatian selektif. Energi terbatas, investasikan dengan bijak. Gak semua hal pantas dapat perhatian sama. Beberapa file penting, kebanyakan tidak.",
      "Kamu pilih hidup yang gak berlebihan. Selama semuanya aman dan bisa diandalkan, itu sudah cukup. Minimalis tanpa kehilangan. Kesederhanaan sadar itu canggih. Cukup itu revolusioner dalam budaya yang selalu mau lebih.",
      "Kamu santai tapi gak asal. Selama file aman dan bisa diakses kapan perlu, hidup terasa tenang. Santai gak berarti ceroboh tapi percaya diri dengan dasar. Kamu tau fondasi solid jadi gak stres soal permukaan.",
      "Keseimbangan adalah kunci buat kamu. Gak terlalu obsesif, gak terlalu ceroboh. Pas. Jalan tengah adalah kebijaksanaan. Ekstrem itu melelahkan. Kamu temukan titik manis yang berkelanjutan. Gak sempurna tapi bisa dijaga.",
      "Kamu tau file mana yang penting, yang lain biarin aja santai. Gak ada tekanan. Kejelasan prioritas itu kekuatan. Fokus yang penting, lepaskan yang tidak. Kamu gak coba optimalkan segalanya, cuma jalur kritis.",
      "Hidup terlalu pendek buat terlalu mikir penyimpanan. Asal aman, sisanya ngalir aja. Khawatirin hal besar saja. Hal kecil selesai sendiri kalau dasar udah tertutup. Kamu gak kelola detail, kamu atur fondasi lalu biarkan sistem jalan.",
      "Kamu tipe yang sadar tapi gak cemas. Tau risikonya tapi gak bikin hidup berat. Tahu tanpa lumpuh. Sadar tanpa stres. Kombinasi langka. Kamu tau hal buruk bisa terjadi tapi gak berlebihan. Kamu siap cukup lalu percaya.",
      "Hidup simpel, simpan pintar. Itu filosofi kamu dalam kelola kehidupan digital. Sedikit itu banyak kalau kamu tau apa yang penting. Kejelasan lebih dari kompleksitas. Tenang lebih dari sempurna. Kesederhanaan adalah kecanggihan tingkat lanjut."
    ],
    descriptionEn: "You don't like complications, but you still care. As long as files are safe and easily accessible, life feels calm enough.",
    quote: "Biar gue urusin pelan-pelan.",
    quoteEn: "Let me handle it slowly.",
    element: "🌿 Alam - tenang & seimbang",
    elementEn: "🌿 Nature — calm & balanced.",
    colorName: "Orange",
    colorHex: "#FFC300",
    mostImportant: "Draft. Voice note. Versi gagal.",
    mostImportantEn: "Drafts. Voice notes. Failed versions.",
    music: "Happier Than Ever",
    musicArtist: "Billie Eilish",
    gear: "SanDisk® Phone Drive Yellow",
    gearDesc: "Karena cerita pribadi gak boleh hilang.",
    gearDescEn: "Because personal stories shouldn't be lost.",
    gearImage: "/images/yellow.png",
    gearCapacity: "32GB - 512GB",
    gearSpecs: {
      usb: "USB 3.2 Gen 1",
      warranty: "Terbatas 5 Tahun"
    },
    gearLinks: {
      lazada: "https://www.lazada.co.id/products/sandisk-phone-drive-for-android-usb-type-a-dan-otg-type-c-i8265588670-s14676420564.html",
      shopee: "https://shopee.co.id/SANDISK-Phone-Drive-for-Android-USB-Type-C-A-32GB-64GB-128GB-256GB-512GB-USB-3.2-Up-To-100MB-s-i.1657263.24536652989",
      tiktokshop: "https://vt.tokopedia.com/t/ZS91fMe6Xyvhb-TXgeb/"
    },
    emoji: "💧",
    color: "from-amber-400 to-yellow-500"
  }
];

export function calculatePersonality(scores: Scores): PersonalityResult {
  // With 6 questions, max score per trait = 6
  // Calculate total engagement
  const total = scores.logical + scores.creative + scores.empathetic + scores.leader + scores.adventurer;
  
  // Find top 3 traits for more nuanced matching
  const scoreArray = [
    { type: 'logical', value: scores.logical },
    { type: 'creative', value: scores.creative },
    { type: 'empathetic', value: scores.empathetic },
    { type: 'leader', value: scores.leader },
    { type: 'adventurer', value: scores.adventurer }
  ].sort((a, b) => b.value - a.value);

  const primary = scoreArray[0].type as keyof Scores;
  const secondary = scoreArray[1].type as keyof Scores;
  const tertiary = scoreArray[2].type as keyof Scores;
  const primaryScore = scoreArray[0].value;
  const secondaryScore = scoreArray[1].value;
  const gap = primaryScore - secondaryScore;
  
  // Personality mapping (5 types):
  // 0: Si Spontan (the-extremist) - creative + adventurer (impulsive recorder)
  // 1: Si Paling Beres (the-endurer) - logical + empathetic (organized keeper)
  // 2: Si Serba Cepat (the-disruptor) - leader (speed & efficiency)
  // 3: Si Paling Eksis (the-inverter) - creative (moment collector)
  // 4: Si Santai Tapi Ngeh (the-confessor) - empathetic + balanced (chill observer)
  
  let result: PersonalityResult | null = null;
  
  // === PRIMARY MATCHES (Strong dual-trait combinations) ===
  
  // Si Spontan: Creative + Adventurer combo (YOLO, capture everything)
  // Needs both traits to be relatively high
  if ((scores.creative >= 2 && scores.adventurer >= 2) ||
      ((primary === 'creative' && secondary === 'adventurer') && gap <= 1 && primaryScore >= 2) ||
      ((primary === 'adventurer' && secondary === 'creative') && gap <= 1 && primaryScore >= 2)) {
    result = personalityTypes[0];
  }
  
  // Si Paling Beres: Logical + Empathetic (organized, process-oriented)
  // Values systems and emotional intelligence
  else if ((scores.logical >= 2 && scores.empathetic >= 2) ||
      ((primary === 'logical' && secondary === 'empathetic') && gap <= 1 && primaryScore >= 2) ||
      ((primary === 'empathetic' && secondary === 'logical') && gap <= 1 && primaryScore >= 2)) {
    result = personalityTypes[1];
  }
  
  // Si Serba Cepat: Dominant Leader trait (speed above all)
  // Clear leader preference, doesn't need combo
  else if ((primary === 'leader' && primaryScore >= 3) ||
      (scores.leader >= 3) ||
      (primary === 'leader' && gap >= 2)) {
    result = personalityTypes[2];
  }
  
  // Si Santai Tapi Ngeh: Empathetic + Creative OR balanced empathetic
  // Chill but emotionally aware, collects meaningful moments
  else if ((scores.empathetic >= 2 && scores.creative >= 1) ||
      ((primary === 'empathetic' && secondary === 'creative') && primaryScore >= 2) ||
      (primary === 'empathetic' && total <= 4 && primaryScore >= 2)) {
    result = personalityTypes[4];
  }
  
  // Si Paling Eksis: Creative-dominant (moment collector)
  // High creative with presence/documentation focus
  else if ((primary === 'creative' && primaryScore >= 3) ||
      (scores.creative >= 3 && scores.empathetic >= 1)) {
    result = personalityTypes[3];
  }
  
  // === SECONDARY LOGIC: Single dominant trait ===
  
  if (!result) {
    // Strong leader → Si Serba Cepat
    if (primary === 'leader' && primaryScore >= 2) {
      result = personalityTypes[2];
    }
    
    // Strong creative → depends on secondary
    else if (primary === 'creative' && primaryScore >= 2) {
      if (scores.adventurer >= 1) {
        result = personalityTypes[0]; // Si Spontan (creative + action)
      } else if (scores.empathetic >= 1) {
        result = personalityTypes[4]; // Si Santai Tapi Ngeh (creative + feeling)
      } else {
        result = personalityTypes[3]; // Si Paling Eksis (pure creative)
      }
    }
    
    // Strong logical → depends on context
    else if (primary === 'logical' && primaryScore >= 2) {
      if (scores.empathetic >= 1) {
        result = personalityTypes[1]; // Si Paling Beres (logical + care)
      } else if (scores.leader >= 1) {
        result = personalityTypes[2]; // Si Serba Cepat (logical + speed)
      } else {
        result = personalityTypes[1]; // Si Paling Beres (default logical)
      }
    }
    
    // Strong adventurer → spontaneous
    else if (primary === 'adventurer' && primaryScore >= 2) {
      if (scores.creative >= 1) {
        result = personalityTypes[0]; // Si Spontan (adventure + creativity)
      } else {
        result = personalityTypes[0]; // Si Spontan (default adventurer)
      }
    }
    
    // Strong empathetic → chill observer
    else if (primary === 'empathetic' && primaryScore >= 2) {
      if (scores.creative >= 1) {
        result = personalityTypes[4]; // Si Santai Tapi Ngeh (empathy + creativity)
      } else if (scores.logical >= 1) {
        result = personalityTypes[1]; // Si Paling Beres (empathy + logic)
      } else {
        result = personalityTypes[4]; // Si Santai Tapi Ngeh (default empathetic)
      }
    }
  }
  
  // === TERTIARY LOGIC: Balanced/Mixed profiles ===
  
  if (!result) {
    // Very balanced scores (no clear winner)
    if (gap <= 1 && primaryScore <= 2) {
      // Check for any slight lean
      if (scores.empathetic >= scores.logical) {
        result = personalityTypes[4]; // Si Santai Tapi Ngeh (balanced chill)
      } else {
        result = personalityTypes[1]; // Si Paling Beres (balanced organized)
      }
    }
    
    // Low engagement overall
    else if (total <= 3) {
      result = personalityTypes[4]; // Si Santai Tapi Ngeh (minimal but aware)
    }
    
    // High engagement but scattered
    else if (total >= 5) {
      // Look at top 2 traits
      if ((primary === 'creative' || secondary === 'creative') && 
          (primary === 'adventurer' || secondary === 'adventurer')) {
        result = personalityTypes[0]; // Si Spontan
      } else if (primary === 'creative' || secondary === 'creative') {
        result = personalityTypes[3]; // Si Paling Eksis
      } else if (primary === 'leader' || secondary === 'leader') {
        result = personalityTypes[2]; // Si Serba Cepat
      } else {
        result = personalityTypes[1]; // Si Paling Beres
      }
    }
  }
  
  // === ULTIMATE FALLBACK ===
  if (!result) {
    // Fallback based on primary trait only
    switch (primary) {
      case 'leader':
        result = personalityTypes[2]; // Si Serba Cepat
        break;
      case 'creative':
        result = personalityTypes[3]; // Si Paling Eksis
        break;
      case 'adventurer':
        result = personalityTypes[0]; // Si Spontan
        break;
      case 'logical':
        result = personalityTypes[1]; // Si Paling Beres
        break;
      case 'empathetic':
        result = personalityTypes[4]; // Si Santai Tapi Ngeh
        break;
      default:
        result = personalityTypes[1]; // Si Paling Beres (safest default)
    }
  }
  
  // Return with random description variant for replay value
  return getPersonalityWithRandomDescription(result);
}
