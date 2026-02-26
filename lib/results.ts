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
    titleEn: "THE SPONTANEOUS ONE",
    description: "Kamu terbiasa menangkap momen apa adanya tanpa mikir urusan teknis. Yang penting momennya keburu tersimpan, soal storage belakangan. Hidup di saat ini lebih penting daripada mengatur file.",
    descriptionVariants: [
      "Kamu menangkap momen apa adanya tanpa mikir terlalu banyak. Yang penting tersimpan dulu. Mungkin terkesan berantakan, tapi tidak ada momen penting yang terlewat.",
      "Kamu hidup di momen yang sedang terjadi. Abadikan momen dulu, atur belakangan. Kamu gak mau kehilangan momen hanya karena sibuk ngatur file.",
      "Kamu lebih milih menangkap momen sekarang daripada atur-atur file. Urusan teknis biasanya baru terpikir saat memori mulai penuh.",
      "Kamu spontan dan responsif terhadap keadaan. Selama bisa disimpan, kamu jalan terus sampai storage penuh. Hadapi masalah nanti, hidup sekarang. Dokumentasi lengkap lebih penting daripada rapih.",
      "Bagi kamu, pengalaman adalah segalanya. Kamu pilih jalani hidup sepenuhnya hari ini, bereskan nanti.",
      "Rekam dulu, mikir belakangan. Itu motto kamu. Kamu menangkap detail yang sering dilewatkan orang lain. Lebih baik berantakan tapi lengkap, daripada rapi tapi kehilangan momen terbaik.",
      "Kamu bukan tipe yang menyusun rencana panjang untuk setiap hal. Kalau rasanya seru, ya jalan. Kalau ada kesempatan, ya ambil. Buat kamu, terlalu banyak mikir justru bikin momen lewat begitu saja.",
      "Kamu memilih untuk menangkap momen apa adanya, tanpa terlalu banyak pertimbangan. Karena sering kali, yang terasa tidak penting hari ini justru jadi momen bermakna nanti.",
      "Kamu nggak selalu memilih yang paling aman, kamu memilih yang terasa hidup. Nggak semuanya harus rapi, yang penting dijalani sepenuh hati. Karena terkadang yang terlihat berantakan justru paling berkesan.",
      "Kamu lebih memilih hadir sepenuhnya di setiap momen, tanpa terlalu sibuk mengatur semuanya. Mungkin nggak selalu sempurna, tapi selalu terasa hidup."
    ],
    descriptionEn: "You're used to capturing moments as they are, without overthinking the technical stuff. What matters is saving the moment first. Storage management usually comes later.",
    quote: "Rekam dulu, pikir belakangan.",
    quoteEn: "Record first, think later.",
    element: "🔥 Api - spontan & berani",
    elementEn: "🔥 Fire — spontaneous & bold.",
    colorName: "Hot Orange",
    colorHex: "#FF6B35",
    mostImportant: "Video dadakan. Screenshot chat random. Foto blur tapi penuh cerita.",
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
    titleEn: "THE MOST PUT-TOGETHER ONE",
    description: "Kamu baru tenang kalau semuanya beres. File, momen, dan kerjaan harus jelas tempatnya biar hidup gak ribet sendiri. Kamu percaya sistem yang baik itu investasi jangka panjang. Kerapian adalah bentuk menghormati diri sendiri.",
    descriptionVariants: [
      "Kamu baru tenang kalau semuanya beres. File, momen, dan kerjaan harus jelas tempatnya biar hidup nggak terasa ribet sendiri. Sistem yang baik itu investasi jangka panjang, bukan cuma soal perfeksionis. Kerapian adalah cara menghormati diri sendiri.",
      "Buat kamu, rapi bukan perfeksionis tapi cara biar gak panik saat penting. Kamu udah sering alami kalau berantakan bikin rugi waktu dan kesempatan. Lebih baik atur 5 menit sekarang daripada cari-cari 2 jam nanti.",
      "Kamu jarang kelabakan karena udah mikir satu langkah lebih depan. Termasuk soal nyimpen data. Kamu bantu diri sendiri di masa depan dengan persiapan sekarang. Proaktif lebih baik daripada reaktif.",
      "Hidup terasa ringan kalau semuanya tertata. Gak banyak kejutan tapi aman. Kamu suka yang bisa diprediksi dan stabil. Drama itu melelahkan, stabilitas memberikan kebebasan.",
      "Kamu jarang kelabakan karena udah mikir satu langkah lebih depan. Termasuk soal nyimpen data. Kamu bantu diri sendiri di masa depan dengan persiapan sekarang. Proaktif lebih baik daripada reaktif.",
      "Buat kamu, kerapian bukan soal estetika tapi soal ketenangan pikiran saat butuh cepat. Pas momen penting, kamu gak panik cari file. Semuanya udah di tempatnya, siap dipakai kapan saja.",
      "Kamu tau persis dimana setiap file berada karena kekacauan bikin kamu kehilangan kontrol. Organisasi itu kekuatan. Orang minta tolong sama kamu karena tau kamu beres. Itu hasil dari kebiasaan kecil yang konsisten.",
      "Kamu percaya sistem yang rapi itu investasi. Sedikit usaha di awal bikin semuanya lebih ringan ke depannya. Dengan hal-hal rutin berjalan otomatis, kamu bisa fokus pada hal yang benar-benar penting.",
      "Kamu suka hidup yang bisa diprediksi. Bukan karena membosankan tapi karena lebih berkelanjutan. Drama itu melelahkan, stabilitas itu kebebasan. Fondasi kuat memungkinkan kamu ambil risiko di area lain yang lebih penting.",
      "Buat kamu, backup teratur bukan paranoid tapi tanggung jawab sama diri sendiri. Kehilangan data bukan cuma kehilangan file tapi kehilangan ketenangan pikiran. Pencegahan lebih baik daripada penyesalan."
    ],
    descriptionEn: "You're the type who can only relax when everything is in order. Files, moments, and tasks need their proper place so life doesn't complicate itself.",
    quote: "Harusnya ada sistem yang lebih rapi.",
    quoteEn: "There should be a better system.",
    element: "🪨 Tanah - stabil & bisa diandalkan",
    elementEn: "🪨 Earth — stable & reliable",
    colorName: "Hitam",
    colorHex: "#1A1A1A",
    mostImportant: "Album foto tersusun per kategori. Semua ada tempatnya, semua gampang dicari.",
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
    titleEn: "THE FAST AND FURIOUS",
    description: "Hidup kamu jalan cepat dan gak suka ditahan-tahan. Semua harus praktis dan langsung bisa dipakai. Kamu anti proses berbelit yang ujungnya buang waktu. Efisiensi bukan kemewahan tapi kebutuhan. Setiap detik punya nilai.",
    descriptionVariants: [
      "Hidup kamu jalan cepat dan gak suka ditahan-tahan. Semua harus praktis dan langsung bisa dipakai. Kamu anti proses berbelit yang ujungnya buang waktu. Efisiensi bukan kemewahan tapi kebutuhan. Kalau bisa satu langkah, kenapa harus lima?",
      "Kamu fokus ke sekarang dan langkah selanjutnya, bukan urusan teknis yang ribet. Detail boleh penting tapi kecepatan lebih penting. Momentum itu rapuh, sekali hilang susah dapat lagi. Eksekusi tepat waktu lebih berharga.",
      "File pindah-pindah, perangkat ganti-ganti? Gak masalah asal gak tiba-tiba berhenti. Kamu fleksibel dan mudah menyesuaikan diri. Selama progres tetap jalan, sisanya bisa disesuaikan.",
      "Kamu butuh penyimpanan yang bisa ngikutin ritme hidupmu, bukan sebaliknya. Kamu gak mau sesuaikan gaya hidup gara-gara keterbatasan teknis. Teknologi harus melayani, bukan memperlambat. Hambatan itu musuh.",
      "Buat kamu, lambat itu lebih nyebelin daripada berantakan. Berantakan tapi selesai lebih baik daripada sempurna tapi tertunda. Kamu prioritaskan progres daripada kesempurnaan. Aksi lebih baik daripada rencana berlarut.",
      "Kamu anti menunggu. Hidup itu momentum. Jeda satu detik bisa pecahkan alur yang udah dibangun. Kecepatan adalah bentuk menghargai waktu sendiri.",
      "Kamu bergerak cepat, tapi tetap terarah. Bukan soal terburu-buru, tapi soal tahu kapan waktunya melaju tanpa ragu. Kamu percaya keputusan yang tepat nggak selalu harus menunggu lama yang penting jelas tujuannya.",
      "Kamu nyaman ambil keputusan dengan cepat. Bukan karena asal-asalan, tapi karena kamu tahu apa yang kamu mau. Menunggu terlalu lama justru bikin kamu nggak sabar.",
      "Kamu nggak suka proses yang bertele-tele. Kamu selalu mencari cara paling efisien, menyaring yang penting, dan menghindari langkah yang nggak perlu. Kalau bisa selesai dalam satu klik, kenapa harus lebih?",
      "Buat kamu, kecepatan itu kebutuhan. Karena waktu nggak pernah menunggu. Terlalu lama diam, kesempatan bisa lewat. Terlalu lama menunda, ide bisa hilang. Kamu memilih tetap bergerak, menjaga momentum sebelum semuanya berubah arah."
    ],
    descriptionEn: "Your life moves fast and you don't like being held back. Everything must be practical and ready to use.",
    quote: "Gak usah ribet.",
    quoteEn: "Don't make it complicated.",
    element: "💨 Angin - cepat & fleksibel",
    elementEn: "💨 Wind — fast & flexible.",
    colorName: "Kuning",
    colorHex: "#FFD60A",
    mostImportant: "Foto seperlunya. Video sekali jadi. Screenshot bukti transfer - yang penting beres!",
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
    description: "HP kamu penuh bukan karena berantakan, tapi karena hidupmu penuh cerita. Ada makna di setiap file, bahkan di foto yang mungkin terlihat buram sekalipun. Kamu pendokumentasi kehidupan sendiri.",
    descriptionVariants: [
      "HP kamu penuh bukan karena berantakan, tapi karena hidupmu penuh cerita. Ada makna di setiap file, bahkan di foto yang mungkin terlihat buram sekalipun. Kamu hampir selalu jadi yang pertama mengabadikan momen sehari-hari yang bagi orang lain terlihat biasa, tapi buat kamu punya arti.",
      "Kamu nggak pernah ketinggalan momen. Kamera selalu ready. Orang lain hapus yang nggak penting, kamu malah share. Karena buat kamu, eksis itu soal ikut momen, bukan soal tampil sempurna.",
      "Momen yang kamu abadikan bukan cuma arsip, tapi cerita yang bisa kamu ingat kembali kapan saja. Ingatan bisa memudar, tapi file dan foto tetap ada, siap buat dikenang kapan saja.",
      "Buat kamu, file, foto, atau video bukan sekadar data, tapi bukti bahwa kamu selalu hadir di setiap momen. Setiap potongan cerita yang kamu abadikan penting, dan biasanya dibagikan juga. Hilang satu, rasanya ada yang kurang. Hilang banyak, rasanya separuh momenmu ikut pergi.",
      "Momen datang dan pergi, tapi yang kamu rekam bertahan. Semua foto dan video adalah bukti kalau kamu ada di sana, ikut merasakan, dan nggak mau kehilangan satu detik pun. Bagi kamu, hidup itu soal hadir di setiap momen.",
      "Kamu selalu ada di foto blur, video random, story receh, semua masuk feed. Orang lain mungkin bilang berantakan, tapi buatmu itu cerita hidupmu. Semua tercatat, semua nyata, semua seru.",
      "Kamu nggak cuma ikut momen besar, tapi juga tangkap semua hal kecil yang bikin hidup nyata. Setiap momen itu penting, dan kamu selalu ada di sana, nggak mau ketinggalan satupun.",
      "Buat kamu, semua yang kamu rekam itu bagian dari cerita hidupmu. Feed-mu mungkin acak-acakan, tapi justru itulah serunya. Tanpa diedit atau dipoles, semua momen terasa nyata dan berkesan.",
      "Kamu nggak mau kehilangan momen apa pun. Foto blur, video random, story receh semua masuk di feed. Hidupmu penuh warna, penuh cerita, dan setiap detik selalu terabadikan dengan baik.",
      "Hidupmu nggak minimalis, tapi penuh warna dan cerita. Semua yang kamu simpan di HP dan bagikan di feed adalah momen yang tidak tergantikan."
    ],
    descriptionEn: "Your phone is full not because you're messy, but because your life is full of stories.",
    quote: "Jangan dihapus dulu.",
    quoteEn: "Don't delete it yet.",
    element: "💧 Air - emosional & penuh cerita",
    elementEn: "💧 Water — emotional & full of stories.",
    colorName: "Ungu",
    colorHex: "#7209B7",
    mostImportant: "Foto OOTD. Video transisi. Draft reels siap upload. Momen kecil pun berarti.",
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
    titleEn: "THE CHILL BUT CARE ONE",
    description: "Kamu gak suka ribet tapi tetap peduli. Selama file aman dan gampang diakses, hidup terasa cukup tenang. Kamu gak terlalu mikir tapi juga gak ceroboh. Keseimbangan adalah kunci. Jalan tengah antara kekacauan dan kekakuan.",
    descriptionVariants: [
      "Kamu gak suka ribet tapi tetap peduli. Selama file aman dan gampang diakses, hidup terasa cukup tenang. Kamu gak terlalu mikir tapi juga gak ceroboh. Keseimbangan adalah hal kamu. Jalan tengah antara kekacauan dan kekakuan.",
      "Buat kamu, yang penting simpel. Gak perlu paling rapi asal aman dan gak bikin pusing. Cukup baik itu sudah cukup. Kesempurnaan kadang cuma bikin capek.",
      "Kamu santai tapi ngerti mana yang penting. Perhatianmu selektif, energi terbatas, jadi kamu investasikan cuma ke hal-hal yang semestinya.",
      "Kamu pilih hidup yang sederhana tapi gak asal. Selama aman dan bisa diandalkan, itu udah cukup. Dalam dunia yang selalu nuntut lebih, buat kamu cukup itu sudah baik.",
      "Kamu santai tapi gak asal. Selama file aman dan bisa diakses kapan perlu, hidup terasa tenang. Santai gak berarti asal, tapi percaya diri karena ada fondasi yang solid.",
      "Keseimbangan adalah kuncimu. Gak terlalu obsesif, gak terlalu ceroboh. Kamu nyaman dengan ritme kamu sendiri. Gak sempurna, tapi tetap terjaga.",
      "Kamu tau file mana yang penting, sisanya biarkan santai. Gak perlu mengoptimalkan segalanya, cukup fokus ke yang penting dan berarti.",
      "Hidupmu sederhana tapi tetap terkontrol. Gak perlu ribet, selama semua yang penting aman. Kamu tau cara menjaga keseimbangan antara tenang dan siap siaga.",
      "Kamu tipe yang sadar kondisi tapi gak panik. Tau risikonya tapi tetap tenang. Hal buruk bisa saja terjadi, tapi kamu cukup siap dan percaya diri menghadapi itu.",
      "Kamu gak kepo sama semua hal, cukup fokus ke yang penting. Sistem penyimpananmu rapi tapi nggak ribet. Dengan begitu, hidup terasa aman dan santai sekaligus."
    ],
    descriptionEn: "You don't like complications, but you still care. As long as files are safe and easily accessible, life feels calm enough.",
    quote: "Biar gue urusin pelan-pelan.",
    quoteEn: "Let me handle it slowly.",
    element: "🌿 Alam - tenang & seimbang",
    elementEn: "🌿 Nature — calm & balanced.",
    colorName: "Hitam",
    colorHex: "#FFC300",
    mostImportant: "Foto keluarga inti. Dokumen penting. Cukup yang berarti dan aman.",
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
  // 0: Si Spontan - creative + adventurer (impulsive recorder)
  // 1: Si Paling Beres - logical dominant (organized keeper) - FIXED: no longer needs empathetic
  // 2: Si Serba Cepat - leader (speed & efficiency)
  // 3: Si Paling Eksis - creative dominant (moment collector)
  // 4: Si Santai Tapi Ngeh - empathetic/low total (chill observer) - FIXED: easier to get
  
  let result: PersonalityResult | null = null;
  
  // === PRIORITY 1: Strong Dominant Trait (Gap >= 2, Score >= 3) ===
  if (gap >= 2 && primaryScore >= 3) {
    switch (primary) {
      case 'leader':
        result = personalityTypes[2]; // Si Serba Cepat
        break;
      case 'logical':
        result = personalityTypes[1]; // Si Paling Beres
        break;
      case 'creative':
        result = personalityTypes[3]; // Si Paling Eksis
        break;
      case 'adventurer':
        result = personalityTypes[0]; // Si Spontan
        break;
      case 'empathetic':
        result = personalityTypes[4]; // Si Santai Tapi Ngeh
        break;
    }
    if (result) return getPersonalityWithRandomDescription(result);
  }
  
  // === PRIORITY 2: Low Engagement (Santai personality) ===
  if (total <= 3) {
    return getPersonalityWithRandomDescription(personalityTypes[4]); // Si Santai Tapi Ngeh
  }
  
  // === PRIMARY MATCHES (Strong dual-trait combinations) ===
  
  // Si Spontan: Creative + Adventurer combo (YOLO, capture everything)
  if ((primary === 'creative' && secondary === 'adventurer' && gap <= 1) ||
      (primary === 'adventurer' && secondary === 'creative' && gap <= 1) ||
      (scores.creative >= 2 && scores.adventurer >= 2)) {
    result = personalityTypes[0];
  }
  
  // REMOVED: Si Paling Beres combo (logical + empathetic was too common)
  // Now Si Paling Beres only requires logical dominant
  
  
  // Si Serba Cepat: Leader trait
  else if (primary === 'leader' && primaryScore >= 2) {
    result = personalityTypes[2];
  }
  
  // Si Paling Beres: Logical trait (SIMPLIFIED - no longer needs empathetic)
  else if (primary === 'logical' && primaryScore >= 3) {
    result = personalityTypes[1];
  }
  
  // Si Santai Tapi Ngeh: Empathetic dominant (SIMPLIFIED - easier to get)
  else if (primary === 'empathetic' && primaryScore >= 2) {
    result = personalityTypes[4];
  }
  
  // Si Paling Eksis: Creative-dominant (moment collector)
  else if (primary === 'creative' && primaryScore >= 3) {
    result = personalityTypes[3];
  }
  
  // === SECONDARY LOGIC: Moderate scores (primaryScore >= 2) ===
  
  if (!result) {
    // Leader → Si Serba Cepat
    if (primary === 'leader' && primaryScore >= 2) {
      result = personalityTypes[2];
    }
    
    // Logical → Si Paling Beres
    else if (primary === 'logical' && primaryScore >= 2) {
      result = personalityTypes[1];
    }
    
    // Creative → check if combined with adventurer
    else if (primary === 'creative' && primaryScore >= 2) {
      if (scores.adventurer >= 1) {
        result = personalityTypes[0]; // Si Spontan (creative + action)
      } else {
        result = personalityTypes[3]; // Si Paling Eksis (pure creative)
      }
    }
    
    // Adventurer → Si Spontan
    else if (primary === 'adventurer' && primaryScore >= 2) {
      result = personalityTypes[0];
    }
    
    // Empathetic → Si Santai Tapi Ngeh
    else if (primary === 'empathetic' && primaryScore >= 2) {
      result = personalityTypes[4];
    }
  }
  
  // === TERTIARY LOGIC: Balanced/Mixed profiles ===
  
  if (!result) {
    // Very balanced scores → default to Santai
    if (gap <= 1 && primaryScore <= 2) {
      result = personalityTypes[4]; // Si Santai Tapi Ngeh (balanced chill)
    }
    
    // Low engagement overall → Santai
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
      } else if (primary === 'logical' || secondary === 'logical') {
        result = personalityTypes[1]; // Si Paling Beres
      } else {
        result = personalityTypes[4]; // Default: Si Santai Tapi Ngeh
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
