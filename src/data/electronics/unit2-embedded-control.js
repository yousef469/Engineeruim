// Unit 2: Embedded Systems & Control - Complete (5 lessons)
// Lessons 10-14: Microcontrollers, RTOS, PID control, sensor interfacing, wireless

export const electronicsUnit2EmbeddedControl = [
  {
    id: 10,
    title: "Microcontroller Architecture",
    unit: "Embedded Systems & Control",
    duration: "30 min",
    introduction: "Modern microcontrollers are the brains of embedded systems. Understanding ARM Cortex-M architecture, memory, and peripherals is essential for efficient firmware development.",
    
    sections: [
      {
        title: "ARM Cortex-M Architecture",
        content: `**Core Features:**

**Cortex-M0+:**
• 32-bit RISC
• 0.9 DMIPS/MHz
• 2-stage pipeline
• Low power: <10μA/MHz
• Applications: IoT, sensors

**Cortex-M4:**
• 32-bit RISC
• 1.25 DMIPS/MHz
• 3-stage pipeline
• DSP instructions
• Optional FPU (floating point)
• Applications: Motor control, audio

**Cortex-M7:**
• 32-bit RISC
• 2.14 DMIPS/MHz
• 6-stage pipeline
• Dual-issue superscalar
• FPU standard
• Applications: High-performance control

**Clock Speed:**

Instruction execution:
Cycles = Instructions / (Clock × IPC)

Example: 1000 instructions
• M0+ at 48MHz: 1000/(48M×0.9) = 23μs
• M4 at 168MHz: 1000/(168M×1.25) = 4.8μs
• M7 at 400MHz: 1000/(400M×2.14) = 1.2μs

**Memory Architecture:**

Flash (program memory):
• Non-volatile
• Typical: 64KB - 2MB
• Read-only during execution

SRAM (data memory):
• Volatile
• Typical: 8KB - 512KB
• Fast access (1 cycle)

Example: STM32F4
• Flash: 1MB
• SRAM: 192KB
• Clock: 168MHz`
      },
      {
        title: "Peripherals & Interfaces",
        content: `**GPIO (General Purpose I/O):**

Configuration modes:
• Input: floating, pull-up, pull-down
• Output: push-pull, open-drain
• Alternate function: UART, SPI, etc.

Speed settings:
• Low: 2MHz
• Medium: 25MHz
• Fast: 50MHz
• High: 100MHz

**Timers:**

Basic timer:
• Up/down counting
• Prescaler for clock division
• Auto-reload for period

Timer frequency:
f_timer = f_clock / (Prescaler + 1) / (Period + 1)

Example: Generate 1kHz PWM
• f_clock = 84MHz
• Target: 1kHz
• Choose Prescaler = 83 (84MHz/84 = 1MHz)
• Period = 999 (1MHz/1000 = 1kHz)

PWM duty cycle:
Duty = Compare / (Period + 1)

For 60% duty:
Compare = 0.6 × 1000 = 600

**ADC (Analog-to-Digital):**

Resolution:
• 12-bit: 4096 levels
• 10-bit: 1024 levels
• 8-bit: 256 levels

Conversion time:
t_conv = (Sampling + Conversion) / f_ADC

Example: 12-bit ADC
• Sampling: 3 cycles
• Conversion: 12 cycles
• f_ADC = 12MHz
• t_conv = (3+12)/12MHz = 1.25μs

Digital value:
Value = (V_in / V_ref) × (2^n - 1)

For V_in=2.5V, V_ref=3.3V, 12-bit:
Value = (2.5/3.3) × 4095 = 3105

**DMA (Direct Memory Access):**

Transfer without CPU:
• Frees CPU for other tasks
• Faster data movement
• Reduces interrupt overhead

Example: ADC to memory
• Configure DMA channel
• ADC triggers DMA
• Data copied automatically
• CPU notified when complete`
      },
      {
        title: "Power Management",
        content: `**Power Modes:**

**Run Mode:**
• All peripherals active
• Highest power consumption
• Typical: 50-100mA at 100MHz

**Sleep Mode:**
• CPU stopped
• Peripherals running
• Wake on interrupt
• Typical: 10-20mA

**Stop Mode:**
• CPU and most peripherals stopped
• RTC and watchdog running
• Wake on external interrupt
• Typical: 1-10μA

**Standby Mode:**
• Everything off except RTC
• Lowest power
• Wake on RTC alarm or pin
• Typical: 0.1-1μA

**Example: Battery Life Calculation**

Application profile:
• Active (50mA): 1% of time
• Sleep (15mA): 89% of time
• Stop (5μA): 10% of time

Average current:
I_avg = 0.01×50 + 0.89×15 + 0.10×0.005
I_avg = 0.5 + 13.35 + 0.0005 = 13.85mA

Battery: 2000mAh
Life = 2000mAh / 13.85mA = 144 hours = 6 days

**Clock Gating:**

Disable unused peripherals:
• Each peripheral has enable bit
• Saves power when not needed

Example: Disable UART2
RCC->APB1ENR &= ~RCC_APB1ENR_USART2EN;

Saves ~1mA per peripheral

**Dynamic Voltage Scaling:**

Lower voltage at lower frequency:
• 168MHz: 1.8V
• 84MHz: 1.5V
• 42MHz: 1.2V

Power ∝ V² × f
Reducing both saves significant power!`
      }
    ],
    
    keyTakeaways: [
      "ARM Cortex-M: M0+ (low power), M4 (DSP), M7 (high performance)",
      "Timer frequency: f = f_clock/(Prescaler+1)/(Period+1)",
      "ADC resolution: 12-bit = 4096 levels, LSB = V_ref/4096",
      "DMA transfers data without CPU intervention",
      "Power modes: Run > Sleep > Stop > Standby (decreasing power)",
      "Clock gating and voltage scaling reduce power consumption"
    ],
    
    vocabulary: [
      { term: "Cortex-M", definition: "ARM 32-bit RISC processor core for microcontrollers" },
      { term: "GPIO", definition: "General Purpose Input/Output; configurable digital pins" },
      { term: "DMA", definition: "Direct Memory Access; transfers data without CPU" },
      { term: "Clock Gating", definition: "Disabling clock to unused peripherals to save power" },
      { term: "Prescaler", definition: "Divides clock frequency; Prescaler=83 means divide by 84" }
    ],
    
    quiz: {
      questions: [
        { id: "q10-1", question: "12-bit ADC with 3.3V reference, LSB value:", options: ["0.8mV", "1.6mV", "3.2mV", "6.4mV"], correctAnswer: 0, explanation: "LSB = V_ref/2^n = 3.3V/4096 = 0.805mV!" },
        { id: "q10-2", question: "Timer at 84MHz, Prescaler=83, Period=999 gives:", options: ["100Hz", "1kHz", "10kHz", "100kHz"], correctAnswer: 1, explanation: "f = 84MHz/84/1000 = 1kHz!" },
        { id: "q10-3", question: "DMA advantage:", options: ["Faster CPU", "Transfers data without CPU", "More memory", "Higher clock speed"], correctAnswer: 1, explanation: "DMA transfers data without CPU intervention, freeing CPU for other tasks!" },
        { id: "q10-4", question: "Lowest power mode:", options: ["Run", "Sleep", "Stop", "Standby"], correctAnswer: 3, explanation: "Standby mode: everything off except RTC, <1μA typical!" }
      ]
    }
  },

  {
    id: 11,
    title: "Real-Time Operating Systems (RTOS)",
    unit: "Embedded Systems & Control",
    duration: "30 min",
    introduction: "RTOS enables multitasking on microcontrollers with deterministic timing. Understanding tasks, scheduling, and synchronization is essential for complex embedded systems.",
    
    sections: [
      {
        title: "RTOS Fundamentals",
        content: `**Why Use RTOS?**

Benefits:
• Multitasking (multiple tasks run "simultaneously")
• Deterministic timing
• Priority-based scheduling
• Inter-task communication
• Resource management

**Task States:**

1. **Running:** Currently executing
2. **Ready:** Waiting for CPU
3. **Blocked:** Waiting for event/resource
4. **Suspended:** Manually paused

**Task Creation:**

FreeRTOS example:
\`\`\`c
void vTaskLED(void *pvParameters) {
    while(1) {
        GPIO_TogglePin(LED_PIN);
        vTaskDelay(pdMS_TO_TICKS(500)); // 500ms
    }
}

xTaskCreate(
    vTaskLED,           // Function
    "LED Task",         // Name
    128,                // Stack size (words)
    NULL,               // Parameters
    1,                  // Priority
    NULL                // Task handle
);
\`\`\`

**Scheduling:**

Preemptive scheduling:
• Higher priority task preempts lower
• Time slice for equal priority
• Typical tick: 1ms

**Example: Task Priorities**

Tasks:
• Task A: Priority 3 (highest)
• Task B: Priority 2
• Task C: Priority 1 (lowest)

Execution:
1. Task C running
2. Task B becomes ready → preempts C
3. Task A becomes ready → preempts B
4. Task A blocks → B resumes
5. Task B blocks → C resumes

**Stack Size:**

Each task needs stack:
• Local variables
• Function calls
• Interrupt context

Typical sizes:
• Simple task: 128-256 words
• Complex task: 512-1024 words
• Monitor with: uxTaskGetStackHighWaterMark()`
      },
      {
        title: "Synchronization & Communication",
        content: `**Semaphores:**

Binary semaphore (mutex):
• Lock/unlock resource
• Prevents simultaneous access

Example: Shared UART
\`\`\`c
SemaphoreHandle_t xUARTMutex;

void vTask1(void *pvParameters) {
    while(1) {
        xSemaphoreTake(xUARTMutex, portMAX_DELAY);
        UART_Print("Task 1\\n");
        xSemaphoreGive(xUARTMutex);
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}
\`\`\`

Counting semaphore:
• Count available resources
• Example: Buffer slots

**Queues:**

FIFO data passing:
• Producer-consumer pattern
• Thread-safe
• Blocking send/receive

Example: ADC to processing
\`\`\`c
QueueHandle_t xADCQueue;

// ADC task (producer)
void vADCTask(void *pvParameters) {
    uint16_t adcValue;
    while(1) {
        adcValue = ADC_Read();
        xQueueSend(xADCQueue, &adcValue, 0);
        vTaskDelay(pdMS_TO_TICKS(10));
    }
}

// Processing task (consumer)
void vProcessTask(void *pvParameters) {
    uint16_t value;
    while(1) {
        if(xQueueReceive(xADCQueue, &value, portMAX_DELAY)) {
            // Process value
            float voltage = value * 3.3f / 4096.0f;
        }
    }
}
\`\`\`

**Event Groups:**

Synchronize multiple events:
• Wait for multiple conditions
• Signal completion

Example: Wait for sensors ready
\`\`\`c
EventGroupHandle_t xSensorEvents;
#define TEMP_READY  (1 << 0)
#define HUMID_READY (1 << 1)
#define ALL_READY   (TEMP_READY | HUMID_READY)

// Wait for both sensors
xEventGroupWaitBits(
    xSensorEvents,
    ALL_READY,
    pdTRUE,  // Clear on exit
    pdTRUE,  // Wait for all bits
    portMAX_DELAY
);
\`\`\``
      },
      {
        title: "Timing & Performance",
        content: `**Task Timing:**

Periodic task:
\`\`\`c
void vPeriodicTask(void *pvParameters) {
    TickType_t xLastWakeTime = xTaskGetTickCount();
    const TickType_t xPeriod = pdMS_TO_TICKS(100);
    
    while(1) {
        // Do work
        
        vTaskDelayUntil(&xLastWakeTime, xPeriod);
    }
}
\`\`\`

Difference:
• vTaskDelay: relative delay
• vTaskDelayUntil: absolute timing (no drift)

**CPU Utilization:**

Measure idle time:
\`\`\`c
uint32_t ulIdleCount = 0;

void vApplicationIdleHook(void) {
    ulIdleCount++;
}
\`\`\`

CPU usage = (1 - idle_time/total_time) × 100%

**Memory Usage:**

Heap for RTOS objects:
• Tasks
• Queues
• Semaphores
• Timers

FreeRTOS heap schemes:
• heap_1: Simple, no free
• heap_2: Best fit, fragmentation
• heap_3: Wrapper for malloc/free
• heap_4: Coalescence, recommended
• heap_5: Multiple memory regions

**Example: System Design**

Requirements:
• Read sensor: 10Hz (100ms period)
• Update display: 2Hz (500ms period)
• Process data: 5Hz (200ms period)
• Handle button: event-driven

Tasks:
1. Sensor task: Priority 3, 100ms period
2. Display task: Priority 1, 500ms period
3. Process task: Priority 2, 200ms period
4. Button ISR → semaphore → task

Total stack: 4 × 256 words = 1KB
Heap: ~2KB for queues/semaphores
Total RAM: ~3KB

**Timing Analysis:**

Worst-case response:
• Button press
• Sensor task running (10ms)
• Process task preempts (5ms)
• Button task runs (2ms)
• Total: 17ms response time`
      }
    ],
    
    keyTakeaways: [
      "RTOS enables multitasking with deterministic timing",
      "Tasks have priorities; higher priority preempts lower",
      "Semaphores protect shared resources (mutex)",
      "Queues pass data between tasks (producer-consumer)",
      "vTaskDelayUntil for periodic tasks without drift",
      "Monitor stack usage with uxTaskGetStackHighWaterMark()"
    ],
    
    vocabulary: [
      { term: "RTOS", definition: "Real-Time Operating System; enables multitasking with deterministic timing" },
      { term: "Task", definition: "Independent thread of execution with own stack and priority" },
      { term: "Semaphore", definition: "Synchronization primitive; binary (mutex) or counting" },
      { term: "Queue", definition: "FIFO buffer for inter-task communication" },
      { term: "Preemption", definition: "Higher priority task interrupts lower priority task" }
    ],
    
    quiz: {
      questions: [
        { id: "q11-1", question: "RTOS task priority:", options: ["Lower number = higher priority", "Higher number = higher priority", "All tasks equal priority", "Priority doesn't matter"], correctAnswer: 1, explanation: "In FreeRTOS, higher number = higher priority. Priority 3 preempts priority 1!" },
        { id: "q11-2", question: "Mutex (binary semaphore) used for:", options: ["Passing data", "Protecting shared resources", "Timing delays", "Counting events"], correctAnswer: 1, explanation: "Mutex protects shared resources from simultaneous access by multiple tasks!" },
        { id: "q11-3", question: "Queue is:", options: ["LIFO buffer", "FIFO buffer for inter-task communication", "Priority queue", "Circular buffer"], correctAnswer: 1, explanation: "Queue is FIFO (First In First Out) for passing data between tasks!" },
        { id: "q11-4", question: "vTaskDelayUntil vs vTaskDelay:", options: ["Same thing", "DelayUntil has absolute timing, no drift", "Delay is faster", "DelayUntil uses less memory"], correctAnswer: 1, explanation: "vTaskDelayUntil maintains absolute timing for periodic tasks, preventing drift!" }
      ]
    }
  },

  {
    id: 12,
    title: "PID Control Implementation",
    unit: "Embedded Systems & Control",
    duration: "30 min",
    introduction: "PID control is the workhorse of industrial control systems. Understanding proportional, integral, and derivative terms enables precise control of motors, temperature, and other processes.",
    
    sections: [
      {
        title: "PID Fundamentals",
        content: `**Control Equation:**

u(t) = K_p × e(t) + K_i × ∫e(t)dt + K_d × de(t)/dt

Where:
• u(t) = control output
• e(t) = error (setpoint - measurement)
• K_p = proportional gain
• K_i = integral gain
• K_d = derivative gain

**Discrete Implementation:**

For microcontroller (sampled at T_s):

u[n] = K_p × e[n] + K_i × Σe[n] × T_s + K_d × (e[n] - e[n-1]) / T_s

**Example: Temperature Control**

Target: 50°C
Current: 45°C
Error: e = 50 - 45 = 5°C

Gains:
• K_p = 2.0
• K_i = 0.1
• K_d = 0.5
• T_s = 0.1s (100ms)

First iteration (n=0):
• e[0] = 5°C
• Σe = 5°C
• Δe = 5°C (no previous)

u[0] = 2.0×5 + 0.1×5×0.1 + 0.5×5/0.1
u[0] = 10 + 0.05 + 25 = 35.05

Output: 35% heater power

**P Term (Proportional):**
• Responds to current error
• Fast response
• Steady-state error
• u_p = K_p × e

**I Term (Integral):**
• Eliminates steady-state error
• Accumulates past errors
• Can cause overshoot
• u_i = K_i × Σe × T_s

**D Term (Derivative):**
• Predicts future error
• Dampens oscillations
• Sensitive to noise
• u_d = K_d × Δe / T_s`
      },
      {
        title: "Tuning Methods",
        content: `**Ziegler-Nichols Method:**

Step 1: Set K_i = 0, K_d = 0
Step 2: Increase K_p until oscillation
Step 3: Note K_u (ultimate gain) and T_u (period)

Calculate:
• K_p = 0.6 × K_u
• K_i = 1.2 × K_u / T_u
• K_d = 0.075 × K_u × T_u

**Example:**
• K_u = 10 (oscillates)
• T_u = 2 seconds

Tuned gains:
• K_p = 0.6 × 10 = 6.0
• K_i = 1.2 × 10 / 2 = 6.0
• K_d = 0.075 × 10 × 2 = 1.5

**Manual Tuning:**

1. Start with K_p only:
   • Increase until fast response
   • Accept some overshoot

2. Add K_i:
   • Eliminate steady-state error
   • Reduce if too much overshoot

3. Add K_d:
   • Reduce overshoot
   • Dampen oscillations

**Anti-Windup:**

Problem: Integral term accumulates when saturated

Solution: Clamp integral
\`\`\`c
integral += error * dt;

// Clamp integral
if (integral > integral_max) integral = integral_max;
if (integral < integral_min) integral = integral_min;

// Or reset when saturated
if (output > output_max || output < output_min) {
    integral = 0;
}
\`\`\`

**Derivative Filtering:**

Problem: Derivative amplifies noise

Solution: Low-pass filter
\`\`\`c
// Simple exponential filter
derivative_filtered = alpha * derivative + (1-alpha) * derivative_prev;
// alpha = 0.1 to 0.3 typical
\`\`\``
      },
      {
        title: "Implementation Example",
        content: `**C Code Implementation:**

\`\`\`c
typedef struct {
    float Kp, Ki, Kd;
    float integral;
    float prev_error;
    float output_min, output_max;
    float integral_min, integral_max;
} PID_Controller;

float PID_Update(PID_Controller *pid, float setpoint, 
                 float measurement, float dt) {
    // Calculate error
    float error = setpoint - measurement;
    
    // Proportional term
    float P = pid->Kp * error;
    
    // Integral term with anti-windup
    pid->integral += error * dt;
    if (pid->integral > pid->integral_max) 
        pid->integral = pid->integral_max;
    if (pid->integral < pid->integral_min) 
        pid->integral = pid->integral_min;
    float I = pid->Ki * pid->integral;
    
    // Derivative term
    float derivative = (error - pid->prev_error) / dt;
    float D = pid->Kd * derivative;
    
    // Calculate output
    float output = P + I + D;
    
    // Clamp output
    if (output > pid->output_max) output = pid->output_max;
    if (output < pid->output_min) output = pid->output_min;
    
    // Save for next iteration
    pid->prev_error = error;
    
    return output;
}
\`\`\`

**Usage Example:**

\`\`\`c
// Initialize PID
PID_Controller motor_pid = {
    .Kp = 2.0,
    .Ki = 0.5,
    .Kd = 0.1,
    .integral = 0,
    .prev_error = 0,
    .output_min = 0,
    .output_max = 100,
    .integral_min = -50,
    .integral_max = 50
};

// Control loop (10ms period)
void Control_Loop(void) {
    float setpoint = 1000.0;  // RPM
    float measurement = Read_Encoder_RPM();
    float dt = 0.01;  // 10ms
    
    float pwm = PID_Update(&motor_pid, setpoint, 
                           measurement, dt);
    
    Set_Motor_PWM(pwm);
}
\`\`\`

**Performance Metrics:**

Rise time: Time to reach 90% of setpoint
Overshoot: Peak above setpoint (%)
Settling time: Time to stay within ±2%
Steady-state error: Final error

Good tuning:
• Rise time: <1 second
• Overshoot: <10%
• Settling time: <3 seconds
• SS error: <1%`
      }
    ],
    
    keyTakeaways: [
      "PID: u = K_p×e + K_i×∫e + K_d×de/dt",
      "P term: fast response but steady-state error",
      "I term: eliminates SS error but can overshoot",
      "D term: dampens oscillations but amplifies noise",
      "Anti-windup prevents integral accumulation when saturated",
      "Ziegler-Nichols: K_p=0.6K_u, K_i=1.2K_u/T_u, K_d=0.075K_u×T_u"
    ],
    
    vocabulary: [
      { term: "PID", definition: "Proportional-Integral-Derivative controller" },
      { term: "Steady-State Error", definition: "Final error after system settles" },
      { term: "Anti-Windup", definition: "Prevents integral term accumulation when output saturated" },
      { term: "Overshoot", definition: "Amount output exceeds setpoint; expressed as %" },
      { term: "Ziegler-Nichols", definition: "PID tuning method based on ultimate gain and period" }
    ],
    
    quiz: {
      questions: [
        { id: "q12-1", question: "P term responds to:", options: ["Past errors", "Current error", "Future error", "Rate of change"], correctAnswer: 1, explanation: "Proportional term responds to current error: u_p = K_p × e!" },
        { id: "q12-2", question: "I term eliminates:", options: ["Overshoot", "Oscillations", "Steady-state error", "Noise"], correctAnswer: 2, explanation: "Integral term accumulates error over time, eliminating steady-state error!" },
        { id: "q12-3", question: "D term helps with:", options: ["Steady-state error", "Dampening oscillations", "Faster response", "Lower power"], correctAnswer: 1, explanation: "Derivative term predicts future error, dampening oscillations!" },
        { id: "q12-4", question: "Anti-windup prevents:", options: ["Oscillations", "Integral accumulation when saturated", "Derivative noise", "Proportional error"], correctAnswer: 1, explanation: "Anti-windup clamps integral term to prevent accumulation when output is saturated!" }
      ]
    }
  },

  {
    id: 13,
    title: "Sensor Interfacing (I2C, SPI, UART)",
    unit: "Embedded Systems & Control",
    duration: "30 min",
    introduction: "Communication protocols connect microcontrollers to sensors and peripherals. Understanding I2C, SPI, and UART enables integration of diverse components.",
    
    sections: [
      {
        title: "I2C (Inter-Integrated Circuit)",
        content: `**Protocol Basics:**

Two wires:
• SDA: Serial Data
• SCL: Serial Clock
• Both need pull-up resistors (4.7kΩ typical)

Multi-master, multi-slave:
• 7-bit addressing: 128 devices
• 10-bit addressing: 1024 devices

Speed modes:
• Standard: 100 kbit/s
• Fast: 400 kbit/s
• Fast Plus: 1 Mbit/s
• High Speed: 3.4 Mbit/s

**Transaction Format:**

1. START condition (SDA falls while SCL high)
2. Address byte (7 bits + R/W bit)
3. ACK from slave
4. Data bytes
5. ACK after each byte
6. STOP condition (SDA rises while SCL high)

**Example: Read Temperature from LM75**

Address: 0x48 (7-bit)
Register: 0x00 (temperature)

Write sequence:
• START
• 0x48 << 1 | 0 (write)
• ACK
• 0x00 (register address)
• ACK
• STOP

Read sequence:
• START
• 0x48 << 1 | 1 (read)
• ACK
• Read MSB
• ACK
• Read LSB
• NACK
• STOP

Temperature calculation:
Temp = (MSB << 8 | LSB) / 256.0

**Pull-up Resistor Calculation:**

R_pullup = (V_DD - V_OL) / I_OL

For 3.3V, 3mA sink:
R = (3.3 - 0.4) / 0.003 = 967Ω

Use 1kΩ (faster) or 4.7kΩ (standard)

**Bus Capacitance:**

Max capacitance:
• Standard: 400pF
• Fast: 400pF
• Fast Plus: 550pF

Each device adds ~10pF
Long traces add ~1pF/cm`
      },
      {
        title: "SPI (Serial Peripheral Interface)",
        content: `**Protocol Basics:**

Four wires:
• MOSI: Master Out Slave In
• MISO: Master In Slave Out
• SCK: Serial Clock
• CS/SS: Chip Select (one per slave)

Full-duplex:
• Simultaneous transmit and receive
• Much faster than I2C

Speed:
• Typical: 1-10 MHz
• Can reach 50+ MHz

**Clock Polarity and Phase:**

CPOL (polarity):
• 0: Clock idle low
• 1: Clock idle high

CPHA (phase):
• 0: Sample on first edge
• 1: Sample on second edge

Four modes:
• Mode 0: CPOL=0, CPHA=0
• Mode 1: CPOL=0, CPHA=1
• Mode 2: CPOL=1, CPHA=0
• Mode 3: CPOL=1, CPHA=1

**Example: Read from MPU6050 (IMU)**

Register: 0x3B (ACCEL_XOUT_H)
Mode: 0 or 3 (check datasheet)

Transaction:
1. CS low
2. Send 0x3B | 0x80 (read bit)
3. Send dummy byte, receive ACCEL_X_H
4. Send dummy byte, receive ACCEL_X_L
5. Repeat for Y and Z
6. CS high

Acceleration:
Accel_X = (H << 8 | L) / 16384.0  // ±2g range

**Multi-Slave Configuration:**

Separate CS for each slave:
• CS1 → Sensor 1
• CS2 → Sensor 2
• CS3 → Sensor 3

Shared MOSI, MISO, SCK

**Timing Calculations:**

Bit time:
t_bit = 1 / f_SCK

For 1 MHz SPI:
t_bit = 1μs

16-bit transfer:
t_transfer = 16 × 1μs = 16μs

Plus CS setup/hold: ~20μs total`
      },
      {
        title: "UART (Universal Asynchronous Receiver-Transmitter)",
        content: `**Protocol Basics:**

Two wires:
• TX: Transmit
• RX: Receive
• Cross-connected (TX→RX, RX→TX)

Asynchronous:
• No clock signal
• Both sides must agree on baud rate

Frame format:
• Start bit (0)
• Data bits (5-9, typically 8)
• Optional parity bit
• Stop bits (1, 1.5, or 2)

**Common Baud Rates:**

• 9600 bps (slow, reliable)
• 115200 bps (common)
• 921600 bps (fast)
• 1 Mbps (very fast)

**Timing:**

Bit time:
t_bit = 1 / baud_rate

For 115200 baud:
t_bit = 1/115200 = 8.68μs

10-bit frame (8N1):
t_frame = 10 × 8.68μs = 86.8μs

**Example: Send "Hello"**

Configuration: 115200 baud, 8N1

Each character:
• Start bit: 0
• 8 data bits (LSB first)
• Stop bit: 1

'H' = 0x48 = 0b01001000
Frame: 0 00010010 1 (LSB first)

Time for "Hello" (5 chars):
t = 5 × 86.8μs = 434μs

**Baud Rate Error:**

Actual vs desired:
Error = |Actual - Desired| / Desired × 100%

Example: 16MHz clock, 115200 target
Divisor = 16M / (16 × 115200) = 8.68
Use 9: Actual = 16M / (16 × 9) = 111111 baud
Error = |111111 - 115200| / 115200 = 3.5%

Acceptable if <5%

**Flow Control:**

Hardware (RTS/CTS):
• RTS: Request To Send
• CTS: Clear To Send
• Prevents buffer overflow

Software (XON/XOFF):
• XON: 0x11 (resume)
• XOFF: 0x13 (pause)
• Less reliable

**DMA with UART:**

Efficient for large transfers:
\`\`\`c
// Configure DMA for UART TX
DMA_Config(
    DMA_UART_TX,
    buffer,
    length,
    DMA_PRIORITY_HIGH
);

// Start transfer
DMA_Start(DMA_UART_TX);

// CPU free for other tasks
// Interrupt when complete
\`\`\``
      }
    ],
    
    keyTakeaways: [
      "I2C: 2 wires (SDA, SCL), multi-master, 7-bit addressing, 100-400 kbit/s typical",
      "SPI: 4 wires (MOSI, MISO, SCK, CS), full-duplex, 1-50 MHz, faster than I2C",
      "UART: 2 wires (TX, RX), asynchronous, common baud rates: 9600, 115200",
      "I2C needs pull-up resistors (4.7kΩ typical)",
      "SPI has 4 modes based on CPOL and CPHA",
      "UART baud rate error should be <5%"
    ],
    
    vocabulary: [
      { term: "I2C", definition: "Inter-Integrated Circuit; 2-wire serial protocol with addressing" },
      { term: "SPI", definition: "Serial Peripheral Interface; 4-wire full-duplex protocol" },
      { term: "UART", definition: "Universal Asynchronous Receiver-Transmitter; 2-wire async protocol" },
      { term: "Baud Rate", definition: "Symbols per second; for UART, typically bits per second" },
      { term: "Pull-up Resistor", definition: "Resistor to V_DD; needed for I2C open-drain outputs" }
    ],
    
    quiz: {
      questions: [
        { id: "q13-1", question: "I2C uses how many wires?", options: ["2 (SDA, SCL)", "3 (MOSI, MISO, SCK)", "4 (MOSI, MISO, SCK, CS)", "1 (TX/RX)"], correctAnswer: 0, explanation: "I2C uses 2 wires: SDA (data) and SCL (clock), plus pull-up resistors!" },
        { id: "q13-2", question: "SPI advantage over I2C:", options: ["Fewer wires", "Multi-master", "Much faster (full-duplex)", "Lower power"], correctAnswer: 2, explanation: "SPI is full-duplex and much faster (1-50MHz vs 100-400kHz for I2C)!" },
        { id: "q13-3", question: "UART at 115200 baud, bit time:", options: ["4.34μs", "8.68μs", "17.36μs", "34.72μs"], correctAnswer: 1, explanation: "t_bit = 1/115200 = 8.68μs per bit!" },
        { id: "q13-4", question: "I2C pull-up resistor typical value:", options: ["100Ω", "1kΩ", "4.7kΩ", "100kΩ"], correctAnswer: 2, explanation: "I2C typically uses 4.7kΩ pull-ups (1kΩ for faster speeds)!" }
      ]
    }
  },

  {
    id: 14,
    title: "Wireless Communication (WiFi, Bluetooth, LoRa)",
    unit: "Embedded Systems & Control",
    duration: "30 min",
    introduction: "Wireless connectivity enables IoT and remote control. Understanding WiFi, Bluetooth, and LoRa helps choose the right technology for each application.",
    
    sections: [
      {
        title: "WiFi (802.11)",
        content: `**Standards:**

802.11b/g/n (2.4 GHz):
• Range: 50-100m indoors
• Speed: 11-600 Mbps
• Crowded band (interference)

802.11ac (5 GHz):
• Range: 30-50m indoors
• Speed: 433-6933 Mbps
• Less interference

**Power Consumption:**

Active (transmitting):
• 170-300mA at 3.3V
• 0.5-1W power

Sleep modes:
• Light sleep: 15-20mA
• Deep sleep: 10-20μA
• Modem sleep: 15mA

**Example: ESP32**

Specifications:
• WiFi 802.11 b/g/n
• Bluetooth 4.2 / BLE
• Dual-core 240 MHz
• 520 KB SRAM

Power modes:
• Active: 160-260mA
• Modem sleep: 20-68mA
• Light sleep: 0.8mA
• Deep sleep: 10μA

**Battery Life Calculation:**

Application: Send data every 10 minutes
• Active (1s): 200mA
• Deep sleep (599s): 0.01mA

Average current:
I_avg = (200×1 + 0.01×599) / 600
I_avg = (200 + 6) / 600 = 0.34mA

Battery: 2000mAh
Life = 2000 / 0.34 = 5882 hours = 245 days!

**TCP/IP Stack:**

Layers:
• Application: HTTP, MQTT
• Transport: TCP, UDP
• Network: IP
• Link: WiFi

Example: MQTT publish
\`\`\`c
// Connect to WiFi
WiFi.begin(ssid, password);

// Connect to MQTT broker
client.connect("mqtt.server.com", 1883);

// Publish data
client.publish("sensor/temp", "23.5");
\`\`\``
      },
      {
        title: "Bluetooth & BLE",
        content: `**Bluetooth Classic:**

Specifications:
• Range: 10-100m
• Speed: 1-3 Mbps
• Power: 30-100mA active

Use cases:
• Audio streaming
• File transfer
• Serial replacement (SPP)

**Bluetooth Low Energy (BLE):**

Specifications:
• Range: 10-50m
• Speed: 125-2000 kbps
• Power: 10-15mA active, <1μA sleep

Advantages:
• 10-100× lower power
• Fast connection (<6ms)
• Coin cell battery for years

**BLE Architecture:**

GATT (Generic Attribute Profile):
• Services: Groups of characteristics
• Characteristics: Data values
• Descriptors: Metadata

Example: Heart Rate Service
• Service UUID: 0x180D
• Characteristic: Heart Rate Measurement
• Value: uint8 (beats per minute)

**Example: BLE Temperature Sensor**

\`\`\`c
// Define service and characteristic
BLEService tempService("181A");  // Environmental Sensing
BLEFloatCharacteristic tempChar("2A6E", BLERead | BLENotify);

// Setup
tempService.addCharacteristic(tempChar);
BLE.addService(tempService);
BLE.advertise();

// Update value
float temperature = readSensor();
tempChar.writeValue(temperature);
\`\`\`

**Power Optimization:**

Connection interval:
• Short (7.5ms): Low latency, high power
• Long (4s): High latency, low power

Advertising interval:
• Fast (20ms): Quick discovery, high power
• Slow (1s): Slow discovery, low power

**Range Calculation:**

Free space path loss:
FSPL = 20×log₁₀(d) + 20×log₁₀(f) + 32.45

For 2.4 GHz at 10m:
FSPL = 20×log₁₀(10) + 20×log₁₀(2400) + 32.45
FSPL = 20 + 67.6 + 32.45 = 120 dB

Link budget:
TX power: +4 dBm
RX sensitivity: -90 dBm
Margin: 4 - (-90) - 120 = -26 dB

Need antenna gain or higher TX power!`
      },
      {
        title: "LoRa & LoRaWAN",
        content: `**LoRa (Long Range):**

Specifications:
• Range: 2-15 km (urban/rural)
• Speed: 0.3-50 kbps
• Power: 100-150mA TX, <1μA sleep
• Frequency: 433/868/915 MHz (regional)

**Spreading Factor (SF):**

SF7 to SF12:
• SF7: Fast (5.5 kbps), short range
• SF12: Slow (0.3 kbps), long range

Time on air:
ToA = 2^SF / BW

For SF12, BW=125kHz:
ToA = 2^12 / 125000 = 32.8ms per symbol

**Example: Send 20 bytes**

Configuration:
• SF = 10
• BW = 125 kHz
• CR = 4/5 (coding rate)

Time on air:
ToA ≈ 370ms

Power consumption:
E = 120mA × 370ms × 3.3V = 146 mJ

**LoRaWAN Protocol:**

Classes:
• Class A: Lowest power, RX after TX only
• Class B: Scheduled RX windows
• Class C: Continuous RX, highest power

Network architecture:
• End devices → Gateways → Network server → Application

**Duty Cycle Limits:**

EU 868 MHz: 1% duty cycle
• 36 seconds per hour maximum
• 3600s × 0.01 = 36s

If ToA = 370ms:
Max messages = 36s / 0.37s = 97 per hour

**Battery Life:**

Application: Send every 10 minutes
• TX (370ms): 120mA
• Sleep (599.63s): 0.001mA

Average:
I_avg = (120×0.37 + 0.001×599.63) / 600
I_avg = (44.4 + 0.6) / 600 = 0.075mA

Battery: 2000mAh
Life = 2000 / 0.075 = 26,667 hours = 3 years!

**Range Calculation:**

Link budget:
• TX power: +14 dBm
• TX antenna: +2 dBi
• RX antenna: +2 dBi
• RX sensitivity: -137 dBm (SF12)

Budget = 14 + 2 + 2 - (-137) = 155 dB

Path loss at 868 MHz:
FSPL = 155 dB allows ~15 km range!`
      }
    ],
    
    keyTakeaways: [
      "WiFi: High speed (11-600 Mbps), short range (50-100m), high power (200mA)",
      "BLE: Low power (<1μA sleep), medium speed (125-2000 kbps), 10-50m range",
      "LoRa: Very long range (2-15 km), low speed (0.3-50 kbps), low power",
      "BLE uses GATT: Services contain Characteristics with data values",
      "LoRa spreading factor: SF7 (fast, short) to SF12 (slow, long)",
      "Duty cycle limits: EU 868MHz has 1% limit (36s per hour)"
    ],
    
    vocabulary: [
      { term: "BLE", definition: "Bluetooth Low Energy; 10-100× lower power than classic Bluetooth" },
      { term: "GATT", definition: "Generic Attribute Profile; BLE data structure" },
      { term: "LoRa", definition: "Long Range; low-power wide-area network technology" },
      { term: "Spreading Factor", definition: "LoRa parameter; SF7-SF12, higher = longer range but slower" },
      { term: "Duty Cycle", definition: "Percentage of time transmitting; limited by regulations" }
    ],
    
    quiz: {
      questions: [
        { id: "q14-1", question: "WiFi typical active power:", options: ["1-5mA", "10-20mA", "50-100mA", "200-300mA"], correctAnswer: 3, explanation: "WiFi active power: 200-300mA. Much higher than BLE or LoRa!" },
        { id: "q14-2", question: "BLE advantage over Bluetooth Classic:", options: ["Higher speed", "10-100× lower power", "Longer range", "Better audio"], correctAnswer: 1, explanation: "BLE uses 10-100× less power than classic Bluetooth, enabling coin cell operation!" },
        { id: "q14-3", question: "LoRa typical range:", options: ["10-50m", "100-500m", "2-15 km", "50-100 km"], correctAnswer: 2, explanation: "LoRa range: 2-15 km depending on environment and spreading factor!" },
        { id: "q14-4", question: "LoRa SF12 vs SF7:", options: ["SF12 faster", "SF12 longer range but slower", "SF12 lower power", "No difference"], correctAnswer: 1, explanation: "Higher spreading factor = longer range but slower speed. SF12 slowest but longest range!" }
      ]
    }
  }
];
