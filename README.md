# Learnity API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize" />
</p>

<p align="center">
  <b>🎓 AI-Powered Learning Management System API</b><br>
  RESTful API for intelligent study planning, note management, and AI-assisted learning
</p>

<p align="center">
  <a href="README-tr.md">Türkçe README</a> | <a href="#features">Features</a> | <a href="#installation">Installation</a> | <a href="#api-endpoints">API Endpoints</a>
</p>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Database Models](#database-models)
- [License](#license)

---

## 🎯 About

**Learnity API** is the backend service for the Learnity learning platform. It provides a comprehensive REST API for managing users, study notes, subjects, and integrates with Google's Gemini AI to offer intelligent learning assistance and personalized study recommendations.

This API serves as the data layer and business logic processor for the [Learnity Web Application](../learnity-app).

---

## ✨ Features

### 🔐 Authentication & Security
- JWT-based authentication system
- Secure password hashing with bcrypt
- Token refresh mechanism
- Cookie-based session management
- CORS protection

### 👤 User Management
- User registration and login
- Profile management
- Role-based access control

### 📝 Study Management
- **Notes**: Create, read, update, and delete study notes
- **Subjects**: Organize notes by subjects/courses
- **Categories**: Classify learning materials

### 🤖 AI Integration
- **Google Gemini AI**: Intelligent content generation and analysis
- Smart study suggestions
- Content summarization
- Learning pattern analysis

### ⚡ Scheduled Tasks
- Automated background jobs using node-cron
- Data cleanup and maintenance tasks
- Periodic AI content generation

### 📊 Logging & Monitoring
- Comprehensive logging system
- Error tracking and reporting
- Request/response logging

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Runtime** | Node.js 18+ |
| **Language** | TypeScript 5.8+ |
| **Framework** | Express.js 5.x |
| **Database** | MySQL 8.0+ |
| **ORM** | Sequelize 6.x |
| **Authentication** | JWT, bcryptjs |
| **AI Service** | Google Generative AI (@google/generative-ai) |
| **Validation** | Joi |
| **Scheduling** | node-cron |
| **Utilities** | geolib (geo calculations) |

---

## 🚀 Installation

### Prerequisites
- Node.js 18 or higher
- MySQL 8.0 or higher
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/learnity.git
   cd learnity/learnity-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run database migrations**
   ```bash
   npm run build
   npm start
   # Sequelize will sync models automatically
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=learnity_db
DB_USER=root
DB_PASSWORD=your_password

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_jwt_refresh_secret

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Other Settings
LOG_LEVEL=info
```

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/logout` | User logout |
| POST | `/api/auth/refresh` | Refresh access token |
| GET | `/api/auth/me` | Get current user |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | List all users (admin) |
| GET | `/api/users/:id` | Get user by ID |
| PATCH | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

### Notes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | List all notes |
| POST | `/api/notes` | Create new note |
| GET | `/api/notes/:id` | Get note by ID |
| PATCH | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |

### Subjects
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/subjects` | List all subjects |
| POST | `/api/subjects` | Create new subject |
| GET | `/api/subjects/:id` | Get subject by ID |
| PATCH | `/api/subjects/:id` | Update subject |
| DELETE | `/api/subjects/:id` | Delete subject |

### Gemini AI
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/gemini/generate` | Generate AI content |
| POST | `/api/gemini/summarize` | Summarize text |
| POST | `/api/gemini/analyze` | Analyze learning pattern |

---

## 📁 Project Structure

```
learnity-api/
├── app.ts                  # Application entry point
├── config/                 # Configuration files
│   └── index.ts           # Environment configuration
├── data/                   # Database connection
│   └── db.ts              # Sequelize initialization
├── middlewares/            # Express middlewares
│   ├── auth.ts            # Authentication middleware
│   └── validation.ts      # Request validation
├── models/                 # Sequelize models
│   ├── index.ts           # Model exports & associations
│   ├── user.ts            # User model
│   ├── note.ts            # Note model
│   ├── subject.ts         # Subject model
│   ├── log.ts             # Log model
│   └── token.ts           # Token model
├── restAPI/                # API routes & controllers
│   ├── index.ts           # Route aggregator
│   ├── services/          # API-specific services
│   └── domains/           # Domain-based routing
│       ├── auth/          # Authentication domain
│       ├── gemini/        # AI integration domain
│       └── home/          # Home/landing routes
├── schedulers/             # Background jobs
│   └── index.ts           # Scheduler initialization
├── services/               # Business logic services
│   ├── logger.ts          # Logging service
│   ├── authService.ts     # Authentication service
│   ├── noteService.ts     # Note management service
│   └── geminiService.ts   # AI integration service
├── types/                  # TypeScript type definitions
│   ├── globalTypes.ts     # Global type declarations
│   └── ...
├── validation/             # Joi validation schemas
│   ├── authValidation.ts
│   ├── noteValidation.ts
│   └── ...
├── .env                    # Environment variables (not in git)
├── .env.example            # Example environment file
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

---

## 🗄️ Database Models

### User
- id, username, email, password (hashed)
- role, created_at, updated_at
- Relationships: has_many Notes, has_many Subjects

### Note
- id, title, content, user_id
- subject_id, category, tags
- created_at, updated_at
- Relationships: belongs_to User, belongs_to Subject

### Subject
- id, name, description, user_id
- color_code, icon
- created_at, updated_at
- Relationships: belongs_to User, has_many Notes

### Token
- id, user_id, refresh_token
- expires_at, created_at
- Used for JWT refresh mechanism

### Log
- id, level, message, metadata
- created_at
- Application logging and monitoring

---

## 🤝 Related Projects

- **[Learnity App](../learnity-app)** - Web application frontend that consumes this API

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

Developed with ❤️ for better learning experiences.

---

<p align="center">
  <sub>Built with ☕ and 💻</sub>
</p>
