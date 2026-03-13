import React from 'react'
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Layout, Activity } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import FloatingParticles from './FloatingParticles';

 const Maintenance = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white selection:bg-[spotify-green] selection:text-black font-sans">
    {/* Ambient Background */}
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-grid-pattern bg-size-[40px_40px] opacity-[0.04]" />
      <div className="absolute inset-0 bg-linear-to-b from-[#050505] via-transparent to-[#050505]" />
      
      <motion.div 
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-spotify-green/10 blur-[120px] rounded-full mix-blend-screen"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-neon-purple/10 blur-[140px] rounded-full mix-blend-screen"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <FloatingParticles count={20} />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-24">
      
      {/* Left Column: Content */}
      <div className="flex-1 flex flex-col items-start w-full max-w-2xl pt-12 lg:pt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <div className="w-2 h-2 bg-spotify-green rounded-full shadow-[0_0_8px_#1DB954] animate-pulse" />
          <span className="font-mono text-xs font-medium text-gray-300 tracking-wide">SYSTEM.UPGRADE_V2</span>
        </motion.div>

        <div className="mb-6 w-full">
          <AnimatedHeading text="Crafting the next experience." />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 font-light leading-relaxed max-w-lg mb-10"
        >
          I'm currently rebuilding my digital workspace. Focusing on <span className="text-white font-medium">performance</span>, <span className="text-white font-medium">accessibility</span>, and <span className="text-white font-medium">pixel perfect UI</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <a
            href="mailto:devbyhodan@gmail.com"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition-all duration-300"
          >
            <span>Notify Me</span>
            <Mail className="w-4 h-4" />
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-opacity duration-300 pointer-events-none" />
          </a>
          
          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/hodanmohamed" icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/hodanmoh" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
          </div>
        </motion.div>
      </div>

      {/* Right Column: UI/UX Visuals */}
      <div className="flex-1 w-full relative h-125 lg:h-150 hidden lg:block perspective-[1000px]">
        
        {/* Main Editor Window */}
        <motion.div 
          initial={{ opacity: 0, rotateY: 10, x: 50 }}
          animate={{ opacity: 1, rotateY: -5, x: 0, y: [-10, 10, -10] }}
          transition={{ 
            opacity: { duration: 1 },
            rotateY: { duration: 1 },
            x: { duration: 1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-10 right-10 w-112.5 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-4 font-mono text-[10px] text-gray-500">App.tsx — devbyhodan-portfolio</span>
          </div>
          <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-gray-400">
            <div className="flex"><span className="text-gray-600 w-8 select-none">1</span><span className="text-neon-purple">import</span> <span className="text-white">React</span> <span className="text-neon-purple">from</span> <span className="text-spotify-green">'react'</span><span className="text-gray-500">;</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">2</span><span className="text-neon-purple">import</span> <span className="text-white">&#123; motion &#125;</span> <span className="text-neon-purple">from</span> <span className="text-spotify-green">'framer-motion'</span><span className="text-gray-500">;</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">3</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">4</span><span className="text-neon-blue">const</span> <span className="text-white">Hero</span> <span className="text-neon-blue">=</span> <span className="text-white">()</span> <span className="text-neon-blue">=&gt;</span> <span className="text-white">&#123;</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">5</span>  <span className="text-neon-purple">return</span> <span className="text-white">(</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">6</span>    <span className="text-gray-500">&lt;</span><span className="text-neon-blue">motion.div</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">7</span>      <span className="text-spotify-light">initial</span><span className="text-neon-blue">=</span><span className="text-white">&#123;&#123;</span> <span className="text-white">opacity:</span> <span className="text-neon-purple">0</span> <span className="text-white">&#125;&#125;</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">8</span>      <span className="text-spotify-light">animate</span><span className="text-neon-blue">=</span><span className="text-white">&#123;&#123;</span> <span className="text-white">opacity:</span> <span className="text-neon-purple">1</span> <span className="text-white">&#125;&#125;</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">9</span>      <span className="text-spotify-light">className</span><span className="text-neon-blue">=</span><span className="text-spotify-green">"flex items-center"</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">10</span>    <span className="text-gray-500">&gt;</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">11</span>      <span className="text-gray-500">&lt;</span><span className="text-neon-blue">h1</span><span className="text-gray-500">&gt;</span><span className="text-white">Hello World</span><span className="text-gray-500">&lt;/</span><span className="text-neon-blue">h1</span><span className="text-gray-500">&gt;</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">12</span>    <span className="text-gray-500">&lt;/</span><span className="text-neon-blue">motion.div</span><span className="text-gray-500">&gt;</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">13</span>  <span className="text-white">);</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">14</span><span className="text-white">&#125;;</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">15</span></div>
            <div className="flex"><span className="text-gray-600 w-8 select-none">16</span><span className="text-neon-purple">export default</span> <span className="text-white">Hero;</span></div>
            <motion.div 
              className="w-2 h-4 bg-spotify-green mt-1 animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Floating UI Component 1 - Status */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: [50, 35, 50] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.3 },
            x: { duration: 1, delay: 0.3 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          className="absolute bottom-24 left-0 w-64 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-spotify-green/20 flex items-center justify-center">
              <Activity className="w-5 h-5 text-spotify-green" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">Build Status</h3>
              <p className="text-xs text-gray-400">Compiling assets...</p>
            </div>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-spotify-green"
              initial={{ width: "0%" }}
              animate={{ width: "75%" }}
              transition={{ duration: 2, delay: 1, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Floating UI Component 2 - Design System */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: [-20, -35, -20] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.6 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute top-0 left-12 w-48 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl z-0"
        >
          <div className="flex items-center gap-2 mb-3">
            <Layout className="w-4 h-4 text-neon-blue" />
            <span className="text-xs font-medium text-gray-300">Design Tokens</span>
          </div>
          <div className="flex gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-spotify-green shadow-[0_0_10px_rgba(29,185,84,0.3)]" />
            <div className="w-8 h-8 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(176,38,255,0.3)]" />
            <div className="w-8 h-8 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(75,150,255,0.3)]" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-white/10 rounded-full" />
            <div className="h-2 w-2/3 bg-white/10 rounded-full" />
          </div>
        </motion.div>

      </div>
    </div>

    {/* Footer */}
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-0 left-0 w-full p-6 flex justify-center lg:justify-start z-20 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center lg:text-left">
          © {new Date().getFullYear()} DevByHodan | Portfolio. All Systems Normal.
        </p>
      </div>
    </motion.footer>
  </main>
  )
}

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label })=> {
    return (
        <>
            <a
            href={href}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            >
            {icon}
            </a>
        </>
    )
   
}

export default Maintenance