🎬 Movie Explorer

A responsive movie discovery app built with React and the TMDB API. Browse trending, popular, top-rated, and upcoming movies, search in real time, save favorites, and view detailed info for any title.

✨ Features


Trending movies on the home page, refreshed weekly via TMDB
Browse by category — Popular, Top Rated, and Upcoming, with pagination
Live search that filters results as you type
Favorites list — save and remove movies, persisted across the app
Movie details page — overview, rating, vote count, language, runtime, genres, release date, revenue, and status
Fully responsive layout, optimized down to small phone screens (2-column grid on mobile)


🛠️ Tech Stack


React — UI library
React Router — client-side routing
Axios — HTTP requests
React Icons — icon set
Bootstrap — base layout utilities
TMDB API — movie data


📁 Project Structure

src/
├── components/
│   ├── Header.jsx       # Nav bar, search input, active route highlighting
│   └── MovieCard.jsx    # Reusable movie card with favorite toggle
├── pages/
│   ├── Home.jsx         # Trending movies
│   ├── AllMovies.jsx    # Popular / Top Rated / Upcoming + pagination
│   ├── Favorites.jsx    # Saved favorite movies
│   └── MovieDetails.jsx # Full details for a single movie
└── App.jsx

🚀 Getting Started

Prerequisites


Node.js (v16+ recommended)
A free TMDB API key


Installation

bashgit clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
npm install

Environment Variables

The app currently calls TMDB with the API key inline in each request. For better security and easier configuration, move it into an environment variable:


Create a .env file in the project root:


   VITE_TMDB_API_KEY=your_api_key_here


Replace the hardcoded key in requests with import.meta.env.VITE_TMDB_API_KEY (Vite) or process.env.REACT_APP_TMDB_API_KEY (Create React App).



Add .env to your .gitignore so your key never gets pushed to GitHub.



Run locally

bashnpm run dev      # if using Vite
# or
npm start        # if using Create React App

The app will be available at http://localhost:5173 (Vite) or http://localhost:3000 (CRA).

📱 Responsive Design

The layout adapts across breakpoints (1024px, 768px, 576px, and 380px) so cards, text, and spacing scale smoothly from desktop down to small phones, while always keeping at least two cards per row.
