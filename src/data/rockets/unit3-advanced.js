// Unit 3: Orbital Mechanics - Advanced Topics
// Lessons 22-25: Interplanetary, launch windows, reentry

export const unit3AdvancedLessons = [
  {
    id: 22,
    title: "Launch Windows & Timing",
    unit: "Orbital Mechanics",
    duration: "25 min",
    introduction: "Launch windows are specific times when a rocket must launch to reach its target orbit. Understanding launch timing is critical for mission success.",
    
    sections: [
      {
        title: "Launch Window Basics",
        content: "Why Launch Windows Exist:\n\n1. Orbital Plane Alignment:\n• Target orbit has fixed orientation in space\n• Earth rotates beneath it\n• Launch site passes through orbital plane twice per day\n• Must launch when aligned\n\n2. Rendezvous Timing:\n• Must reach target at right time\n• Phasing requirements\n• Safety considerations\n\nDaily Launch Window:\n\nFor ISS from Cape Canaveral:\n• Two opportunities per day\n• ~5-10 minutes each\n• 12 hours apart\n• Miss it = wait until tomorrow\n\nInstantaneous Window:\n• Exactly one moment to launch\n• Used for precise rendezvous\n• Example: Soyuz to ISS\n• No margin for delay\n\nLaunch Azimuth:\n\nDirection to launch:\nAz = arcsin(cos(i)/cos(L))\n\nWhere:\n• Az = launch azimuth (degrees from north)\n• i = target inclination\n• L = launch site latitude\n\nExample: ISS Launch from Cape\n• Target inclination: 51.6°\n• Launch latitude: 28.5°\n• Azimuth: 51.6° or 128.4° (northeast or southeast)\n\nDogleg Maneuver:\n\nIf direct path not possible:\n• Launch in allowed direction\n• Turn during ascent\n• Costs extra delta-v\n• Used to avoid populated areas"
      },
      {
        title: "Interplanetary Launch Windows",
        content: "Planetary Alignment:\n\nPlanets orbit at different speeds:\n• Earth: 365.25 days\n• Mars: 687 days\n• Must wait for favorable alignment\n\nSynodic Period:\nTime between favorable alignments:\n\nT_syn = 1 / |1/T₁ - 1/T₂|\n\nEarth-Mars:\nT_syn = 1 / |1/365 - 1/687|\nT_syn = 780 days = 26 months\n\nLaunch windows to Mars:\n• Every 26 months\n• Window duration: ~30 days\n• Miss it = wait 2+ years!\n\nPorkchop Plots:\n\nShow delta-v vs launch/arrival dates:\n• X-axis: Launch date\n• Y-axis: Arrival date\n• Contours: Delta-v required\n• Find minimum delta-v trajectory\n\nTypical Mars Mission:\n• Launch window: 30 days\n• Optimal date: Center of window\n• Delta-v: 3,800-4,200 m/s from LEO\n• Transfer time: 6-9 months\n\nExample: Mars 2020 (Perseverance)\n• Launch window: July 17 - Aug 5, 2020\n• Actual launch: July 30, 2020\n• Arrival: February 18, 2021\n• Transfer time: 203 days\n\nOther Planets:\n\nEarth-Venus:\n• Synodic period: 584 days\n• Windows every 19 months\n\nEarth-Jupiter:\n• Synodic period: 399 days\n• Windows every 13 months\n\nEarth-Saturn:\n• Synodic period: 378 days\n• Windows every 12.5 months"
      },
      {
        title: "Gravity Assists",
        content: "Gravity Assist (Slingshot):\n\nUse planet's gravity to change velocity:\n• Approach planet from behind\n• Swing around\n• Leave with higher velocity\n• No propellant used!\n\nEnergy Exchange:\n• Spacecraft gains energy\n• Planet loses energy\n• Planet's mass so large, change unmeasurable\n\nVelocity Change:\n\nMaximum Δv from gravity assist:\nΔv_max = 2v_planet\n\nWhere v_planet = planet's orbital velocity\n\nExample: Jupiter Assist\n• Jupiter velocity: 13,000 m/s\n• Max Δv gain: 26,000 m/s\n• Huge boost!\n\nReal Missions:\n\nVoyager 2 Grand Tour:\n• Jupiter assist (1979)\n• Saturn assist (1981)\n• Uranus assist (1986)\n• Neptune assist (1989)\n• Now leaving solar system\n• Would be impossible without assists\n\nCassini to Saturn:\n• Venus assist (1998)\n• Venus again (1999)\n• Earth assist (1999)\n• Jupiter assist (2000)\n• Saturn arrival (2004)\n• Total: 4 gravity assists\n\nNew Horizons to Pluto:\n• Jupiter assist (2007)\n• Gained 4,000 m/s\n• Reduced travel time by 3 years\n\nTrade-offs:\n• Saves enormous propellant\n• But: Much longer mission time\n• Complex trajectory planning\n• Precise timing required"
      },
      {
        title: "Mission Planning Example",
        content: "Mars Mission Design:\n\nPhase 1: Launch from Earth\n• Delta-v: 9,500 m/s (LEO)\n• Rocket: Falcon Heavy or SLS\n• Payload: 20-40 tons to Mars\n\nPhase 2: Trans-Mars Injection\n• Delta-v: 3,800 m/s from LEO\n• Burn time: 5-10 minutes\n• Transfer orbit: Hohmann-like\n\nPhase 3: Cruise\n• Duration: 6-9 months\n• Trajectory corrections: 50-100 m/s total\n• Communication delay: 4-24 minutes\n\nPhase 4: Mars Orbit Insertion\n• Delta-v: 2,100 m/s\n• Aerobraking option: Saves fuel\n• Orbit: 400 km circular\n\nPhase 5: Landing\n• Entry velocity: 5,500 m/s\n• Parachute + retropropulsion\n• Delta-v: 600 m/s (powered descent)\n\nPhase 6: Surface Operations\n• Duration: 500 days (wait for return window)\n• ISRU: Make fuel from Mars atmosphere\n• CH₄/LOX from CO₂ + H₂O\n\nPhase 7: Ascent\n• Delta-v: 4,100 m/s to orbit\n• Smaller rocket (Mars gravity = 0.38g)\n\nPhase 8: Return\n• Delta-v: 2,500 m/s from Mars orbit\n• Transfer: 6-9 months\n• Total mission: 2.5-3 years\n\nTotal Delta-V Budget:\n• Earth launch: 9,500 m/s\n• TMI: 3,800 m/s\n• MOI: 2,100 m/s\n• Landing: 600 m/s\n• Ascent: 4,100 m/s\n• Return: 2,500 m/s\n• Earth reentry: 3,000 m/s (aerobraking)\n• Total: 25,600 m/s\n\nThis is why Mars is hard!"
      }
    ],
    
    keyTakeaways: [
      "Launch windows occur when launch site aligns with target orbital plane",
      "ISS has two daily launch windows, each 5-10 minutes long",
      "Mars launch windows occur every 26 months and last ~30 days",
      "Gravity assists can provide huge delta-v boosts using planetary motion",
      "Interplanetary missions require precise timing and trajectory planning",
      "Total delta-v for Mars round trip exceeds 25,000 m/s"
    ],
    
    vocabulary: [
      { term: "Launch Window", definition: "Time period when launch can occur to reach target orbit" },
      { term: "Launch Azimuth", definition: "Compass direction for launch to reach desired inclination" },
      { term: "Synodic Period", definition: "Time between favorable planetary alignments" },
      { term: "Gravity Assist", definition: "Using planet's gravity to change spacecraft velocity" },
      { term: "Porkchop Plot", definition: "Graph showing delta-v vs launch/arrival dates" }
    ],
    
    practiceProblems: [
      {
        id: "22-1",
        problem: "Calculate the synodic period for Earth-Mars missions. Earth year = 365 days, Mars year = 687 days.",
        solution: "T_syn = 1 / |1/T_E - 1/T_M| = 1 / |1/365 - 1/687|\nT_syn = 1 / |0.00274 - 0.00146| = 1 / 0.00128 = 780 days = 26 months\nMars launch windows occur every 26 months!",
        hint: "Use synodic period formula: T_syn = 1 / |1/T_1 - 1/T_2|"
      },
      {
        id: "22-2",
        problem: "ISS has two daily launch windows from Cape Canaveral. If the first window is at 3:00 PM, when is the second?",
        solution: "ISS orbital period: 92.9 minutes\nEarth rotation: 360° in 24 hours = 15°/hour\nISS orbital plane shift: 22.5° per orbit\nSecond window: 12 hours later = 3:00 AM next day\nLaunch site passes through orbital plane twice per day, 12 hours apart.",
        hint: "Orbital plane passes over launch site twice per day"
      },
      {
        id: "22-3",
        problem: "Calculate maximum Δv gain from a Jupiter gravity assist. Jupiter orbital velocity = 13,000 m/s.",
        solution: "Δv_max = 2 × v_planet = 2 × 13,000 = 26,000 m/s\nHuge boost! This is why Voyager, Cassini, and New Horizons used Jupiter assists.\nWithout this, outer solar system missions would be impossible with chemical rockets.",
        hint: "Maximum Δv from gravity assist = 2 × planet's orbital velocity"
      },
      {
        id: "22-4",
        problem: "Why did Voyager 2 take 12 years to reach Neptune when New Horizons reached Pluto in 9.5 years?",
        solution: "Voyager 2 (1977-1989):\n- Grand Tour: Jupiter → Saturn → Uranus → Neptune\n- Multiple gravity assists\n- Slower but visited 4 planets\n- Final velocity: 17 km/s\n\nNew Horizons (2006-2015):\n- Direct to Pluto\n- Single Jupiter assist\n- Fastest launch: 16.26 km/s\n- Optimized trajectory\n\nTrade-off: Voyager saw more planets but took longer!",
        hint: "Compare mission profiles: multiple assists vs direct trajectory"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q22-1",
          question: "What is a launch window?",
          options: [
            "A window on the rocket",
            "Time period when launch can occur to reach target orbit",
            "Weather conditions",
            "Launch pad opening"
          ],
          correctAnswer: 1,
          explanation: "Launch window is the time period when orbital mechanics allow a launch to reach the target orbit. For ISS, windows are instantaneous (5-10 minutes) and occur twice daily!"
        },
        {
          id: "q22-2",
          question: "How often do Mars launch windows occur?",
          options: [
            "Every month",
            "Every 26 months (synodic period)",
            "Every year",
            "Every 5 years"
          ],
          correctAnswer: 1,
          explanation: "Earth-Mars synodic period is 780 days = 26 months. This is how long it takes for Earth and Mars to return to favorable alignment for a Hohmann transfer. Miss it and wait 2+ years!"
        },
        {
          id: "q22-3",
          question: "What is a gravity assist?",
          options: [
            "Using rockets to assist gravity",
            "Using planet's gravity to change spacecraft velocity without propellant",
            "Artificial gravity",
            "Gravity measurement"
          ],
          correctAnswer: 1,
          explanation: "Gravity assist uses a planet's motion to change spacecraft velocity. The spacecraft gains energy from the planet's orbital motion. Voyager 2 used 4 gravity assists to reach Neptune!"
        },
        {
          id: "q22-4",
          question: "Why are ISS launch windows instantaneous?",
          options: [
            "Safety regulations",
            "Must launch exactly when orbital plane passes over launch site",
            "Weather",
            "Fuel limitations"
          ],
          correctAnswer: 1,
          explanation: "ISS orbital plane is fixed in space. Launch site must align with this plane for direct ascent. This alignment lasts only 5-10 minutes, creating an instantaneous window. Miss it and wait ~12 hours!"
        },
        {
          id: "q22-5",
          question: "What is the maximum Δv gain from a gravity assist?",
          options: [
            "Unlimited",
            "2 × planet's orbital velocity",
            "Equal to planet's velocity",
            "10 km/s maximum"
          ],
          correctAnswer: 1,
          explanation: "Maximum Δv = 2 × v_planet. For Jupiter (v=13 km/s), max gain is 26 km/s! This is why Jupiter assists are so valuable for outer solar system missions."
        }
      ]
    }
  },

  {
    id: 23,
    title: "Atmospheric Reentry",
    unit: "Orbital Mechanics",
    duration: "30 min",
    introduction: "Reentry is one of the most challenging phases of spaceflight. Understanding reentry physics is essential for safe return from orbit.",
    
    sections: [
      {
        title: "Reentry Physics",
        content: "Entry Velocity:\n\nFrom LEO:\n• Velocity: 7,800 m/s\n• Kinetic energy: 30 MJ/kg\n• Must dissipate this energy!\n\nFrom Moon:\n• Velocity: 11,000 m/s\n• Energy: 60 MJ/kg\n• Apollo reentry\n\nFrom Mars:\n• Velocity: 12,500 m/s\n• Energy: 78 MJ/kg\n• Future missions\n\nEnergy Dissipation:\n\nKinetic energy converts to:\n• Heat (99%)\n• Sound (<1%)\n\nHeat flux:\nq = ρ × v³ / 2\n\nPeak heating:\n• Altitude: 60-70 km\n• Heat flux: 1-10 MW/m²\n• Temperature: 1,500-3,000 K\n\nDeceleration:\n\nDrag force:\nF_drag = ½ρv²C_D A\n\nPeak deceleration:\n• LEO reentry: 4-8 g\n• Lunar return: 6-10 g\n• Ballistic: 8-12 g\n\nEntry Corridor:\n\nToo steep:\n• Excessive heating\n• High g-forces\n• Possible burnup\n\nToo shallow:\n• Skip off atmosphere\n• Return to space\n• Miss landing zone\n\nEntry angle:\n• Optimal: -5° to -7°\n• Corridor: ±2°\n• Very narrow!\n\nApollo entry corridor:\n• Width: 40 km at 120 km altitude\n• Miss it = death\n• Required precise navigation"
      },
      {
        title: "Thermal Protection Systems",
        content: "TPS Types:\n\n1. Ablative:\n• Material burns away\n• Carries heat with it\n• Single use\n• Examples: Apollo, Dragon\n\nMaterial: PICA-X (SpaceX)\n• Density: 270 kg/m³\n• Max temp: 3,000 K\n• Ablation rate: 0.1-0.5 mm/s\n\n2. Reusable:\n• Ceramic tiles or blankets\n• Radiates heat away\n• Multiple uses\n• Examples: Space Shuttle, Starship\n\nShuttle tiles:\n• Material: Silica\n• Density: 140 kg/m³\n• Max temp: 1,650 K\n• 24,000 tiles per orbiter\n\n3. Heat Sink:\n• Metal absorbs heat\n• Conducts to interior\n• Limited capacity\n• Examples: Mercury, Gemini\n\nHeat Load:\n\nTotal heat absorbed:\nQ = ∫ q dt\n\nLEO reentry:\n• Q = 10-15 MJ/m²\n• TPS thickness: 5-10 cm\n\nLunar return:\n• Q = 30-40 MJ/m²\n• TPS thickness: 10-15 cm\n\nStagnation Point:\n\nHottest location:\n• Nose or leading edge\n• Heat flux: 2-3× average\n• Requires thickest TPS\n\nShuttle nose:\n• Temperature: 1,650 K\n• Reinforced carbon-carbon\n• Most critical component\n\nCommunication Blackout:\n\nPlasma sheath:\n• Ionized gas around vehicle\n• Blocks radio waves\n• Duration: 4-7 minutes\n• No communication possible\n\nApollo blackout:\n• Start: 90 km altitude\n• End: 40 km altitude\n• Duration: 4 minutes\n• Tense moments for mission control"
      },
      {
        title: "Entry Trajectories",
        content: "Ballistic Entry:\n\nNo lift, pure drag:\n• Steep descent\n• High g-forces (8-12 g)\n• Small landing footprint\n• Used by: Soyuz, early capsules\n\nAdvantages:\n• Simple\n• Reliable\n• No guidance needed\n\nDisadvantages:\n• High g-forces\n• Limited landing accuracy\n• Higher heating\n\nLifting Entry:\n\nGenerate lift during entry:\n• Shallower trajectory\n• Lower g-forces (4-6 g)\n• Large landing footprint\n• Used by: Shuttle, X-37B\n\nLift-to-Drag Ratio:\nL/D = 0.3-1.5 for capsules\nL/D = 1.5-2.0 for Shuttle\n\nCross-range:\n• Distance can maneuver laterally\n• Shuttle: 2,000 km\n• Allows landing site flexibility\n\nSkip Entry:\n\nBounce off atmosphere:\n• Enter, skip out, enter again\n• Reduces peak heating\n• Extends range\n• Used by: Apollo (if needed)\n\nNever used operationally:\n• More complex\n• Longer reentry time\n• Backup option only\n\nGuided Entry:\n\nActive control during descent:\n• Adjust lift vector\n• Target landing site\n• Compensate for winds\n\nDragon 2:\n• Propulsive guidance\n• Accuracy: <1 km\n• Splashdown in ocean\n\nStarship:\n• Belly-flop maneuver\n• Active control surfaces\n• Precision landing\n• Revolutionary approach"
      },
      {
        title: "Landing Systems",
        content: "Parachute Landing:\n\nTypical sequence:\n1. Drogue chute (5-10 km)\n2. Main chutes (3-5 km)\n3. Splashdown or ground impact\n\nDragon parachutes:\n• 4 main chutes\n• Area: 116 m² each\n• Descent rate: 5-6 m/s\n• Splashdown: Gentle\n\nSoyuz landing:\n• 1 main chute\n• Area: 1,000 m²\n• Retrorockets at 1 m altitude\n• Ground impact: 2-3 m/s\n\nPropulsive Landing:\n\nRocket-powered descent:\n• No parachutes needed\n• Precision landing\n• Fully reusable\n\nFalcon 9 booster:\n• Entry burn: 3 engines\n• Landing burn: 1-3 engines\n• Accuracy: <10 m\n• Touchdown: 2 m/s\n\nStarship (planned):\n• Belly-flop entry\n• Flip maneuver\n• Propulsive landing\n• Accuracy: <1 m\n\nAirbag Landing:\n\nUsed by Mars rovers:\n• Parachute to slow\n• Airbags inflate\n• Bounce on surface\n• Roll to stop\n\nSpirit/Opportunity:\n• 24 airbags\n• Bounced 28 times\n• Rolled 1 km\n• Successful!\n\nLanding Site Selection:\n\nOcean splashdown:\n• Safest for crew\n• Large target area\n• Recovery ships needed\n• Used by: Apollo, Dragon\n\nGround landing:\n• Faster recovery\n• Reusability easier\n• Requires precision\n• Used by: Soyuz, Falcon 9\n\nPrecision landing:\n• Return to launch site\n• Immediate reuse\n• Requires high accuracy\n• Goal: Starship"
      }
    ],
    
    keyTakeaways: [
      "Reentry from LEO requires dissipating 30 MJ/kg of kinetic energy",
      "Entry corridor is narrow: -5° to -7° with ±2° tolerance",
      "Peak heating occurs at 60-70 km altitude with 1-10 MW/m² heat flux",
      "Thermal protection systems use ablation or radiation to manage heat",
      "Communication blackout lasts 4-7 minutes due to plasma sheath",
      "Modern spacecraft use propulsive landing for precision and reusability"
    ],
    
    vocabulary: [
      { term: "Entry Corridor", definition: "Narrow range of entry angles for safe reentry" },
      { term: "Heat Flux", definition: "Rate of heat transfer per unit area; measured in W/m² or MW/m²" },
      { term: "Ablative TPS", definition: "Thermal protection that burns away, carrying heat with it" },
      { term: "Plasma Sheath", definition: "Ionized gas around vehicle that blocks radio communication" },
      { term: "Ballistic Entry", definition: "Reentry with no lift; pure drag deceleration" },
      { term: "Cross-range", definition: "Lateral distance vehicle can maneuver during entry" }
    ],
    
    practiceProblems: [
      {
        id: "23-1",
        problem: "Calculate kinetic energy per kg for LEO reentry at 7,800 m/s.",
        solution: "KE = ½mv² per unit mass = ½v²\nKE = ½ × (7,800)² = ½ × 60,840,000 = 30,420,000 J/kg = 30.4 MJ/kg\nThis enormous energy must be dissipated as heat during reentry!",
        hint: "Use KE = ½v² for energy per unit mass"
      },
      {
        id: "23-2",
        problem: "Apollo entry corridor was ±2° around -6.5° optimal. If they entered at -9°, what would happen?",
        solution: "-9° is 2.5° too steep (outside corridor)\nConsequences:\n- Excessive heating (heat flux increases rapidly)\n- High g-forces (>10g, dangerous)\n- Risk of burnup\n- Possible structural failure\nApollo guidance had to be incredibly precise - missing by 40 km at 120 km altitude meant death!",
        hint: "Too steep = excessive heating and g-forces"
      },
      {
        id: "23-3",
        problem: "Why does communication blackout occur during reentry? How long does it last?",
        solution: "Plasma sheath forms around vehicle:\n- Hot gases ionize (become plasma)\n- Plasma blocks radio waves\n- Occurs at 60-90 km altitude\n- Duration: 4-7 minutes\n- No communication possible\n\nApollo blackout: 4 minutes (90 km to 40 km)\nMission control had to wait anxiously!",
        hint: "Ionized gas (plasma) blocks radio waves"
      },
      {
        id: "23-4",
        problem: "Compare ballistic vs lifting entry for crew safety. Which is better?",
        solution: "Ballistic (Soyuz):\n- G-forces: 8-12g (very high!)\n- Simple, reliable\n- No guidance needed\n- Small landing area\n\nLifting (Shuttle, Dragon 2):\n- G-forces: 4-6g (tolerable)\n- Requires guidance\n- More complex\n- Large landing area\n\nFor crew: Lifting entry is better (lower g-forces)\nFor simplicity: Ballistic is better (more reliable)\nModern spacecraft use lifting entry for crew comfort.",
        hint: "Compare g-forces and complexity"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q23-1",
          question: "What is the entry corridor for safe reentry?",
          options: [
            "Any angle works",
            "Narrow range: -5° to -7° with ±2° tolerance",
            "Must be vertical",
            "Must be horizontal"
          ],
          correctAnswer: 1,
          explanation: "Entry corridor is very narrow: -5° to -7° optimal with only ±2° tolerance. Too steep = burnup, too shallow = skip off atmosphere. Apollo's corridor was only 40 km wide at 120 km altitude!"
        },
        {
          id: "q23-2",
          question: "Where does peak heating occur during reentry?",
          options: [
            "At entry interface (120 km)",
            "At 60-70 km altitude with 1-10 MW/m² heat flux",
            "At ground level",
            "In space"
          ],
          correctAnswer: 1,
          explanation: "Peak heating occurs at 60-70 km altitude where atmospheric density and velocity combine for maximum heat flux (1-10 MW/m²). Temperature reaches 1,500-3,000 K!"
        },
        {
          id: "q23-3",
          question: "What causes communication blackout during reentry?",
          options: [
            "Equipment failure",
            "Plasma sheath (ionized gas) blocks radio waves",
            "Too far from ground",
            "Pilot turns off radio"
          ],
          correctAnswer: 1,
          explanation: "Hot gases around the vehicle ionize, forming a plasma sheath that blocks radio waves. Lasts 4-7 minutes (90 km to 40 km altitude). Mission control can't communicate during this time!"
        },
        {
          id: "q23-4",
          question: "What is ablative thermal protection?",
          options: [
            "Reflects heat away",
            "Material burns away, carrying heat with it (single use)",
            "Metal heat sink",
            "Active cooling"
          ],
          correctAnswer: 1,
          explanation: "Ablative TPS (like PICA-X on Dragon) burns away during reentry, carrying heat with it. Very effective but single-use. Apollo and Dragon use ablative shields."
        },
        {
          id: "q23-5",
          question: "Why do modern spacecraft prefer lifting entry over ballistic?",
          options: [
            "Cheaper",
            "Lower g-forces (4-6g vs 8-12g) and better landing accuracy",
            "Faster",
            "Simpler"
          ],
          correctAnswer: 1,
          explanation: "Lifting entry generates lift during descent, creating a shallower trajectory with lower g-forces (4-6g vs 8-12g ballistic). Also allows cross-range maneuvering for landing site selection. Better for crew comfort!"
        }
      ]
    }
  }
];

export default unit3AdvancedLessons;
