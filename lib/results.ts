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
    description: "Kamu terbiasa menangkap momen apa adanya, tanpa banyak mikir urusan teknis. Buat kamu, yang penting momennya keburu tersimpan. Soal storage biasanya belakangan. Present moment is everything. Planning is future, organizing is past, but living? Living is now. And you choose now. Every time. Without hesitation. That's not reckless—that's prioritization.",
    descriptionVariants: [
      "Kamu terbiasa menangkap momen apa adanya, tanpa banyak mikir urusan teknis. Buat kamu, yang penting momennya keburu tersimpan. Soal storage biasanya belakangan. Present moment is everything. Planning is future, organizing is past, but living? Living is now. And you choose now. Every time. Without hesitation. That's not reckless—that's prioritization. Capture first, curate never. Document everything, sort nothing. It's chaotic, it's full, it's messy—but it's complete. Nothing missed. Nothing filtered out because it wasn't perfect. You get the raw material of life. Others get highlights. You get everything.",
      "Kamu hidup di momen yang sedang terjadi. File bisa numpuk, bukan karena lalai, tapi karena kamu lebih fokus menikmati yang sekarang. Experience first, organize later. Living beats documenting perfectly. Kamu nggak pause fun untuk manage files. You don't stop laughing untuk check storage. You don't leave party untuk backup photos. That's insane. Life is happening NOW. Files can wait. They'll still be there tomorrow. Moment won't. You choose correctly, even if it means storage chaos. Priorities straight. Life first, admin later.",
      "Kamu lebih memilih menangkap momen sekarang daripada mengatur segalanya di awal. Urusan teknis sering bukan prioritas, sampai akhirnya storage penuh baru pusing. Spontaneity has its price, but also its rewards. Clean storage versus lived life? You choose lived life. Every time. Consequences? You'll deal with them when they arrive. But missing moment? That's permanent. Storage full adalah solvable problem. Missed moment adalah permanent loss. Math is simple. You take temporary problem over permanent regret. That's wisdom disguised as chaos.",
      "Kamu tipe yang spontan dan responsif sama momen. Selama masih bisa disimpan, kamu jalan terus sampai storagenya penuh. Deal with problems when they arrive, not before. Live now, sort later. Proactive storage management versus reactive living? You choose reactive, and you're not apologizing. Yes, you'll hit storage limit eventually. Yes, you'll have crisis cleanup moment. But you'll also have complete documentation of life fully lived. No moments skipped because you were busy organizing. No experiences missed because you were backing up. That's the trade. You accept it.",
      "Buat kamu, experience paling penting. Sorting file biasanya datang belakangan, pas butuh saja. Memory management is future you's problem. Present you is busy living. Fair trade-off. Future you might curse present you for the mess. But future you will also thank present you for capturing everything. For being present. For not missing moments because you were worried about metadata. Organization can be fixed. Missed moments can't. You've chosen your priority. Live fully now, deal with mess later. Some call it procrastination. You call it living.",
      "Rekam dulu, mikir belakangan. Itulah motto hidup kamu. Dan honestly? It works. You capture moments others miss while they're busy organizing. Raw beats polished sometimes. While others curate, you collect. While others optimize, you maximize. Quantity ensures quality hidden somewhere in there. Can't find diamond if you don't mine. Can't capture magic if you're too selective. You cast wide net, sort valuable fish later. Messy? Yes. Complete? Also yes. You prefer complete mess over organized gaps. Because gaps are permanent. Mess is fixable.",
      "Kamu YOLO person. Momen datang sekali, jadi capture everything. Urusan storage? Nanti aja. Carpe diem in digital form. Better to have and not need than need and not have. You'd rather delete later than miss now. Deletion is easy. Recapture adalah impossible. That shapes your behavior. That's why you shoot everything. That's why your phone is full. Because you understand: in moment, you don't know what will matter. Only hindsight knows. So you capture everything, let future you decide what mattered. That's insurance. That's smart.",
      "Buat kamu, hidup terlalu cepat untuk dipause. Jadi semua direkam, semua disimpan, tanpa filter. Quantity ensures quality hidden somewhere in there. Cast wide net, sort valuable fish later. You don't pre-filter. You don't pre-select. You don't decide in moment what's worth keeping. You keep everything, decide later. Because in moment, judgment is poor. Emotion clouds value. Only distance brings clarity. So you capture raw data now, extract meaning later. That's journalism. That's anthropology. That's documenting species called You.",
      "Kamu impulsif dalam arti yang baik. Karena spontanitas itu yang bikin hidup worth living. Structure is safe, spontaneity is alive. You choose alive. Messy but meaningful. Impulsive doesn't mean thoughtless. It means responsive. It means adaptive. It means present. While others plan, you act. While others prepare, you experience. While others organize, you live. Different strategies. Different values. Yours prioritizes being there over having proof organized. But you still get proof—just unorganized. And that's okay. Unorganized proof of lived life beats organized proof of planned life.",
      "Storage management? Nanti kalau udah darurat. Sekarang? Just live and record. Crisis management style. Stressful sometimes, but never boring. Memories made, organization optional. Priorities. You'll never regret moments captured. You might regret mess. But mess is temporary discomfort. Missed moments are permanent regret. You've done math. Mess wins. Every time. So you live with full storage and full life. Others live with organized storage and curated life. Different choices. Different philosophies. Yours is messier. Yours is fuller. Yours is unfiltered. Yours is real."
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
    gear: "SanDisk Phone Drive Orange",
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
    description: "Kamu tipe yang baru bisa tenang kalau semuanya beres. File, momen, dan kerjaan harus jelas tempatnya, biar hidup nggak ribet sendiri. Kamu percaya sistem yang baik itu investasi jangka panjang, bukan cuma soal perfectionism. Buat kamu, kerapian adalah bentuk self-care—cara kamu menghormati waktu dan energi sendiri. Kamu nggak suka surprise di saat-saat krusial, dan cara paling aman mencegahnya adalah dengan preparation yang solid dari awal.",
    descriptionVariants: [
      "Kamu tipe yang baru bisa tenang kalau semuanya beres. File, momen, dan kerjaan harus jelas tempatnya, biar hidup nggak ribet sendiri. Kamu percaya sistem yang baik itu investasi jangka panjang, bukan cuma soal perfectionism. Buat kamu, kerapian adalah bentuk self-care—cara kamu menghormati waktu dan energi sendiri. Kamu nggak suka surprise di saat-saat krusial, dan cara paling aman mencegahnya adalah dengan preparation yang solid dari awal. Organization isn't about being anal-retentive, it's about creating mental space for things that actually matter.",
      "Buat kamu, rapi itu bukan perfeksionis. Tapi cara biar nggak panik di saat penting. Karena kamu tau, chaos kecil sekarang bisa jadi bencana besar nanti. Keteraturan itu ketenangan pikiran. Kamu udah cukup sering experience situasi dimana disorganization costs you—waktu, kesempatan, peace of mind. Jadi kamu learn: better invest 5 minutes organizing now than waste 2 hours searching later. It's not obsession, it's efficiency based on hard-earned wisdom dari trial and error.",
      "Kamu jarang kelabakan karena sudah mikir satu langkah lebih depan. Termasuk soal nyimpen data. Buat kamu, preparation bukan paranoia, tapi bentuk respect sama diri sendiri di masa depan. Kamu treat future you sebagai person yang perlu dibantu oleh present you. Proactive beats reactive. Kamu nggak mau future you stress gara-gara present you lazy. That's not paranoid, that's care. That's maturity. That's understanding bahwa small actions compound over time into either peace atau chaos.",
      "Hidup terasa lebih ringan kalau semuanya tertata. Nggak banyak surprise, tapi aman. Kamu lebih suka predictable dan stabil daripada exciting tapi chaotic. Dan itu pilihan yang matang. Drama is exhausting. Unpredictability drains energy yang bisa kamu pakai untuk actual productivity atau enjoyment. Kamu bukan boring, kamu just wise enough to know bahwa real freedom comes from structure, not from winging it. Stability is the foundation untuk actual creativity dan spontaneity when it matters.",
      "Kamu percaya kalau ribet sedikit di awal bisa nyelametin drama gak penting di belakang. Sepuluh menit buat beresin sekarang, hemat berjam-jam stress nanti. Simple math yang kebanyakan orang skip. Front-loaded effort, back-loaded peace. Kamu understand delayed gratification dalam bentuk organization. Sementara orang lain binge chaos terus clean up nanti, kamu maintain clean as you go. Less dramatic, jauh lebih sustainable. Less cortisol, more control. That's the trade-off kamu consciously choose.",
      "Buat kamu, kerapian bukan soal estetika. Tapi soal ketenangan pikiran saat butuh cepat. Pas urgent moment, kamu nggak scrambling cari file. Semuanya udah di tempatnya, ready to go. Kamu pernah lihat orang panic searching saat critical moment. Kamu decide you won't be that person. Organization is insurance policy against future panic. It's having your ducks in a row so when life throws curveball, you can actually focus on solving the problem instead of finding the tools to solve it. Preparedness is power.",
      "Kamu tahu persis dimana setiap file kamu berada. Karena chaos itu bikin lo kehilangan kontrol. Dan kehilangan kontrol itu feeling yang kamu hindari. Organization is power. Knowing where everything is means you're never at the mercy of chance atau luck. Kamu self-reliant karena reliable. People ask you for help karena they know you have your shit together. That reputation wasn't accident—itu result dari consistent small habits yang kamu maintain even when no one's watching.",
      "Sistem yang rapi itu investasi. Satu menit buat beresin sekarang, hemat sepuluh menit nanti. Kamu understand compound effect dari small consistent actions. Efficiency is your love language. Every system you build is gift to future you. Kamu automating decisions, reducing cognitive load, creating smooth pathways untuk common tasks. It's not about being uptight—it's about being smart dengan finite resources: time, energy, attention. Optimization bukan untuk its own sake, tapi untuk free up bandwidth untuk things that actually need your full brain power.",
      "Kamu suka hidup yang predictable. Bukan karena boring, tapi karena lo tau itu lebih sustainable. Drama itu exhausting. Stability itu underrated. Kamu pilih yang kedua tanpa ragu. Predictability gets bad rap sebagai boring, tapi kamu know better. It's actually liberating. Knowing your foundations are solid means you can take calculated risks elsewhere. Stability in basics enables experimentation in areas that matter. Consistent sleep, organized files, maintained systems—these aren't chains, they're launchpads. Boring basics enable exciting possibilities.",
      "Buat kamu, backup teratur bukan paranoid. Itu tanggung jawab sama diri sendiri. Karena losing data bukan cuma kehilangan file, tapi kehilangan peace of mind. Prevention beats cure. Kamu udah cukup mature untuk understand bahwa insurance isn't exciting tapi it's necessary. Backing up is like wearing seatbelt—feels unnecessary until you need it. Kamu nggak gamble dengan irreplaceable stuff. Photos, documents, projects—these have value beyond monetary. Losing them means losing pieces of your timeline. You honor that by protecting it."
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
    gear: "SanDisk Phone Drive Black",
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
    description: "Hidup kamu jalan cepat dan nggak suka ditahan-tahan. Semua harus praktis dan langsung bisa dipakai. Kamu anti proses berbelit yang ujungnya cuma buang waktu. Efficiency bukan luxury, tapi necessity buat kamu. Setiap detik punya value, dan kamu nggak mau waste it on unnecessary friction. Velocity is your competitive advantage dalam hidup yang constantly moving.",
    descriptionVariants: [
      "Hidup kamu jalan cepat dan nggak suka ditahan-tahan. Semua harus praktis dan langsung bisa dipakai. Kamu anti proses berbelit yang ujungnya cuma buang waktu. Efficiency bukan luxury, tapi necessity buat kamu. Setiap detik punya value, dan kamu nggak mau waste it on unnecessary friction. Velocity is your competitive advantage dalam hidup yang constantly moving. Kamu allergic sama bureaucracy, red tape, unnecessary steps. If something can be one click, making it three clicks is crime. Streamlining is not laziness, it's intelligence. Removing friction is optimization. And you're always optimizing.",
      "Kamu tipe yang fokus ke sekarang dan langkah selanjutnya, bukan urusan teknis yang ribet. Detil boleh penting, tapi speed lebih penting. Karena momentum itu fragile, sekali ilang susah dapet lagi. Perfect execution yang terlambat beats imperfect execution yang on time. Timing beats quality dalam banyak situasi. Kamu understand bahwa being first dengan 80% solution often better than being third dengan 100% solution. Market rewards speed. Opportunities have expiration dates. Kamu move fast karena you have to, not because you're reckless.",
      "File pindah-pindah, device ganti-ganti? Nggak masalah, asal nggak tiba-tiba berhenti aja. Kamu adaptable dan fluid. Yang penting workflow tetap jalan, tools bisa disesuaikan nanti. Kamu platform-agnostic, device-agnostic. What matters is the work getting done, not which tool does it. Flexibility beats loyalty to specific tools. Kamu nggak get emotionally attached sama setup. If something faster comes along, you switch. No sunk cost fallacy. Progress over comfort. Movement over attachment.",
      "Kamu butuh storage yang bisa ngikutin ritme hidupmu, bukan sebaliknya. Kamu nggak mau adjust lifestyle gara-gara limitation teknis. Technology should serve you, not slow you down. Tools exist to enable, not constrain. Kalau tool jadi bottleneck, you replace the tool, not change your workflow. Kamu find solutions that match your velocity, bukan slow down to match tool limitations. Life's too short to wait for syncing, loading, processing. Instant atau nothing. Lag is unacceptable. Friction is enemy.",
      "Buat kamu, lambat itu lebih nyebelin daripada berantakan. Messy tapi done beats perfect tapi pending. Kamu prioritize progress over perfection. Action beats planning paralysis. Analysis paralysis is real enemy. While others are planning the perfect execution, you've already done three imperfect versions and learned from each. Iteration beats deliberation. Shipping beats polishing. Done beats perfect. Every time. Without exception. Velocity compounds. Waiting doesn't.",
      "Kamu anti menunggu. Loading lama? Skip. Transfer lambat? Frustrated. Hidup itu momentum. Delay satu detik bisa break flow yang udah dibangun. Speed is respect for your own time. Flow state is precious—interrupting it dengan lag atau delay adalah cardinal sin. Kamu protect your momentum religiously. Setiap friction point is enemy. Every loading screen is opportunity cost. Time you can't get back. Attention you have to rebuild. Flow you have to reconstruct. That's why speed matters.",
      "Kamu jarang backup karena itu butuh waktu. Padahal tau resikonya. Tapi speed is everything. Living in the moment sometimes means taking calculated risks. Not careless, just prioritizing differently. Kamu understand risk/reward ratio dan consciously choose speed over safety sometimes. It's not ignorance—it's trade-off awareness. Would backup be smart? Yes. But would it slow you down? Also yes. And in your calculation, opportunity cost of slowing down exceeds insurance benefit of backup. Controversial, but deliberate.",
      "Buat kamu, delay satu detik itu kerugian. Makanya semua harus instant atau nggak sama sekali. Patience bukan virtue buat kamu. Velocity is. Quick decisions, quick execution, quick results. Slow adalah four-letter word di vocabulary kamu. Wait adalah weakness. Queue adalah crime. Instant gratification gets bad rap, tapi kamu understand—immediate feedback enables rapid iteration. Fast feedback loops adalah how you learn faster than others. Speed isn't just about doing faster, it's about learning faster. Velocity enables volume. Volume enables discovery.",
      "Kamu nggak suka proses panjang. Satu klik, done. Dua langkah maksimal. Lebih dari itu? Drama. Kamu streamline everything. Cut the unnecessary. Keep only what moves the needle. Every extra step is friction. Every confirmation dialog is insult. Every 'are you sure?' is waste. Kamu know what you want. You don't need handholding. You don't need safety rails. Advanced users don't need beginner prompts. Give me direct path atau get out of my way. Simplicity is sophistication. Brevity is respect.",
      "Kecepatan bukan luxury buat kamu. Itu kebutuhan. Karena waktu kamu berharga. Every second counts. Opportunity cost is real. Slow means expensive in ways people don't realize. Sementara you wait, opportunities pass. Sementara tool loading, momentum dies. Sementara process run, ideas fade. Speed preserves freshness. Velocity maintains energy. Quick execution captures intention before it dilutes. You understand: time is only non-renewable resource. Money comes back. Energy recharges. Time? Gone forever. That's why you rush. Not careless—reverent. Rushing is honoring time's value."
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
    gear: "SanDisk Phone Drive Yellow",
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
    description: "HP kamu penuh bukan karena berantakan, tapi karena hidupmu penuh cerita. Every screenshot, every random video, every blurry photo—ada context, ada moment, ada feeling di baliknya yang kamu inget. Kamu dokumenter kehidupan sendiri, archivist of everyday moments yang orang lain dismiss as mundane. Tapi kamu tau: magic is in the mundane. Life happens in ordinary Tuesday afternoons, not just big events.",
    descriptionVariants: [
      "HP kamu penuh bukan karena berantakan, tapi karena hidupmu penuh cerita. Every screenshot, every random video, every blurry photo—ada context, ada moment, ada feeling di baliknya yang kamu inget. Kamu dokumenter kehidupan sendiri, archivist of everyday moments yang orang lain dismiss as mundane. Tapi kamu tau: magic is in the mundane. Life happens in ordinary Tuesday afternoons, not just big events. That random sunset photo? You remember who you were with, what song was playing, why it mattered. Context is everything. And your phone holds the keys to your context.",
      "Foto blur, video random atau voice note receh semuanya punya arti. Buat orang lain mungkin sampah, buat kamu itu documentation of life as it happens. Raw, unfiltered, honest. Kamu nggak stage moments, you capture them. Messy reality beats curated perfection. Authenticity over aesthetics. That shaky video? Reminds you of the laughter, the chaos, the aliveness. That screenshot of weird conversation? Inside joke yang masih bikin kamu smile. These aren't junk files—they're breadcrumbs of joy, proof you lived fully, traces of days that actually mattered.",
      "Kamu simpan momen bukan buat arsip, tapi buat diingat lagi suatu hari. Nostalgia is powerful. Memory fades, but files don't. Kamu appreciate that insurance policy against forgetting. Present you creates gifts for future you. Three years from now, kamu buka old photos, and suddenly you're transported. That feeling? Worth every gigabyte. Some people live light. You live documented. Both valid. Theirs is freedom from past. Yours is connection to it. You understand: who you were shapes who you are. Memory matters.",
      "Buat kamu, kehilangan file itu sama kayak kehilangan bagian dari kehidupan kamu. Setiap file is a breadcrumb of your journey. Delete one, you lose context. Lose many, you lose yourself. Identity is cumulative. You are collection of experiences. Photos are proof of those experiences. Without them, did they really happen? Kamu know memory is unreliable narrator. Photos are witnesses. They keep you honest. They remind you of person you were, places you've been, people who shaped you. That's not hoarding. That's reverence for your own story.",
      "Momen datang dan pergi, tapi kenangan yang tersimpan dengan aman bisa bertahan lebih lama dari waktu. Digital memory is immortality. Kamu understand that preservation is an act of love. Love untuk diri sendiri, untuk orang-orang di photos, untuk moments yang made you. Everything changes. Photos stay. That's powerful. That's meaningful. People change, places disappear, feelings evolve. But that moment frozen at 3:47PM on random Thursday? Forever. Time travel exists—it's called scrolling through old photos. And you're building time machine, one file at a time.",
      "Setiap foto punya konteks. Setiap video punya cerita. Dan kamu ingat semuanya. Memory palace in your phone. Other people see clutter, you see carefully curated chaos with meaning. To them, it's random. To you, it's chronological autobiography. Tagged by feeling, sorted by significance, organized by heart. Not by folder, by memory. You don't need labels—you remember. That selfie no one understands? You know exactly why it exists. Context lives in you. File is just trigger. Organized by lived experience, not by file system.",
      "Kamu bukan hoarder. Kamu cuma menghargai detail kecil yang bikin hidup terasa hidup. The tiny moments between big moments—that's where life actually happens. Kamu capture that. While others chase Instagram-worthy peaks, you document the valley—the mundane, the in-between, the ordinary extraordinary. That's where truth lives. Grand moments are rare. Daily life is constant. You honor it by noticing it. By saving it. By treating Tuesday afternoon with same reverence as Saturday adventure. Because you know: life is made of Tuesdays.",
      "Memori buat kamu bukan data. Tapi dokumentasi perjalanan yang terus berjalan. Life is a story being written in real-time. Your storage is your autobiography, messy but honest. Unedited, uncurated, unpolished. Real. That's rare. Social media is highlight reel. Your camera roll is behind-the-scenes. The blooper reel, the raw footage, the director's cut. Future you will appreciate present you for keeping the receipts. For not editing out the messy parts. For documenting the struggle, not just success. That's the full story. That's the real story.",
      "Kamu capture everything karena takut lupa rasanya. Dan itu valid. Feelings fade faster than we think. Photos bring back not just images, but emotions. That's worth the storage. You don't just see the photo—you feel the moment. Smell in the air, song in background, person beside you, temperature of that day. Photos are portals. They don't just show what happened, they remind you how it felt. And feelings are precious. Harder to describe, easier to forget, impossible to replicate. Photos preserve them. That's magic. That's worth protecting.",
      "Storage penuh? Bukan masalah. Kenangan penuh? Itu berkah. Some people live minimally. You live richly. Both valid. Yours just needs more gigabytes. Worth it. While minimalists preach letting go, you practice holding on. Not to objects, to moments. Not to things, to memories. Different philosophy. Not worse. Different. They say past is anchor. You say past is foundation. They travel light. You carry your history. And that history? That's your superpower. That's your treasure. That's your who-you-are documented in pixels and metadata. Priceless."
    ],
    descriptionEn: "Your phone is full not because you're messy, but because your life is full of stories.",
    quote: "Jangan dihapus dulu.",
    quoteEn: "Don't delete it yet.",
    element: "💧 Air - emosional & penuh cerita",
    elementEn: "💧 Water — emotional & full of stories.",
    colorName: "Purple",
    colorHex: "#7209B7",
    mostImportant: "File fisik. Yang bisa lo pegang.",
    mostImportantEn: "Physical files. Things you can actually hold.",
    music: "Do I Wanna Know?",
    musicArtist: "Arctic Monkeys",
    gear: "SanDisk Phone Drive Purple",
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
    description: "Kamu nggak suka ribet, tapi tetap peduli. Selama file aman dan gampang diakses, hidup terasa cukup tenang. Kamu nggak overthink, tapi also nggak careless. Balance is your thing. Middle path between chaos dan rigidity. You found sweet spot: enough organization untuk feel secure, enough flexibility untuk not feel constrained. That equilibrium? That's wisdom.",
    descriptionVariants: [
      "Kamu nggak suka ribet, tapi tetap peduli. Selama file aman dan gampang diakses, hidup terasa cukup tenang. Kamu nggak overthink, tapi also nggak careless. Balance is your thing. Middle path between chaos dan rigidity. You found sweet spot: enough organization untuk feel secure, enough flexibility untuk not feel constrained. That equilibrium? That's wisdom. Not apathy disguised as chill, but actual thoughtful moderation. You care about the right things at the right intensity. That's sophistication. That's maturity. That's sustainable living.",
      "Buat kamu, yang penting simpel. Nggak perlu paling rapi, asal aman dan nggak bikin stres. Good enough is actually good. Perfection is overrated dan exhausting. Kamu reject hustle of perfect organization karena diminishing returns. Going from 60% organized to 80%? Worth it. From 80% to 95%? Questionable. From 95% to 100%? Waste of life. You stop at 'good enough' bukan karena lazy, karena smart about ROI of effort. That last 20%? Costs 80% of effort. Math doesn't math. You know when to stop.",
      "Kamu santai, tapi tahu mana yang penting, pokoknya nggak banyak drama. Selective care. Energy is limited, invest it wisely. Not everything deserves equal attention. Some files matter, most don't. You focus energy on the few that do. Rest? Let it be. Triage mentality. ER doctor approach to life: stabilize critical stuff, everything else can wait. That's not neglect, that's priority intelligence. You don't have capacity untuk treat everything as emergency. So you don't. Conscious resource allocation. Smart living.",
      "Kamu pilih hidup yang nggak berlebihan. Selama semuanya aman dan bisa diandalkan, itu sudah cukup. Minimalism without missing out. Conscious simplicity is sophisticated. You don't need backup backups of backups. One good system is enough. You don't need color-coded everything. Basic categories work. You don't need hourly syncs. Daily is fine. Adequate beats optimal when optimal costs too much. You understand: sufficiency is underrated. Enough is revolutionary concept in culture of more. You practice enough. That's radical.",
      "Kamu santai, tapi nggak asal. Selama file aman dan bisa diakses kapan perlu, hidup terasa lebih tenang. Chill doesn't mean careless. It means confident in your basics. You know your foundation is solid, jadi you don't stress surface stuff. Core priorities covered? Then you can relax about peripherals. That's not careless. That's knowing what's actually load-bearing versus what's decoration. Foundations matter. Aesthetics don't. You focus on former, release latter. Clear thinking. Zero drama.",
      "Balance is key buat kamu. Nggak terlalu obsesif, nggak terlalu careless. Just right. Middle path is wisdom. Extremes are exhausting. You found your sustainable sweet spot. Not perfect, but maintainable. Not inspiring, but reliable. Not impressive, but peaceful. And peace? Peace is underrated. While others yo-yo between control-freak and chaos, you maintain steady state. Consistency beats intensity. Sustainable beats spectacular. You're not flashy. You're stable. That's rare. That's valuable. That's actually winning.",
      "Kamu tau file mana yang penting. Yang lain? Biarin aja santai. No pressure. Priority clarity is power. Focus on what matters, let go of what doesn't. You're not trying to optimize everything. Just the critical path. Rest can be suboptimal—doesn't matter. That's strategic thinking. That's efficiency through elimination. That's doing less, better. Focus is refusing to care about thousand things to care deeply about ten things. You mastered that. While others try managing everything, you manage essentials and ignore rest. That's freedom.",
      "Hidup terlalu pendek untuk overthink storage. Asal aman, sisanya flow aja. Worry about big things. Small things solve themselves if you have good basics covered. You don't micromanage. You set foundation and let system run. Autopilot for routine stuff, manual control for important stuff. That's automation wisdom. That's effort allocation intelligence. You don't spend dollars of attention on penny problems. You spend attention where it returns value. Everything else? Good enough. Move on. Life's too short for pixel-perfect file management.",
      "Kamu tipe yang aware tapi nggak anxious. Tau resikonya, tapi nggak bikin hidup berat. Informed without being paralyzed. Conscious without being stressed. Rare combo. You know bad things could happen, but you don't catastrophize. You prepare reasonable amount, then stop. No spiral into worst-case scenarios. No planning for every contingency. No anxiety theater. Just practical preparation, then trust. That's healthy risk tolerance. That's not denial, that's probability thinking. That's living informed but free. That's the goal.",
      "Simple living, smart saving. Itulah filosofi kamu dalam manage digital life. Less is more when you know what matters. Clarity over complexity. Peace over perfection. You strip away unnecessary, keep essential. Not because you're lazy, because you value time and sanity. Every system you don't maintain is energy you can spend living. Every optimization you skip is hour you get back. Simplicity is advanced sophistication. You get that. You live that. That's why you're chill—not because you don't care, because you care smart. That's next level."
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
    gear: "SanDisk Phone Drive Yellow",
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
