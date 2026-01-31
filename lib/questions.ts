export interface Answer {
  id: string;
  text: string;
  trait: 'logical' | 'creative' | 'empathetic' | 'leader' | 'adventurer';
  microReaction: string;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Kalau hari lo tiba-tiba berhenti di tengah jalan (HP mati, baterai habis), perasaan pertama yang muncul apa?",
    answers: [
      { 
        id: "1a", 
        text: "Panik — masih banyak yang belum kelar", 
        trait: "creative",
        microReaction: "Lo bukan panik karena HP mati. Lo panik karena hidup lo lagi lari kenceng… dan tiba-tiba direm paksa. Banyak tanggung jawab, banyak yang bergantung, dan lo ngerasa: 'gue gak boleh berhenti sekarang'. Capek? Iya. Tapi berhenti rasanya lebih nakutin."
      },
      { 
        id: "1b", 
        text: "Kesel — timing-nya selalu gak pas", 
        trait: "leader",
        microReaction: "Bukan soal HP-nya. Yang bikin kesel itu: kenapa selalu kejadian pas lagi butuh-butuhnya? Lo tipe yang sebenernya siap, tapi hidup sering dateng di timing yang salah. Dan jujur aja… lo kesel karena ngerasa sering 'dirugiin keadaan'."
      },
      { 
        id: "1c", 
        text: "Diam sebentar — kayak dipaksa berhenti", 
        trait: "empathetic",
        microReaction: "Reaksi lo bukan panik, bukan marah. Lo diem. Karena ada bagian dari diri lo yang sadar: 'oh… ini pause yang gak gue minta.' Lo mungkin jarang ngaku, tapi kadang hidup harus maksa lo berhenti biar lo denger diri sendiri."
      },
      { 
        id: "1d", 
        text: "Biasa aja — mungkin emang waktunya", 
        trait: "logical",
        microReaction: "Tenang lo bukan cuek. Lo cuma udah kebal sama chaos kecil. Ada kebijaksanaan kecil di jawaban ini: 'kalau gak bisa dilawan, ya diterima.' Bukan pasrah — lebih ke… berdamai."
      }
    ]
  },
  {
    id: 2,
    text: "Orang paling sering salah paham soal diri lo di bagian mana?",
    answers: [
      { 
        id: "2a", 
        text: "Dikira terlalu nekat", 
        trait: "adventurer",
        microReaction: "Mereka lihat hasil akhirnya, bukan proses mikirnya. Lo dibilang nekat, padahal lo udah mikir seribu kemungkinan. Cuma satu bedanya: lo berani ambil risiko saat orang lain masih ragu."
      },
      { 
        id: "2b", 
        text: "Dikira terlalu santai", 
        trait: "empathetic",
        microReaction: "Lo kelihatan chill. Padahal di kepala lo ribut. Lo belajar kelihatan santai karena panik di depan orang gak pernah bikin apa pun jadi lebih baik."
      },
      { 
        id: "2c", 
        text: "Dikira terlalu kaku", 
        trait: "logical",
        microReaction: "Mereka bilang lo kaku karena lo gak asal. Buat lo, struktur itu bukan penjara — tapi pegangan. Dan lucunya, orang baru sadar nilai lo… pas semuanya udah berantakan."
      },
      { 
        id: "2d", 
        text: "Dikira gak peduli", 
        trait: "leader",
        microReaction: "Ini yang paling sering salah. Lo peduli — tapi gak semua hal perlu diumbar. Lo simpen rasa lo rapih-rapih, dan orang salah mengartikannya sebagai dingin."
      }
    ]
  },
  {
    id: 3,
    text: "Di antara ini, mana yang paling bikin lo capek secara mental?",
    answers: [
      { 
        id: "3a", 
        text: "Kehilangan momen penting", 
        trait: "creative",
        microReaction: "Yang bikin capek itu bukan momennya lewat… tapi pikiran 'seandainya gue lebih siap'. Lo tipe yang menghargai waktu — dan kehilangan satu momen bisa kebawa lama."
      },
      { 
        id: "3b", 
        text: "Hal kecil tapi ribet", 
        trait: "empathetic",
        microReaction: "Bukan karena kecilnya. Tapi karena gak perlu ribet sebenernya. Hal-hal kayak gini nguras energi lo pelan-pelan… tanpa disadari."
      },
      { 
        id: "3c", 
        text: "Sistem yang maksa", 
        trait: "adventurer",
        microReaction: "Lo gak anti aturan. Lo cuma benci dipaksa nurut ke sistem yang gak masuk akal. Yang bikin capek itu bukan kerjaannya — tapi perasaan 'kok harus begini sih?'"
      },
      { 
        id: "3d", 
        text: "Penjelasan panjang yang gak perlu", 
        trait: "leader",
        microReaction: "Lo paham maksudnya dari awal. Tapi orang tetap jelasin muter-muter. Dan lo capek bukan karena gak ngerti — tapi karena waktu lo kebuang."
      }
    ]
  },
  {
    id: 4,
    text: "Jam di mana pikiran lo paling jujur sama diri sendiri?",
    answers: [
      { 
        id: "4a", 
        text: "Subuh — sunyi, gak ada yang ganggu", 
        trait: "logical",
        microReaction: "Di jam ini, topeng jatuh satu-satu. Gak ada peran, gak ada tuntutan. Cuma lo dan pikiran yang akhirnya berani ngomong jujur."
      },
      { 
        id: "4b", 
        text: "Siang — pas lagi sibuk-sibuknya", 
        trait: "leader",
        microReaction: "Lucu ya. Justru di tengah chaos, lo paling sadar siapa diri lo. Karena refleksi lo muncul saat lo lagi 'jalan', bukan pas berhenti."
      },
      { 
        id: "4c", 
        text: "Malam — semuanya kelar", 
        trait: "adventurer",
        microReaction: "Setelah semua selesai, baru rasa dateng. Capeknya nyusul, pikirannya nongol. Dan di situ lo mulai evaluasi — tanpa noise."
      },
      { 
        id: "4d", 
        text: "Tengah malam — waktu paling rawan", 
        trait: "empathetic",
        microReaction: "Jam paling jujur sekaligus paling berbahaya. Karena pikiran lo lepas kontrol. Kadang nemu kebenaran… kadang kebablasan."
      }
    ]
  },
  {
    id: 5,
    text: "Kalau hidup lo lagi berat, biasanya lo…",
    answers: [
      { 
        id: "5a", 
        text: "Jalan terus, nanti juga kelar", 
        trait: "adventurer",
        microReaction: "Lo bukan gak capek. Lo cuma percaya satu hal: berhenti gak bikin apa-apa lebih ringan. Jadi lo terus jalan — meski sambil nahan."
      },
      { 
        id: "5b", 
        text: "Pelan-pelan, asal gak berhenti", 
        trait: "empathetic",
        microReaction: "Lo tau batas diri lo. Gak perlu cepat, yang penting konsisten. Dan itu bukan lemah — itu dewasa."
      },
      { 
        id: "5c", 
        text: "Beresin satu per satu", 
        trait: "logical",
        microReaction: "Lo gak suka chaos. Saat hidup berat, lo butuh kendali. Satu hal diberesin = satu beban turun."
      },
      { 
        id: "5d", 
        text: "Diemin dulu", 
        trait: "creative",
        microReaction: "Ini bukan lari. Ini napas. Karena kadang, jarak bikin masalah kelihatan lebih jelas — dan lo lebih siap balik lagi."
      }
    ]
  },
  {
    id: 6,
    text: "Saat ada momen penting, refleks pertama lo apa?",
    answers: [
      { 
        id: "6a", 
        text: "Rekam — takut kelewatan", 
        trait: "creative",
        microReaction: "Lo bukan takut kehilangan momen. Lo takut lupa rasanya. Karena lo tau, memori itu licin — sekali lewat, bisa gak balik utuh. Rekam itu cara lo bilang: 'ini penting buat gue.'"
      },
      { 
        id: "6b", 
        text: "Nikmatin — gak mau keganggu", 
        trait: "empathetic",
        microReaction: "Lo pengen hadir sepenuhnya. Tanpa layar, tanpa distraksi. Karena buat lo, momen itu soal rasa — bukan bukti. Dan lo percaya, yang kerasa di dada… gak butuh file."
      },
      { 
        id: "6c", 
        text: "Simpan di kepala", 
        trait: "logical",
        microReaction: "Lo percaya ingatan lo sendiri. Ada keyakinan kecil: 'yang penting, gak akan gue lupain.' Walau sebenernya… lo juga tau, memori kadang berubah seiring waktu."
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
    id: 7,
    text: "Lo paling nyaman hidup di kondisi seperti apa?",
    answers: [
      { 
        id: "7a", 
        text: "Cepat dan spontan", 
        trait: "adventurer",
        microReaction: "Kecepatan bikin lo ngerasa hidup. Diam terlalu lama bikin kepala lo ribut. Lo berkembang di chaos kecil — asal masih bisa lo kendaliin."
      },
      { 
        id: "7b", 
        text: "Stabil dan konsisten", 
        trait: "empathetic",
        microReaction: "Lo gak nyari sensasi. Lo nyari aman. Karena ketenangan itu mahal, dan lo gak mau hidup selalu reaktif."
      },
      { 
        id: "7c", 
        text: "Terstruktur dan jelas", 
        trait: "logical",
        microReaction: "Lo nyaman kalau semuanya kebaca. Bukan karena kaku — tapi karena lo gak mau energi habis buat nebak-nebak. Kejelasan itu bentuk self-respect buat lo."
      },
      { 
        id: "7d", 
        text: "Bebas dan fleksibel", 
        trait: "creative",
        microReaction: "Lo gak anti rencana. Lo cuma gak mau dikurung sama satu versi hidup. Pilihan buat lo itu napas."
      }
    ]
  },
  {
    id: 8,
    text: "Kalau meja kerja atau homescreen HP lo dilihat orang, lo berharap mereka mikir apa?",
    answers: [
      { 
        id: "8a", 
        text: "Wah, hidupnya padat.", 
        trait: "leader",
        microReaction: "Lo pengen diakui sibuknya. Bukan buat pamer — tapi buat divalidasi: 'oh, pantas capek.' Karena lo jarang ngeluh, jadi bukti visual jadi penting."
      },
      { 
        id: "8b", 
        text: "Kayaknya tenang.", 
        trait: "empathetic",
        microReaction: "Lo pengen orang ngerasa aman pas lihat dunia lo. Padahal lo tau, ketenangan itu hasil kerja keras. Bukan bawaan lahir."
      },
      { 
        id: "8c", 
        text: "Rapi dan kebaca.", 
        trait: "logical",
        microReaction: "Buat lo, kerapihan itu bukan estetika doang. Itu cara lo bertahan. Karena dunia udah cukup ribet — gak perlu ditambah dari HP sendiri."
      },
      { 
        id: "8d", 
        text: "Unik, tapi gak ketebak.", 
        trait: "creative",
        microReaction: "Lo gak mau gampang dibaca. Ada bagian dari diri lo yang sengaja lo simpen. Bukan rahasia — tapi privasi."
      }
    ]
  },
  {
    id: 9,
    text: "Hal ini paling sering lo tunda, padahal penting:",
    answers: [
      { 
        id: "9a", 
        text: "Beresin file", 
        trait: "adventurer",
        microReaction: "Lo tau ini harusnya gampang. Tapi terlalu banyak kenangan numpuk jadi satu. Dan milih mana yang penting… itu capek emosional."
      },
      { 
        id: "9b", 
        text: "Backup", 
        trait: "leader",
        microReaction: "Lo sadar risikonya. Tapi ada perasaan 'nanti aja' yang selalu menang. Bukan karena gak peduli — tapi karena lo gak siap kehilangan."
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
    text: "Pas nemu foto atau video lama di HP, reaksi lo biasanya…",
    answers: [
      { 
        id: "10a", 
        text: "Langsung dibuka, walau cuma sebentar", 
        trait: "creative",
        microReaction: "Lo tau itu bakal nyentil dikit. Tapi lo tetep buka. Karena lo percaya, nostalgia itu bagian dari perjalanan — bukan beban."
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
    id: 11,
    text: "Alasan utama lo nyimpen sesuatu itu apa?",
    answers: [
      { 
        id: "11a", 
        text: "Takut hilang", 
        trait: "creative",
        microReaction: "Ini bukan soal file. Ini soal rasa aman. Karena lo pernah ngerasain kehilangan — dan lo gak mau ngulang. Nyimpen itu refleks bertahan."
      },
      { 
        id: "11b", 
        text: "Ada ceritanya", 
        trait: "empathetic",
        microReaction: "Buat lo, memori itu konteks. Tanpa cerita, file cuma data. Dan lo tipe yang percaya: hidup itu rangkaian narasi, bukan highlight doang."
      },
      { 
        id: "11c", 
        text: "Bisa kepake lagi", 
        trait: "logical",
        microReaction: "Lo visioner. Lo mikir ke depan, bukan ke belakang. Nyimpen bukan karena sentimental — tapi karena 'siapa tau nanti kepake' itu logis buat lo."
      },
      { 
        id: "11d", 
        text: "Gak tega hapus", 
        trait: "adventurer",
        microReaction: "Lo tau ini sederhana. Tapi jari lo selalu berhenti sebelum tombol delete. Bukan drama — cuma empati yang kebanyakan."
      }
    ]
  },
  {
    id: 12,
    text: "Notifikasi \"storage almost full\" itu rasanya kayak…",
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
        microReaction: "Lo notice, tapi gak langsung panik. Kayak suara AC terlalu kenceng — ganggu, tapi belum darurat. Lo terbiasa hidup dengan sedikit distraksi."
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
        microReaction: "Lo punya kemampuan langka: mengabaikan tekanan. Kadang itu bikin hidup lebih ringan. Kadang… bikin masalah numpuk pelan-pelan."
      }
    ]
  },
  {
    id: 13,
    text: "Yang paling berat buat lo hapus tanpa mikir lama:",
    answers: [
      { 
        id: "13a", 
        text: "Video mentah", 
        trait: "creative",
        microReaction: "Itu proses. Belum jadi, tapi penuh potensi. Dan lo tipe yang percaya: proses sama berharganya dengan hasil."
      },
      { 
        id: "13b", 
        text: "Foto blur tapi berasa", 
        trait: "empathetic",
        microReaction: "Secara teknis jelek. Secara emosional… kena. Dan lo selalu milih rasa dibanding resolusi."
      },
      { 
        id: "13c", 
        text: "Voice note", 
        trait: "logical",
        microReaction: "Karena suara itu personal. Nada, jeda, napas — gak bisa diulang. Dan lo tau, sekali hilang… ya hilang."
      },
      { 
        id: "13d", 
        text: "File kerja lama", 
        trait: "leader",
        microReaction: "Itu bukti lo pernah berjuang. Walau sekarang udah lewat. Menghapusnya kayak bilang: 'fase ini gak penting' — dan lo belum siap."
      }
    ]
  },
  {
    id: 14,
    text: "Kalau lo dipaksa hapus file sekarang juga, jujur aja…",
    answers: [
      { 
        id: "14a", 
        text: "Gue gak bisa", 
        trait: "creative",
        microReaction: "Ini bukan keras kepala. Ini refleks melindungi. Karena buat lo, kehilangan yang dipercepat itu kejam."
      },
      { 
        id: "14b", 
        text: "Gue berat banget", 
        trait: "empathetic",
        microReaction: "Lo bisa… tapi sambil narik napas panjang. Ada jeda emosional sebelum tangan bergerak. Dan itu manusiawi."
      },
      { 
        id: "14c", 
        text: "Gue pilih-pilih", 
        trait: "logical",
        microReaction: "Lo negosiator. Kalau harus kehilangan, minimal dengan kontrol. Lo gak mau chaos — lo mau adil."
      },
      { 
        id: "14d", 
        text: "Gue oke", 
        trait: "leader",
        microReaction: "Lo praktis. Lo tau memori ada di kepala, bukan cuma di device. Dan lo cukup kuat buat ngelepas."
      }
    ]
  },
  {
    id: 15,
    text: "Dalam hidup, lo lebih nyaman dengan pendekatan:",
    answers: [
      { 
        id: "15a", 
        text: "Simpan semua dulu", 
        trait: "creative",
        microReaction: "Lo percaya waktu yang akan memutuskan. Bukan hari ini. Bukan sekarang. Karena tergesa-gesa sering bikin nyesel."
      },
      { 
        id: "15b", 
        text: "Simpan yang punya makna", 
        trait: "empathetic",
        microReaction: "Lo selektif secara emosional. Bukan pelit — tapi sadar kapasitas. Makna buat lo lebih penting dari kuantitas."
      },
      { 
        id: "15c", 
        text: "Simpan yang terstruktur", 
        trait: "logical",
        microReaction: "Lo ngerasa tenang kalau semuanya punya tempat. Karena hidup lebih enak dijalani kalau gak berantakan dari dalam."
      },
      { 
        id: "15d", 
        text: "Simpan secukupnya", 
        trait: "leader",
        microReaction: "Lo minimalis, sadar atau enggak. Lo percaya: terlalu banyak pegangan bikin susah jalan. Dan lo pengen hidup lebih ringan."
      }
    ]
  },
  {
    id: 16,
    text: "Cara lo ngerawat kenangan sejauh ini:",
    answers: [
      { 
        id: "16a", 
        text: "Rekam sebanyak mungkin", 
        trait: "creative",
        microReaction: "Lo tipe yang gak mau kecolongan. Bukan serakah memori — tapi takut momen lewat tanpa jejak. Rekam itu cara lo bilang: 'gue hadir.'"
      },
      { 
        id: "16b", 
        text: "Arsip pelan-pelan", 
        trait: "empathetic",
        microReaction: "Lo gak buru-buru. Kenangan buat lo perlu diperlakukan dengan hormat. Pelan, tapi niat."
      },
      { 
        id: "16c", 
        text: "Backup teratur", 
        trait: "logical",
        microReaction: "Lo preventif. Lo gak nunggu panik baru bergerak. Rasa aman itu hasil kebiasaan, bukan keberuntungan."
      },
      { 
        id: "16d", 
        text: "Gak pernah mikir sejauh itu", 
        trait: "adventurer",
        microReaction: "Lo hidup di sekarang. Kadang itu bikin ringan. Kadang juga bikin lo kaget pas semuanya numpuk."
      }
    ]
  },
  {
    id: 17,
    text: "Buat lo pribadi, memori itu lebih dekat ke…",
    answers: [
      { 
        id: "17a", 
        text: "Bukti bahwa lo pernah hidup", 
        trait: "creative",
        microReaction: "Memori itu saksi. Kalau suatu hari lo capek atau ragu, lo bisa buka lagi dan bilang: 'gue pernah sejauh ini.'"
      },
      { 
        id: "17b", 
        text: "Proses yang ngebentuk lo", 
        trait: "empathetic",
        microReaction: "Lo gak cuma nginget hasil. Lo inget jatuh-bangunnya. Karena versi lo sekarang lahir dari semua itu."
      },
      { 
        id: "17c", 
        text: "Aset yang harus aman", 
        trait: "logical",
        microReaction: "Lo realistis. Memori itu punya nilai. Dan sesuatu yang bernilai, gak boleh ceroboh."
      },
      { 
        id: "17d", 
        text: "Beban yang kadang berat", 
        trait: "adventurer",
        microReaction: "Gak semua kenangan pengen dibuka. Dan itu gak salah. Kadang melindungi diri artinya tau kapan gak melihat ke belakang."
      }
    ]
  },
  {
    id: 18,
    text: "Hal yang paling bikin lo panik diam-diam:",
    answers: [
      { 
        id: "18a", 
        text: "Kehilangan data", 
        trait: "creative",
        microReaction: "Bukan soal file. Tapi rasa 'kok gue lalai?' Dan lo paling benci nyalahin diri sendiri."
      },
      { 
        id: "18b", 
        text: "Kehilangan kontrol", 
        trait: "logical",
        microReaction: "Lo bisa terima capek. Lo bisa terima ribet. Tapi gak bisa terima chaos tanpa kendali."
      },
      { 
        id: "18c", 
        text: "Kehilangan waktu", 
        trait: "leader",
        microReaction: "Waktu buat lo mahal. Dan lo ngerasa bersalah tiap harus ngulang hal yang sebenernya bisa dicegah."
      },
      { 
        id: "18d", 
        text: "Kehilangan kebebasan", 
        trait: "adventurer",
        microReaction: "Begitu hidup mulai kerasa sempit, lo gelisah. Lo butuh ruang — secara fisik maupun mental."
      }
    ]
  },
  {
    id: 19,
    text: "Kalau harus pindah file ke device lain, lo maunya prosesnya…",
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
        microReaction: "Lo nyari hidup yang ringan. Bukan ceroboh — cuma selektif sama energi. Yang gak penting, gak perlu dipikirin lama."
      }
    ]
  }
];
