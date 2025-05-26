// Preloader.jsx
export default function Preloader() {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-opacity duration-700 `}
    >
      {/* SVG cupcake or whisk */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e07b7b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-spin-slow"
      >
        <path d="M4 21h16M4 21a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4" />
        <path d="M8 17V9a4 4 0 1 1 8 0v8" />
      </svg>
    </div>
  );
}
