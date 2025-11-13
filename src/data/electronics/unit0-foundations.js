// Unit 0: Foundations - Math & Physics for Electronics (Complete - Lessons 0.1-0.6)

export const unit0Foundations = {
  '0.1': {
    id: '0.1',
    title: 'Foundations: AC Circuits with Complex Numbers',
    subtitle: 'Phasors, Impedance, and Power',
    description: 'Master AC circuit analysis using complex numbers - phasors make it easy!',
    coreIdea: 'Complex numbers turn AC circuits into algebra - impedance replaces resistance',
    learningObjectives: ['Use phasors for AC analysis', 'Calculate impedance', 'Find complex power', 'Understand power factor', 'Analyze RLC circuits'],
    keyEquations: [
      { eq: 'Z = R + jX', meaning: 'Complex impedance' },
      { eq: 'Z_L = j\\omega L', meaning: 'Inductor impedance' },
      { eq: 'Z_C = \\frac{1}{j\\omega C}', meaning: 'Capacitor impedance' },
      { eq: 'S = P + jQ', meaning: 'Complex power' }
    ],
    practiceProblems: [
      { id: '0.1a', prompt: 'Series RLC: R=10Ω, L=10mH, C=100μF, f=60Hz. Find total impedance', solution: 'Z_L=j3.77Ω, Z_C=-j26.5Ω, Z=10+j3.77-j26.5=10-j22.7Ω, |Z|=24.8Ω', hints: ['Calculate each impedance', 'Add in complex form', 'Find magnitude'] }
    ],
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['ac-circuits', 'complex-numbers', 'phasors'] }
  },

  '0.2': {
    id: '0.2',
    title: 'Foundations: Filter Design & Frequency Response',
    subtitle: 'Transfer Functions and Bode Plots',
    description: 'Master filter design using transfer functions - shape frequency response',
    coreIdea: 'Filters use frequency-dependent impedance to pass or block signals',
    learningObjectives: ['Design filters', 'Calculate transfer functions', 'Draw Bode plots', 'Find cutoff frequency', 'Optimize filter response'],
    keyEquations: [
      { eq: 'H(s) = \\frac{V_{out}}{V_{in}}', meaning: 'Transfer function' },
      { eq: 'f_c = \\frac{1}{2\\pi RC}', meaning: 'RC filter cutoff frequency' },
      { eq: '|H(j\\omega)| = \\frac{1}{\\sqrt{1+(\\omega/\\omega_c)^2}}', meaning: 'Low-pass magnitude response' }
    ],
    practiceProblems: [
      { id: '0.2a', prompt: 'RC low-pass: R=1kΩ, C=1μF. Find cutoff frequency', solution: 'f_c=1/(2π×1000×1e-6)=159Hz', hints: ['Use f_c=1/(2πRC)', 'Convert units'] }
    ],
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['filters', 'transfer-functions', 'bode-plots'] }
  },

  '0.3': {
    id: '0.3',
    title: 'Foundations: Transistor Circuits & Amplifiers',
    subtitle: 'BJT, MOSFET, and Small-Signal Analysis',
    description: 'Master transistor operation and amplifier design using small-signal models',
    coreIdea: 'Transistors amplify - small input controls large output current',
    learningObjectives: ['Understand BJT/MOSFET operation', 'Design bias circuits', 'Analyze small-signal gain', 'Calculate bandwidth', 'Optimize amplifiers'],
    keyEquations: [
      { eq: 'I_C = \\beta I_B', meaning: 'BJT current gain' },
      { eq: 'I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS}-V_{th})^2', meaning: 'MOSFET drain current' },
      { eq: 'A_v = -g_m R_L', meaning: 'Voltage gain' }
    ],
    practiceProblems: [
      { id: '0.3a', prompt: 'BJT amplifier: β=100, I_C=1mA, R_L=5kΩ. Find voltage gain', solution: 'g_m=I_C/V_T=1mA/26mV=38.5mS, A_v=-38.5×5k=-192', hints: ['Calculate g_m', 'Use A_v=-g_m×R_L'] }
    ],
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['transistors', 'amplifiers', 'small-signal'] }
  },

  '0.4': {
    id: '0.4',
    title: 'Foundations: Digital Logic & Timing',
    subtitle: 'Boolean Algebra and Sequential Circuits',
    description: 'Master digital logic design - gates, timing, and state machines',
    coreIdea: 'Digital circuits use Boolean algebra - 0s and 1s represent information',
    learningObjectives: ['Apply Boolean algebra', 'Design combinational logic', 'Understand sequential circuits', 'Analyze timing', 'Design state machines'],
    keyEquations: [
      { eq: 'Y = A \\cdot B + \\overline{A} \\cdot C', meaning: 'Boolean expression' },
      { eq: 't_{pd} = t_{prop} + t_{setup}', meaning: 'Propagation delay' },
      { eq: 'f_{max} = \\frac{1}{t_{pd}}', meaning: 'Maximum clock frequency' }
    ],
    practiceProblems: [
      { id: '0.4a', prompt: 'Logic circuit: t_prop=5ns, t_setup=2ns. Find max frequency', solution: 't_pd=5+2=7ns, f_max=1/7ns=143MHz', hints: ['Add delays', 'Take reciprocal'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['digital-logic', 'boolean', 'timing'] }
  },

  '0.5': {
    id: '0.5',
    title: 'Foundations: Microcontroller Math',
    subtitle: 'ADC, PWM, and Timer Calculations',
    description: 'Master microcontroller calculations - sampling, PWM, and timing',
    coreIdea: 'Microcontrollers convert between analog and digital - math determines precision',
    learningObjectives: ['Calculate ADC resolution', 'Design PWM signals', 'Configure timers', 'Optimize sampling rates', 'Implement control algorithms'],
    keyEquations: [
      { eq: 'Resolution = \\frac{V_{ref}}{2^n}', meaning: 'ADC resolution (n bits)' },
      { eq: 'Duty = \\frac{t_{on}}{T}', meaning: 'PWM duty cycle' },
      { eq: 'f_s \\geq 2f_{max}', meaning: 'Nyquist sampling theorem' }
    ],
    practiceProblems: [
      { id: '0.5a', prompt: '10-bit ADC, V_ref=5V. Find resolution and value for 3.2V input', solution: 'Resolution=5V/1024=4.88mV, Digital=3.2V/4.88mV=656', hints: ['Calculate step size', 'Divide input by step'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['microcontroller', 'adc', 'pwm'] }
  },

  '0.6': {
    id: '0.6',
    title: 'Foundations: Signal Processing Basics',
    subtitle: 'Fourier Analysis and Digital Filters',
    description: 'Master signal processing - Fourier transforms, sampling, and filtering',
    coreIdea: 'Signals are sums of frequencies - Fourier analysis reveals frequency content',
    learningObjectives: ['Apply Fourier transforms', 'Understand sampling theorem', 'Design digital filters', 'Analyze frequency content', 'Process signals'],
    keyEquations: [
      { eq: 'X(f) = \\int x(t)e^{-j2\\pi ft}dt', meaning: 'Fourier transform' },
      { eq: 'f_s > 2f_{max}', meaning: 'Nyquist criterion' },
      { eq: 'y[n] = \\sum_{k=0}^{N-1} h[k]x[n-k]', meaning: 'Digital filter (convolution)' }
    ],
    practiceProblems: [
      { id: '0.6a', prompt: 'Signal with f_max=10kHz. Find minimum sampling rate', solution: 'f_s>2×10kHz=20kHz, use f_s≥22kHz for margin', hints: ['Apply Nyquist theorem', 'Add safety margin'] }
    ],
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['signal-processing', 'fourier', 'filters'] }
  }
};

export default unit0Foundations;
