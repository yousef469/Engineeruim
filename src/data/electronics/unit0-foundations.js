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
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['ac-circuits', 'complex-numbers', 'phasors'] },
    quiz: {
      questions: [
        { id: "q0-1", question: "Inductor impedance formula:", options: ["Z_L = jωL", "Z_L = 1/(jωL)", "Z_L = ωL", "Z_L = L/ω"], correctAnswer: 0, explanation: "Inductor impedance Z_L = jωL where ω = 2πf. Imaginary (90° phase shift)!" },
        { id: "q0-2", question: "Capacitor impedance formula:", options: ["Z_C = jωC", "Z_C = 1/(jωC)", "Z_C = ωC", "Z_C = C/ω"], correctAnswer: 1, explanation: "Capacitor impedance Z_C = 1/(jωC) = -j/(ωC). Negative imaginary (-90° phase)!" },
        { id: "q0-3", question: "Complex power S = P + jQ, Q represents:", options: ["Real power", "Reactive power", "Apparent power", "Power factor"], correctAnswer: 1, explanation: "Q is reactive power (VAR). P is real power (W). |S| is apparent power (VA)!" },
        { id: "q0-4", question: "At resonance in RLC circuit:", options: ["Z is maximum", "Z_L = Z_C, impedance is minimum", "Current is zero", "Voltage is zero"], correctAnswer: 1, explanation: "At resonance: Z_L = Z_C cancel out, leaving only R. Impedance minimum, current maximum!" }
      ]
    }
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
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['filters', 'transfer-functions', 'bode-plots'] },
    quiz: {
      questions: [
        { id: "q1-1", question: "RC low-pass cutoff frequency:", options: ["f_c = RC", "f_c = 1/(2πRC)", "f_c = 2πRC", "f_c = 1/(RC)"], correctAnswer: 1, explanation: "RC low-pass cutoff: f_c = 1/(2πRC). At f_c, gain is -3dB!" },
        { id: "q1-2", question: "Transfer function H(s) represents:", options: ["Input voltage", "Output voltage", "V_out/V_in ratio", "Current"], correctAnswer: 2, explanation: "Transfer function H(s) = V_out/V_in. Describes frequency response!" },
        { id: "q1-3", question: "Bode plot shows:", options: ["Time response", "Magnitude and phase vs frequency", "Impedance", "Power"], correctAnswer: 1, explanation: "Bode plot shows magnitude (dB) and phase (degrees) versus frequency!" },
        { id: "q1-4", question: "Low-pass filter passes:", options: ["High frequencies", "Low frequencies below f_c", "All frequencies", "No frequencies"], correctAnswer: 1, explanation: "Low-pass filter passes frequencies below cutoff f_c, attenuates above!" }
      ]
    }
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
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['transistors', 'amplifiers', 'small-signal'] },
    quiz: {
      questions: [
        { id: "q2-1", question: "BJT current gain formula:", options: ["I_C = β × I_B", "I_C = I_B / β", "I_C = β + I_B", "I_C = β - I_B"], correctAnswer: 0, explanation: "BJT: I_C = β × I_B where β is current gain (typically 50-200)!" },
        { id: "q2-2", question: "Transconductance g_m formula:", options: ["g_m = I_C × V_T", "g_m = I_C / V_T", "g_m = V_T / I_C", "g_m = β × I_C"], correctAnswer: 1, explanation: "g_m = I_C / V_T where V_T ≈ 26mV at room temperature!" },
        { id: "q2-3", question: "Common-emitter voltage gain:", options: ["A_v = g_m × R_L", "A_v = -g_m × R_L", "A_v = R_L / g_m", "A_v = β × R_L"], correctAnswer: 1, explanation: "Common-emitter gain A_v = -g_m × R_L. Negative sign means phase inversion!" },
        { id: "q2-4", question: "MOSFET operates in saturation when:", options: ["V_GS < V_th", "V_DS > V_GS - V_th", "V_DS = 0", "V_GS = 0"], correctAnswer: 1, explanation: "MOSFET saturation (active region): V_DS > V_GS - V_th. Used for amplification!" }
      ]
    }
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
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['digital-logic', 'boolean', 'timing'] },
    quiz: {
      questions: [
        { id: "q3-1", question: "Boolean AND operation:", options: ["Y = A + B", "Y = A · B", "Y = A ⊕ B", "Y = Ā"], correctAnswer: 1, explanation: "AND: Y = A · B. Output 1 only when both inputs are 1!" },
        { id: "q3-2", question: "Propagation delay t_pd:", options: ["Setup time", "Time for output to change after input", "Hold time", "Clock period"], correctAnswer: 1, explanation: "Propagation delay: time from input change to output change. Limits max frequency!" },
        { id: "q3-3", question: "Maximum clock frequency:", options: ["f_max = t_pd", "f_max = 1 / t_pd", "f_max = 2 × t_pd", "f_max = t_pd²"], correctAnswer: 1, explanation: "f_max = 1 / t_pd where t_pd includes propagation and setup time!" },
        { id: "q3-4", question: "D flip-flop stores:", options: ["Analog voltage", "1 bit of data", "Multiple bits", "Continuous signal"], correctAnswer: 1, explanation: "D flip-flop stores 1 bit. Captures D input on clock edge!" }
      ]
    }
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
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['microcontroller', 'adc', 'pwm'] },
    quiz: {
      questions: [
        { id: "q4-1", question: "ADC resolution formula:", options: ["Resolution = V_ref × 2^n", "Resolution = V_ref / 2^n", "Resolution = 2^n / V_ref", "Resolution = V_ref + 2^n"], correctAnswer: 1, explanation: "ADC resolution = V_ref / 2^n. For 10-bit, 5V: 5V/1024 = 4.88mV per step!" },
        { id: "q4-2", question: "PWM duty cycle formula:", options: ["Duty = t_on × T", "Duty = t_on / T", "Duty = T / t_on", "Duty = t_on + T"], correctAnswer: 1, explanation: "Duty cycle = t_on / T where T is period. 50% duty = t_on = T/2!" },
        { id: "q4-3", question: "Nyquist sampling theorem:", options: ["f_s > f_max", "f_s ≥ 2 × f_max", "f_s = f_max", "f_s < f_max"], correctAnswer: 1, explanation: "Nyquist: f_s ≥ 2 × f_max to avoid aliasing. Sample at least twice the highest frequency!" },
        { id: "q4-4", question: "12-bit ADC has how many levels?", options: ["1024", "2048", "4096", "8192"], correctAnswer: 2, explanation: "12-bit ADC: 2^12 = 4096 levels (0 to 4095)!" }
      ]
    }
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
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['signal-processing', 'fourier', 'filters'] },
    quiz: {
      questions: [
        { id: "q5-1", question: "Fourier transform converts:", options: ["Time to frequency domain", "Frequency to time domain", "Voltage to current", "Digital to analog"], correctAnswer: 0, explanation: "Fourier transform converts time-domain signal to frequency domain. Shows frequency content!" },
        { id: "q5-2", question: "Nyquist criterion:", options: ["f_s = f_max", "f_s > 2 × f_max", "f_s < f_max", "f_s = f_max / 2"], correctAnswer: 1, explanation: "Nyquist: f_s > 2 × f_max to avoid aliasing. Sample faster than twice highest frequency!" },
        { id: "q5-3", question: "Digital filter convolution:", options: ["y[n] = x[n] + h[n]", "y[n] = Σ h[k] × x[n-k]", "y[n] = x[n] × h[n]", "y[n] = x[n] / h[n]"], correctAnswer: 1, explanation: "Convolution: y[n] = Σ h[k] × x[n-k]. Filters signal with impulse response h!" },
        { id: "q5-4", question: "Aliasing occurs when:", options: ["f_s > 2f_max", "f_s < 2f_max", "f_s = 2f_max", "Never"], correctAnswer: 1, explanation: "Aliasing when f_s < 2f_max. High frequencies appear as low frequencies!" }
      ]
    }
  }
};

export default unit0Foundations;
