# 🏆🏅 UCL API - Node.js + TypeScript + Express

This is a RESTful API for retrieving data about football clubs and players participating in the UEFA Champions League. It was built using Node.js, TypeScript, and Express, and includes endpoints to access information such as club name, city, number of fans, badge (logo), players, stats, and more.

## 🛠 Technologies Used

- Node.js
- TypeScript
- Express
- CORS
- Prisma
- ZOD
- Postgres

## 📁 Project Structure
```bash
ucl-api-node-ts-express/
├── src/
│ ├── controllers/
│   └── clubs-controller.ts
│   └── players-controller.ts
│ ├── data/
│    └── clubs.json
│ ├── models/
    └── club-model.ts
│   └── http-status-code.ts
    └── player-model.ts
│   └── statistics.ts
  ├── repositories/
    ├── clubs-repository.ts
    ├── players-repository.ts
│ ├── routes/
    └── routes.ts
│ ├── app.ts
│ └── server.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 📦 Installation

#### 1. Clone the repository:
```bash
git clone https://github.com/Gustavo-Zamai/ucl-api-node-ts-express.git
cd ucl-api-node-ts-express
```
#### 2. Install the dependencies:
```bash
npm install
```

#### 3. Start the development server:
```bash
npm run start:watch
```

#### 4. Open your browser at: `http://localhost:3000`

## 🔁 Available Endpoints
### Clubs
- `GET /clubs` — Returns all clubs

### Players
- `GET /players` — Returns all players

- `GET /players/:id` — Returns a specific player by id

- `GET /players/name/:name` — Returns a specific player by name

- `POST /players` — Adds a new player

- `PUT /players/:id` — Updates a player

- `DELETE /players/:id` — Deletes a player

## 📌 Club Object Example
```json
{
  "id": 1,
  "name": "Real Madrid",
  "badge": "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
  "foundation": "1902",
  "city": "Madrid",
  "league": "La Liga",
  "fans": 90000000
}
```
## 📌 Player Object Example
```json
{
  "id": 1,
  "name": "Cristiano Ronaldo",
  "club": "Manchester United",
  "nationality": "Portugal",
  "position": "Forward",
  "statistics": {
    "Overall": 94,
    "Pace": 87,
    "Shooting": 94,
    "Passing": 88,
    "Dribbling": 85,
    "Defending": 38,
    "Physical": 80
  }
}
```
## 🛡 CORS Middleware
The project uses the cors middleware to allow cross-origin requests, which is essential for frontend integrations hosted on separate domains.

ts
Copiar
Editar
import cors from 'cors';
app.use(cors());


## 🔮 Future Improvements
#### 🔐 Authentication and Authorization with JWT

#### 🗄 Real Database Integration (PostgreSQL, MongoDB, or MySQL) -- In Progress

#### 🌍 Dynamic Filtering by nationality, league, or position

#### 📊 Advanced Stats and Player Rankings

#### 🧪 Automated Testing using Jest and Supertest

#### 📱 Cloud Deployment (Render, Vercel, Railway, etc.)

#### 🖼 Dynamic Image Uploads for players and clubs

#### 🐳 Docker Support:

- Create a Dockerfile for the backend.

- Add docker-compose.yml to run with a real database.

- Make development setup and production deployment easier.

## 📄 License
- This project is licensed under the MIT License.


## 👤 Author

**Gustavo Zamai**  
Full Stack Developer | Football Lover ⚽

- GitHub: [@Gustavo-Zamai](https://github.com/Gustavo-Zamai)  
- LinkedIn: [Gustavo Simao Zamai](https://www.linkedin.com/in/gustavo-sim%C3%A3o-zamai-664a5521a/)  
- Email: [gustavosimaozamai@gmail.com](gustavosimaozamai@gmail.com)

If you enjoyed this project or found it helpful, feel free to give it a ⭐️ or share it!
