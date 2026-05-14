# Daftar Event GA4

File ini mendokumentasikan seluruh event GA4 yang digunakan dalam proyek ini.
Semua event dikirim melalui `pushToDataLayer()` di `lib/analytics.ts`.

> Setiap event secara otomatis menyertakan parameter `timestamp` (ISO string).
> Event yang menggunakan `trackEvent()` juga menyertakan `session_id` dan `page` (pathname saat ini).

---

## Event Utama Aplikasi

### 1. `page_view`
**Fungsi:** `trackPageView(pageName, pageType)`  
**Kapan dipakai:** Setiap perpindahan halaman (SPA route change).

| Parameter | Tipe | Keterangan |
|---|---|---|
| `page_name` | string | Nama halaman (misal: `"Test Start"`) |
| `page_path` | string | Path URL saat ini (misal: `/test`) |
| `page_type` | string | Tipe halaman (misal: `"test"`, `"result"`) |
| `page_url` | string | URL lengkap |
| `page_referrer` | string | URL referrer (dari mana user datang) |
| `page_title` | string | `document.title` saat itu |

---

### 2. `test_start`
**Fungsi:** `trackTestStart(userName)`  
**Kapan dipakai:** User menekan tombol mulai setelah mengisi nama.

| Parameter | Tipe | Keterangan |
|---|---|---|
| `user_name` | string | Nama yang diinput user |

---

### 3. `question_answered`
**Fungsi:** `trackQuestionAnswer(questionNumber, questionText, answerId, answerText, trait)`  
**Kapan dipakai:** Setiap kali user memilih jawaban pada salah satu dari 20 pertanyaan.

| Parameter | Tipe | Keterangan |
|---|---|---|
| `question_number` | number | Nomor soal (1–20) |
| `question_text` | string | Teks pertanyaan |
| `answer_id` | string | ID jawaban yang dipilih |
| `answer_text` | string | Teks jawaban yang dipilih |
| `trait` | string | Trait kepribadian yang diukur soal ini |

---

### 4. `test_complete`
**Fungsi:** `trackTestComplete(userName, personalityType, testId, scores)`  
**Kapan dipakai:** User menyelesaikan semua 20 pertanyaan dan hasil kepribadian selesai dihitung.

| Parameter | Tipe | Keterangan |
|---|---|---|
| `user_name` | string | Nama user |
| `personality_type` | string | Tipe kepribadian hasil tes |
| `test_id` | string | ID unik sesi tes |
| `logical_score` | number | Skor dimensi Logical |
| `creative_score` | number | Skor dimensi Creative |
| `empathetic_score` | number | Skor dimensi Empathetic |
| `leader_score` | number | Skor dimensi Leader |
| `adventurer_score` | number | Skor dimensi Adventurer |

---

### 5. `result_view`
**Fungsi:** `trackResultView(personalityType, testId, userName?)`  
**Kapan dipakai:** Halaman hasil dibuka, termasuk saat dibuka dari link yang dibagikan.

| Parameter | Tipe | Keterangan |
|---|---|---|
| `personality_type` | string | Tipe kepribadian |
| `test_id` | string | ID unik sesi tes |
| `user_name` | string (opsional) | Nama user jika tersedia |

---

### 6. `share`
**Fungsi:** `trackShare(method, personalityType, testId)`  
**Kapan dipakai:** User menekan tombol share di halaman hasil.

| Parameter | Tipe | Keterangan |
|---|---|---|
| `share_method` | string | Metode berbagi (misal: `"whatsapp"`, `"copy_link"`) |
| `personality_type` | string | Tipe kepribadian |
| `test_id` | string | ID unik sesi tes |

---

### 7. `screenshot_download`
**Fungsi:** `trackScreenshot(personalityType, testId)`  
**Kapan dipakai:** User mengunduh hasil tes sebagai gambar.

| Parameter | Tipe | Keterangan |
|---|---|---|
| `personality_type` | string | Tipe kepribadian |
| `test_id` | string | ID unik sesi tes |

---

## Event Campaign / TechShift

> Event kampanye juga mengirim event ke **Microsoft Clarity** secara paralel.

### 8. `play_start`
**Fungsi:** `trackPlayStart()`  
**Kapan dipakai:** User memulai pengalaman campaign.  
**Clarity event:** `experience_started`  
_(Tidak ada parameter tambahan)_

---

### 9. `play_finish`
**Fungsi:** `trackPlayFinish()`  
**Kapan dipakai:** User menyelesaikan pengalaman campaign.  
**Clarity event:** `experience_completed`  
_(Tidak ada parameter tambahan)_

---

### 10. `marketplace_click`
**Fungsi:** `trackClickMarketplace(platform)`  
**Kapan dipakai:** User mengklik tautan ke marketplace (Lazada, Shopee, TikTok Shop).  
**Clarity event:** `marketplace_clicked`

| Parameter | Tipe | Nilai yang Valid |
|---|---|---|
| `marketplace` | string | `"lazada"` \| `"shopee"` \| `"tiktok_shop"` |

---

### 11. `share_click`
**Fungsi:** `trackShareClick()`  
**Kapan dipakai:** Klik tombol share generik di halaman campaign.  
_(Tidak ada parameter tambahan)_

---

## Event Generik / Utilitas

### 12. `button_click`
**Fungsi:** `trackButtonClick(buttonName, buttonLocation, additionalData?)`  
**Kapan dipakai:** Klik tombol apapun yang tidak tercakup event spesifik di atas.

| Parameter | Tipe | Keterangan |
|---|---|---|
| `button_name` | string | Nama/label tombol |
| `button_location` | string | Lokasi tombol di halaman |
| _(tambahan)_ | any | Data opsional sesuai kebutuhan |

---

### 13. `form_submit`
**Fungsi:** `trackFormSubmit(formName, formData?)`  
**Kapan dipakai:** Submit form apapun secara generik.

| Parameter | Tipe | Keterangan |
|---|---|---|
| `form_name` | string | Nama form |
| _(tambahan)_ | any | Data form opsional |

---

### 14. `error`
**Fungsi:** `trackError(errorType, errorMessage, errorLocation)`  
**Kapan dipakai:** Terjadi error yang perlu dilacak di runtime.

| Parameter | Tipe | Keterangan |
|---|---|---|
| `error_type` | string | Jenis error |
| `error_message` | string | Pesan error |
| `error_location` | string | Lokasi/komponen tempat error terjadi |

---

### 15. `conversion`
**Fungsi:** `trackConversion(conversionName, value?, currency?)`  
**Kapan dipakai:** Pencapaian goal konversi (disiapkan untuk kebutuhan monetisasi ke depan).

| Parameter | Tipe | Keterangan |
|---|---|---|
| `conversion_name` | string | Nama konversi |
| `value` | number (opsional) | Nilai konversi |
| `currency` | string | Mata uang, default `"IDR"` |

---

### 16. `user_identify`
**Fungsi:** `identifyUser(userId, userName?)`  
**Kapan dipakai:** Ketika identitas user diketahui (opsional).

| Parameter | Tipe | Keterangan |
|---|---|---|
| `user_id` | string | ID unik user |
| `user_name` | string (opsional) | Nama user |

---

### 17. _(nama dinamis)_
**Fungsi:** `trackCustomEvent(eventName, eventData)`  
**Kapan dipakai:** Event ad-hoc yang tidak masuk kategori manapun di atas.

| Parameter | Tipe | Keterangan |
|---|---|---|
| `eventName` | string | Nama event bebas |
| `eventData` | object | Data apapun sesuai kebutuhan |

---

## Ringkasan

| # | Event | Kategori |
|---|---|---|
| 1 | `page_view` | Navigasi |
| 2 | `test_start` | Tes |
| 3 | `question_answered` | Tes |
| 4 | `test_complete` | Tes |
| 5 | `result_view` | Hasil |
| 6 | `share` | Hasil |
| 7 | `screenshot_download` | Hasil |
| 8 | `play_start` | Campaign |
| 9 | `play_finish` | Campaign |
| 10 | `marketplace_click` | Campaign |
| 11 | `share_click` | Campaign |
| 12 | `button_click` | Generik |
| 13 | `form_submit` | Generik |
| 14 | `error` | Generik |
| 15 | `conversion` | Generik |
| 16 | `user_identify` | Generik |
| 17 | _(dinamis)_ | Generik |
