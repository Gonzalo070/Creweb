export default function PlanetBackdrop() {
  return (
    <div aria-hidden="true" className="planet-backdrop">
      <div className="hero-planet">
        <svg
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          className="hero-planet-map"
        >
          <path d="M85 132l32-28 43-7 18-22 42 8 14 18 32 5 12 24-18 17-27 2-13 19-24 5-5 26-18 8-9 32-21 7-14-27-19-17-13-39-27-17-9-16z" />
          <path d="M239 244l31 10 19 31-7 30 17 25-15 39-14 48-20 34-16-30-5-41-18-31 5-40-13-33 8-26z" />
          <path d="M432 124l25-19 34 4 11 17 29 3 15-12 44 4 26-16 45 7 22 17 34-2 35 19 23 3 19 26-24 14-28-5-21 17-25-9-21 17-33-3-14 23-28-1-20 16-27-7-15-27-22-4-12-22-27-2-10-29-25-8-13-19-28 2z" />
          <path d="M490 220l31 4 18 25-3 33-19 23-8 40-24 41-15 49-23-14-6-37-19-26 11-31-9-29 18-20 2-34 22-24z" />
          <path d="M697 324l35-8 34 14 16 25-15 22-30 1-22-17-29-10z" />
          <path d="M830 205l8-5 8 9-7 9zM385 173l9-4 7 9-7 7zM775 259l8-3 5 8-8 4z" />
        </svg>
        <div className="hero-planet-grid" />
        <div className="hero-planet-atmosphere" />
      </div>
    </div>
  );
}
