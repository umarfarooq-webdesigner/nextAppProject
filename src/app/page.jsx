"use client";
import Link from "next/link";

export default function Home() {
  const text = "WELCOME TO HOME";

  // Pre-calculated random scatter values for each letter to simulate a mirror shattering.
  // Format: [X-travel, Y-travel, Z-travel, RotateX, RotateY, RotateZ]
  const scatterDirections = [
    [-60, -80, 150, 45, -60, 30], // W
    [40, -120, 200, -30, 45, -45], // E
    [-90, 30, 120, 60, 20, 90], // L
    [80, -40, 180, -45, -45, -20], // C
    [-30, -90, 250, 15, 80, 60], // O
    [90, 90, 160, -90, 15, -30], // M
    [-70, 110, 220, 35, -35, 45], // E
    [0, 0, 0, 0, 0, 0], // Space
    [-110, -50, 190, 75, 45, -60], // T
    [120, -70, 240, -60, -75, 30], // O
    [0, 0, 0, 0, 0, 0], // Space
    [-40, 130, 170, 20, 90, -15], // H
    [100, -110, 210, -15, -20, 75], // O
    [-80, -60, 230, 90, 40, -45], // M
    [70, 100, 140, -45, 60, 20], // E
  ];

  return (
    <div className="w-full min-h-screen grid justify-center items-center text-center bg-zinc-950 perspective-1000 overflow-hidden px-10 py-20">
      <h1 className="group flex flex-wrap justify-center text-5xl md:text-6xl font-black text-white uppercase tracking-wider cursor-pointer select-none preserve-3d max-w-4xl gap-y-4">
        {text.split("").map((char, index) => {
          // Responsive line break: acts as a full-width block on mobile, and a standard gap on desktop
          if (char === " ") {
            return (
              <div 
                key={index} 
                className="w-full md:w-6 h-0 md:h-auto md:inline-block" 
              />
            );
          }

          const [x, y, z, rx, ry, rz] = scatterDirections[index] || [
            0, 0, 0, 0, 0, 0,
          ];

          return (
            <span
              key={index}
              className="inline-block transition-all duration-700 ease-out preserve-3d origin-center shard-shadow"
              style={{
                "--scatter-x": `${x}px`,
                "--scatter-y": `${y}px`,
                "--scatter-z": `${z}px`,
                "--scatter-rx": `${rx}deg`,
                "--scatter-ry": `${ry}deg`,
                "--scatter-rz": `${rz}deg`,
              }}
            >
              {char}
            </span>
          );
        })}
      </h1>

      {/* Scoped CSS handles the 3D space and custom properties seamlessly */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .shard-shadow {
          text-shadow:
            1px 1px 0px #ccc,
            2px 2px 5px rgba(0, 0, 0, 0.5);
        }
        /* When the parent h1 (group) is hovered, explode each letter shard outward */
        .group:hover .shard-shadow {
          transform: translate3d(
              var(--scatter-x),
              var(--scatter-y),
              var(--scatter-z)
            )
            rotateX(var(--scatter-rx)) rotateY(var(--scatter-ry))
            rotateZ(var(--scatter-rz));
          opacity: 0.8;
          color: #e4e4e7;
          text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.4);
        }
      `}</style>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center [perspective:1000px] mt-10">
        <button className="group relative text-white border border-white px-6 py-3 rounded font-bold text-xl transition-all duration-300 ease-out [transform-style:preserve-3d] hover:[transform:translateZ(20px)_rotateX(10deg)] hover:bg-white hover:text-black hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)]">
          <Link href={"/demos"} className="block w-full h-full">
            Demo's
          </Link>
        </button>

        <button className="group relative text-white border border-white px-6 py-3 rounded font-bold text-xl transition-all duration-300 ease-out [transform-style:preserve-3d] hover:[transform:translateZ(20px)_rotateX(10deg)] hover:bg-white hover:text-black hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)]">
          <Link href={"/projects"} className="block w-full h-full">
            Project's
          </Link>
        </button>
      </div>
    </div>
  );
}