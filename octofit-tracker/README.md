# 🐙 OctoFit Tracker

A modern multi-tier application for tracking fitness goals with GitHub integration.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite (Port 5173)
├── backend/           # Node.js + Express + TypeScript (Port 8000)
└── README.md
```

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development and building
- **Port:** 5173

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **Mongoose** for MongoDB data access
- **Port:** 8000

### Database
- **MongoDB**
- **Port:** 27017

## Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB 5.0+

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

The frontend will open at `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

The backend will run at `http://localhost:8000`

### MongoDB Setup

Make sure MongoDB is running on `mongodb://localhost:27017`

## API Endpoints

- `GET /api/health` - Health check endpoint

## Development

### Frontend Build
```bash
cd frontend
npm run build
```

### Backend Build
```bash
cd backend
npm run build
```

## License

MIT
