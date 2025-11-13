// Unit 2: Powertrain Systems - Complete (6 lessons)
// Internal combustion engines, transmissions, electric powertrains

export const carsUnit2Complete = [
  {
    id: 10,
    title: "Internal Combustion Engines",
    unit: "Powertrain Systems",
    duration: "35 min",
    introduction: "The internal combustion engine has powered vehicles for over a century. Understanding thermodynamics, engine cycles, and power delivery is fundamental to automotive engineering.",
    
    sections: [
      {
        title: "Four-Stroke Otto Cycle",
        content: `**The Four Strokes:**

**1. Intake Stroke:**
• Piston moves down (BDC)
• Intake valve opens
• Air-fuel mixture enters
• Pressure: ~0.5-1.0 bar

**2. Compression Stroke:**
• Both valves closed
• Piston moves up (TDC)
• Mixture compressed
• Pressure: 8-15 bar
• Temperature: 300-400°C

**3. Power Stroke:**
• Spark ignites mixture
• Rapid combustion
• Piston pushed down
• Peak pressure: 40-60 bar
• Peak temperature: 2,000-2,500°C

**4. Exhaust Stroke:**
• Exhaust valve opens
• Piston moves up
• Burned gases expelled
• Pressure: ~1.5 bar

**Thermodynamic Efficiency:**

Ideal Otto cycle efficiency:
η = 1 - 1/r^(γ-1)

Where:
• r = compression ratio
• γ = 1.4 (specific heat ratio for air)

**Example: r = 10:1**
η = 1 - 1/10^0.4
η = 1 - 0.398
η = 60.2% (theoretical)

**Actual efficiency: ~35%**

Losses from:
• Heat transfer to walls
• Incomplete combustion
• Friction
• Pumping losses
• Non-ideal gas behavior

**Compression Ratio:**

r = V_max / V_min = (V_d + V_c) / V_c

Where:
• V_d = displacement volume
• V_c = clearance volume

Higher compression → Higher efficiency
But limited by knock (pre-ignition)

Typical values:
• Regular gas: 9:1 to 10:1
• Premium gas: 10:1 to 12:1
• Race gas: 12:1 to 14:1
• Diesel: 14:1 to 22:1`
      },
      {
        title: "Engine Displacement & Power",
        content: `**Displacement Calculation:**

V_d = (π/4) × B² × S × N

Where:
• B = bore diameter (mm)
• S = stroke length (mm)
• N = number of cylinders

**Example: Honda Civic 2.0L**
• Bore: 81 mm
• Stroke: 96.7 mm
• Cylinders: 4

V_d = (π/4) × 81² × 96.7 × 4
V_d = 1,996 cm³ ≈ 2.0 L ✓

**Power & Torque:**

Power = Torque × Angular velocity
P = τ × ω

In practical units:
P (HP) = τ (lb·ft) × RPM / 5,252
P (kW) = τ (N·m) × RPM / 9,549

**Example: Toyota Camry 2.5L**
• Torque: 250 N·m at 4,000 RPM
• Power: ?

P = 250 × 4,000 / 9,549
P = 104.7 kW = 140 HP

**Mean Effective Pressure (MEP):**

Indicates engine efficiency:
P_mep = (4π × τ) / V_d

Or rearranged:
τ = (P_mep × V_d) / (4π)

Typical P_mep values:
• Naturally aspirated: 8-12 bar
• Turbocharged: 15-25 bar
• Race engines: 20-30 bar

**Example: BMW M3 S58 (3.0L turbo)**
• Peak torque: 650 N·m
• Displacement: 3.0 L

P_mep = (4π × 650) / 0.003
P_mep = 27.2 bar (excellent!)

**Specific Output:**

Power per liter:
P_specific = P / V_d

Examples:
• Economy: 40-60 kW/L
• Performance: 80-120 kW/L
• Race: 150-250 kW/L
• F1: 300+ kW/L

**Torque Curve Shape:**

Low RPM:
• Limited by volumetric efficiency
• Intake flow restrictions
• Low cylinder filling

Mid RPM:
• Peak torque
• Optimal valve timing
• Best volumetric efficiency

High RPM:
• Torque falls off
• Valve flow limits
• Friction increases
• Inertia losses`
      },
      {
        title: "Turbocharging & Forced Induction",
        content: `**Turbocharger Operation:**

Exhaust-driven compressor:
• Turbine in exhaust stream
• Compressor in intake
• Connected by shaft
• Recovers waste heat energy

**Pressure Ratio:**

π = P_boost / P_ambient

Typical: π = 1.5 to 3.0

**Power Increase:**

P_turbo ≈ P_NA × π × η_turbo

Where:
• P_NA = naturally aspirated power
• η_turbo = turbo efficiency (0.7-0.8)

**Example: 2.0L Turbo**
• Base power: 120 kW
• Boost ratio: 2.0 (1 bar boost)
• Efficiency: 0.75

P_turbo = 120 × 2.0 × 0.75
P_turbo = 180 kW

50% power increase from same displacement!

**Turbo Lag:**

Delay in boost response:
• Turbine inertia
• Exhaust flow needed
• Typical: 0.5-2.0 seconds

Factors affecting lag:
• Turbo size (larger = more lag)
• Engine displacement
• Exhaust manifold design
• Wastegate control

**Solutions to Turbo Lag:**

1. **Twin-Scroll Turbo:**
   • Separates exhaust pulses
   • Reduces interference
   • Faster spool-up

2. **Variable Geometry (VGT):**
   • Adjustable turbine vanes
   • Optimizes flow at all RPM
   • Common in diesels

3. **Twin-Turbo:**
   • Small turbo for low RPM
   • Large turbo for high RPM
   • Sequential operation

4. **Electric Turbo:**
   • Electric motor assists
   • Eliminates lag
   • Expensive, emerging tech

**Intercooler:**

Cools compressed air:
• Compression heats air
• Cooler air = denser
• More oxygen = more power

Temperature drop:
• Typical: 50-80°C reduction
• Density increase: 15-25%

**Wastegate:**

Controls boost pressure:
• Bypasses exhaust around turbine
• Prevents overboosting
• Protects engine

**Supercharger vs Turbocharger:**

**Supercharger:**
• Belt-driven from crankshaft
• Immediate response (no lag)
• Uses engine power (~10-15%)
• Efficiency: 60-70%

**Turbocharger:**
• Exhaust-driven
• Turbo lag present
• "Free" power from waste heat
• Efficiency: 70-80%

**Example: Porsche 911 Turbo S**
• 3.8L flat-6
• Twin turbos
• Boost: 1.4 bar (π = 2.4)
• Power: 478 kW (650 HP)
• Specific output: 126 kW/L!`
      },
      {
        title: "Engine Management & Control",
        content: `**ECU Functions:**

The Engine Control Unit manages:
• Fuel injection
• Ignition timing
• Boost control
• Emissions systems
• Diagnostics

**Fuel Injection:**

**Stoichiometric Ratio:**
Air:Fuel = 14.7:1 (by mass)

This ratio:
• Complete combustion
• Minimum emissions
• Optimal for catalytic converter

**Lambda (λ):**

λ = Actual AFR / Stoichiometric AFR

λ = 1.0: Stoichiometric
λ > 1.0: Lean (more air)
λ < 1.0: Rich (more fuel)

**Fuel Maps:**

3D lookup table:
• X-axis: RPM
• Y-axis: Load (MAP or TPS)
• Z-axis: Fuel quantity

Example values (mg/stroke):
• Idle: 2-5 mg
• Cruise: 8-15 mg
• WOT: 20-40 mg

**Ignition Timing:**

Spark advance (degrees BTDC):
• Idle: 10-15°
• Cruise: 25-35°
• WOT: 15-25°

**Knock Control:**

Detonation (knock) is dangerous:
• Uncontrolled combustion
• Can destroy engine
• Detected by knock sensors

ECU response:
• Retard timing
• Enrich mixture
• Reduce boost
• Protect engine

**Octane Rating:**

Resistance to knock:
• Regular: 87 octane (US)
• Premium: 91-93 octane
• Race fuel: 100+ octane

Higher octane allows:
• More timing advance
• Higher compression
• More boost
• More power

**Example: Timing Advance**

Regular gas (87):
• Max timing: 20° BTDC
• Power: 200 HP

Premium gas (93):
• Max timing: 28° BTDC
• Power: 215 HP
• 7.5% increase!

**Sensors:**

**Critical Sensors:**
• MAF (Mass Air Flow)
• MAP (Manifold Absolute Pressure)
• TPS (Throttle Position)
• O2 sensors (lambda)
• Knock sensors
• Coolant temperature
• Intake air temperature
• Crankshaft position
• Camshaft position

**Closed-Loop Control:**

O2 sensors provide feedback:
• Measure exhaust oxygen
• ECU adjusts fuel
• Maintains λ = 1.0
• Optimizes emissions

**Variable Valve Timing (VVT):**

Adjusts valve timing for RPM:
• Low RPM: Late intake closing
• High RPM: Early intake closing
• Improves torque curve
• Increases efficiency

Examples:
• Honda VTEC
• BMW VANOS
• Toyota VVT-i

**Drive-by-Wire:**

Electronic throttle control:
• No mechanical cable
• ECU controls throttle
• Enables features:
  - Traction control
  - Cruise control
  - Launch control
  - Rev matching`
      }
    ],
    
    keyTakeaways: [
      "Otto cycle efficiency: η = 1 - 1/r^(γ-1); higher compression = higher efficiency",
      "Displacement: V_d = (π/4)×B²×S×N; determines engine size",
      "Power = Torque × RPM; P(kW) = τ(N·m) × RPM / 9,549",
      "Turbocharging increases power ~50-100% from same displacement",
      "Stoichiometric ratio: 14.7:1 air:fuel for complete combustion",
      "ECU manages fuel, ignition, boost for optimal performance and emissions"
    ],
    
    vocabulary: [
      { term: "Compression Ratio", definition: "Ratio of cylinder volume at BDC to TDC" },
      { term: "Mean Effective Pressure", definition: "Average pressure during power stroke" },
      { term: "Turbo Lag", definition: "Delay in turbocharger response due to inertia" },
      { term: "Stoichiometric", definition: "Ideal air-fuel ratio for complete combustion (14.7:1)" },
      { term: "Knock", definition: "Uncontrolled combustion; can damage engine" },
      { term: "Lambda (λ)", definition: "Ratio of actual to stoichiometric air-fuel ratio" }
    ]
  },
  
  {
    id: 11,
    title: "Transmission Systems",
    unit: "Powertrain Systems",
    duration: "30 min",
    introduction: "Transmissions multiply torque and match engine speed to vehicle speed. Understanding gear ratios, efficiency, and transmission types is essential for powertrain engineering.",
    
    sections: [
      {
        title: "Gear Ratio Fundamentals",
        content: `**Basic Gear Ratio:**

i = N_out / N_in = T_out / T_in

Where:
• i = gear ratio
• N = rotational speed
• T = number of teeth

**Torque Multiplication:**

τ_out = τ_in × i × η

Where:
• η = efficiency (0.95-0.98 typical)

**Example: First Gear**
• Gear ratio: 3.5:1
• Engine torque: 250 N·m
• Efficiency: 0.97

τ_out = 250 × 3.5 × 0.97
τ_out = 849 N·m

**Speed Reduction:**

ω_out = ω_in / i

At 3,000 RPM engine speed:
ω_out = 3,000 / 3.5 = 857 RPM

**Final Drive:**

Additional gear reduction:
• Differential gear ratio
• Typical: 3.0:1 to 4.5:1

Total ratio = Gear ratio × Final drive

Example:
• 1st gear: 3.5:1
• Final drive: 3.73:1
• Total: 13.06:1

**Wheel Speed to Vehicle Speed:**

v = (ω_wheel × r_tire × 60) / 1000

Where:
• ω_wheel = wheel RPM
• r_tire = tire radius (m)
• v = velocity (km/h)

**Example: 6-Speed Manual**

Gear ratios:
• 1st: 3.82:1
• 2nd: 2.20:1
• 3rd: 1.40:1
• 4th: 1.03:1
• 5th: 0.84:1
• 6th: 0.69:1
• Final: 3.73:1

At 6,000 RPM in 6th gear:
• Transmission out: 6,000/0.69 = 8,696 RPM
• Wheel speed: 8,696/3.73 = 2,331 RPM
• Tire radius: 0.32 m
• Vehicle speed: 224 km/h`
      },
      {
        title: "Manual vs Automatic Transmissions",
        content: `**Manual Transmission:**

**Advantages:**
• Driver control
• Lower cost
• Better efficiency (2-5%)
• Lighter weight
• More engaging

**Disadvantages:**
• Requires skill
• Slower shifts
• Clutch wear
• Less convenient

**Clutch Operation:**

Friction clutch connects engine to transmission:
• Pressure plate
• Clutch disc
• Flywheel

Torque capacity:
T_max = μ × F_clamp × r_eff × n_surfaces

Where:
• μ = friction coefficient (0.3-0.4)
• F_clamp = clamping force
• r_eff = effective radius
• n_surfaces = number of friction surfaces

**Automatic Transmission:**

**Torque Converter:**

Fluid coupling:
• Impeller (engine side)
• Turbine (transmission side)
• Stator (multiplies torque)

Torque multiplication: 2:1 to 3:1 at stall

**Planetary Gearsets:**

Compact gear arrangement:
• Sun gear (center)
• Planet gears (orbiting)
• Ring gear (outer)

By holding different elements:
• Different gear ratios
• Reverse gear
• Neutral

**Advantages:**
• Smooth shifts
• No driver input needed
• Torque converter cushions
• More gears possible (8-10 speed)

**Disadvantages:**
• Lower efficiency (5-10% loss)
• Heavier
• More complex
• Higher cost

**Modern Automatics:**

8-10 speed transmissions:
• Closer gear ratios
• Better efficiency
• Improved performance
• Reduced fuel consumption

Example: ZF 8HP:
• 8 forward gears
• 4 planetary gearsets
• Efficiency: 95%
• Weight: 87 kg`
      },
      {
        title: "Dual-Clutch & CVT Transmissions",
        content: `**Dual-Clutch Transmission (DCT):**

Two clutches, two input shafts:
• Odd gears on shaft 1
• Even gears on shaft 2
• Pre-select next gear
• Clutch swap for shift

**Shift Process:**

1. Driving in 3rd gear (clutch 1)
2. Pre-select 4th gear (shaft 2)
3. Release clutch 1, engage clutch 2
4. Seamless power transfer
5. Shift time: 100-200 ms!

**Advantages:**
• Fast shifts (faster than manual)
• No power interruption
• High efficiency (98%)
• Automatic or manual mode

**Disadvantages:**
• Complex
• Expensive
• Clutch wear in traffic
• Jerky at low speeds

**Examples:**
• Porsche PDK
• VW DSG
• BMW M DCT

**Continuously Variable Transmission (CVT):**

Infinite gear ratios:
• No fixed gears
• Smooth acceleration
• Always at optimal ratio

**Belt/Chain CVT:**

Two variable pulleys:
• Primary (input)
• Secondary (output)
• Belt or chain connects
• Pulley width changes ratio

Ratio range: 6:1 to 7:1 typical

**Advantages:**
• Smooth operation
• Optimal engine RPM
• Good fuel economy
• Simple concept

**Disadvantages:**
• Limited torque capacity
• "Rubber band" feel
• Less engaging
• Efficiency: 88-93%

**Power Split (Hybrid):**

Used in Toyota/Lexus hybrids:
• Planetary gearset
• Engine + 2 motors
• Continuously variable
• No clutches or belts

**Advantages:**
• Very efficient
• Smooth operation
• High torque capacity
• Enables hybrid operation

**Example: Toyota Prius**
• Engine: 72 kW
• Motor 1: 53 kW
• Motor 2: 5 kW (generator)
• Combined: 90 kW
• Efficiency: 97%`
      },
      {
        title: "Transmission Efficiency & Losses",
        content: `**Efficiency Comparison:**

**Manual:** 95-97%
• Gear mesh losses: 1-2%
• Bearing friction: 1-2%
• Oil churning: 0.5-1%

**DCT:** 94-96%
• Similar to manual
• Dual clutch losses
• Hydraulic pump

**Automatic (Torque Converter):** 88-92%
• Torque converter slip: 3-5%
• Planetary gears: 2-3%
• Hydraulic pump: 2-3%

**CVT:** 88-93%
• Belt/chain friction: 4-6%
• Hydraulic pump: 2-3%
• Clamping force losses: 1-2%

**Power Loss Example:**

200 HP engine:

Manual (96%):
• Output: 192 HP
• Loss: 8 HP

Automatic (90%):
• Output: 180 HP
• Loss: 20 HP

Difference: 12 HP (6%)

**Fuel Economy Impact:**

Highway driving (steady state):
• Manual: 35 mpg
• Automatic: 33 mpg
• Difference: ~6%

City driving (transient):
• Manual: 28 mpg (skilled driver)
• Automatic: 26 mpg
• Modern auto: 27 mpg (more gears)

**Thermal Management:**

Transmission fluid temperature:
• Normal: 80-90°C
• High load: 100-110°C
• Maximum: 120°C

Cooling methods:
• Air cooling (manual)
• Integrated cooler (automatic)
• External cooler (performance)

**Gear Ratio Optimization:**

**Close-Ratio (Performance):**
• Small steps between gears
• Keep engine in power band
• Better acceleration
• Example: 1st: 3.5, 2nd: 2.5, 3rd: 1.8

**Wide-Ratio (Economy):**
• Large steps between gears
• Lower engine RPM at cruise
• Better fuel economy
• Example: 1st: 4.0, 2nd: 2.2, 3rd: 1.4

**Overdrive:**

Gear ratio < 1.0:
• Engine RPM < wheel RPM
• Reduces cruise RPM
• Improves fuel economy
• Typical 6th gear: 0.7:1

Example at 120 km/h:
• Without overdrive: 3,500 RPM
• With overdrive: 2,450 RPM
• 30% RPM reduction
• 15-20% fuel savings`
      }
    ],
    
    keyTakeaways: [
      "Gear ratio multiplies torque: τ_out = τ_in × i × η",
      "Manual transmissions: 95-97% efficient, driver control",
      "Automatics: 88-92% efficient, convenience, more gears",
      "DCT combines manual efficiency with automatic convenience",
      "CVT provides infinite ratios but limited torque capacity",
      "Overdrive gears (ratio < 1.0) reduce cruise RPM for efficiency"
    ],
    
    vocabulary: [
      { term: "Gear Ratio", definition: "Ratio of output to input rotational speed" },
      { term: "Final Drive", definition: "Differential gear ratio; final reduction before wheels" },
      { term: "Torque Converter", definition: "Fluid coupling in automatic transmissions" },
      { term: "Dual-Clutch (DCT)", definition: "Two clutches for fast, seamless shifts" },
      { term: "CVT", definition: "Continuously Variable Transmission; infinite gear ratios" },
      { term: "Overdrive", definition: "Gear ratio less than 1:1 for reduced cruise RPM" }
    ]
  }
];

export default carsUnit2Complete;
