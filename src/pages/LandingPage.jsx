import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Plane, Car, UserPlus, Brain, Calculator } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const RocketModel = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <coneGeometry args={[1, 3, 8]} />
      <meshStandardMaterial color="#00D9FF" metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
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
        <button onClick={() => navigate('/auth')} className="inline-flex items-center gap-3 px-10 py-4 bg-primary hover:bg-primary-light text-background rounded-xl transition-all font-bold text-lg shadow-lg hover:shadow-primary/50 hover:scale-105">
          <UserPlus className="w-6 h-6" />
          <span>Start Your Journey</span>
        </button>
      </section>

      <section className="bg-background-light py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-12 h-12 text-primary" />
                <h2 className="text-4xl font-bold text-primary">Rocket Mechanics</h2>
              </div>
              <p className="text-xl text-text mb-6">Master the fundamentals of aerospace engineering with our interactive rocket mechanics module.</p>
              <ul className="space-y-4 text-lg text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span><span>Learn thrust, drag, and orbital mechanics through 3D simulations</span></li>
                <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span><span>Explore NASA-grade rocket models in real-time 3D</span></li>
                <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span><span>Understand propulsion systems and flight dynamics</span></li>
                <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span><span>Practice with interactive quizzes and challenges</span></li>
              </ul>
            </div>
            <div className="h-96 bg-background rounded-2xl border-2 border-primary/30 overflow-hidden">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Suspense fallback={null}>
                  <RocketModel />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={4} enableZoom={false} />
              </Canvas>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-background-light rounded-2xl border-2 border-secondary/30 overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <Car className="w-32 h-32 text-secondary mx-auto mb-4 animate-bounce" />
                <p className="text-text-secondary">Animated Car Model</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-12 h-12 text-secondary" />
                <h2 className="text-4xl font-bold text-secondary">Automotive Engineering</h2>
              </div>
              <p className="text-xl text-text mb-6">Dive deep into automotive systems and understand how modern vehicles work.</p>
              <ul className="space-y-4 text-lg text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-secondary text-2xl">✓</span><span>Study engine mechanics, transmission systems, and powertrains</span></li>
                <li className="flex items-start gap-3"><span className="text-secondary text-2xl">✓</span><span>Explore suspension, braking, and steering systems in 3D</span></li>
                <li className="flex items-start gap-3"><span className="text-secondary text-2xl">✓</span><span>Learn aerodynamics and vehicle dynamics</span></li>
                <li className="flex items-start gap-3"><span className="text-secondary text-2xl">✓</span><span>Interactive simulations of real-world scenarios</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-light py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-12 h-12 text-primary" />
                <h2 className="text-4xl font-bold text-primary">Aviation Mechanics</h2>
              </div>
              <p className="text-xl text-text mb-6">Understand the principles of flight and aircraft engineering.</p>
              <ul className="space-y-4 text-lg text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span><span>Master lift, drag, thrust, and weight principles</span></li>
                <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span><span>Explore aircraft structures and control surfaces</span></li>
                <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span><span>Study jet engines and propulsion systems</span></li>
                <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span><span>Flight dynamics and stability analysis</span></li>
              </ul>
            </div>
            <div className="h-96 bg-background rounded-2xl border-2 border-primary/30 overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <Plane className="w-32 h-32 text-primary mx-auto mb-4 animate-pulse" />
                <p className="text-text-secondary">Animated Plane Model</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-background-light rounded-2xl border-2 border-accent/30 overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <Brain className="w-32 h-32 text-accent mx-auto mb-4 animate-spin" style={{ animationDuration: '3s' }} />
                <p className="text-text-secondary">Robotics System</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-12 h-12 text-accent" />
                <h2 className="text-4xl font-bold text-accent">Robotics Engineering</h2>
              </div>
              <p className="text-xl text-text mb-6">Build intelligent systems and understand modern robotics.</p>
              <ul className="space-y-4 text-lg text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-accent text-2xl">✓</span><span>Learn kinematics, dynamics, and control systems</span></li>
                <li className="flex items-start gap-3"><span className="text-accent text-2xl">✓</span><span>Explore sensors, actuators, and robot programming</span></li>
                <li className="flex items-start gap-3"><span className="text-accent text-2xl">✓</span><span>Study AI and machine learning for robotics</span></li>
                <li className="flex items-start gap-3"><span className="text-accent text-2xl">✓</span><span>Hands-on simulations and virtual labs</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Calculator className="w-16 h-16 text-secondary" />
            <h2 className="text-5xl font-bold text-secondary">Advanced Mathematics & Physics</h2>
          </div>
          <p className="text-2xl text-text mb-12 max-w-4xl mx-auto">Master the mathematical and physical foundations that power all engineering disciplines</p>
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

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-primary">Ready to Start Your Engineering Journey?</h2>
          <p className="text-2xl text-text-secondary mb-12">Join thousands of students mastering engineering through interactive learning</p>
          <button onClick={() => navigate('/auth')} className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white rounded-xl transition-all font-bold text-xl shadow-2xl hover:scale-105">
            <UserPlus className="w-7 h-7" />
            <span>Get Started Free</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
