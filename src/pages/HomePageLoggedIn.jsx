import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Plane, Car, Sparkles, ArrowLeftRight, Users as UsersIcon, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HomePageLoggedIn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hero-title-glow">
          {t('home.hero.title')}
        </h2>
        <p className="text-xl text-text max-w-2xl mx-auto mb-6">
          {t('home.hero.subtitle')}
        </p>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border-2 border-secondary rounded-full">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-sm font-semibold text-secondary">
            {t('home.hero.new')}
          </span>
        </div>
      </div>

      {/* Main Sections Grid - 2 Primary Features */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
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
            
            <h3 className="text-2xl font-bold mb-3 text-white text-center">{t('home.viewer.title')}</h3>
            <p className="text-white/90 text-center mb-4">
              {t('home.viewer.desc')}
            </p>
            
            <div className="flex items-center justify-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
              <span>{t('home.viewer.button')}</span>
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
              <span>Explore Categories</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </button>
      </div>

      {/* Interactive Features Section - 3 Additional Features */}
      <div className="mt-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {t('home.interactive.title')}
          </h2>
          <p className="text-text">{t('home.interactive.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Compare Models - Locked */}
          <div className="relative group">
            <button
              onClick={() => navigate('/pricing')}
              className="w-full relative bg-gradient-to-br from-red-500 via-pink-600 to-purple-500 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 rounded-2xl p-8 border-2 border-red-400/50 hover:border-gray-500 transition-all cursor-pointer hover:scale-105 hover:shadow-xl shadow-red-500/30"
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6 text-white" />
              </div>
              
              <div className="relative z-10 opacity-75 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
                    <ArrowLeftRight className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white text-center">⚖️ {t('home.compare.title')}</h3>
                <p className="text-white/90 text-center mb-4">
                  {t('home.compare.desc')}
                </p>

                <div className="flex items-center justify-center gap-2 text-white font-semibold">
                  <Lock className="w-4 h-4" />
                  <span>Upgrade to Unlock</span>
                </div>
              </div>
            </button>
          </div>

          {/* Collaborate */}
          <button
            onClick={() => navigate('/collaborate')}
            className="group relative bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-500 hover:from-yellow-600 hover:via-amber-700 hover:to-orange-600 rounded-2xl p-8 border-2 border-yellow-400/50 hover:border-yellow-300 transition-all cursor-pointer hover:scale-105 hover:shadow-xl shadow-yellow-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
                  <UsersIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white text-center">👥 {t('home.features.collaborate.title')}</h3>
              <p className="text-white/90 text-center mb-4">
                {t('home.features.collaborate.fullDesc')}
              </p>

              <div className="flex items-center justify-center gap-2 text-white font-semibold">
                <span>{t('home.features.collaborate.button')}</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </button>

          {/* AI 3D Generator */}
          <button
            onClick={() => navigate('/ai-generator')}
            className="group relative bg-gradient-to-br from-purple-500 via-fuchsia-600 to-pink-500 hover:from-purple-600 hover:via-fuchsia-700 hover:to-pink-600 rounded-2xl p-8 border-2 border-purple-400/50 hover:border-purple-300 transition-all cursor-pointer hover:scale-105 hover:shadow-xl shadow-purple-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur animate-pulse">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white text-center">✨ AI 3D Generator</h3>
              <p className="text-white/90 text-center mb-4">
                Create 3D models from text or images using AI
              </p>

              <div className="flex items-center justify-center gap-2 text-white font-semibold">
                <span>Generate Now</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageLoggedIn;
