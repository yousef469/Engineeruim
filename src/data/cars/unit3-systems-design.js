// Unit 3: Systems & Design - Complete (5 lessons)
// Lessons 15-19: Architecture, suspension, safety, electronics, future

export const carsUnit3SystemsDesign = [
  {
    id: 15,
    title: "Vehicle Architecture & Design",
    unit: "Systems & Design",
    duration: "25 min",
    introduction: "Vehicle architecture determines packaging, performance, and safety. Understanding design principles is essential for automotive engineering.",
    
    sections: [
      {
        title: "Platform Architecture",
        content: `**Body-on-Frame:**

Separate frame and body:
• Frame carries loads
• Body bolted to frame
• Traditional construction

Used in:
• Trucks (F-150, Silverado)
• SUVs (Tahoe, 4Runner)
• Off-road vehicles

Advantages:
• Strong and durable
• Easy to repair
• Good for towing
• Off-road capability

Disadvantages:
• Heavy (200-300 kg extra)
• Higher center of gravity
• Less efficient
• Worse handling

**Unibody (Monocoque):**

Integrated frame and body:
• Body is structure
• Lighter weight
• Modern construction

Used in:
• Most cars
• Crossovers
• Modern SUVs

Advantages:
• Lighter (15-20% less weight)
• Lower center of gravity
• Better handling
• More efficient
• Better crash safety

Disadvantages:
• More expensive to repair
• Less suitable for heavy towing

**Example: Weight Comparison**

Ford F-150 (body-on-frame):
• Curb weight: 2,100 kg
• Frame: ~300 kg

Ford Explorer (unibody):
• Curb weight: 2,050 kg
• Similar size, 50 kg lighter!`
      },
      {
        title: "Weight Distribution",
        content: `**Front/Rear Balance:**

Ideal: 50/50 distribution
• Best handling
• Balanced braking
• Neutral steering

**Typical Distributions:**

FWD economy car:
• Front: 63%
• Rear: 37%
• Understeer tendency

RWD sports car:
• Front: 52%
• Rear: 48%
• Near-perfect balance

Mid-engine supercar:
• Front: 42%
• Rear: 58%
• Excellent handling

**Center of Gravity (CG):**

Height affects:
• Body roll in corners
• Weight transfer
• Rollover risk

Typical CG heights:
• Sports car: 0.45-0.50 m
• Sedan: 0.50-0.55 m
• SUV: 0.60-0.70 m
• Truck: 0.70-0.80 m

**Rollover Risk:**

Static Stability Factor (SSF):
SSF = Track Width / (2 × CG Height)

Example: SUV
• Track: 1.6 m
• CG height: 0.70 m
• SSF = 1.6 / (2 × 0.70) = 1.14

SSF < 1.0: High rollover risk
SSF > 1.2: Low rollover risk

Sports car:
• Track: 1.5 m
• CG height: 0.48 m
• SSF = 1.5 / (2 × 0.48) = 1.56
• Much safer!`
      },
      {
        title: "Packaging & Ergonomics",
        content: `**Interior Space:**

Key dimensions:
• Headroom: 950-1,000 mm
• Legroom: 1,000-1,100 mm
• Shoulder room: 1,400-1,500 mm
• Hip room: 1,300-1,400 mm

**Seating Position:**

H-point (hip point):
• Reference for seat position
• Affects visibility
• Determines pedal placement

Seat height from ground:
• Sports car: 300-350 mm
• Sedan: 400-450 mm
• SUV: 600-700 mm

**Visibility:**

A-pillar angle:
• Steep: better visibility
• Shallow: sleeker design
• Trade-off: style vs safety

Blind spots:
• Minimize with design
• Cameras and sensors help
• Critical for safety

**Cargo Space:**

Sedan trunk: 400-500 L
Hatchback: 300-400 L (seats up)
           1,000-1,200 L (seats down)
SUV: 500-800 L (seats up)
     1,500-2,000 L (seats down)

**Example: Tesla Model 3**

Dimensions:
• Length: 4,694 mm
• Width: 1,849 mm
• Height: 1,443 mm
• Wheelbase: 2,875 mm

Interior:
• Front headroom: 1,027 mm
• Front legroom: 1,063 mm
• Rear legroom: 960 mm
• Cargo: 425 L (+ 88 L frunk!)

Efficient packaging due to:
• No transmission tunnel
• Flat floor
• Battery in floor
• Front trunk (frunk)`
      }
    ],
    
    keyTakeaways: [
      "Unibody construction: lighter (15-20%), better handling, modern standard",
      "Body-on-frame: stronger for towing, used in trucks and off-road vehicles",
      "Ideal weight distribution: 50/50 front/rear for best handling",
      "Static Stability Factor: SSF = Track/(2×CG Height); >1.2 is safe",
      "Lower CG improves handling and reduces rollover risk",
      "EV packaging advantages: flat floor, no transmission tunnel, frunk"
    ],
    
    vocabulary: [
      { term: "Unibody", definition: "Integrated frame and body construction; lighter and stiffer" },
      { term: "Body-on-Frame", definition: "Separate frame and body; traditional truck construction" },
      { term: "Center of Gravity", definition: "Point where weight is balanced; affects handling" },
      { term: "SSF", definition: "Static Stability Factor; measures rollover resistance" },
      { term: "H-Point", definition: "Hip point; reference for seating position" }
    ]
  },

  {
    id: 16,
    title: "Suspension Design & Tuning",
    unit: "Systems & Design",
    duration: "30 min",
    introduction: "Suspension systems control wheel motion, providing comfort and handling. Understanding suspension geometry is critical for vehicle dynamics.",
    
    sections: [
      {
        title: "Suspension Types",
        content: `**MacPherson Strut:**

Design:
• Strut combines spring and damper
• Lower control arm
• Simple and compact

Advantages:
• Low cost
• Lightweight
• Compact (good for FWD)
• Easy to package

Disadvantages:
• Geometry changes with travel
• More tire wear
• Less tuning flexibility

Used in:
• Most economy cars
• Many sports cars (front)

**Double Wishbone:**

Design:
• Upper and lower control arms
• Separate spring and damper
• Complex geometry

Advantages:
• Excellent geometry control
• Minimal camber change
• Best handling
• Highly tunable

Disadvantages:
• Expensive
• Heavy
• Takes more space

Used in:
• Sports cars
• Luxury cars
• Race cars

**Multi-Link:**

Design:
• 3-5 separate links
• Maximum control
• Most complex

Advantages:
• Best geometry
• Independent tuning
• Excellent ride and handling

Disadvantages:
• Most expensive
• Heaviest
• Complex

Used in:
• Luxury cars (rear)
• High-performance cars

**Solid Axle:**

Design:
• Wheels connected
• Simple and strong

Advantages:
• Very strong
• Good for off-road
• Low cost

Disadvantages:
• Poor handling
• Harsh ride
• Heavy unsprung weight

Used in:
• Trucks (rear)
• Off-road vehicles`
      },
      {
        title: "Spring & Damper Tuning",
        content: `**Spring Rate:**

Force per displacement:
F = k × x

Where:
• k = spring rate (N/m)
• x = displacement (m)

**Natural Frequency:**

f_n = (1/2π) × √(k/m)

Target frequencies:
• Comfort: 1.0-1.2 Hz
• Sport: 1.3-1.5 Hz
• Race: 1.8-2.5 Hz

**Example: Sports Car**

Sprung mass (corner): 400 kg
Target frequency: 1.4 Hz

Required spring rate:
k = (2πf_n)² × m
k = (2π × 1.4)² × 400
k = 30,900 N/m ≈ 31 kN/m

**Damping:**

Damping force:
F_d = c × v

Where:
• c = damping coefficient
• v = velocity

Critical damping:
c_c = 2√(km)

Damping ratio:
ζ = c / c_c

Typical values:
• Comfort: ζ = 0.25-0.30
• Sport: ζ = 0.35-0.45
• Race: ζ = 0.50-0.70

**Example Calculation:**

For k = 31 kN/m, m = 400 kg:
c_c = 2√(31,000 × 400) = 7,040 N·s/m

For sport setup (ζ = 0.40):
c = 0.40 × 7,040 = 2,816 N·s/m

**Compression vs Rebound:**

Rebound typically 2-3× compression:
• Compression: 1,000 N·s/m
• Rebound: 2,500 N·s/m

Why? Prevents bouncing after bumps`
      },
      {
        title: "Suspension Geometry",
        content: `**Camber:**

Wheel tilt from vertical:
• Negative: top tilts in
• Positive: top tilts out

Static camber:
• Economy: 0° to -0.5°
• Sport: -1.0° to -2.0°
• Race: -2.5° to -4.0°

Benefits of negative camber:
• Better cornering grip
• More even tire wear in corners
• Compensates for body roll

**Caster:**

Steering axis tilt (front-back):
• Positive: axis tilts back
• Typical: 3-7°

Effects:
• Self-centering steering
• Stability at speed
• Camber gain in turns

**Toe:**

Wheel direction (top view):
• Toe-in: fronts point together
• Toe-out: fronts point apart

Typical settings:
• Front: 0° to 0.1° toe-in
• Rear: 0.1° to 0.2° toe-in

Effects:
• Toe-in: stability
• Toe-out: responsiveness
• Too much: tire wear

**Roll Center:**

Point about which body rolls:
• Height affects roll stiffness
• Lower: more roll
• Higher: less roll, but worse

Typical heights:
• Front: 50-150 mm
• Rear: 100-200 mm

**Anti-Dive/Anti-Squat:**

Geometry to resist pitch:
• Anti-dive: reduces nose dive under braking
• Anti-squat: reduces squat under acceleration
• Typical: 20-40%

Too much: harsh ride
Too little: excessive pitch`
      }
    ],
    
    keyTakeaways: [
      "Double wishbone: best geometry control, used in sports cars",
      "MacPherson strut: simple and compact, used in economy cars",
      "Natural frequency: f_n = (1/2π)√(k/m); sport cars 1.3-1.5 Hz",
      "Damping ratio: ζ = c/c_c; sport 0.35-0.45, race 0.50-0.70",
      "Negative camber improves cornering grip; sport -1° to -2°",
      "Rebound damping typically 2-3× compression damping"
    ],
    
    vocabulary: [
      { term: "MacPherson Strut", definition: "Simple suspension with combined spring/damper strut" },
      { term: "Double Wishbone", definition: "Suspension with upper and lower control arms" },
      { term: "Camber", definition: "Wheel tilt from vertical; negative = top tilts in" },
      { term: "Damping Ratio", definition: "ζ = c/c_c; ratio of actual to critical damping" },
      { term: "Roll Center", definition: "Point about which vehicle body rolls in corners" }
    ]
  },

  {
    id: 17,
    title: "Safety Systems & Crashworthiness",
    unit: "Systems & Design",
    duration: "25 min",
    introduction: "Vehicle safety is paramount. Understanding crash dynamics and safety systems is essential for protecting occupants.",
    
    sections: [
      {
        title: "Crash Dynamics",
        content: `**Kinetic Energy:**

E_k = ½mv²

Example: 1,500 kg car at 50 km/h (13.9 m/s)
E_k = ½ × 1,500 × 13.9² = 145 kJ

This energy must be absorbed!

**Deceleration:**

Average deceleration:
a = v² / (2d)

If crumple zone: d = 0.6 m
a = 13.9² / (2 × 0.6) = 161 m/s² = 16.4g

Peak can be 40-60g!

**Force on Occupant:**

F = ma

For 75 kg occupant at 16.4g:
F = 75 × 161 = 12,075 N

Without restraints: FATAL
With seatbelt: survivable

**Crash Test Speeds:**

NCAP frontal: 56 km/h (35 mph)
• Into rigid barrier
• Simulates head-on collision
• 100% overlap

IIHS small overlap: 64 km/h (40 mph)
• 25% overlap
• More severe
• Tests structure

Side impact: 50 km/h (31 mph)
• Moving barrier
• Simulates T-bone
• Critical for occupant protection`
      },
      {
        title: "Passive Safety Systems",
        content: `**Crumple Zones:**

Design:
• Front and rear structures
• Controlled deformation
• Absorbs energy

Energy absorption:
E = F × d

Target: Extend deformation distance
• Reduces peak force
• Protects occupants

Typical crumple zone: 0.5-0.8 m

**Safety Cell:**

Rigid passenger compartment:
• High-strength steel
• Reinforced pillars
• Protects occupants

Must NOT deform in crash!

**Seatbelts:**

3-point belt:
• Invented by Volvo (1959)
• Distributes force
• Prevents ejection

Force limiting:
• Allows controlled stretch
• Reduces chest load
• Typical: 4-6 kN limit

Pretensioners:
• Tightens belt in crash
• Removes slack
• Improves effectiveness

**Airbags:**

Deployment:
• Crash sensor detects impact
• Inflates in 20-30 ms
• Cushions occupant

Types:
• Frontal (driver, passenger)
• Side (torso, head)
• Curtain (rollover)
• Knee (lower leg)

Modern cars: 6-10 airbags!

**Example: Crash Sequence**

t = 0 ms: Impact begins
t = 10 ms: Sensors detect crash
t = 15 ms: Pretensioners fire
t = 25 ms: Airbags deploy
t = 50 ms: Occupant contacts airbag
t = 100 ms: Maximum deformation
t = 150 ms: Crash ends

Total time: 0.15 seconds!`
      },
      {
        title: "Active Safety Systems",
        content: `**Anti-Lock Braking (ABS):**

Prevents wheel lockup:
• Maintains steering control
• Optimizes braking
• Essential safety feature

Effectiveness:
• 35% reduction in crashes
• Especially wet/slippery roads

**Electronic Stability Control (ESC):**

Prevents skidding:
• Monitors yaw rate
• Detects oversteer/understeer
• Applies individual brakes
• Reduces engine power

Effectiveness:
• 50% reduction in fatal single-vehicle crashes
• 20% reduction in all crashes
• Mandatory since 2012 (US)

**Traction Control:**

Prevents wheel spin:
• Monitors wheel speeds
• Reduces engine power
• Applies brakes
• Improves acceleration

**Automatic Emergency Braking (AEB):**

Prevents/mitigates crashes:
• Radar or camera detects obstacle
• Warns driver
• Applies brakes automatically

Effectiveness:
• 50% reduction in rear-end crashes
• 56% reduction in injuries

**Lane Keeping Assist:**

Prevents lane departure:
• Camera detects lane lines
• Warns driver
• Applies steering torque

**Adaptive Cruise Control:**

Maintains safe following distance:
• Radar measures distance
• Adjusts speed automatically
• Reduces driver fatigue

**Example: ESC Intervention**

Scenario: Oversteer in corner
1. Yaw rate sensor detects rotation
2. ESC calculates error
3. Applies outside front brake
4. Reduces engine power
5. Vehicle stabilizes

Time: 100-200 ms
Driver barely notices!`
      }
    ],
    
    keyTakeaways: [
      "Crash energy: E = ½mv²; must be absorbed by crumple zones",
      "Crumple zones extend deformation distance, reducing peak force",
      "Seatbelts and airbags work together; deploy in 20-30 ms",
      "ESC reduces fatal single-vehicle crashes by 50%",
      "AEB reduces rear-end crashes by 50%",
      "Active safety prevents crashes; passive safety protects in crashes"
    ],
    
    vocabulary: [
      { term: "Crumple Zone", definition: "Structure designed to deform and absorb crash energy" },
      { term: "Safety Cell", definition: "Rigid passenger compartment that must not deform" },
      { term: "ESC", definition: "Electronic Stability Control; prevents skidding" },
      { term: "AEB", definition: "Automatic Emergency Braking; prevents/mitigates crashes" },
      { term: "Pretensioner", definition: "Device that tightens seatbelt in crash" }
    ]
  },

  {
    id: 18,
    title: "Electronics & Control Systems",
    unit: "Systems & Design",
    duration: "25 min",
    introduction: "Modern vehicles are computers on wheels. Understanding automotive electronics and control systems is essential for contemporary engineering.",
    
    sections: [
      {
        title: "Electronic Architecture",
        content: `**Controller Area Network (CAN Bus):**

Communication protocol:
• Connects all ECUs
• High-speed: 500 kbps - 1 Mbps
• Low-speed: 125 kbps
• Fault-tolerant

Advantages:
• Reduces wiring (50+ kg savings)
• Enables complex features
• Easier diagnostics

**Electronic Control Units (ECUs):**

Modern car: 50-100 ECUs!

Major ECUs:
• Engine Control Module (ECM)
• Transmission Control Module (TCM)
• Body Control Module (BCM)
• ABS/ESC Controller
• Airbag Controller
• Infotainment System

**Example: Engine Control**

Inputs (sensors):
• Throttle position
• Mass airflow
• Oxygen sensors (2-4)
• Coolant temperature
• Crankshaft position
• Camshaft position

Processing:
• Calculate optimal fuel injection
• Adjust ignition timing
• Control variable valve timing
• Manage emissions

Outputs (actuators):
• Fuel injectors
• Ignition coils
• VVT solenoids
• Throttle body

Update rate: 100-1000 Hz!

**Software:**

Lines of code:
• Economy car: 10 million
• Luxury car: 100 million
• More than F-35 fighter jet!

Complexity challenges:
• Safety-critical
• Real-time requirements
• Cybersecurity
• Over-the-air updates`
      },
      {
        title: "Sensors & Actuators",
        content: `**Key Sensors:**

**1. Wheel Speed Sensors:**
• Hall effect or inductive
• Measures wheel rotation
• Used by ABS, ESC, speedometer
• 4 sensors (one per wheel)

**2. Accelerometers:**
• Measures acceleration
• 3-axis (x, y, z)
• Used by airbags, ESC
• MEMS technology

**3. Yaw Rate Sensor:**
• Measures rotation rate
• Critical for ESC
• Gyroscope-based
• ±100°/s range

**4. Radar:**
• Measures distance and speed
• Used by ACC, AEB
• 77 GHz frequency
• Range: 200+ meters

**5. Cameras:**
• Lane detection
• Traffic sign recognition
• Pedestrian detection
• 1-8 cameras per vehicle

**6. Lidar:**
• Laser-based distance measurement
• High accuracy
• Expensive ($1,000-$10,000)
• Used in autonomous vehicles

**Actuators:**

**1. Electric Motors:**
• Throttle control
• Steering assist
• Active suspension
• Power: 10-1000 W

**2. Solenoids:**
• Valve control
• Transmission shifts
• Fuel injection
• Fast response (<10 ms)

**3. Piezoelectric:**
• Fuel injectors
• Active suspension
• Very fast (<1 ms)
• Precise control`
      },
      {
        title: "Advanced Driver Assistance (ADAS)",
        content: `**Levels of Automation:**

**Level 0: No Automation**
• Driver does everything
• Warnings only

**Level 1: Driver Assistance**
• Adaptive cruise control OR
• Lane keeping assist
• Driver monitors

**Level 2: Partial Automation**
• ACC AND lane keeping
• Driver must monitor
• Hands on wheel
• Tesla Autopilot, GM Super Cruise

**Level 3: Conditional Automation**
• System drives in certain conditions
• Driver must be ready to take over
• Hands off, eyes off (sometimes)
• Audi Traffic Jam Pilot

**Level 4: High Automation**
• System drives in most conditions
• No driver intervention needed
• Limited geographic area
• Waymo, Cruise robotaxis

**Level 5: Full Automation**
• System drives everywhere
• No steering wheel needed
• Not yet available

**Sensor Fusion:**

Combines multiple sensors:
• Radar: distance, speed
• Camera: classification, lanes
• Lidar: precise 3D map
• Ultrasonic: close range

Benefits:
• Redundancy (safety)
• Better accuracy
• Handles edge cases

**Example: Tesla Autopilot**

Sensors:
• 8 cameras (360° view)
• 12 ultrasonic sensors
• Radar (forward)
• GPS

Processing:
• Neural networks
• Real-time object detection
• Path planning
• Control algorithms

Compute:
• Custom AI chip
• 144 TOPS (trillion operations/sec)
• 2,000 W power consumption

Capabilities:
• Highway driving
• Lane changes
• Navigate on Autopilot
• Summon (parking lot)

Limitations:
• Requires driver attention
• Not fully autonomous
• Struggles in complex scenarios`
      }
    ],
    
    keyTakeaways: [
      "CAN bus connects 50-100 ECUs; reduces wiring by 50+ kg",
      "Modern cars have 10-100 million lines of code",
      "Sensor fusion combines radar, camera, lidar for redundancy",
      "Level 2 automation: ACC + lane keeping; driver must monitor",
      "ADAS sensors: wheel speed, accelerometer, yaw rate, radar, camera",
      "ECUs update at 100-1000 Hz for real-time control"
    ],
    
    vocabulary: [
      { term: "CAN Bus", definition: "Controller Area Network; communication protocol for ECUs" },
      { term: "ECU", definition: "Electronic Control Unit; computer controlling vehicle systems" },
      { term: "Sensor Fusion", definition: "Combining multiple sensors for better accuracy" },
      { term: "ADAS", definition: "Advanced Driver Assistance Systems; Level 1-2 automation" },
      { term: "Lidar", definition: "Light Detection and Ranging; laser-based distance measurement" }
    ]
  },

  {
    id: 19,
    title: "Future of Automotive Engineering",
    unit: "Systems & Design",
    duration: "25 min",
    introduction: "The automotive industry is undergoing massive transformation. Understanding future trends is essential for next-generation engineers.",
    
    sections: [
      {
        title: "Electrification Trends",
        content: `**Market Transition:**

Global EV sales:
• 2020: 3 million (4% of market)
• 2023: 14 million (18% of market)
• 2030 projection: 40-50 million (40-50%)

**Battery Technology:**

Current (2024):
• Energy density: 250-300 Wh/kg (cell)
• Cost: $100-130/kWh
• Charging: 250 kW peak

Near future (2027):
• Energy density: 350-400 Wh/kg
• Cost: $70-90/kWh
• Charging: 350-500 kW
• 10-80% in 15 minutes

Future (2030+):
• Solid-state batteries
• Energy density: 500+ Wh/kg
• Cost: $50-70/kWh
• Safer, faster charging

**Impact:**

Range:
• Current: 400-600 km
• Future: 800-1,000 km
• Eliminates range anxiety

Cost:
• Current: EVs 20-30% more expensive
• 2027: Price parity with ICE
• 2030: EVs cheaper than ICE

**Charging Infrastructure:**

Current:
• 2 million public chargers globally
• Uneven distribution
• Compatibility issues

Future:
• 10+ million chargers by 2030
• Standardized connectors
• Wireless charging
• Battery swapping (some markets)`
      },
      {
        title: "Autonomous Vehicles",
        content: `**Technology Progress:**

Current state:
• Level 2 widely available
• Level 3 limited deployment
• Level 4 in geofenced areas
• Level 5 not yet achieved

Challenges:
• Edge cases (unusual scenarios)
• Weather conditions
• Regulatory approval
• Public acceptance
• Liability questions

**Sensor Costs:**

Current:
• Lidar: $1,000-10,000
• Radar: $100-300
• Camera: $50-200
• Total system: $5,000-30,000

Future (2030):
• Lidar: $100-500
• Solid-state lidar
• Higher resolution
• More reliable

**Computing Power:**

Current:
• 100-300 TOPS
• 500-2,000 W
• Custom AI chips

Future:
• 1,000+ TOPS
• More efficient
• Lower cost
• Edge computing

**Timeline Predictions:**

2025-2027:
• Level 3 in more vehicles
• Highway automation common
• Parking automation standard

2028-2030:
• Level 4 in urban areas
• Robotaxi services expand
• Reduced private ownership

2030+:
• Level 5 in some areas
• Significant safety improvement
• Transportation transformation`
      },
      {
        title: "Sustainable Materials & Manufacturing",
        content: `**Lightweight Materials:**

**Carbon Fiber:**
• 50% lighter than steel
• Higher strength
• Current: $15-30/kg
• Future: $5-10/kg (mass production)

Applications:
• Body panels
• Chassis components
• Interior structure

**Aluminum:**
• 40% lighter than steel
• Good formability
• Widely used today
• Recycling: 95% energy savings

**Advanced High-Strength Steel:**
• 20-30% lighter (thinner sections)
• Lower cost than aluminum
• Good crash performance
• Increasing adoption

**Sustainable Manufacturing:**

**Energy:**
• Solar/wind powered factories
• Carbon-neutral production
• Tesla Gigafactory: 100% renewable

**Recycling:**
• Battery recycling: 90%+ recovery
• Aluminum: 95% recycled
• Steel: 85% recycled
• Plastics: improving

**Circular Economy:**

Design for:
• Disassembly
• Remanufacturing
• Recycling
• Minimal waste

**Example: BMW i3**

Materials:
• Carbon fiber body
• Recycled plastics (25%)
• Renewable materials
• Eucalyptus wood interior

Manufacturing:
• 50% renewable energy
• Water-based paints
• Minimal waste

Result:
• 40% lower carbon footprint
• Fully recyclable

**Future Vision:**

2030 goals:
• Carbon-neutral manufacturing
• 50% recycled materials
• Zero waste to landfill
• Circular economy

Impact:
• 50% reduction in embodied carbon
• Lower environmental impact
• Sustainable transportation`
      }
    ],
    
    keyTakeaways: [
      "EV market share: 18% (2023) → 40-50% (2030 projection)",
      "Battery costs: $100-130/kWh (2024) → $50-70/kWh (2030)",
      "Solid-state batteries: 500+ Wh/kg, safer, faster charging",
      "Level 4 autonomy expanding in urban areas by 2028-2030",
      "Carbon fiber costs dropping: $15-30/kg → $5-10/kg (mass production)",
      "Sustainable manufacturing: carbon-neutral, 50% recycled materials by 2030"
    ],
    
    vocabulary: [
      { term: "Solid-State Battery", definition: "Battery with solid electrolyte; safer and higher energy density" },
      { term: "Geofenced", definition: "Limited to specific geographic area" },
      { term: "TOPS", definition: "Trillion Operations Per Second; measure of computing power" },
      { term: "Embodied Carbon", definition: "CO2 emissions from manufacturing and materials" },
      { term: "Circular Economy", definition: "System designed for reuse and recycling" }
    ]
  }
];

export default carsUnit3SystemsDesign;
