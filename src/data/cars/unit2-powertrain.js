// Unit 2: Powertrain - Complete (5 lessons)
// Lessons 10-14: ICE, transmissions, electric motors, hybrids, fuel efficiency

export const carsUnit2Powertrain = [
  {
    id: 10,
    title: "Internal Combustion Engines",
    unit: "Powertrain",
    duration: "30 min",
    introduction: "Internal combustion engines convert chemical energy in fuel to mechanical work. Understanding engine thermodynamics is essential for automotive engineering.",
    
    sections: [
      {
        title: "Four-Stroke Cycle",
        content: `**The Otto Cycle:**

1. **Intake Stroke:**
• Piston moves down
• Intake valve opens
• Air-fuel mixture enters
• Volume increases

2. **Compression Stroke:**
• Both valves closed
• Piston moves up
• Mixture compressed
• Temperature rises

3. **Power Stroke:**
• Spark ignites mixture
• Combustion occurs
• Pressure pushes piston down
• Work output!

4. **Exhaust Stroke:**
• Exhaust valve opens
• Piston moves up
• Burned gases expelled
• Ready for next cycle

**Key Parameters:**

Compression ratio (r):
r = V_max / V_min

Typical values:
• Gasoline: 9:1 to 11:1
• Diesel: 14:1 to 25:1

Higher compression = higher efficiency!

**Thermal Efficiency:**

Otto cycle ideal efficiency:
η = 1 - (1/r^(γ-1))

Where γ = 1.4 for air

For r = 10:
η = 1 - (1/10^0.4) = 0.60 = 60%

Real engines: 25-35% (losses from friction, heat transfer)`
      },
      {
        title: "Engine Performance",
        content: `**Torque & Power:**

Torque (T):
• Rotational force
• Measured in N·m
• Peak at mid-range RPM

Power (P):
P = T × ω = T × (2πN/60)

Where N = RPM

**Example: Honda Civic 2.0L**

At 4,000 RPM:
• Torque: 180 N·m
• ω = 2π × 4,000/60 = 419 rad/s
• Power = 180 × 419 = 75 kW = 101 HP

At 6,500 RPM (peak power):
• Torque: 160 N·m (drops)
• ω = 681 rad/s
• Power = 160 × 681 = 109 kW = 146 HP

**Displacement:**

V_d = (π/4) × B² × S × n

Where:
• B = bore (cylinder diameter)
• S = stroke (piston travel)
• n = number of cylinders

Example: 2.0L 4-cylinder
• Bore: 86 mm
• Stroke: 86 mm (square engine)
• V_d = (π/4) × 86² × 86 × 4 = 2,000 cm³ = 2.0L

**Specific Output:**

Power per liter:
• Economy: 40-50 kW/L
• Performance: 60-80 kW/L
• High performance: 80-100 kW/L
• F1 engines: 200+ kW/L!`
      },
      {
        title: "Forced Induction",
        content: `**Turbocharging:**

Uses exhaust gases to compress intake air:
• More air = more fuel = more power
• Typical boost: 0.5-2.0 bar
• 30-50% power increase

Pressure ratio:
PR = P_out / P_in

For 1.0 bar boost (2.0 bar absolute):
PR = 2.0 / 1.0 = 2.0

Power increase (approximate):
P_turbo ≈ P_NA × PR^0.7

**Example: 2.0L Turbo vs NA**

Naturally aspirated:
• Power: 120 kW

With 1.0 bar boost (PR = 2.0):
• Power: 120 × 2.0^0.7 = 201 kW
• 68% increase!

**Turbo Lag:**

Time for turbo to spool up:
• Small turbo: quick response, less boost
• Large turbo: more boost, slower response
• Twin-turbo: best of both

**Supercharging:**

Belt-driven compressor:
• No lag (instant response)
• Parasitic loss (uses engine power)
• Linear power delivery
• Less common than turbo

**Intercooling:**

Cools compressed air:
• Denser air = more oxygen
• Prevents detonation
• 10-15% power gain
• Essential for high boost`
      }
    ],
    
    keyTakeaways: [
      "Four-stroke cycle: intake, compression, power, exhaust",
      "Thermal efficiency: η = 1 - (1/r^(γ-1)); higher compression = higher efficiency",
      "Power = Torque × ω; power peaks at high RPM, torque at mid-range",
      "Turbocharging uses exhaust to compress intake air; 30-50% power increase",
      "Real engine efficiency: 25-35% (vs 60% ideal Otto cycle)",
      "Displacement: V_d = (π/4) × B² × S × n"
    ],
    
    vocabulary: [
      { term: "Compression Ratio", definition: "Ratio of max to min cylinder volume; r = V_max/V_min" },
      { term: "Otto Cycle", definition: "Thermodynamic cycle for gasoline engines" },
      { term: "Turbocharger", definition: "Exhaust-driven compressor that increases air density" },
      { term: "Specific Output", definition: "Power per liter of displacement; kW/L" },
      { term: "Thermal Efficiency", definition: "Ratio of work output to heat input" }
    ]
  },

  {
    id: 11,
    title: "Transmission Systems",
    unit: "Powertrain",
    duration: "25 min",
    introduction: "Transmissions match engine speed to wheel speed, optimizing performance and efficiency. Understanding gear ratios is fundamental to powertrain design.",
    
    sections: [
      {
        title: "Gear Ratios",
        content: `**Basic Gear Ratio:**

GR = N_in / N_out = T_out / T_in

Where:
• N = rotational speed (RPM)
• T = torque

**Example: First Gear**

Gear ratio: 3.5:1
• Engine: 3,000 RPM, 200 N·m
• Output: 857 RPM, 700 N·m

Calculation:
• N_out = 3,000 / 3.5 = 857 RPM
• T_out = 200 × 3.5 = 700 N·m

**Overall Ratio:**

Total = Transmission × Final Drive

Example: Honda Civic
• 1st gear: 3.27
• Final drive: 4.35
• Overall: 3.27 × 4.35 = 14.2:1

At 3,000 RPM engine:
• Wheel speed: 3,000 / 14.2 = 211 RPM
• With 0.65m diameter wheels: 8.6 m/s = 31 km/h

**Typical Ratios:**

Manual 6-speed:
• 1st: 3.5:1
• 2nd: 2.0:1
• 3rd: 1.4:1
• 4th: 1.0:1
• 5th: 0.8:1
• 6th: 0.65:1 (overdrive)

Final drive: 3.5-4.5:1`
      },
      {
        title: "Transmission Types",
        content: `**Manual Transmission:**

Advantages:
• Driver control
• Efficient (96-97%)
• Lighter weight
• Lower cost
• Fun!

Disadvantages:
• Requires skill
• Slower shifts
• Tiring in traffic

**Automatic Transmission:**

Torque converter:
• Fluid coupling
• Multiplies torque at low speed
• Smooth operation
• 2-5% efficiency loss

Planetary gearsets:
• Compact design
• Multiple ratios
• Computer controlled

Modern automatics:
• 8-10 speeds
• Efficient as manual
• Fast shifts

**Dual-Clutch Transmission (DCT):**

Two clutches:
• Odd gears on clutch 1
• Even gears on clutch 2
• Pre-selects next gear
• Shift time: 0.1-0.2 seconds

Advantages:
• Fast shifts
• No power interruption
• Efficient (97-98%)
• Best of both worlds

Used in:
• VW/Audi DSG
• Porsche PDK
• Ferrari F1

**CVT (Continuously Variable):**

No fixed gears:
• Belt and pulleys
• Infinite ratios
• Always at optimal RPM
• Efficient but boring`
      },
      {
        title: "Performance Calculations",
        content: `**Acceleration in Each Gear:**

Wheel force:
F_w = (T_e × GR × η) / r_w

Where:
• T_e = engine torque
• GR = overall gear ratio
• η = efficiency (0.90-0.95)
• r_w = wheel radius

**Example: Mazda MX-5**

Engine: 150 N·m at 4,000 RPM
Wheel radius: 0.32 m
Efficiency: 0.92

1st gear (14.2:1):
F_w = (150 × 14.2 × 0.92) / 0.32 = 6,130 N
a = 6,130 / 1,100 = 5.6 m/s²

6th gear (2.8:1):
F_w = (150 × 2.8 × 0.92) / 0.32 = 1,210 N
a = 1,210 / 1,100 = 1.1 m/s²

**Top Speed:**

Limited by power and drag:
P = F_drag × v
P = ½ρv³C_D A

Solving for v:
v_max = ∛(2P / (ρC_D A))

Example: 150 kW, C_D = 0.30, A = 2.2 m²
v_max = ∛(2 × 150,000 / (1.225 × 0.30 × 2.2))
v_max = 67 m/s = 241 km/h

**Shift Points:**

Shift when power in next gear > current gear

Optimal shift RPM:
N_shift = N_peak × GR_next / GR_current

For peak power at 6,500 RPM:
1st to 2nd (3.5:1 to 2.0:1):
N_shift = 6,500 × 2.0 / 3.5 = 3,714 RPM

But usually shift at redline for max acceleration!`
      }
    ],
    
    keyTakeaways: [
      "Gear ratio: GR = N_in/N_out = T_out/T_in; trades speed for torque",
      "Overall ratio = transmission ratio × final drive ratio",
      "Wheel force: F_w = (T_e × GR × η) / r_w",
      "DCT combines manual efficiency with automatic convenience",
      "Lower gears provide more torque multiplication for acceleration",
      "Top speed limited by power and drag: v_max = ∛(2P/(ρC_D A))"
    ],
    
    vocabulary: [
      { term: "Gear Ratio", definition: "Ratio of input to output speed; GR = N_in/N_out" },
      { term: "Final Drive", definition: "Last gear reduction before wheels; typically 3.5-4.5:1" },
      { term: "DCT", definition: "Dual-Clutch Transmission; two clutches for fast shifts" },
      { term: "Overdrive", definition: "Gear ratio < 1:1; reduces RPM at highway speeds" },
      { term: "Torque Converter", definition: "Fluid coupling in automatic transmissions" }
    ]
  },

  {
    id: 12,
    title: "Electric Motors & Battery Systems",
    unit: "Powertrain",
    duration: "30 min",
    introduction: "Electric motors provide instant torque and high efficiency. Understanding electric powertrains is essential for the future of automotive engineering.",
    
    sections: [
      {
        title: "Electric Motor Fundamentals",
        content: `**Motor Types:**

**Permanent Magnet Synchronous Motor (PMSM):**
• Most common in EVs
• High efficiency (95-97%)
• Compact and lightweight
• Expensive (rare earth magnets)

Used in:
• Tesla Model 3/Y
• Nissan Leaf
• Chevy Bolt

**Induction Motor (IM):**
• No permanent magnets
• Robust and reliable
• Slightly lower efficiency (92-95%)
• Lower cost

Used in:
• Tesla Model S/X (rear motor)
• Original Tesla Roadster

**Motor Performance:**

Torque:
T = k_t × I

Where:
• k_t = torque constant
• I = current

Power:
P = T × ω = V × I × η

Where:
• V = voltage
• η = efficiency

**Example: Tesla Model 3 Motor**

Specifications:
• Peak power: 211 kW (283 HP)
• Peak torque: 420 N·m
• Max speed: 18,000 RPM
• Efficiency: 97%

At 6,000 RPM:
• ω = 2π × 6,000/60 = 628 rad/s
• If T = 420 N·m
• P = 420 × 628 = 264 kW

But limited to 211 kW peak!`
      },
      {
        title: "Battery Systems",
        content: `**Lithium-Ion Batteries:**

Energy density:
• Cell level: 250-300 Wh/kg
• Pack level: 150-200 Wh/kg
• (Pack includes cooling, BMS, structure)

**Battery Capacity:**

Energy (E):
E = V × Ah

Example: Tesla Model 3 Long Range
• Voltage: 350V nominal
• Capacity: 230 Ah
• Energy: 350 × 230 = 80.5 kWh

**Range Calculation:**

Range = Battery Energy / Energy Consumption

Tesla Model 3:
• Battery: 80.5 kWh
• Consumption: 150 Wh/km
• Range: 80,500 / 150 = 537 km

**Charging:**

Power = Voltage × Current

Level 2 (240V, 32A):
• Power: 240 × 32 = 7.7 kW
• Time for 80 kWh: 10.4 hours

DC Fast Charging (400V, 250A):
• Power: 400 × 250 = 100 kW
• Time for 80 kWh: 0.8 hours = 48 min
• (Actually slower due to taper)

**Battery Management System (BMS):**

Functions:
• Monitor cell voltages
• Balance cells
• Control temperature
• Protect from over/under voltage
• Estimate state of charge (SOC)

Critical for:
• Safety
• Longevity
• Performance`
      },
      {
        title: "EV Performance",
        content: `**Instant Torque:**

Unlike ICE, electric motors provide full torque from 0 RPM:
• No need to rev up
• Instant acceleration
• No transmission needed (usually)

**Power Curve:**

Constant torque region (0-6,000 RPM):
• Full torque available
• Power increases linearly with speed
• P = T × ω

Constant power region (6,000-18,000 RPM):
• Power limited
• Torque decreases
• T = P / ω

**Example: Acceleration Comparison**

Tesla Model 3 Performance:
• Power: 340 kW (456 HP)
• Torque: 510 N·m (constant to 6,000 RPM)
• Weight: 1,850 kg
• 0-60 mph: 3.1 seconds

BMW M3 (ICE):
• Power: 375 kW (503 HP)
• Torque: 650 N·m (at 2,750-5,500 RPM)
• Weight: 1,730 kg
• 0-60 mph: 3.9 seconds

Tesla is faster despite less power!
• Instant torque
• AWD traction
• No gear shifts

**Efficiency:**

Total efficiency (wall to wheels):
• Charging: 90-95%
• Battery: 95-98%
• Motor: 95-97%
• Drivetrain: 97-98%

Overall: 80-85%

Compare to ICE:
• Engine: 25-35%
• Transmission: 90-95%
• Overall: 22-33%

EVs are 2.5-3× more efficient!`
      }
    ],
    
    keyTakeaways: [
      "Electric motors provide instant torque from 0 RPM; no need to rev up",
      "Motor efficiency: 95-97% (vs 25-35% for ICE)",
      "Battery energy: E = V × Ah; Tesla Model 3 has ~80 kWh",
      "Range = Battery Energy / Consumption; typically 150-200 Wh/km",
      "EVs are 2.5-3× more efficient than ICE vehicles overall",
      "BMS critical for safety, longevity, and performance"
    ],
    
    vocabulary: [
      { term: "PMSM", definition: "Permanent Magnet Synchronous Motor; most common in EVs" },
      { term: "Energy Density", definition: "Energy per unit mass; Wh/kg for batteries" },
      { term: "BMS", definition: "Battery Management System; monitors and protects battery" },
      { term: "SOC", definition: "State of Charge; battery charge level as percentage" },
      { term: "Regenerative Braking", definition: "Motor acts as generator to recover energy during braking" }
    ]
  },

  {
    id: 13,
    title: "Hybrid Systems & Architecture",
    unit: "Powertrain",
    duration: "25 min",
    introduction: "Hybrid vehicles combine ICE and electric motors for improved efficiency. Understanding hybrid architectures is key to modern automotive engineering.",
    
    sections: [
      {
        title: "Hybrid Architectures",
        content: `**Series Hybrid:**

ICE → Generator → Battery → Motor → Wheels

Characteristics:
• ICE only generates electricity
• Motor drives wheels
• ICE runs at optimal RPM
• Simple control

Example: Chevrolet Volt (extended range)

Advantages:
• ICE always at peak efficiency
• Flexible ICE placement
• Simple mechanical design

Disadvantages:
• Two energy conversions (losses)
• Heavy (need large motor)

**Parallel Hybrid:**

ICE → Transmission → Wheels
         ↑
      Motor

Characteristics:
• Both ICE and motor can drive wheels
• Can operate independently or together
• Clutch connects/disconnects ICE

Example: Honda Insight

Advantages:
• Efficient (direct mechanical path)
• Smaller motor needed
• Lower cost

Disadvantages:
• Complex control
• Limited electric-only range

**Series-Parallel (Power-Split):**

Planetary gearset splits power:
• ICE can drive wheels OR generator
• Motor can drive wheels OR charge battery
• Continuously variable operation

Example: Toyota Prius

Advantages:
• Best of both worlds
• Excellent efficiency
• Flexible operation

Disadvantages:
• Complex mechanical design
• Expensive`
      },
      {
        title: "Hybrid Performance",
        content: `**Power Flow Modes:**

**1. Electric-Only:**
• Battery → Motor → Wheels
• Low speed, light load
• Zero emissions
• Typical range: 2-5 km

**2. ICE-Only:**
• ICE → Transmission → Wheels
• Highway cruising
• Most efficient for ICE
• Battery maintains charge

**3. Combined Power:**
• ICE + Motor → Wheels
• Maximum acceleration
• Both power sources
• Temporary boost

**4. Regenerative Braking:**
• Wheels → Motor (generator) → Battery
• Recovers 60-70% of braking energy
• Extends range
• Reduces brake wear

**Example: Toyota Prius**

Specifications:
• ICE: 72 kW (97 HP)
• Motor: 53 kW (71 HP)
• Combined: 90 kW (121 HP)
• (Not additive due to control strategy)

Battery:
• Type: NiMH (newer: Li-ion)
• Capacity: 1.3 kWh
• Voltage: 201V

Performance:
• 0-60 mph: 10.6 seconds
• Fuel economy: 4.4 L/100km (53 mpg)
• 50% better than conventional!`
      },
      {
        title: "Efficiency & Control",
        content: `**Operating Strategy:**

Goal: Minimize fuel consumption

**Optimal Operating Line:**

ICE operates at most efficient points:
• Avoid low load (inefficient)
• Avoid high RPM (friction losses)
• Use motor to fill gaps

**Example Operating Points:**

Low speed (0-40 km/h):
• Electric only
• ICE off
• Zero fuel consumption

Medium speed (40-80 km/h):
• ICE at optimal load
• Excess power charges battery
• High efficiency

High speed (80+ km/h):
• ICE provides most power
• Motor assists as needed
• Battery maintains charge

Acceleration:
• Both ICE and motor
• Maximum power
• Battery discharges

Deceleration:
• Regenerative braking
• Motor charges battery
• ICE off

**Fuel Savings:**

Compared to conventional vehicle:
• City: 40-50% improvement
• Highway: 20-30% improvement
• Combined: 30-40% improvement

**Example: Camry vs Camry Hybrid**

Conventional Camry:
• Fuel economy: 8.0 L/100km
• Annual fuel (20,000 km): 1,600 L
• Cost at $1.50/L: $2,400

Camry Hybrid:
• Fuel economy: 5.3 L/100km
• Annual fuel: 1,060 L
• Cost: $1,590
• Savings: $810/year

Payback period: 3-4 years typically`
      }
    ],
    
    keyTakeaways: [
      "Three hybrid types: series, parallel, series-parallel (power-split)",
      "Toyota Prius uses power-split for optimal efficiency",
      "Regenerative braking recovers 60-70% of braking energy",
      "Hybrids achieve 30-40% better fuel economy than conventional",
      "ICE operates at optimal efficiency points; motor fills gaps",
      "Electric-only mode for low speed; combined power for acceleration"
    ],
    
    vocabulary: [
      { term: "Series Hybrid", definition: "ICE generates electricity; motor drives wheels" },
      { term: "Parallel Hybrid", definition: "Both ICE and motor can drive wheels directly" },
      { term: "Power-Split", definition: "Planetary gearset allows flexible power routing" },
      { term: "Regenerative Braking", definition: "Motor acts as generator during braking" },
      { term: "Optimal Operating Line", definition: "Most efficient operating points for ICE" }
    ]
  },

  {
    id: 14,
    title: "Fuel Efficiency & Optimization",
    unit: "Powertrain",
    duration: "25 min",
    introduction: "Fuel efficiency is critical for cost and environmental impact. Understanding efficiency factors helps optimize vehicle design and operation.",
    
    sections: [
      {
        title: "Energy Consumption",
        content: `**Energy Required:**

Total energy = Kinetic + Potential + Losses

**Kinetic Energy:**
E_k = ½mv²

Example: Accelerate 1,500 kg to 100 km/h (27.8 m/s)
E_k = ½ × 1,500 × 27.8² = 579 kJ

**Potential Energy:**
E_p = mgh

Example: Climb 100 m elevation
E_p = 1,500 × 9.81 × 100 = 1,472 kJ

**Energy Losses:**

1. **Aerodynamic Drag:**
E_drag = ½ρv²C_D A × distance

At 100 km/h for 10 km:
E_drag = ½ × 1.225 × 27.8² × 0.30 × 2.2 × 10,000
E_drag = 2,080 kJ

2. **Rolling Resistance:**
E_rr = C_rr × mg × distance

For 10 km:
E_rr = 0.011 × 1,500 × 9.81 × 10,000
E_rr = 1,619 kJ

**Total Energy (10 km at 100 km/h):**
• Drag: 2,080 kJ
• Rolling: 1,619 kJ
• Total: 3,699 kJ = 1.03 kWh

**Fuel Consumption:**

Gasoline energy: 34 MJ/L
Engine efficiency: 30%
Drivetrain efficiency: 90%

Overall efficiency: 27%

Fuel needed:
3,699 kJ / (34,000 kJ/L × 0.27) = 0.40 L

Fuel economy: 0.40 L / 10 km = 4.0 L/100km`
      },
      {
        title: "Efficiency Improvements",
        content: `**Reduce Drag:**

Drag power: P = ½ρv³C_D A

Reduce C_D from 0.35 to 0.25 (29% reduction):
• Power savings: 29%
• At 100 km/h: saves 3.5 kW
• Fuel savings: ~15% at highway speeds

**Reduce Weight:**

Every 100 kg reduction:
• Acceleration: 5-7% improvement
• Braking: 5-7% improvement
• Fuel economy: 3-5% improvement

Example: Remove 200 kg
• From 1,500 kg to 1,300 kg
• Fuel savings: 6-10%

**Reduce Rolling Resistance:**

Low rolling resistance tires:
• C_rr from 0.012 to 0.008 (33% reduction)
• Fuel savings: 5-8%

Trade-off:
• Slightly less grip
• Acceptable for economy cars

**Engine Efficiency:**

Modern technologies:
• Direct injection: +5% efficiency
• Variable valve timing: +3% efficiency
• Turbocharging: +10% efficiency
• Cylinder deactivation: +5% efficiency

Combined: 20-25% improvement!

**Transmission:**

More gears = better efficiency:
• 4-speed auto: 85% average efficiency
• 6-speed auto: 88% average efficiency
• 8-speed auto: 90% average efficiency
• CVT: 91% average efficiency

**Example: Efficiency Stack**

Baseline vehicle: 8.0 L/100km

Improvements:
• Reduce C_D 0.35→0.25: -12% → 7.0 L/100km
• Reduce weight 200 kg: -8% → 6.4 L/100km
• Low RR tires: -6% → 6.0 L/100km
• Engine tech: -15% → 5.1 L/100km

Total: 36% improvement!`
      },
      {
        title: "Driving Techniques",
        content: `**Eco-Driving:**

**1. Smooth Acceleration:**
• Gentle throttle
• Avoid rapid acceleration
• Savings: 10-15%

**2. Anticipate Traffic:**
• Coast to stops
• Avoid hard braking
• Maintain momentum
• Savings: 5-10%

**3. Optimal Speed:**
• 80-90 km/h most efficient
• Drag increases with v³
• Every 10 km/h over 90: +10% fuel

**4. Minimize Idling:**
• Turn off engine if stopped > 30 seconds
• Modern engines: no warm-up needed
• Savings: 5-10%

**5. Proper Tire Pressure:**
• Under-inflated: +3% fuel consumption
• Check monthly
• Use recommended pressure

**Speed vs Fuel Economy:**

At 80 km/h: 5.0 L/100km (baseline)
At 100 km/h: 6.5 L/100km (+30%)
At 120 km/h: 8.5 L/100km (+70%)

Why? Drag power ∝ v³

**Example: Trip Comparison**

200 km trip:

Aggressive driving (120 km/h):
• Time: 1.67 hours
• Fuel: 17.0 L
• Cost: $25.50

Eco driving (90 km/h):
• Time: 2.22 hours
• Fuel: 11.0 L
• Cost: $16.50

Savings: $9.00, 6.0 L
Time cost: 33 minutes

**Real-World Results:**

Typical driver: 8.0 L/100km
Eco driver: 6.0 L/100km
Aggressive driver: 10.0 L/100km

25% difference between eco and typical!
40% difference between eco and aggressive!`
      }
    ],
    
    keyTakeaways: [
      "Energy losses: drag (∝v²), rolling resistance (constant), drivetrain",
      "Drag power ∝ v³; reducing C_D by 29% saves 15% fuel at highway speeds",
      "Weight reduction: 100 kg saves 3-5% fuel",
      "Eco-driving techniques can save 20-30% fuel",
      "Optimal highway speed: 80-90 km/h; 120 km/h uses 70% more fuel",
      "Modern engine tech (DI, VVT, turbo) improves efficiency 20-25%"
    ],
    
    vocabulary: [
      { term: "Rolling Resistance", definition: "Force from tire deformation; F = C_rr × mg" },
      { term: "Aerodynamic Drag", definition: "Air resistance; F = ½ρv²C_D A" },
      { term: "Drivetrain Efficiency", definition: "Ratio of wheel power to engine power; typically 85-95%" },
      { term: "Eco-Driving", definition: "Driving techniques to minimize fuel consumption" },
      { term: "Specific Fuel Consumption", definition: "Fuel used per unit power per unit time; g/kWh" }
    ]
  }
];

export default carsUnit2Powertrain;
