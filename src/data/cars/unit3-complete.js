// Unit 3: Chassis & Structures - Complete (5 lessons)
// Vehicle architecture, suspension, brakes, aerodynamics

export const carsUnit3Complete = [
  {
    id: 12,
    title: "Vehicle Architecture & Platforms",
    unit: "Chassis & Structures",
    duration: "25 min",
    introduction: "Vehicle architecture defines the fundamental layout and structure. Understanding platforms, body styles, and structural design is crucial for automotive engineering.",
    
    sections: [
      {
        title: "Body-on-Frame vs Unibody",
        content: `**Body-on-Frame:**

Separate frame and body:
• Ladder frame or perimeter frame
• Body bolted to frame
• Used in trucks, SUVs

**Advantages:**
• High strength
• Easy to repair
• Modular design
• Off-road capability
• Towing capacity

**Disadvantages:**
• Heavy (200-300 kg extra)
• Higher center of gravity
• Less efficient packaging
• Worse handling

**Examples:**
• Ford F-150
• Toyota Land Cruiser
• Jeep Wrangler

**Unibody (Monocoque):**

Integrated structure:
• Body IS the structure
• No separate frame
• Used in most cars

**Advantages:**
• Lighter weight
• Lower center of gravity
• Better handling
• More interior space
• Better crash performance

**Disadvantages:**
• More complex to repair
• Less modular
• Lower towing capacity

**Examples:**
• Honda Civic
• BMW 3-Series
• Tesla Model 3

**Structural Stiffness:**

Torsional rigidity:
• Resistance to twisting
• Measured in N·m/degree
• Critical for handling

Typical values:
• Economy car: 8,000-12,000 N·m/°
• Sports car: 15,000-25,000 N·m/°
• Supercar: 30,000-50,000 N·m/°

**Example: Porsche 911**
• Torsional rigidity: 37,000 N·m/°
• Aluminum/steel hybrid
• Weight: 1,515 kg
• Excellent handling`
      },
      {
        title: "Crash Safety & Crumple Zones",
        content: `**Crash Energy Management:**

Kinetic energy to dissipate:
E = ½mv²

Example: 1,500 kg at 50 km/h (13.9 m/s)
E = ½ × 1,500 × 13.9²
E = 145,000 J = 145 kJ

**Crumple Zones:**

Designed to deform:
• Front and rear zones
• Absorb impact energy
• Protect passenger cell

Energy absorbed:
E = F × d

Where:
• F = average crush force
• d = crush distance

Target: 50-70g peak deceleration

**Example Calculation:**

Crash at 50 km/h:
• Crush distance: 0.6 m
• Mass: 1,500 kg
• Energy: 145 kJ

F = E / d = 145,000 / 0.6
F = 242,000 N

Deceleration:
a = F / m = 242,000 / 1,500
a = 161 m/s² = 16.4g

**Safety Cell:**

Rigid passenger compartment:
• High-strength steel
• Reinforced pillars
• Side impact beams
• Roll-over protection

**Airbag Deployment:**

Crash sensors detect impact:
• Accelerometers
• Trigger at 15-25g
• Deploy in 20-30 ms
• Inflate at 300 km/h!

**NCAP Ratings:**

5-star safety rating tests:
• Frontal impact (64 km/h)
• Side impact (50 km/h)
• Pole test (32 km/h)
• Rollover resistance

**Modern Safety Features:**
• Pre-tensioners (seatbelts)
• Load limiters
• Multiple airbags (6-10)
• Pedestrian protection
• Automatic emergency braking`
      },
      {
        title: "Materials & Weight Reduction",
        content: `**Material Properties:**

**Steel (Most Common):**
• Density: 7,850 kg/m³
• Strength: 200-1,500 MPa
• Cost: Low
• Formability: Excellent
• Typical use: 55-70% of vehicle

**High-Strength Steel (HSS):**
• Strength: 400-800 MPa
• Same weight, stronger
• Enables thinner sections
• 20-30% weight savings

**Aluminum:**
• Density: 2,700 kg/m³ (65% lighter)
• Strength: 200-600 MPa
• Cost: 2-3× steel
• Typical use: 5-15% of vehicle

**Example: Aluminum Hood**
• Steel hood: 15 kg
• Aluminum hood: 8 kg
• Savings: 7 kg (47%)
• Cost increase: $50-100

**Carbon Fiber:**
• Density: 1,600 kg/m³
• Strength: 600-3,500 MPa
• Cost: 10-20× steel
• Used in supercars

**Example: BMW i3**
• Carbon fiber passenger cell
• Weight: 1,195 kg (very light for EV)
• Cost: Expensive

**Weight Distribution:**

Typical vehicle (1,500 kg):
• Body structure: 300 kg (20%)
• Powertrain: 250 kg (17%)
• Chassis: 200 kg (13%)
• Interior: 150 kg (10%)
• Electrical: 100 kg (7%)
• Fluids: 100 kg (7%)
• Other: 400 kg (26%)

**Weight Reduction Benefits:**

10% weight reduction:
• 6-8% fuel economy improvement
• Better acceleration
• Better braking
• Better handling
• Lower emissions

**Example: 150 kg reduction**
• Original: 1,500 kg
• New: 1,350 kg (10% lighter)
• Fuel economy: 30 → 32 mpg
• 0-60 time: 7.0 → 6.5 sec`
      }
    ],
    
    keyTakeaways: [
      "Unibody: lighter, better handling; Body-on-frame: stronger, better for trucks",
      "Torsional rigidity critical for handling; sports cars: 15,000-25,000 N·m/°",
      "Crash energy: E = ½mv²; crumple zones absorb energy over distance",
      "Aluminum 65% lighter than steel; carbon fiber 80% lighter",
      "10% weight reduction → 6-8% fuel economy improvement",
      "Modern safety: crumple zones + rigid cell + airbags + active systems"
    ],
    
    vocabulary: [
      { term: "Unibody", definition: "Integrated body-frame structure; lighter, better handling" },
      { term: "Torsional Rigidity", definition: "Resistance to twisting; measured in N·m/degree" },
      { term: "Crumple Zone", definition: "Designed to deform and absorb crash energy" },
      { term: "High-Strength Steel", definition: "Steel with 400-800 MPa strength; enables weight reduction" },
      { term: "Specific Strength", definition: "Strength-to-weight ratio; key material property" },
      { term: "NCAP", definition: "New Car Assessment Program; crash safety ratings" }
    ]
  }
];

export default carsUnit3Complete;
