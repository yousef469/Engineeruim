// Unit 1: Vehicle Dynamics - Complete (4 lessons)
// Lessons 6-9: Forces, acceleration, cornering, braking

export const carsUnit1Complete = [
  {
    id: 6,
    title: "Forces on Vehicles & Traction",
    unit: "Vehicle Dynamics",
    duration: "25 min",
    introduction: "Understanding forces acting on vehicles is fundamental to automotive engineering. Traction limits determine acceleration, braking, and cornering performance.",
    
    sections: [
      {
        title: "Forces Acting on Vehicles",
        content: `**The Three Primary Forces:**

1. **Driving Force (F_drive):**
• From engine through transmission
• Applied at tire contact patch
• Limited by tire traction
• F_drive = Torque × Gear Ratio / Wheel Radius

2. **Drag Force (F_drag):**
• Air resistance
• F_drag = ½ρv²C_D A
• Increases with speed squared
• Dominant at highway speeds

3. **Rolling Resistance (F_rr):**
• Tire deformation
• F_rr = C_rr × mg
• Nearly constant with speed
• Typical C_rr = 0.010-0.015

**Net Force:**
F_net = F_drive - F_drag - F_rr

**Example: Tesla Model 3 at 30 m/s (108 km/h)**

Given:
• Mass: 1,800 kg
• C_D = 0.23 (excellent!)
• A = 2.3 m²
• C_rr = 0.011

Calculate forces:
• Drag: F_drag = ½ × 1.225 × 30² × 0.23 × 2.3 = 291 N
• Rolling: F_rr = 0.011 × 1,800 × 9.81 = 194 N
• Total resistance: 485 N

Power required:
P = F × v = 485 × 30 = 14,550 W = 14.6 kW

At 90% efficiency: 16.2 kW from battery`
      },
      {
        title: "Traction & Friction",
        content: `**Tire-Road Interface:**

Maximum traction force:
F_max = μ × N

Where:
• μ = coefficient of friction
• N = normal force (weight on tire)

**Friction Coefficients:**
• Dry asphalt: μ = 0.8-1.0
• Wet asphalt: μ = 0.5-0.7
• Snow: μ = 0.2-0.3
• Ice: μ = 0.1-0.2

**Weight Distribution:**

Front-wheel drive (FWD):
• 60-65% weight on front
• Good traction in snow
• Understeer tendency

Rear-wheel drive (RWD):
• 50-55% weight on front
• Better balance
• Oversteer tendency

All-wheel drive (AWD):
• Uses all four tires
• Maximum traction
• Best acceleration

**Example: Acceleration Comparison**

RWD Sports Car (60% rear weight):
• Weight: 15,000 N
• Rear weight: 9,000 N
• μ = 0.9
• F_max = 0.9 × 9,000 = 8,100 N
• a_max = 8,100/1,530 = 5.3 m/s² = 0.54g

AWD Sports Car:
• All weight available: 15,000 N
• F_max = 0.9 × 15,000 = 13,500 N
• a_max = 13,500/1,530 = 8.8 m/s² = 0.90g

AWD is 67% better!`
      },
      {
        title: "Weight Transfer",
        content: `**Dynamic Weight Transfer:**

During acceleration:
ΔW_r = (a/g) × (h/L) × W

Where:
• h = center of gravity height
• L = wheelbase
• W = weight

**Example: Muscle Car Acceleration**

Given:
• Weight: 18,000 N
• h = 0.5 m
• L = 2.8 m
• a = 6 m/s² (0.61g)

Weight transfer:
ΔW_r = (6/9.81) × (0.5/2.8) × 18,000
ΔW_r = 1,960 N to rear

Front loses 1,960 N
Rear gains 1,960 N

This is why:
• RWD cars "squat" during acceleration
• Front wheels can lift (wheelie)
• Drag racers use wheelie bars

**During Braking:**

Weight transfers forward:
ΔW_f = (a/g) × (h/L) × W

This is why:
• Front brakes are larger (70% braking)
• Rear brakes smaller (30% braking)
• Prevents rear lockup
• Nose dives during hard braking`
      }
    ],
    
    keyTakeaways: [
      "Three forces: driving force, drag (½ρv²C_D A), rolling resistance (C_rr×mg)",
      "Maximum traction: F_max = μN; limited by tire-road friction",
      "AWD uses all four tires for maximum traction (67% better than RWD)",
      "Weight transfer during acceleration: ΔW = (a/g)×(h/L)×W",
      "Front brakes larger because weight transfers forward during braking",
      "Drag increases with v²; dominates at highway speeds"
    ],
    
    vocabulary: [
      { term: "Traction", definition: "Grip between tire and road; F = μN" },
      { term: "Coefficient of Friction (μ)", definition: "Ratio of friction force to normal force" },
      { term: "Weight Transfer", definition: "Load shift during acceleration or braking" },
      { term: "Rolling Resistance", definition: "Force from tire deformation; C_rr typically 0.010-0.015" },
      { term: "Drag Coefficient (C_D)", definition: "Dimensionless aerodynamic drag measure" }
    ]
  },

  {
    id: 7,
    title: "Acceleration Performance & 0-60 Times",
    unit: "Vehicle Dynamics",
    duration: "25 min",
    introduction: "Acceleration performance is a key metric for vehicles. Understanding the physics of acceleration helps optimize performance and predict 0-60 times.",
    
    sections: [
      {
        title: "Acceleration Limits",
        content: `**Maximum Acceleration:**

Traction-limited:
a_max = μg × (Weight on drive wheels / Total weight)

**Example: Performance Comparison**

Toyota Camry (FWD):
• 65% weight on front
• μ = 0.85
• a_max = 0.85 × 9.81 × 0.65 = 5.4 m/s²
• 0-60 mph time: ~5.0 seconds

Porsche 911 (RWD):
• 60% weight on rear
• μ = 0.95 (performance tires)
• a_max = 0.95 × 9.81 × 0.60 = 5.6 m/s²
• 0-60 mph time: ~3.5 seconds

Tesla Model 3 Performance (AWD):
• 100% weight available
• μ = 0.90
• a_max = 0.90 × 9.81 = 8.8 m/s²
• 0-60 mph time: ~3.1 seconds

**Power-Limited vs Traction-Limited:**

Low speed: Traction-limited
• Can't use full power
• Tires would spin
• Launch control helps

High speed: Power-limited
• Drag increases
• Need more power
• Traction not issue`
      },
      {
        title: "0-60 mph Calculations",
        content: `**Simplified Calculation:**

Assuming constant acceleration:
t = v / a

For 0-60 mph (0-26.8 m/s):
• If a = 5.4 m/s²
• t = 26.8 / 5.4 = 5.0 seconds

**Real-World Factors:**

1. Gear shifts:
• Automatic: 0.2-0.5 s per shift
• Manual: 0.5-1.0 s per shift
• DCT: 0.1-0.2 s per shift

2. Traction control:
• Prevents wheel spin
• Slightly slower but consistent
• Essential for AWD launches

3. Launch control:
• Optimizes engine RPM
• Manages wheel slip
• Can improve time by 0.5-1.0 s

**Example: Dodge Challenger Hellcat**

Specifications:
• Power: 717 HP = 535 kW
• Weight: 2,040 kg
• RWD, 52% rear weight
• Performance tires: μ = 1.0

Traction limit:
• Rear weight: 10,600 N
• F_max = 1.0 × 10,600 = 10,600 N
• a_max = 10,600/2,040 = 5.2 m/s²

0-60 time: 3.6 seconds (with launch control)`
      },
      {
        title: "Launch Techniques",
        content: `**Manual Launch:**

1. Rev engine to optimal RPM (3,000-5,000)
2. Release clutch quickly but smoothly
3. Manage wheel spin with throttle
4. Shift at redline

**Launch Control (Modern):**

Computer manages:
• Engine RPM
• Clutch engagement
• Wheel slip (5-10% optimal)
• Traction control

Benefits:
• Consistent launches
• Protects drivetrain
• Maximizes acceleration
• Anyone can do it

**Drag Racing Techniques:**

1. Burnout:
• Heats tires for grip
• Cleans tire surface
• Increases μ temporarily

2. Two-step launch:
• Builds boost pressure (turbo)
• Optimal RPM at launch
• Violent but effective

3. Wheelie control:
• Too much power = front lifts
• Wastes traction
• Need wheelie bars or control`
      }
    ],
    
    keyTakeaways: [
      "Maximum acceleration limited by tire traction: a_max = μg",
      "AWD uses all four tires, giving 67% better acceleration than RWD",
      "0-60 time ≈ 26.8 m/s / a_max (simplified)",
      "Launch control optimizes RPM and wheel slip for consistent launches",
      "Weight transfer to rear during acceleration improves RWD traction",
      "Power-limited at high speed, traction-limited at low speed"
    ],
    
    vocabulary: [
      { term: "Launch Control", definition: "Computer system optimizing acceleration from standstill" },
      { term: "Wheel Slip", definition: "Difference between tire speed and vehicle speed; 5-10% optimal" },
      { term: "Traction-Limited", definition: "Acceleration limited by tire grip, not engine power" },
      { term: "Power-Limited", definition: "Acceleration limited by engine power, not tire grip" }
    ]
  },

  {
    id: 8,
    title: "Cornering Dynamics & Handling",
    unit: "Vehicle Dynamics",
    duration: "30 min",
    introduction: "Cornering performance determines how fast a vehicle can navigate turns. Understanding lateral dynamics is essential for vehicle design and performance.",
    
    sections: [
      {
        title: "Centripetal Force & Cornering",
        content: `**Physics of Turning:**

Centripetal force required:
F_c = mv²/R

Where:
• m = mass
• v = velocity
• R = turn radius

Provided by tire lateral force:
F_y = μN

**Maximum Cornering Speed:**
v_max = √(μgR)

**Example: 50 m radius turn**

Dry road (μ = 0.9):
• v_max = √(0.9 × 9.81 × 50)
• v_max = 21 m/s = 76 km/h

Wet road (μ = 0.6):
• v_max = √(0.6 × 9.81 × 50)
• v_max = 17 m/s = 62 km/h

22% slower in wet!

**Lateral Acceleration:**

a_y = v²/R = μg

Typical limits:
• Economy car: 0.7-0.8g
• Sports car: 1.0-1.2g
• Race car: 1.5-2.0g
• F1 car: 4-6g!`
      },
      {
        title: "Understeer vs Oversteer",
        content: `**Slip Angle:**

Tire deforms under lateral force:
• Points one direction
• Travels slightly different
• Angle difference = slip angle (α)

Lateral force:
F_y = C_α × α

Where C_α = cornering stiffness

**Understeer (Front slides first):**

Characteristics:
• Turn less than steering input
• Front tires lose grip first
• Safe, predictable
• Most road cars

Causes:
• Front-heavy weight distribution
• Soft front suspension
• Hard rear suspension

Recovery:
• Reduce speed
• Reduce steering angle
• Wait for grip to return

**Oversteer (Rear slides first):**

Characteristics:
• Turn more than steering input
• Rear tires lose grip first
• Exciting, challenging
• Sports cars, RWD

Causes:
• Rear-heavy weight distribution
• Too much throttle (RWD)
• Lift-off oversteer

Recovery:
• Counter-steer
• Add throttle (RWD)
• Requires skill

**Neutral Steer:**
• Balanced
• Rare
• Ideal for racing
• Requires careful setup`
      },
      {
        title: "Suspension & Handling",
        content: `**Suspension Functions:**

1. Support vehicle weight
2. Maintain tire contact
3. Control body motion
4. Provide comfort

**Key Parameters:**

Spring rate (k):
• Force per displacement
• Stiffer = less body roll
• Softer = more comfort
• Typical: 20-40 kN/m

Damping (c):
• Controls oscillation
• Critical damping: ζ = 1.0
• Underdamped: bouncy
• Overdamped: harsh

**Anti-Roll Bars:**

Reduce body roll in corners:
• Connects left and right suspension
• Resists roll motion
• Doesn't affect ride quality
• Adjustable for tuning

**Example: Sports Car Setup**

Front:
• Spring rate: 35 kN/m
• Damping: 3,500 N·s/m
• Anti-roll bar: 25 mm diameter

Rear:
• Spring rate: 40 kN/m (stiffer)
• Damping: 4,000 N·s/m
• Anti-roll bar: 22 mm diameter

Result: Neutral handling balance`
      }
    ],
    
    keyTakeaways: [
      "Centripetal force for turning: F_c = mv²/R; provided by tire lateral force",
      "Maximum cornering speed: v_max = √(μgR); limited by tire grip",
      "Understeer (front slides): safe, predictable; most road cars",
      "Oversteer (rear slides): exciting, requires skill; sports cars",
      "Suspension controls body motion and maintains tire contact",
      "Anti-roll bars reduce body roll without affecting ride quality"
    ],
    
    vocabulary: [
      { term: "Centripetal Force", definition: "Inward force required for circular motion; F = mv²/R" },
      { term: "Slip Angle", definition: "Angle between tire direction and travel direction" },
      { term: "Understeer", definition: "Front tires lose grip first; turn less than steering input" },
      { term: "Oversteer", definition: "Rear tires lose grip first; turn more than steering input" },
      { term: "Anti-Roll Bar", definition: "Connects left/right suspension to reduce body roll" }
    ]
  },

  {
    id: 9,
    title: "Braking Performance & Systems",
    unit: "Vehicle Dynamics",
    duration: "25 min",
    introduction: "Braking is critical for safety. Understanding braking physics and systems helps design effective and safe braking systems.",
    
    sections: [
      {
        title: "Braking Physics",
        content: `**Maximum Braking Force:**

F_brake = μ × mg

Maximum deceleration:
a_max = μg

**Typical Values:**
• Dry road: μ = 0.8-1.0
• a_max = 7.8-9.8 m/s² (0.8-1.0g)

• Wet road: μ = 0.5-0.7
• a_max = 4.9-6.9 m/s² (0.5-0.7g)

**Braking Distance:**

s = v²/(2a)

From 30 m/s (108 km/h):
• Dry (a = 8 m/s²): s = 56 m
• Wet (a = 5 m/s²): s = 90 m

60% longer in wet!

From 40 m/s (144 km/h):
• Dry: s = 100 m
• 78% increase for 33% speed increase!

**Stopping Distance:**

Total = Reaction + Braking

Reaction time: 1.5 seconds typical
• At 30 m/s: 45 m reaction distance
• Plus 56 m braking = 101 m total

At 40 m/s:
• 60 m reaction + 100 m braking = 160 m total`
      },
      {
        title: "Brake Systems",
        content: `**Hydraulic Brakes:**

Pascal's principle:
P = F/A (pressure constant)

Master cylinder:
• Small piston
• Driver applies force
• Creates high pressure

Brake caliper:
• Large piston
• Pressure × Area = Force
• Clamps brake pads

**Force Multiplication:**

If master cylinder area = 5 cm²
And caliper area = 40 cm²

Force multiplication = 40/5 = 8×

Driver applies 500 N
Caliper force = 4,000 N

**Brake Distribution:**

Front: 70% of braking
• Weight transfers forward
• More normal force
• Can brake harder

Rear: 30% of braking
• Less weight
• Prevents lockup
• Stability

**Example: BMW 3 Series**

Front brakes:
• Disc diameter: 340 mm
• Caliper: 4-piston
• Pad area: 80 cm²

Rear brakes:
• Disc diameter: 320 mm
• Caliper: 2-piston
• Pad area: 50 cm²

Front/rear ratio: 1.6:1`
      },
      {
        title: "ABS & Electronic Systems",
        content: `**Anti-Lock Braking System (ABS):**

Prevents wheel lockup:
• Monitors wheel speed
• Detects if wheel locking
• Releases brake pressure
• Pulses 10-15 times/second

Benefits:
• Maintains steering control
• Prevents skidding
• Shorter stopping distance (usually)
• Essential safety feature

**How ABS Works:**

1. Wheel speed sensors (4 wheels)
2. Compare wheel speeds
3. If one wheel slowing too fast: LOCKUP!
4. Release brake pressure
5. Wheel speeds up
6. Reapply pressure
7. Repeat 10-15 Hz

**Electronic Brake Distribution (EBD):**

Optimizes front/rear balance:
• Adjusts based on load
• Prevents rear lockup
• Works with ABS
• Improves stability

**Brake Assist:**

Detects emergency braking:
• Rapid pedal application
• Applies maximum pressure
• Reduces stopping distance
• Helps in panic situations

**Example: Emergency Stop**

Without ABS:
• Wheels lock
• Skid on road
• No steering control
• Distance: 60 m

With ABS:
• Wheels don't lock
• Can steer around obstacle
• Distance: 56 m (slightly better)
• Much safer!`
      }
    ],
    
    keyTakeaways: [
      "Braking distance: s = v²/(2μg); increases with v²",
      "Maximum deceleration limited by tire friction: a_max = μg",
      "Front brakes provide 70% of braking due to weight transfer",
      "ABS prevents wheel lockup, maintains steering control",
      "Stopping distance = reaction distance + braking distance",
      "Wet roads increase braking distance by 60%+"
    ],
    
    vocabulary: [
      { term: "ABS", definition: "Anti-lock Braking System; prevents wheel lockup" },
      { term: "Brake Distribution", definition: "Split of braking force between front and rear" },
      { term: "Stopping Distance", definition: "Total distance including reaction time" },
      { term: "Brake Assist", definition: "System that applies maximum pressure in emergencies" }
    ]
  }
];

export default carsUnit1Complete;
