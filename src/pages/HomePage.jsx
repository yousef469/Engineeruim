import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Plane, Car, Sparkles, LogIn, UserPlus, Globe, User, ChevronDown, Users as UsersIcon, Upload, Brain, Calculator } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import SidebarMenu from '../components/SidebarMenu';

const HomePage = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { t } = useTranslation();
  const [showLangModal, setShowLangModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Sidebar Menu - Only for logged in users */}
      {user && <SidebarMenu />}
      
      {/* Header */}
      <header className="border-b border-primary/20 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Engineerium</h1>
                <p className="text-text-secondary text-sm mt-1">Interactive Engineering Learning</p>
              </div>
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowLangModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-background-light hover:bg-primary/20 rounded-lg transition-colors text-sm font-medium"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">Language</span>
              </button>

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center gap-2 px-4 py-2 bg-background-light hover:bg-primary/20 rounded-lg transition-colors text-sm font-medium"
                  >
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">{user.email?.split('@')[0]}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-background-light border border-primary/20 rounded-lg shadow-xl z-50">
                      <div className="p-3 border-b border-primary/20">
                        <p className="text-xs text-text-secondary">Signed in as</p>
                        <p className="text-sm text-white truncate">{user.email}</p>
                      </div>
                      <div className="py-2">
                        <button onClick={() => { navigate('/upload'); setShowProfileMenu(false); }} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-primary/10 transition-colors text-left">
                          <Upload className="w-4 h-4 text-secondary" />
                          <span className="text-sm">Upload Model</span>
                        </button>
                        <button onClick={() => { navigate('/collaborate'); setShowProfileMenu(false); }} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-primary/10 transition-colors text-left">
                          <UsersIcon className="w-4 h-4 text-accent" />
                          <span className="text-sm">Collaborate</span>
                        </button>
                      </div>
                      <div className="border-t border-primary/20 py-2">
                        <button onClick={() => { signOut(); setShowProfileMenu(false); }} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-primary/10 transition-colors text-left text-red-400">
                          <LogIn className="w-4 h-4" />
                          <span className="text-sm">Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => navigate('/auth')}
                  className="flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary-light text-background rounded-lg transition-colors font-semibold"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* LOGGED IN VIEW - Show interactive sections */}
      {user ? (
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hero-title-glow">
              Explore Engineering
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto mb-6">
              Interactive 3D models, lessons, and simulations
            </p>
          </div>

          {/* Main Sections Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* 3D Models Viewer */}
            <button
              onClick={() => navigate('/viewer')}
              className="group relative bg-gradient-to-br from-primary to-primary-dark hover:from-primary-light hover:to-primary rounded-2xl p-8 border-2 border-primary hover:border-primary-light transition-all cursor-pointer hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex justify-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform delay-75">
                    <Plane className="w-7 h-7 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform delay-150">
                    <Car className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white text-center">3D Model Viewer</h3>
                <p className="text-white/90 text-center mb-4">
                  Explore interactive 3D models of rockets, planes, and cars
                </p>
                
                <div className="flex items-center justify-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Explore Models</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </button>

            {/* Learn Mechanics */}
            <button
              onClick={() => navigate('/learn')}
              className="group relative bg-gradient-to-br from-secondary to-secondary-dark hover:from-secondary-light hover:to-secondary rounded-2xl p-8 border-2 border-secondary hover:border-secondary-light transition-all cursor-pointer hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white text-center">Learn Mechanics</h3>
                <p className="text-white/90 text-center text-sm mb-4">
                  Choose from Rockets, Planes, or Cars to start learning
                </p>
                
                <div className="flex items-center justify-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Start Learning</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      ) : (
        /* LANDING PAGE FOR NON-LOGGED IN USERS */
        <div className="w-full">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 py-20 text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hero-title-glow">
              Explore Engineering
            </h1>
            <p className="text-2xl text-text-secondary mb-4 max-w-3xl mx-auto">
              We're helping you build the steps of your engineering career
            </p>
            <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
              Master aerospace, automotive, and robotics through interactive 3D models, comprehensive lessons, and hands-on simulations
            </p>
            <button
              onClick={() => navigate('/auth')}
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary hover:bg-primary-light text-background rounded-xl transition-all font-bold text-lg shadow-lg hover:shadow-primary/50 hover:scale-105"
            >
              <UserPlus className="w-6 h-6" />
              <span>Start Your Journey</span>
            </button>
          </section>

          {/* Section 1: Rocket Mechanics - Text Left, 3D Right */}
          <section className="bg-background-light py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="w-12 h-12 text-primary" />
                    <h2 className="text-4xl font-bold text-primary">Rocket Mechanics</h2>
                  </div>
                  <p className="text-xl text-text mb-6">
                    Master the fundamentals of aerospace engineering with our interactive rocket mechanics module.
                  </p>
                  <ul className="space-y-4 text-lg text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-2xl">✓</span>
                      <span>Learn thrust, drag, and orbital mechanics through 3D simulations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-2xl">✓</span>
                      <span>Explore NASA-grade rocket models in real-time 3D</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-2xl">✓</span>
                      <span>Understand propulsion systems and flight dynamics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-2xl">✓</span>
                      <span>Practice with interactive quizzes and challenges</span>
                    </li>
                  </ul>
                </div>
                <div className="h-96 bg-background rounded-2xl border-2 border-primary/30 overflow-hidden flex items-center justify-center relative">
                  <div className="text-center relative">
                    <Rocket className="w-40 h-40 text-primary mx-auto mb-4 animate-float" />
                    <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse"></div>
                    <p className="text-text-secondary relative z-10">Aerospace Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Automotive Engineering - 3D Left, Text Right */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="h-96 bg-background-light rounded-2xl border-2 border-secondary/30 overflow-hidden flex items-center justify-center relative">
                  <div className="text-center relative">
                    <Car className="w-40 h-40 text-secondary mx-auto mb-4 animate-float" />
                    <div className="absolute inset-0 bg-secondary/20 blur-3xl animate-pulse"></div>
                    <p className="text-text-secondary relative z-10">Interactive Car Engineering</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Car className="w-12 h-12 text-secondary" />
                    <h2 className="text-4xl font-bold text-secondary">Automotive Engineering</h2>
                  </div>
                  <p className="text-xl text-text mb-6">
                    Dive deep into automotive systems and understand how modern vehicles work.
                  </p>
                  <ul className="space-y-4 text-lg text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary text-2xl">✓</span>
                      <span>Study engine mechanics, transmission systems, and powertrains</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary text-2xl">✓</span>
                      <span>Explore suspension, braking, and steering systems in 3D</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary text-2xl">✓</span>
                      <span>Learn aerodynamics and vehicle dynamics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary text-2xl">✓</span>
                      <span>Interactive simulations of real-world scenarios</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Aviation - Text Left, Animation Right */}
          <section className="bg-background-light py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Plane className="w-12 h-12 text-primary" />
                    <h2 className="text-4xl font-bold text-primary">Aviation Mechanics</h2>
                  </div>
                  <p className="text-xl text-text mb-6">
                    Understand the principles of flight and aircraft engineering.
                  </p>
                  <ul className="space-y-4 text-lg text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-2xl">✓</span>
                      <span>Master lift, drag, thrust, and weight principles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-2xl">✓</span>
                      <span>Explore aircraft structures and control surfaces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-2xl">✓</span>
                      <span>Study jet engines and propulsion systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-2xl">✓</span>
                      <span>Flight dynamics and stability analysis</span>
                    </li>
                  </ul>
                </div>
                <div className="h-96 bg-background rounded-2xl border-2 border-primary/30 overflow-hidden flex items-center justify-center relative">
                  <div className="text-center relative">
                    <Plane className="w-40 h-40 text-primary mx-auto mb-4 animate-float" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse"></div>
                    <p className="text-text-secondary relative z-10">Aviation Mechanics</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Robotics - Animation Left, Text Right */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="h-96 bg-background-light rounded-2xl border-2 border-accent/30 overflow-hidden flex items-center justify-center relative">
                  <div className="text-center relative">
                    <Brain className="w-40 h-40 text-accent mx-auto mb-4 animate-spin-slow" />
                    <div className="absolute inset-0 bg-accent/20 blur-3xl animate-pulse"></div>
                    <p className="text-text-secondary relative z-10">Robotics & AI</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-12 h-12 text-accent" />
                    <h2 className="text-4xl font-bold text-accent">Robotics Engineering</h2>
                  </div>
                  <p className="text-xl text-text mb-6">
                    Build intelligent systems and understand modern robotics.
                  </p>
                  <ul className="space-y-4 text-lg text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-2xl">✓</span>
                      <span>Learn kinematics, dynamics, and control systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-2xl">✓</span>
                      <span>Explore sensors, actuators, and robot programming</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-2xl">✓</span>
                      <span>Study AI and machine learning for robotics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-2xl">✓</span>
                      <span>Hands-on simulations and virtual labs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Mathematics & Physics */}
          <section className="bg-background-light py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Calculator className="w-16 h-16 text-secondary" />
                <h2 className="text-5xl font-bold text-secondary">Advanced Mathematics & Physics</h2>
              </div>
              <p className="text-2xl text-text mb-12 max-w-4xl mx-auto">
                Master the mathematical and physical foundations that power all engineering disciplines
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-background p-8 rounded-xl border-2 border-primary/30">
                  <h3 className="text-2xl font-bold text-primary mb-4">Mathematics</h3>
                  <ul className="text-left space-y-2 text-text-secondary">
                    <li>• Calculus & Differential Equations</li>
                    <li>• Linear Algebra & Matrices</li>
                    <li>• Vector Mathematics</li>
                    <li>• Statistics & Probability</li>
                  </ul>
                </div>
                <div className="bg-background p-8 rounded-xl border-2 border-secondary/30">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Physics</h3>
                  <ul className="text-left space-y-2 text-text-secondary">
                    <li>• Classical Mechanics</li>
                    <li>• Thermodynamics</li>
                    <li>• Electromagnetism</li>
                    <li>• Fluid Dynamics</li>
                  </ul>
                </div>
                <div className="bg-background p-8 rounded-xl border-2 border-accent/30">
                  <h3 className="text-2xl font-bold text-accent mb-4">Applications</h3>
                  <ul className="text-left space-y-2 text-text-secondary">
                    <li>• Real-world problem solving</li>
                    <li>• Engineering calculations</li>
                    <li>• Interactive simulations</li>
                    <li>• Step-by-step solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-5xl font-bold mb-6 text-primary">Ready to Start Your Engineering Journey?</h2>
              <p className="text-2xl text-text-secondary mb-12">
                Join thousands of students mastering engineering through interactive learning
              </p>
              <button
                onClick={() => navigate('/auth')}
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white rounded-xl transition-all font-bold text-xl shadow-2xl hover:scale-105"
              >
                <UserPlus className="w-7 h-7" />
                <span>Get Started Free</span>
              </button>
            </div>
          </section>
        </div>
      )}

      {/* Language Selector Modal */}
      {showLangModal && (
        <LanguageSelector onClose={() => setShowLangModal(false)} />
      )}
    </div>
  );
};

export default HomePage;
