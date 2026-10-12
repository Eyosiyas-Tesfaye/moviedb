# Netflix Clone (React + Vite)

A responsive Netflix front-end replica built using **React**, **Vite**, and **CSS Modules**. The application features dynamic movie browsing rows, a hero banner showcasing featured titles, and modular UI components styled to match Netflix's interface.

---

## 🚀 Features

* **Dynamic Hero Banner:** Displays featured movie details with background imagery.
* **Categorized Movie Rows (`DisplayRow`):** Horizontal scrollable rows categorizing movies and trending titles.
* **Slideshow & Movie Cards:** Interactive movie card components (`MovieCard` & `SlideShow`) for individual movie previews.
* **Modular CSS:** Encapsulated styling using CSS Modules (`.module.css`) to prevent class collisions.
* **Centralized API Management:** Configured Axios/fetch instances (`MovieInstance.js`) and endpoint management (`requestUrls.js`) in the `Utility` folder.
* **Responsive Layout:** Responsive navigation bar (`Header`) and footer (`Footer`) optimized across screen sizes.

---

## 🛠️ Tech Stack

* **Frontend Library:** React.js
* **Build Tool:** Vite
* **Styling:** CSS Modules (`*.module.css`), Standard CSS
* **Code Quality / Linter:** Oxlint (`.oxlintrc.json`)
* **API Utilities:** Axios / Fetch handlers for TMDB 

---

## 📁 Project Structure

```text
netflix-clone/
├── public/                     # Static public assets
├── src/
│   ├── assets/                 # Local images, icons, and media
│   ├── Components/             # Modular React components & scoped styles
│   │   ├── Banner/             # Hero banner component
│   │   │   ├── Banner.jsx
│   │   │   └── Banner.module.css
│   │   ├── DisplayRow/         # Movie rows wrapper
│   │   │   ├── DisplayRow.jsx
│   │   │   └── DisplayRow.module.css
│   │   ├── Footer/             # Page footer
│   │   │   ├── footer.jsx
│   │   │   └── footer.module.css
│   │   ├── Header/             # Navbar / Header component
│   │   │   ├── header.jsx
│   │   │   └── Header.module.css
│   │   ├── MovieCard/          # Individual movie thumbnail & details
│   │   │   ├── MovieCard.jsx
│   │   │   └── MovieCard.module.css
│   │   └── SlideShow/          # Movie carousel/slideshow component
│   │       ├── SlideShow.jsx
│   │       └── SlideShow.module.css
│   ├── Data/                   # Static or fallback mock data
│   ├── Utility/                # API configurations & URL endpoints
│   │   ├── MovieInstance.js    # Base Axios/Fetch instance configuration
│   │   └── requestUrls.js      # Endpoint definitions
│   ├── App.css                 # Global layout styles
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global base CSS
│   └── main.jsx                # React DOM render entry point
├── .env                        # Local environment variables
├── .gitignore                  # Git ignore file
├── .oxlintrc.json              # Oxlint configuration
├── index.html                  # HTML template
├── package.json                # Project scripts and dependencies
└── vite.config.js              # Vite configuration