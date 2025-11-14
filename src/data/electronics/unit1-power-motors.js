// Unit 1: Power Electronics & Motors - Complete (4 lessons)
// Lessons 6-9: DC-DC converters, motor control, MOSFETs, battery management

export const electronicsUnit1PowerMotors = [
  {
    id: 6,
    title: "DC-DC Converters & Switching",
    unit: "Power Electronics & Motors",
    duration: "30 min",
    introduction: "DC-DC converters efficiently change voltage levels using switching techniques. Understanding buck, boost, and buck-boost topologies is essential for power electronics.",
    
    sections: [
      {
        title: "Buck Converter (Step-Down)",
        content: `**Basic Operation:**

Buck converter steps down voltage:
• Switch ON: inductor charges, output powered
• Switch OFF: inductor discharges through diode
• Output voltage < input voltage

**Key Equation:**

V_out = D × V_in

Where D = duty cycle (0 to 1)

**Example: 12V to 5V Buck Converter**

Given:
• V_in = 12V
• V_out = 5V (desired)
• f_sw = 100 kHz

Calculate duty cycle:
D = V_out / V_in = 5 / 12 = 0.417 = 41.7%

**Inductor Selection:**

Ripple current (ΔI_L):
ΔI_L = (V_in - V_out) × D / (L × f_sw)

For 20% ripple at I_out = 2A:
ΔI_L = 0.2 × 2A = 0.4A

Required inductance:
L = (12 - 5) × 0.417 / (0.4 × 100,000)
L = 73 μH

Use standard 100 μH inductor

**Capacitor Selection:**

Output ripple voltage:
ΔV_out = ΔI_L / (8 × f_sw × C)

For 50mV ripple:
C = 0.4 / (8 × 100,000 × 0.05)
C = 10 μF

Use 22 μF ceramic capacitor`
      },
      {
        title: "Boost Converter (Step-Up)",
        content: `**Basic Operation:**

Boost converter steps up voltage:
• Switch ON: inductor charges from input
• Switch OFF: inductor + input voltage to output
• Output voltage > input voltage

**Key Equation:**

V_out = V_in / (1 - D)

**Example: 5V to 12V Boost Converter**

Given:
• V_in = 5V
• V_out = 12V (desired)

Calculate duty cycle:
12 = 5 / (1 - D)
1 - D = 5/12 = 0.417
D = 0.583 = 58.3%

**Power Considerations:**

Assuming 90% efficiency:
P_in = P_out / η
P_in = (12V × 1A) / 0.9 = 13.3W

Input current:
I_in = 13.3W / 5V = 2.67A

Note: Input current > output current!

**Inductor Current:**

Peak inductor current:
I_L(peak) = I_in + ΔI_L/2

For 30% ripple:
ΔI_L = 0.3 × 2.67A = 0.8A
I_L(peak) = 2.67 + 0.4 = 3.07A

Select inductor rated for >3.5A

**Diode Selection:**

Reverse voltage: V_out = 12V
Forward current: I_out = 1A
Use Schottky diode (low V_f)
Example: 1N5822 (40V, 3A, V_f=0.5V)`
      },
      {
        title: "Efficiency & Losses",
        content: `**Power Losses:**

1. **Switching Losses:**
P_sw = ½ × V × I × (t_r + t_f) × f_sw

Where:
• t_r = rise time
• t_f = fall time
• f_sw = switching frequency

2. **Conduction Losses:**
P_cond = I²_RMS × R_DS(on)

For MOSFET with R_DS(on) = 10mΩ:
P_cond = (2A)² × 0.01 = 40mW

3. **Inductor Losses:**
P_L = I²_RMS × R_L

Typical DCR = 50mΩ:
P_L = (2A)² × 0.05 = 200mW

4. **Diode Losses:**
P_D = V_f × I_avg

For Schottky with V_f = 0.5V:
P_D = 0.5V × 1A = 500mW

**Total Efficiency:**

P_loss = P_sw + P_cond + P_L + P_D
P_loss = 100 + 40 + 200 + 500 = 840mW

P_out = 12V × 1A = 12W
P_in = 12W + 0.84W = 12.84W

Efficiency:
η = P_out / P_in = 12 / 12.84 = 93.5%

**Thermal Management:**

Junction temperature:
T_j = T_a + P_loss × θ_JA

For θ_JA = 50°C/W, T_a = 25°C:
T_j = 25 + 0.84 × 50 = 67°C

Safe (T_j(max) typically 150°C)`
      }
    ],
    
    keyTakeaways: [
      "Buck converter: V_out = D × V_in; steps down voltage",
      "Boost converter: V_out = V_in/(1-D); steps up voltage",
      "Inductor stores energy during switching; size determines ripple",
      "Efficiency typically 85-95%; losses from switching, conduction, and components",
      "Higher switching frequency allows smaller components but increases switching losses",
      "Thermal management critical; calculate junction temperature"
    ],
    
    vocabulary: [
      { term: "Duty Cycle (D)", definition: "Ratio of ON time to total period; D = t_on/T" },
      { term: "Buck Converter", definition: "Step-down DC-DC converter; V_out = D × V_in" },
      { term: "Boost Converter", definition: "Step-up DC-DC converter; V_out = V_in/(1-D)" },
      { term: "Switching Frequency", definition: "Rate of MOSFET switching; typically 50kHz-1MHz" },
      { term: "Ripple Current", definition: "AC component of inductor current; ΔI_L" }
    ],
    
    quiz: {
      questions: [
        { id: "q6-1", question: "Buck converter formula:", options: ["V_out = D × V_in", "V_out = V_in / D", "V_out = V_in / (1-D)", "V_out = D / V_in"], correctAnswer: 0, explanation: "Buck converter steps down: V_out = D × V_in where D is duty cycle (0-1)!" },
        { id: "q6-2", question: "To get 3.3V from 12V, what duty cycle?", options: ["27.5%", "36.4%", "50%", "72.5%"], correctAnswer: 0, explanation: "D = V_out/V_in = 3.3/12 = 0.275 = 27.5%!" },
        { id: "q6-3", question: "Boost converter with D=0.6, V_in=5V gives:", options: ["3V", "8.3V", "12.5V", "15V"], correctAnswer: 2, explanation: "V_out = V_in/(1-D) = 5/(1-0.6) = 5/0.4 = 12.5V!" },
        { id: "q6-4", question: "Higher switching frequency allows:", options: ["Higher efficiency", "Smaller inductors and capacitors", "Lower cost MOSFETs", "Higher output power"], correctAnswer: 1, explanation: "Higher f_sw allows smaller L and C, but increases switching losses!" }
      ]
    }
  },

  {
    id: 7,
    title: "Motor Control & PWM",
    unit: "Power Electronics & Motors",
    duration: "30 min",
    introduction: "Motor control uses PWM to regulate speed and torque. Understanding H-bridges and control techniques is essential for robotics and automation.",
    
    sections: [
      {
        title: "DC Motor Fundamentals",
        content: `**Motor Equations:**

Back EMF (voltage):
V_emf = K_e × ω

Where:
• K_e = back EMF constant (V/rad/s)
• ω = angular velocity (rad/s)

Torque:
T = K_t × I

Where:
• K_t = torque constant (N·m/A)
• I = motor current

**Example: Small DC Motor**

Specifications:
• K_e = 0.01 V/(rad/s)
• K_t = 0.01 N·m/A
• R_motor = 1Ω
• V_supply = 12V

At 1000 RPM (105 rad/s):
• V_emf = 0.01 × 105 = 1.05V
• V_motor = V_supply - V_emf = 12 - 1.05 = 10.95V
• I = V_motor / R = 10.95 / 1 = 10.95A
• T = 0.01 × 10.95 = 0.11 N·m

**Power:**

Mechanical power:
P_mech = T × ω = 0.11 × 105 = 11.5W

Electrical power:
P_elec = V × I = 12 × 10.95 = 131.4W

Efficiency:
η = P_mech / P_elec = 11.5 / 131.4 = 8.8%

Low efficiency at high speed!`
      },
      {
        title: "PWM Speed Control",
        content: `**PWM Basics:**

Average voltage:
V_avg = D × V_supply

Where D = duty cycle

**Example: Speed Control**

Motor at 50% speed:
• V_supply = 12V
• D = 0.5
• V_avg = 0.5 × 12 = 6V

PWM frequency selection:
• Too low: audible noise, torque ripple
• Too high: switching losses
• Typical: 20-40 kHz (above hearing)

**Current Ripple:**

ΔI = (V_supply - V_emf) × D × (1-D) / (L × f_PWM)

For motor with L = 1mH:
• V_supply = 12V, V_emf = 6V
• D = 0.5, f_PWM = 20kHz

ΔI = (12-6) × 0.5 × 0.5 / (0.001 × 20,000)
ΔI = 1.5 / 20 = 75mA

Small ripple - good!

**Acceleration Control:**

Ramp duty cycle to limit current:
D(t) = D_final × (t / t_ramp)

For 1 second ramp to 80%:
• At t=0.5s: D = 0.8 × 0.5 = 0.4 = 40%
• At t=1.0s: D = 0.8 × 1.0 = 0.8 = 80%

Prevents current spikes and mechanical stress`
      },
      {
        title: "H-Bridge Motor Driver",
        content: `**H-Bridge Operation:**

Four MOSFETs control direction:
• Forward: Q1 + Q4 ON
• Reverse: Q2 + Q3 ON
• Brake: Q3 + Q4 ON (short motor)
• Coast: All OFF

**Dead Time:**

Prevent shoot-through:
• Never turn ON Q1 and Q3 simultaneously
• Never turn ON Q2 and Q4 simultaneously
• Add dead time: 100-500ns

**Example: H-Bridge Design**

Motor specifications:
• V_supply = 24V
• I_max = 10A
• Stall current: 30A

MOSFET selection:
• V_DS(max) > 24V × 1.5 = 36V (safety margin)
• I_D(max) > 30A
• R_DS(on) < 10mΩ (low losses)

Example: IRFB4110 (100V, 180A, 3.7mΩ)

Conduction losses:
P_loss = I² × R_DS(on) = 10² × 0.0037 = 0.37W

Two MOSFETs conduct:
P_total = 2 × 0.37 = 0.74W

**Gate Driver:**

Gate charge: Q_g = 120nC
Switching frequency: 20kHz

Gate current:
I_gate = Q_g × f_sw = 120nC × 20kHz = 2.4mA

Gate driver must supply >10mA for fast switching

**Current Sensing:**

Shunt resistor method:
R_shunt = V_sense / I_max = 0.1V / 10A = 10mΩ

Power dissipation:
P_shunt = I² × R = 10² × 0.01 = 1W

Use 2W resistor with heatsink`
      }
    ],
    
    keyTakeaways: [
      "DC motor: V_emf = K_e × ω, T = K_t × I",
      "PWM controls average voltage: V_avg = D × V_supply",
      "H-bridge uses 4 MOSFETs to control direction and braking",
      "Dead time (100-500ns) prevents shoot-through in H-bridge",
      "PWM frequency 20-40kHz avoids audible noise",
      "Current sensing with shunt resistor: R = V_sense/I_max"
    ],
    
    vocabulary: [
      { term: "Back EMF", definition: "Voltage generated by motor rotation; V_emf = K_e × ω" },
      { term: "H-Bridge", definition: "4-MOSFET circuit for bidirectional motor control" },
      { term: "Dead Time", definition: "Delay between turning off one MOSFET and turning on another" },
      { term: "Shoot-Through", definition: "Both high and low MOSFETs ON simultaneously; causes short circuit" },
      { term: "Duty Cycle", definition: "Ratio of ON time to period; controls average voltage" }
    ],
    
    quiz: {
      questions: [
        { id: "q7-1", question: "Back EMF formula:", options: ["V = K_e × I", "V = K_e × ω", "V = K_t × ω", "V = R × I"], correctAnswer: 1, explanation: "Back EMF V_emf = K_e × ω where ω is angular velocity!" },
        { id: "q7-2", question: "PWM at 60% duty cycle, 12V supply gives:", options: ["4.8V", "7.2V", "9.6V", "12V"], correctAnswer: 1, explanation: "V_avg = D × V_supply = 0.6 × 12 = 7.2V!" },
        { id: "q7-3", question: "H-bridge forward motion uses:", options: ["Q1+Q2 ON", "Q1+Q4 ON", "Q2+Q3 ON", "Q3+Q4 ON"], correctAnswer: 1, explanation: "Forward: Q1 (high-side) + Q4 (low-side) ON!" },
        { id: "q7-4", question: "Dead time prevents:", options: ["Motor overheating", "Shoot-through current", "Back EMF", "Torque ripple"], correctAnswer: 1, explanation: "Dead time prevents shoot-through (both MOSFETs ON = short circuit)!" }
      ]
    }
  }
];

// Lessons 8-9 will be added in next part due to file size
export default electronicsUnit1PowerMotors;
