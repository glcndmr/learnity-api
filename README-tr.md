# Learnity API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize" />
</p>

<p align="center">
  <b>🎓 Yapay Zeka Destekli Öğrenme Yönetim Sistemi API'si</b><br>
  Akıllı çalışma planlama, not yönetimi ve AI destekli öğrenme için RESTful API
</p>

<p align="center">
  <a href="README.md">English README</a> | <a href="#ozellikler">Özellikler</a> | <a href="#kurulum">Kurulum</a> | <a href="#api-uç-noktalari">API Uç Noktaları</a>
</p>

---

## 📋 İçindekiler

- [Hakkında](#hakkinda)
- [Özellikler](#ozellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum](#kurulum)
- [Ortam Değişkenleri](#ortam-degiskenleri)
- [API Uç Noktaları](#api-uç-noktalari)
- [Proje Yapısı](#proje-yapisi)
- [Veritabanı Modelleri](#veritabani-modelleri)
- [Lisans](#lisans)

---

## 🎯 Hakkında

**Learnity API**, Learnity öğrenme platformunun backend servisidir. Kullanıcı yönetimi, çalışma notları, ders konuları yönetimi için kapsamlı bir REST API sunar ve Google Gemini AI entegrasyonu ile akıllı öğrenme desteği ve kişiselleştirilmiş çalışma önerileri sağlar.

Bu API, [Learnity Web Uygulaması](../learnity-app) için veri katmanı ve iş mantığı işlemcisi olarak hizmet verir.

---

## ✨ Özellikler

### 🔐 Kimlik Doğrulama ve Güvenlik
- JWT tabanlı kimlik doğrulama sistemi
- bcrypt ile güvenli şifre hash'leme
- Token yenileme mekanizması
- Cookie tabanlı oturum yönetimi
- CORS koruması

### 👤 Kullanıcı Yönetimi
- Kullanıcı kayıt ve giriş
- Profil yönetimi
- Rol tabanlı erişim kontrolü

### 📝 Çalışma Yönetimi
- **Notlar**: Çalışma notları oluşturma, okuma, güncelleme ve silme
- **Konular**: Notları derslere/konulara göre organize etme
- **Kategoriler**: Öğrenme materyallerini sınıflandırma

### 🤖 Yapay Zeka Entegrasyonu
- **Google Gemini AI**: Akıllı içerik oluşturma ve analiz
- Akıllı çalışma önerileri
- İçerik özetleme
- Öğrenme deseni analizi

### ⚡ Planlanmış Görevler
- node-cron ile otomatik arka plan işleri
- Veri temizleme ve bakım görevleri
- Periyodik AI içerik üretimi

### 📊 Loglama ve İzleme
- Kapsamlı loglama sistemi
- Hata izleme ve raporlama
- İstek/yanıt loglama

---

## 🛠️ Teknolojiler

| Kategori | Teknoloji |
|----------|-----------|
| **Runtime** | Node.js 18+ |
| **Dil** | TypeScript 5.8+ |
| **Framework** | Express.js 5.x |
| **Veritabanı** | MySQL 8.0+ |
| **ORM** | Sequelize 6.x |
| **Kimlik Doğrulama** | JWT, bcryptjs |
| **AI Servisi** | Google Generative AI (@google/generative-ai) |
| **Doğrulama** | Joi |
| **Zamanlama** | node-cron |
| **Araçlar** | geolib (geo hesaplamalar) |

---

## 🚀 Kurulum

### Gereksinimler
- Node.js 18 veya üstü
- MySQL 8.0 veya üstü
- npm veya yarn paket yöneticisi

### Adımlar

1. **Depoyu klonlayın**
   ```bash
   git clone https://github.com/yourusername/learnity.git
   cd learnity/learnity-api
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   # veya
   yarn install
   ```

3. **Ortam değişkenlerini ayarlayın**
   ```bash
   cp .env.example .env
   # .env dosyasını düzenleyin
   ```

4. **Veritabanı migration'larını çalıştırın**
   ```bash
   npm run build
   npm start
   # Sequelize modelleri otomatik senkronize edecektir
   ```

5. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   ```

---

## 🔐 Ortam Değişkenleri

Kök dizinde aşağıdaki değişkenlerle bir `.env` dosyası oluşturun:

```env
# Sunucu Yapılandırması
PORT=3000
NODE_ENV=development

# Veritabanı Yapılandırması
DB_HOST=localhost
DB_PORT=3306
DB_NAME=learnity_db
DB_USER=root
DB_PASSWORD=your_password

# JWT Yapılandırması
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_jwt_refresh_secret

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Diğer Ayarlar
LOG_LEVEL=info
```

---

## 📡 API Uç Noktaları

### Kimlik Doğrulama
| Metod | Uç Nokta | Açıklama |
|--------|----------|-------------|
| POST | `/api/auth/register` | Yeni kullanıcı kaydet |
| POST | `/api/auth/login` | Kullanıcı girişi |
| POST | `/api/auth/logout` | Kullanıcı çıkışı |
| POST | `/api/auth/refresh` | Erişim token'ını yenile |
| GET | `/api/auth/me` | Mevcut kullanıcıyı getir |

### Kullanıcılar
| Metod | Uç Nokta | Açıklama |
|--------|----------|-------------|
| GET | `/api/users` | Tüm kullanıcıları listele (admin) |
| GET | `/api/users/:id` | ID'ye göre kullanıcı getir |
| PATCH | `/api/users/:id` | Kullanıcıyı güncelle |
| DELETE | `/api/users/:id` | Kullanıcıyı sil |

### Notlar
| Metod | Uç Nokta | Açıklama |
|--------|----------|-------------|
| GET | `/api/notes` | Tüm notları listele |
| POST | `/api/notes` | Yeni not oluştur |
| GET | `/api/notes/:id` | ID'ye göre not getir |
| PATCH | `/api/notes/:id` | Notu güncelle |
| DELETE | `/api/notes/:id` | Notu sil |

### Konular
| Metod | Uç Nokta | Açıklama |
|--------|----------|-------------|
| GET | `/api/subjects` | Tüm konuları listele |
| POST | `/api/subjects` | Yeni konu oluştur |
| GET | `/api/subjects/:id` | ID'ye göre konu getir |
| PATCH | `/api/subjects/:id` | Konuyu güncelle |
| DELETE | `/api/subjects/:id` | Konuyu sil |

### Gemini AI
| Metod | Uç Nokta | Açıklama |
|--------|----------|-------------|
| POST | `/api/gemini/generate` | AI içerik oluştur |
| POST | `/api/gemini/summarize` | Metni özetle |
| POST | `/api/gemini/analyze` | Öğrenme desenini analiz et |

---

## 📁 Proje Yapısı

```
learnity-api/
├── app.ts                  # Uygulama giriş noktası
├── config/                 # Yapılandırma dosyaları
│   └── index.ts           # Ortam yapılandırması
├── data/                   # Veritabanı bağlantısı
│   └── db.ts              # Sequelize başlatma
├── middlewares/            # Express middleware'leri
│   ├── auth.ts            # Kimlik doğrulama middleware'i
│   └── validation.ts      # İstek doğrulama
├── models/                 # Sequelize modelleri
│   ├── index.ts           # Model dışa aktarımları ve ilişkiler
│   ├── user.ts            # Kullanıcı modeli
│   ├── note.ts            # Not modeli
│   ├── subject.ts         # Konu modeli
│   ├── log.ts             # Log modeli
│   └── token.ts           # Token modeli
├── restAPI/                # API rotaları ve controller'ları
│   ├── index.ts           # Rota toplayıcı
│   ├── services/          # API özel servisleri
│   └── domains/           # Alan bazlı yönlendirme
│       ├── auth/          # Kimlik doğrulama alanı
│       ├── gemini/        # AI entegrasyon alanı
│       └── home/          # Ana/landing rotaları
├── schedulers/             # Arka plan işleri
│   └── index.ts           # Zamanlayıcı başlatma
├── services/               # İş mantığı servisleri
│   ├── logger.ts          # Loglama servisi
│   ├── authService.ts     # Kimlik doğrulama servisi
│   ├── noteService.ts     # Not yönetim servisi
│   └── geminiService.ts   # AI entegrasyon servisi
├── types/                  # TypeScript tip tanımları
│   ├── globalTypes.ts     # Global tip bildirimleri
│   └── ...
├── validation/             # Joi doğrulama şemaları
│   ├── authValidation.ts
│   ├── noteValidation.ts
│   └── ...
├── .env                    # Ortam değişkenleri (git'te yok)
├── .env.example            # Örnek ortam dosyası
├── .gitignore              # Git ignore kuralları
├── package.json            # Bağımlılıklar ve script'ler
├── tsconfig.json           # TypeScript yapılandırması
└── README.md               # Bu dosya
```

---

## 🗄️ Veritabanı Modelleri

### User (Kullanıcı)
- id, username, email, password (hash'lenmiş)
- role, created_at, updated_at
- İlişkiler: has_many Notes, has_many Subjects

### Note (Not)
- id, title, content, user_id
- subject_id, category, tags
- created_at, updated_at
- İlişkiler: belongs_to User, belongs_to Subject

### Subject (Konu)
- id, name, description, user_id
- color_code, icon
- created_at, updated_at
- İlişkiler: belongs_to User, has_many Notes

### Token
- id, user_id, refresh_token
- expires_at, created_at
- JWT yenileme mekanizması için kullanılır

### Log
- id, level, message, metadata
- created_at
- Uygulama loglama ve izleme

---

## 🤝 İlgili Projeler

- **[Learnity App](../learnity-app)** - Bu API'yi tüketen web uygulaması ön yüzü

---

## 📄 Lisans

Bu proje ISC Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 👨‍💻 Geliştirici

Daha iyi öğrenme deneyimleri için ❤️ ile geliştirildi.

---

<p align="center">
  <sub>☕ ve 💻 ile yapıldı</sub>
</p>
