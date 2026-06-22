import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <header className="bg-slate-800/75 backdrop-blur sticky top-0 z-30 border-b border-slate-700">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-mono font-semibold">Portfolio</h1>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-start gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold font-mono mb-4">Hello, I'm Athiwat</h2>
          <p className="text-slate-300 mb-6">Computer and Information Science student.</p>

          <ul className="text-sm space-y-1 text-slate-300 mt-6 font-mono">
            <li><strong className="text-slate-200">My Name:</strong> Athiwat Tangrusicharoen</li>
            <li><strong className="text-slate-200">Student ID:</strong> 673450041-1</li>
            <li><strong className="text-slate-200">Major:</strong> Computer and Information Science</li>
            <li><strong className="text-slate-200">University:</strong> Khon Kaen University</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-md overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)] ring-1 ring-slate-700">
            <Image
              src="/IMG_0591.png"
              alt="Profile"
              width={700}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-2xl font-semibold mb-4 font-mono">Skills</h3>
        <div className="flex flex-wrap gap-3">
          <span className="bg-slate-800 text-green-300 px-3 py-1 rounded font-mono text-sm">Next.js</span>
          <span className="bg-slate-800 text-green-300 px-3 py-1 rounded font-mono text-sm">SQL</span>
          <span className="bg-slate-800 text-green-300 px-3 py-1 rounded font-mono text-sm">Tailwind CSS</span>
          <span className="bg-slate-800 text-green-300 px-3 py-1 rounded font-mono text-sm">Node.js</span>
          <span className="bg-slate-800 text-green-300 px-3 py-1 rounded font-mono text-sm">Git</span>
        </div>
      </section>
      <section id="contact" className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-2xl font-semibold mb-4 font-mono">Contact</h3>
        <p className="text-slate-300 mb-4">check my GitHub.</p>
        <div className="flex gap-4">
          <a href="https://github.com/Ati411" className="text-green-300 hover:underline">GitHub</a>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Athiwat Tangrusicharoen</div>
      </footer>
    </main>
  );
}