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
  }
];

// Lessons 12-14 will continue...
export default electronicsUnit2EmbeddedControl;
