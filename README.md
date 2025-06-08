# User Task

A full-stack web application consisting of a React (Vite) frontend and a .NET 9 Web API backend. The app supports features like paginated user listing, filtering, and searching.

---

## 🚀 Quick Start with Docker

### ✅ Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed and running
- Ports `3000` and `5253` available on your machine

### ▶️ Running the App

From the root of the repository (`UserTask/`):

```bash
docker-compose up --build
```

This will:

- Build and run the .NET API at `http://localhost:5253`
- Build and serve the React app via Nginx at `http://localhost:3000`

---

## 💻 Local Development Setup

### ✅ Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- [Node.js (v18+ recommended)](https://nodejs.org/)
- [SQLite](https://www.sqlite.org/) (for inspecting `userTask.db`, optional)

---

### 📦 Backend (.NET API)

1. Navigate to the `API/` directory:

```bash
cd API
```

2. Restore packages and run the app:

```bash
dotnet restore
dotnet run
```

3. The API will be running at:  
   👉 `http://localhost:5253`

4. Swagger UI available at:  
   👉 `http://localhost:5253/swagger`

---

### 🧑‍💻 Frontend (React with Vite)

1. Navigate to the `client/` directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open in your browser:  
   👉 `http://localhost:3000`

---

## 🌐 API Endpoints (Example)

From the controller: `/api/users`

- `GET /api/users?page=1&pageSize=10`  
  Paginated user list with optional filters:

  - `search`
  - `sortColumn`
  - `sortOrder`
  - `registrationDate`, `gender`, `country`
  - `minSalary`, `maxSalary`, `birthDate`

- `GET /api/users/{id}`  
  Get a user by ID

---

## 🐞 Troubleshooting

- **Port already in use**: Make sure no other app is using port `3000` or `5253`
- **API not responding**: Ensure it's running at `http://localhost:5253/swagger`
- **CORS errors**: CORS is enabled for `localhost:3000` in development

---

## 🗂 Project Structure

```
UserTask/
├── API/             # .NET Web API project
├── client/          # React frontend (Vite)
├── Application/     # Application layer
├── Domain/          # Domain models
├── Persistence/     # DB context and migrations
├── docker-compose.yml
└── UserTask.sln
```

---

## 📦 Tech Stack

- **Frontend**: React, Vite, TypeScript
- **Backend**: ASP.NET Core 9, EF Core, SQLite
- **DevOps**: Docker, Docker Compose
