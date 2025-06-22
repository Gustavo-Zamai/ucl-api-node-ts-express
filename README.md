# 🏆🏅 UCL API - Node.js + TypeScript + Express

This is a RESTful API for retrieving data about football clubs and players participating in the UEFA Champions League. It was built using Node.js, TypeScript, and Express, and includes endpoints to access information such as club name, city, badge (logo), players, stats, and more.

## 🛠 Technologies Used

- Node.js
- TypeScript
- Express
- CORS
- Prisma
- ZOD
- PostgreSQL

## 📁 Project Structure
```bash
ucl-api-node-ts-express/
├── src/
│ ├── controllers/
│     └── clubs-controller.ts
│     └── players-controller.ts
│ ├── models/
│     └── club-model.ts
│     └── http-status-code.ts
│     └── player-model.ts
│     └── statistics.ts
│ ├── repositories/
│     ├── clubs-repository.ts
│     ├── players-repository.ts
│ ├── routes/
│     └── routes.ts
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

- `GET /clubs/:id` — Returns a specific club by id

- `GET /clubs/name/:name` — Returns a specific club by name, or part

- `GET /clubs/league/:league` — Returns the clubs linked to league

- `POST /clubs` — Adds a new club

- `DELETE /clubs/:id` — Deletes a club

### Players
- `GET /players` — Returns all players

- `GET /players/:id` — Returns a specific player by id

- `GET /players/name/:name` — Returns a specific player by name, or part

- `GET /players/clubs/:club` — Returns players by their club

- `GET /players/position/:position` — Returns players by their position

- `GET /players/nationality/:nationality` — Returns players by their nationality

- `POST /players` — Adds a new player

- `PATCH /players/:id` — Updates stats of an player

- `DELETE /players/:id` — Deletes a player

## 📌 Club Object Example
```json
{
    "id": "ca57a6ed-1ca4-429f-8519-2c189be2bba7",
    "name": "Bayern Munich",
    "badge": "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    "foundation": 1900,
    "city": "Munich",
    "league": "Bundesliga"
}
```
## 📌 Player Object Example
```json
{
    "id": "1ef0962d-951c-4e8a-9d03-f99981eec7f3",
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nationality": "NOR",
    "position": "ST",
    "statistics": {
        "Pace": 89,
        "Overall": 91,
        "Passing": 65,
        "Physical": 88,
        "Shooting": 94,
        "Defending": 45,
        "Dribbling": 80
    }
}
```
## 🛡 CORS Middleware
The project uses the cors middleware to allow cross-origin requests, which is essential for frontend integrations hosted on separate domains.

```ts
import cors from 'cors';
app.use(cors());
```

## 🔮 Future Improvements
#### 🔐 Authentication and Authorization with JWT

#### 🗄 Real Database Integration (PostgreSQL, MongoDB, or MySQL) ✅

#### 🌍 Dynamic Filtering by nationality, league, or position ✅

#### 📊 Advanced Stats and Player Rankings

#### 🧪 Automated Testing using Jest and Supertest

#### 📱 Cloud Deployment (Render, Vercel, Railway, etc.)

#### 🖼 Dynamic Image Uploads for players and clubs -- In Progress

#### 🐳 Docker Support: -- In Progress

- Create a Dockerfile for the backend.

- Add docker-compose.yml to run with a real database.

- Make development setup and production deployment easier.

## 📄 License
- This project is licensed under the MIT License.


## 🙋‍♂️ Author
#### Gustavo Zamai

[LinkedIn](https://www.linkedin.com/in/gustavo-sim%C3%A3o-zamai-664a5521a/) • 
[GitHub](https://github.com/Gustavo-Zamai)
