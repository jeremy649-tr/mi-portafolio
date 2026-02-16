import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [cardY, setCardY] = useState(-500);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showCard && cardY < 50) {
      const interval = setInterval(() => {
        setCardY(prev => Math.min(prev + 5, 50));
      }, 20);
      return () => clearInterval(interval);
    }
  }, [showCard, cardY]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Lines */}
      <div className="fixed inset-0 pointer-events-none">
        <svg className="w-full h-full" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <animate attributeName="x1" values="0%;100%;0%" dur="10s" repeatCount="indefinite" />
              <animate attributeName="y1" values="0%;100%;0%" dur="8s" repeatCount="indefinite" />
              <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          
          <path d="M0,400 Q250,300 500,400 T1000,400" stroke="url(#grad1)" strokeWidth="3" fill="none" opacity="0.6">
            <animate attributeName="d" values="M0,400 Q250,300 500,400 T1000,400;M0,450 Q250,350 500,450 T1000,450;M0,400 Q250,300 500,400 T1000,400" dur="4s" repeatCount="indefinite" />
          </path>
          
          <path d="M0,450 Q300,350 600,450 T1200,450" stroke="#ec4899" strokeWidth="4" fill="none" opacity="0.5">
            <animate attributeName="d" values="M0,450 Q300,350 600,450 T1200,450;M0,500 Q300,400 600,500 T1200,500;M0,450 Q300,350 600,450 T1200,450" dur="5s" repeatCount="indefinite" />
          </path>

          <path d="M1200,300 Q900,400 600,300 T0,300" stroke="#06b6d4" strokeWidth="3" fill="none" opacity="0.7">
            <animate attributeName="d" values="M1200,300 Q900,400 600,300 T0,300;M1200,250 Q900,350 600,250 T0,250;M1200,300 Q900,400 600,300 T0,300" dur="6s" repeatCount="indefinite" />
          </path>

          <path d="M1000,350 Q700,450 400,350 T0,350" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.6">
            <animate attributeName="d" values="M1000,350 Q700,450 400,350 T0,350;M1000,400 Q700,500 400,400 T0,400;M1000,350 Q700,450 400,350 T0,350" dur="7s" repeatCount="indefinite" />
          </path>

          <path d="M0,500 Q400,600 800,500 T1600,500" stroke="#8b5cf6" strokeWidth="3" fill="none" opacity="0.5">
            <animate attributeName="d" values="M0,500 Q400,600 800,500 T1600,500;M0,550 Q400,650 800,550 T1600,550;M0,500 Q400,600 800,500 T1600,500" dur="8s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-cyan-500/30">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xl">JS</div>
            <div>
              <div className="text-cyan-400 font-bold text-lg">Jeremy Sanchez Abarca</div>
              <div className="text-blue-400 text-xs">WHOEVER STRIVES SHALL SUCCEED</div>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#project" className="hover:text-cyan-400 transition">Project</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content - HOME */}
      <main id="home" className="relative z-10 container mx-auto px-6 py-4">
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1">
            <div className="inline-block px-6 py-2 border border-white/30 rounded-full text-sm mb-8">INNOVATION FOR THE FUTURE</div>
            
            <h1 className="text-6xl font-bold mb-8" style={{
              background: 'linear-gradient(135deg, #06b6d4, #22d3ee, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'gradient 3s ease infinite'
            }}>
              BIENVENIDO A MI<br />PORTAFOLIO
            </h1>

            <h2 className="text-3xl font-bold mb-4">Front End Developer</h2>
            
            <p className="text-gray-300 mb-8 max-w-xl">
              Desarrollo aplicaciones eficientes y atractivas utilizando React, Tailwind, CSS y tecnologías modernas de programación.
            </p>

            <div className="flex gap-4 flex-wrap">
              {['JavaScript', 'React', 'Node.js', 'Tailwind', 'Python'].map((tech, i) => (
                <span key={tech} className="px-6 py-2 border border-white/50 rounded-full hover:bg-white/10 transition" style={{ animation: `fadeIn 0.5s ease ${i * 0.1}s backwards` }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Lanyard Badge */}
          <div className="relative pt-52 -mt-8" style={{ transform: `translateY(${Math.max(cardY, -100)}px)`, transition: 'transform 0.1s ease-out' }}>
            {/* Realistic Fabric Lanyard */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex flex-col items-center" style={{ height: '200px', animation: 'swingChain 3s ease-in-out infinite', transformOrigin: 'top center' }}>
              {/* Metal Hook at top */}
              <div className="relative w-10 h-10 mb-2">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 shadow-xl border-2 border-gray-400"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 border border-gray-400"></div>
                <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-white opacity-50 blur-sm"></div>
              </div>
              
              {/* Fabric Lanyard Strap - Deep matte black with cyan pattern */}
              <div className="relative w-6 flex-1 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg border-l border-r border-gray-700" style={{ animation: 'lanyardSway 3s ease-in-out infinite' }}>
                {/* Woven texture effect */}
                <div className="absolute inset-0 opacity-30" style={{ 
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)',
                  backgroundSize: '4px 100%'
                }}></div>
                
                {/* JS pattern repeating */}
                <div className="absolute inset-0 flex flex-col justify-around items-center py-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="text-[8px] font-bold text-cyan-400 opacity-70" style={{ textShadow: '0 0 4px rgba(6, 182, 212, 0.8)' }}>JS</div>
                  ))}
                </div>
                
                {/* Cyan glowing dots pattern */}
                <div className="absolute inset-0 flex flex-col justify-around items-center py-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-cyan-400 opacity-60" style={{ 
                      boxShadow: '0 0 4px rgba(6, 182, 212, 0.8), 0 0 8px rgba(6, 182, 212, 0.4)',
                      animation: `glow 2s ease-in-out infinite ${i * 0.15}s`
                    }}></div>
                  ))}
                </div>
                
                {/* Side stitching effect */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-600"></div>
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-600"></div>
              </div>
              
              {/* Plastic buckle/clip connector */}
              <div className="relative w-8 h-6 mt-1 bg-gradient-to-b from-gray-800 to-black rounded-sm shadow-lg border border-gray-700">
                <div className="absolute inset-1 bg-gradient-to-b from-gray-700 to-gray-900 rounded-sm"></div>
                <div className="absolute top-1 left-2 w-1 h-1 rounded-full bg-gray-500"></div>
              </div>
              
              {/* Metal lobster clasp */}
              <div className="relative w-5 h-8 mt-1">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-full shadow-md"></div>
                <div className="absolute inset-0.5 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full"></div>
                <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white opacity-40"></div>
              </div>
            </div>

            {/* Hole at top of badge where clasp connects */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-6 z-10">
              <div className="w-full h-full bg-gradient-to-b from-gray-900 to-transparent rounded-t-full border-t-2 border-x-2 border-gray-700/50"></div>
            </div>

            {/* High-Tech Acrylic Badge */}
            <div className="w-72 bg-gradient-to-br from-gray-900/95 via-cyan-950/30 to-gray-900/95 backdrop-blur-xl rounded-2xl p-6 pt-10 shadow-2xl border-2 border-cyan-500/40 relative overflow-hidden" style={{ animation: 'swingCard 3s ease-in-out infinite', transformOrigin: 'top center' }}>
              {/* Frosted glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>
              
              {/* Glowing edge effect */}
              <div className="absolute inset-0 rounded-2xl" style={{ 
                boxShadow: 'inset 0 0 30px rgba(6, 182, 212, 0.2), 0 0 40px rgba(6, 182, 212, 0.3)',
                animation: 'pulse 4s ease-in-out infinite'
              }}></div>
              
              {/* Neon accent lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
              
              {/* Top section with logo */}
              <div className="relative flex items-center gap-3 mb-6 pb-4 border-b border-cyan-500/30">
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg" style={{ 
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' 
                }}>
                  <span className="text-black font-bold text-xl">JS</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-lg"></div>
                </div>
                <div>
                  <span className="text-cyan-400 font-bold text-lg block" style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.8)' }}>Jeremy Sánchez</span>
                  <span className="text-cyan-300/70 text-xs block">ID: JSA-2024</span>
                </div>
              </div>
              
              {/* Center logo square with glow */}
              <div className="relative w-36 h-36 mx-auto mb-6 bg-gradient-to-br from-cyan-950/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border-2 border-cyan-500/50 flex items-center justify-center overflow-hidden" style={{ 
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.4), inset 0 0 30px rgba(6, 182, 212, 0.2)' 
              }}>
                {/* Animated grid background */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  animation: 'gridMove 20s linear infinite'
                }}></div>
                
                <span className="relative text-7xl font-bold text-cyan-400 z-10" style={{ 
                  textShadow: '0 0 20px rgba(6, 182, 212, 1), 0 0 40px rgba(6, 182, 212, 0.5)' 
                }}>JS</span>
                
                {/* Corner accent lines */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/80"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/80"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/80"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/80"></div>
              </div>

              {/* Name and title with neon effect */}
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-white mb-2" style={{ 
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' 
                }}>Jeremy</div>
                <div className="text-sm text-cyan-300/90 font-semibold tracking-wider">FULL CHARGE INSTRUCTOR</div>
                <div className="text-sm text-cyan-300/90 font-semibold tracking-wider">FRONT END DEVELOPER</div>
              </div>
              
              {/* Bottom UI elements */}
              <div className="flex justify-center items-center gap-4 pt-4 border-t border-cyan-500/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ boxShadow: '0 0 8px rgba(6, 182, 212, 0.8)' }}></div>
                  <span className="text-xs text-cyan-300/70">ACTIVE</span>
                </div>
                <div className="text-xs text-cyan-300/70 font-mono">2024</div>
              </div>
              
              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.03) 2px, rgba(6, 182, 212, 0.03) 4px)',
                animation: 'scanline 8s linear infinite'
              }}></div>
            </div>
          </div>
        </div>
      </main>

      {/* ABOUT SECTION */}
      <section id="about" className="relative z-10 bg-gray-900/50 py-20 mt-96">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Acerca de Mí</h2>
          
          <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-2xl p-8 border border-cyan-500/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Información Personal</h3>
                <div className="space-y-3 text-gray-300">
                  <p><span className="text-cyan-400 font-semibold">Nombre:</span> Jeremy Sánchez Abarca</p>
                  <p><span className="text-cyan-400 font-semibold">Ubicación:</span> Perú</p>
                  <p><span className="text-cyan-400 font-semibold">Email:</span> jericensanchezabarca219@gmail.com</p>
                  <p><span className="text-cyan-400 font-semibold">Teléfono:</span> +51 943 742 523</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Habilidades</h3>
                <div className="space-y-3">
                  {[
                    { name: 'React / JavaScript', level: 90 },
                    { name: 'Tailwind CSS / Java', level: 85 },
                    { name: 'Node.js / php', level: 80 },
                    { name: 'Python / Html', level: 75 }
                  ].map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Sobre Mí</h3>
              <p className="text-gray-300 leading-relaxed">
                Soy un desarrollador front-end apasionado por crear experiencias web modernas y atractivas. 
                Me especializo en React y tecnologías modernas de JavaScript. Siempre busco aprender nuevas 
                tecnologías y mejorar mis habilidades. Me encanta trabajar en proyectos desafiantes que 
                requieren soluciones creativas e innovadoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative z-10 py-20 mt-96">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Mis Proyectos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Portafolio Personal',
                description: 'Portafolio moderno con animaciones y diseño responsive usando React y Tailwind.',
                tech: ['React', 'Tailwind', 'Vite'],
                image: '🎨'
              },
              {
                title: 'E-commerce App',
                description: 'Aplicación de comercio electrónico con carrito de compras y pasarela de pagos.',
                tech: ['React', 'Node.js', 'MongoDB'],
                image: '🛒'
              },
              {
                title: 'Dashboard Analítico',
                description: 'Dashboard interactivo con gráficos y visualización de datos en tiempo real.',
                tech: ['React', 'Chart.js', 'API'],
                image: '📊'
              },
              {
                title: 'App de Tareas',
                description: 'Aplicación para gestionar tareas con drag & drop y sincronización en la nube.',
                tech: ['React', 'Firebase', 'DnD'],
                image: '✅'
              },
              {
                title: 'Chat en Tiempo Real',
                description: 'Aplicación de mensajería instantánea con notificaciones push.',
                tech: ['React', 'Socket.io', 'Node.js'],
                image: '💬'
              },
              {
                title: 'Blog Personal',
                description: 'Blog con sistema de comentarios, categorías y búsqueda avanzada.',
                tech: ['React', 'Markdown', 'CMS'],
                image: '📝'
              }
            ].map((project, i) => (
              <div key={i} className="bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all hover:transform hover:scale-105">
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs border border-cyan-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative z-10 bg-gray-900/50 py-20 mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Contáctame</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <a href="mailto:jeremy@example.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm">jericensanchezabarca219@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/5194374200" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm">+51 943 742 523</p>
                    </div>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/jeremy-sanchez-abarca-499798397/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-sm">Jeremy Sánchez Abarca</p>
                    </div>
                  </a>
                  
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <Github size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="text-sm">Ver mis proyectos</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Envíame un Mensaje</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Nombre</label>
                    <input type="text" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Mensaje</label>
                    <textarea rows="4" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white resize-none" placeholder="Tu mensaje..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-cyan-500/30 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Jeremy Sánchez Abarca. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Hecho con ❤️ usando React y Tailwind CSS</p>
        </div>
      </footer>

      {/* Floating Social Icons */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {[
          { Icon: Github, href: 'https://github.com/', color: 'hover:text-white' },
          { Icon: Linkedin, href: 'https://www.linkedin.com/in/jeremy-sanchez-abarca-499798397/', color: 'hover:text-blue-400' },
          { Icon: Instagram, href: '#', color: 'hover:text-pink-400' },
          { Icon: Facebook, href: '#', color: 'hover:text-blue-500' },
          { Icon: MessageCircle, href: 'https://wa.me/51943742523', color: 'hover:text-green-400' }
        ].map(({ Icon, href, color }, i) => (
          <a key={i} href={href} className={`w-12 h-12 bg-gray-800/50 backdrop-blur rounded-full flex items-center justify-center border border-cyan-500/30 transition ${color}`} style={{ animation: `slideIn 0.5s ease ${i * 0.1}s backwards` }}>
            <Icon size={20} />
          </a>
        ))}
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes swingCard {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes swingChain {
          0%, 100% { transform: translateX(-50%) rotate(-5deg); }
          50% { transform: translateX(-50%) rotate(5deg); }
        }
        @keyframes lanyardSway {
          0%, 100% { transform: scaleX(0.98); }
          50% { transform: scaleX(1.02); }
        }
        @keyframes chainLink {
          0%, 100% { opacity: 0.9; transform: scaleY(1) rotate(0deg); }
          50% { opacity: 1; transform: scaleY(1.05) rotate(2deg); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(20px); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
