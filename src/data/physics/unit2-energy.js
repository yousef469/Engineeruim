export const unit2Lessons = {
  6: {
    id: 6,
    title: 'What is Energy?',
    subtitle: 'Kinetic vs Potential Energy',
    description: 'Discover the two fundamental forms of energy in mechanical systems',
    coreIdea: 'Kinetic vs potential',
    engineeringExample: 'Moving vs parked car',
    content: {
      intro: 'Energy is the ability to do work. In engineering, we constantly convert between kinetic energy (energy of motion) and potential energy (stored energy).',
      concepts: [
        {
          title: 'Kinetic Energy',
          explanation: 'Energy of motion. KE = ½mv². Faster or heavier objects have more kinetic energy.',
          example: 'A car at 100 km/h has 4x the kinetic energy of the same car at 50 km/h'
        },
        {
          title: 'Potential Energy',
          explanation: 'Stored energy due to position. PE = mgh (gravitational) or ½kx² (spring)',
          example: 'A rocket on the launchpad has gravitational potential energy that converts to kinetic energy during ascent'
        },
        {
          title: 'Energy Conversion',
          explanation: 'Energy constantly changes form but total amount stays constant',
          example: 'Roller coaster: PE at top → KE at bottom → PE at next peak'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Hybrid Car Braking',
          description: 'Regenerative brakes convert kinetic energy back to electrical potential energy in the battery'
        },
        {
          icon: '🚀',
          title: 'Rocket Fuel',
          description: 'Chemical potential energy in fuel converts to kinetic energy of exhaust gases'
        },
        {
          icon: '✈️',
          title: 'Aircraft Altitude',
          description: 'Pilots trade altitude (PE) for speed (KE) during descent - "energy management"'
        }
      ]
    }
  },
  7: {
    id: 7,
    title: 'Work & Power',
    subtitle: 'Force × Distance',
    description: 'Learn how work transfers energy and power measures the rate',
    coreIdea: 'Force × distance, rate of doing work',
    engineeringExample: "Lifting a plane's landing gear",
    content: {
      intro: 'Work is done when a force moves something. Power is how fast that work gets done. Both are critical for designing efficient machines.',
      concepts: [
        {
          title: 'Work',
          explanation: 'Work = Force × Distance. Only the force component in the direction of motion counts.',
          example: 'Lifting a 1000N weight 10m high requires 10,000 J of work'
        },
        {
          title: 'Power',
          explanation: 'Power = Work / Time. Measured in Watts (W) or Horsepower (hp). 1 hp = 746 W',
          example: 'A 300 hp car engine can do 223,800 J of work every second'
        },
        {
          title: 'Efficiency',
          explanation: 'Useful power out / Total power in. No machine is 100% efficient.',
          example: 'A car engine might be 30% efficient - 70% of fuel energy becomes waste heat'
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Landing Gear Hydraulics',
          description: 'Hydraulic systems provide high power to retract heavy landing gear quickly'
        },
        {
          icon: '🚗',
          title: 'Engine Power Rating',
          description: 'Car engines rated in horsepower - measures how quickly they can accelerate the vehicle'
        },
        {
          icon: '🚀',
          title: 'Rocket Thrust Power',
          description: 'Saturn V rocket engines produced 190 GW of power - equivalent to 85 Hoover Dams!'
        }
      ]
    }
  },
  8: {
    id: 8,
    title: 'Conservation of Energy',
    subtitle: 'Energy Cannot Be Lost',
    description: 'Master one of physics\' most powerful principles',
    coreIdea: 'Energy cannot be lost',
    engineeringExample: 'Roller coaster or orbit demo',
    content: {
      intro: 'The Law of Conservation of Energy states that energy cannot be created or destroyed, only converted from one form to another. This is fundamental to all engineering design.',
      concepts: [
        {
          title: 'Total Energy is Constant',
          explanation: 'In a closed system, total energy never changes. E_initial = E_final',
          example: 'Pendulum: PE + KE = constant. At highest point: all PE. At lowest: all KE'
        },
        {
          title: 'Energy Transformations',
          explanation: 'Energy changes form: mechanical → thermal → electrical → chemical, etc.',
          example: 'Car braking: kinetic energy → heat energy in brake pads'
        },
        {
          title: 'Energy Accounting',
          explanation: 'Engineers track where energy goes to improve efficiency',
          example: 'In a car: 30% moves car, 35% exhaust heat, 35% engine cooling'
        }
      ],
      realWorld: [
        {
          icon: '🎢',
          title: 'Roller Coaster Design',
          description: 'First hill must be highest - all subsequent motion comes from that initial PE'
        },
        {
          icon: '🚀',
          title: 'Orbital Mechanics',
          description: 'Satellites trade PE and KE as they orbit - total energy determines orbit shape'
        },
        {
          icon: '🚗',
          title: 'Crash Testing',
          description: 'Vehicle kinetic energy must be absorbed by crumple zones - energy goes into deformation'
        }
      ]
    }
  },
  9: {
    id: 9,
    title: 'Efficiency',
    subtitle: 'Energy Losses in Systems',
    description: 'Understand why no machine is perfect and how to minimize losses',
    coreIdea: 'Energy losses',
    engineeringExample: 'Car engine efficiency vs electric motor',
    content: {
      intro: 'Efficiency measures how much useful work you get from the energy you put in. Real machines always lose some energy to friction, heat, and other factors.',
      concepts: [
        {
          title: 'Efficiency Formula',
          explanation: 'Efficiency = (Useful Energy Out / Total Energy In) × 100%',
          example: 'A 30% efficient engine: for every 100 J of fuel energy, only 30 J moves the car'
        },
        {
          title: 'Where Energy Goes',
          explanation: 'Lost energy usually becomes heat through friction and resistance',
          example: 'Car engine: 35% exhaust heat, 30% cooling system, 5% friction, 30% useful work'
        },
        {
          title: 'Improving Efficiency',
          explanation: 'Reduce friction, improve combustion, recover waste heat, use better materials',
          example: 'Electric motors are 90% efficient vs 30% for gas engines - less waste heat'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Engine Comparison',
          description: 'Gas engine: 30% efficient. Diesel: 40%. Electric motor: 90%. Huge difference!'
        },
        {
          icon: '🚀',
          title: 'Rocket Efficiency',
          description: 'Rocket engines are 60-70% efficient - better than cars but still lose energy to heat'
        },
        {
          icon: '✈️',
          title: 'Jet Engine Efficiency',
          description: 'Modern turbofans are 40% efficient - constant improvements save millions in fuel'
        }
      ]
    }
  },
  10: {
    id: 10,
    title: 'Power Systems',
    subtitle: 'Mechanical vs Electrical',
    description: 'Compare different ways to transmit and use power in vehicles',
    coreIdea: 'Mechanical vs electrical power',
    engineeringExample: 'Rocket turbopump or electric motor power flow',
    content: {
      intro: 'Power can be transmitted mechanically (shafts, gears) or electrically (wires, motors). Each has advantages for different applications.',
      concepts: [
        {
          title: 'Mechanical Power',
          explanation: 'Power = Torque × Angular Velocity. Transmitted through rotating shafts.',
          example: 'Car transmission uses gears to match engine power to wheel speed'
        },
        {
          title: 'Electrical Power',
          explanation: 'Power = Voltage × Current. Transmitted through wires with minimal loss.',
          example: 'Electric car: battery → motor controller → electric motor → wheels'
        },
        {
          title: 'Hybrid Systems',
          explanation: 'Combine mechanical and electrical power for best of both worlds',
          example: 'Hybrid car: gas engine charges battery, electric motor drives wheels'
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'Rocket Turbopump',
          description: 'Mechanical power from turbine spins pumps at 30,000 RPM to feed engines'
        },
        {
          icon: '🚗',
          title: 'Electric vs Gas Cars',
          description: 'Electric: instant torque, simple. Gas: longer range, quick refuel. Trade-offs!'
        },
        {
          icon: '✈️',
          title: 'Aircraft Hydraulics',
          description: 'Mechanical power from engines drives hydraulic pumps for flight controls'
        }
      ]
    }
  }
};
