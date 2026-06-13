import { BranchInfo } from '../types';

export const branchesData: BranchInfo[] = [
  {
    id: 'cse',
    name: 'CSE',
    fullName: 'Computer Science and Information Technology',
    overview: 'GATE CSE focus heavily on logical reasoning, mathematical proofing, and foundational computational models. The syllabus has high synergy between subjects (e.g., Theory of Computation feeds into Compiler Design, Digital Logic feeds into Computer Organization and Architecture). It is structured, highly scoring if concepts are clear, and carries immense demand for IIT admissions and top PSU options.',
    difficultyLevel: 'Moderate',
    bestStartSubject: 'Programming & Data Structures AND Discrete Mathematics',
    prepOrder: [
      'Engineering Mathematics & Discrete Math',
      'Programming & Data Structures',
      'Algorithms',
      'Digital Logic',
      'Computer Organization & Architecture (COA)',
      'Theory of Computation (TOC)',
      'Compiler Design',
      'Operating Systems (OS)',
      'Database Management Systems (DBMS)',
      'Computer Networks (CN)',
      'General Aptitude'
    ],
    idealTimeMonths: 8,
    beginnerStrategy: 'Start with Discrete Mathematics and C Programming. Mathematics builds the abstract thinking needed for Algorithms and TOC. Never memorize pseudocode; trace algorithm execution manually. Solve PYQs of TOC and OS immediately after finishing the theory to understand how concepts translate to multiple-select questions (MSQs).',
    mistakes: [
      'Ignoring Discrete Mathematics, which directly underpins 3 or 4 other subjects.',
      'Losing marks in COA due to lack of standard instruction-level calculations and memory mapping concepts.',
      'Over-focusing on advanced programming syntax instead of algorithmic time complexities and data structures.'
    ],
    interviewVideoId: 'M5tEUGFpCg0',
    rankEstimates: [
      {
        "year": 2024,
        "score": 88,
        "rank": 1
      },
      {
        "year": 2024,
        "score": 83,
        "rank": 10
      },
      {
        "year": 2024,
        "score": 76,
        "rank": 100
      },
      {
        "year": 2023,
        "score": 90,
        "rank": 1
      },
      {
        "year": 2023,
        "score": 85,
        "rank": 10
      },
      {
        "year": 2023,
        "score": 78,
        "rank": 100
      },
      {
        "year": 2022,
        "score": 87,
        "rank": 1
      },
      {
        "year": 2022,
        "score": 82,
        "rank": 10
      },
      {
        "year": 2022,
        "score": 74,
        "rank": 100
      }
    ],
    subjects: [
      {
        name: 'Discrete Mathematics & Calculus',
        weightage: '11-13 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '70 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Covers mathematical logic, set theory, relations, combinatorics, graph theory, algebraic structures, and matrix algebra. Serves as the foundation for algorithms and theory of computation.',
        videoId: '_ZYrnN8NUfE',
        isHighROI: true
      },
      {
        name: 'Programming & Data Structures',
        weightage: '10-12 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '55 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'Programming in C, recursion, arrays, stacks, queues, linked lists, trees (binary trees, binary search trees, AVL trees), and graphs. Highly scoring and straightforward with practice.',
        videoId: 's-SjRRR2EAc',
        isHighROI: true
      },
      {
        name: 'Algorithms',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '60 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Searching, sorting, hashing. Asymptotic worst/average case time and space complexity. Algorithm design techniques: greedy, dynamic programming, and divide-and-conquer. Graph traversals.',
        videoId: 'kq8u6rpbpnU',
        isHighROI: true
      },
      {
        name: 'Theory of Computation (TOC)',
        weightage: '8-9 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '50 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Double-advantage',
        description: 'Regular expressions and finite automata. Context-free grammars and push-down automata. Regular and context-free languages. Turing machines and undecidability. Extremely structured and highly scoring.',
        videoId: 'kFzEd6hfKtM',
        isHighROI: true
      },
      {
        name: 'Operating Systems (OS)',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '50 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'Processes, threads, CPU scheduling. Concurrency and synchronization (semaphores, monitors, mutexes). Deadlock handling. Memory management and virtual memory. File systems.',
        videoId: '2BayPOKpXiw',
        isHighROI: true
      },
      {
        name: 'Computer Organization & Architecture (COA)',
        weightage: '6-8 Marks',
        category: 'Medium',
        difficulty: 'Hard',
        timeNeeded: '65 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Machine instructions and addressing modes. ALU, data-path and control unit. Instruction pipelining (hazards, performance). Memory hierarchy: cache memory, main memory, and virtual memory. I/O interface.',
        videoId: 'Ol8D69VKX2k',
        isHighROI: false
      },
      {
        name: 'Database Management Systems (DBMS)',
        weightage: '6-8 Marks',
        category: 'Medium',
        difficulty: 'Easy',
        timeNeeded: '40 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'Medium',
        type: 'Scoring',
        description: 'ER-model. Relational model: relational algebra, tuple calculus, SQL. Integrity constraints, normal forms (1NF, 2NF, 3NF, BCNF). Transactions and concurrency control.',
        videoId: 'T7AxM7Vqvaw',
        isHighROI: true
      },
      {
        name: 'Computer Networks (CN)',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '70 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Concept of layering (OSI & TCP/IP models). Flow and error control. IP addressing, routing. TCP/UDP, transport layer controls. Application layer protocols. Network security.',
        videoId: 'WB8n1-HOs_M',
        isHighROI: false
      },
      {
        name: 'Digital Logic',
        weightage: '4-6 Marks',
        category: 'Low',
        difficulty: 'Easy',
        timeNeeded: '30 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'Medium',
        type: 'Scoring',
        description: 'Boolean algebra, minimization of functions. Combinational circuits: multiplexers, decoders, adders. Sequential circuits: latches, flip-flops, registers, counters.',
        videoId: 'xDARFvArIpc',
        isHighROI: true
      },
      {
        name: 'Compiler Design',
        weightage: '4-5 Marks',
        category: 'Low',
        difficulty: 'Medium',
        timeNeeded: '35 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'Medium',
        type: 'Double-advantage',
        description: 'Lexical analysis, parsing, syntax-directed translation. Runtime environments. Intermediate code generation and local optimization. Directly connected with TOC concepts.',
        videoId: '7Tq2Amm15g8',
        isHighROI: true
      }
    ]
  },
  {
    id: 'ece',
    name: 'ECE',
    fullName: 'Electronics and Communication Engineering',
    overview: 'GATE ECE is traditionally known for highly complex conceptual integration. Electromagnetics, Analog Electronics, and Communication Systems demand high mathematical capabilities. The core concepts require visualising multi-dimensional properties of electronic signals and devices.',
    difficultyLevel: 'Very High',
    bestStartSubject: 'Network Theory AND Signals & Systems',
    prepOrder: [
      'Engineering Mathematics',
      'Network Theory',
      'Signals & Systems',
      'Digital Electronics',
      'Electronic Devices (EDC)',
      'Analog Electronics',
      'Control Systems',
      'Communications',
      'Electromagnetics (EMFT)',
      'General Aptitude'
    ],
    idealTimeMonths: 10,
    beginnerStrategy: 'Do not touch Analog Circuits before mastering Network Theory. Begin with Network Theory to learn circuit reduction. Similarly, learn Signals & Systems before diving into Communications. Use comprehensive schematic tracing for Electronic Devices rather than memorizing formula structures.',
    mistakes: [
      'Underestimating calculations in Communication Systems and failing to account for noise ratios.',
      'Treating Electromagnetics as a pure memorization topic instead of building vectorial intuition.',
      'Ignoring OP-AMP analysis setups in Analog Circuits which contribute a guaranteed 4-6 marks.'
    ],
    interviewVideoId: 'sF3M27K0iPA',
    rankEstimates: [
      {
        "year": 2024,
        "score": 85,
        "rank": 1
      },
      {
        "year": 2024,
        "score": 80,
        "rank": 10
      },
      {
        "year": 2024,
        "score": 73,
        "rank": 100
      },
      {
        "year": 2023,
        "score": 87,
        "rank": 1
      },
      {
        "year": 2023,
        "score": 82,
        "rank": 10
      },
      {
        "year": 2023,
        "score": 75,
        "rank": 100
      },
      {
        "year": 2022,
        "score": 84,
        "rank": 1
      },
      {
        "year": 2022,
        "score": 79,
        "rank": 10
      },
      {
        "year": 2022,
        "score": 71,
        "rank": 100
      }
    ],
    subjects: [
      {
        name: 'Network Theory',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Easy',
        timeNeeded: '45 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'Nodal and mesh analysis. Network theorems (Superposition, Thevenin, Norton, Reciprocity, Maximum Power Transfer). First and second-order transient responses. Two-port networks.',
        videoId: 'wO-f7l9l-E0',
        isHighROI: true
      },
      {
        name: 'Signals & Systems',
        weightage: '7-9 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '50 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Double-advantage',
        description: 'Continuous-time and discrete-time signals. LTI systems: properties, causality, stability. Fourier series and transform. Laplace transform, z-transform. Sampling theorem.',
        videoId: 'HZqGqx9dd30',
        isHighROI: true
      },
      {
        name: 'Digital Circuits',
        weightage: '6-8 Marks',
        category: 'Medium',
        difficulty: 'Easy',
        timeNeeded: '35 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'Medium',
        type: 'Scoring',
        description: 'Number representations. Logic gates and minimization. Multiplexers, decoders. Latches and flip-flops, registers, counters. ADC and DAC converters. Semiconductor memories.',
        videoId: 'INEtYZqtjTo',
        isHighROI: true
      },
      {
        name: 'Analog Electronics',
        weightage: '10-12 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '70 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Diode circuits, BJT/Biasing. Small-signal equivalent models. FET/MOSFET circuits. Operational amplifiers: configurations, feedback, frequency responses, active filters. Oscillators.',
        videoId: 'f7oXhDatwtY',
        isHighROI: false
      },
      {
        name: 'Electronic Devices (EDC)',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '60 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Energy bands in silicon. Carrier transport: diffusion, drift, mobility. Generation and recombination. P-N junction, Zener diode, BJT, MOS capacitor, MOSFET, LED, photodiode.',
        videoId: 'ZiL0PKCU1p4',
        isHighROI: false
      },
      {
        name: 'Control Systems',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '45 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'Feedback principles. Transfer functions. Block diagram reduction, signal flow graphs. Transient response, steady-state errors. Routh-Hurwitz, Root locus. Nyquist and Bode plots.',
        videoId: 'XMfH2P2Fc6Q',
        isHighROI: true
      },
      {
        name: 'Communications',
        weightage: '11-13 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '80 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Amplitude, angle modulation. Superheterodyne receivers. Information theory, entropy. PCM, DPCM, ASK, FSK, PSK. Probability, random variables, PDFs, spectral density of noise.',
        videoId: 'RD4J9pXWgO8',
        isHighROI: true
      },
      {
        name: 'Electromagnetics (EMFT)',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '65 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'Medium',
        type: 'Concept-heavy',
        description: 'Maxwells equations. Wave propagation through medium. Reflection and refraction. Transmission lines: impedance matching. Waveguides. Antennas: radiation pattern, gain.',
        videoId: 'vITMvLIapdk',
        isHighROI: false
      }
    ]
  },
  {
    id: 'ee',
    name: 'EE',
    fullName: 'Electrical Engineering',
    overview: 'GATE Electrical Engineering combines core field-level operations (Machines, Power Systems, Power Electronics) with core system controls. High analytical prowess is rewarded, particularly because calculations are intensive and require strong grasp of phasor mechanics.',
    difficultyLevel: 'Very High',
    bestStartSubject: 'Network Theory AND Signals & Systems',
    prepOrder: [
      'Engineering Mathematics',
      'Network Analysis',
      'Signals & Systems',
      'Electrical Machines',
      'Power Systems',
      'Control Systems',
      'Power Electronics',
      'Analog & Digital Electronics',
      'Electromagnetic Fields',
      'Electrical & Electronic Measurements',
      'General Aptitude'
    ],
    idealTimeMonths: 10,
    beginnerStrategy: 'Solidify electrical circuit analysis concepts first. Do not attempt Electrical Machines without understanding phase relationships in transformer setups. Practice mathematical plotting for Power Electronics waveforms; drawing saves massive formula confusion.',
    mistakes: [
      'Ignoring multi-phase representations in power networks, leading to factor of root-3 calculation errors.',
      'Treating power electronics simply as memorizing output voltage equations instead of solving with waveform integrations.',
      'Underweighting Electrical Measurements, which has simple, highly scoring questions.'
    ],
    interviewVideoId: 'z2st4pnrt24',
    rankEstimates: [
      {
        "year": 2024,
        "score": 82,
        "rank": 1
      },
      {
        "year": 2024,
        "score": 77,
        "rank": 10
      },
      {
        "year": 2024,
        "score": 70,
        "rank": 100
      },
      {
        "year": 2023,
        "score": 84,
        "rank": 1
      },
      {
        "year": 2023,
        "score": 79,
        "rank": 10
      },
      {
        "year": 2023,
        "score": 72,
        "rank": 100
      },
      {
        "year": 2022,
        "score": 81,
        "rank": 1
      },
      {
        "year": 2022,
        "score": 76,
        "rank": 10
      },
      {
        "year": 2022,
        "score": 68,
        "rank": 100
      }
    ],
    subjects: [
      {
        name: 'Electrical Machines',
        weightage: '10-12 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '80 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Single phase and three phase transformers: equivalent circuits, tests, regulation. DC machines, induction machines, synchronous machines: performance, starting, speed control.',
        videoId: '-Fwbsb5XXVg',
        isHighROI: true
      },
      {
        name: 'Power Systems',
        weightage: '10-12 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '85 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Power generation models. Transmission line models and performance. Cable insulation. Bus admittance matrices, load flow analysis. Symmetrical & unsymmetrical fault analysis.',
        videoId: 'I8SNZg4zXY0',
        isHighROI: true
      },
      {
        name: 'Power Electronics',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '75 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Characteristics of semiconductor power devices (SCR, MOSFET, IGBT). Phase controlled rectifiers. DC-to-DC switch mode converters (Buck, Boost, Buck-Boost). Single and three-phase inverters.',
        videoId: 'f7oXhDatwtY',
        isHighROI: false
      },
      {
        name: 'Electrical Circuits',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Easy',
        timeNeeded: '45 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'Network theorems, transient response, steady state sinusoidal analysis, resonance, mutual coupled circuits, balanced three-phase circuits, two-port networks computations.',
        videoId: 'uyvyJIPq_l0',
        isHighROI: true
      },
      {
        name: 'Control Systems',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '50 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'Mathematical modeling of physical systems. Feed-back loops, transient stability, root loci, frequency responses, industrial controller compensators.',
        videoId: 'XMfH2P2Fc6Q',
        isHighROI: true
      },
      {
        name: 'Electromagnetic Fields',
        weightage: '4-5 Marks',
        category: 'Low',
        difficulty: 'Medium',
        timeNeeded: '35 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'Medium',
        type: 'Concept-heavy',
        description: 'Coulombs Law, Electric Field Intensity, Gauss Law. Divergence, Electric potential. Biot-Savart Law, Ampere Law. Faradays Law, Maxwell equations.',
        videoId: '8kcvyoHsXrw',
        isHighROI: false
      }
    ]
  },
  {
    id: 'me',
    name: 'ME',
    fullName: 'Mechanical Engineering',
    overview: 'GATE Mechanical is broad-scoped, split cleanly into Thermal Engineering, Design, and Manufacturing/Production. While Design is highly mathematical and analytical, Manufacturing is content-dense and Thermal requires extreme process-level thermodynamic clarity.',
    difficultyLevel: 'High',
    bestStartSubject: 'Engineering Mechanics and Thermodynamics',
    prepOrder: [
      'Engineering Mathematics',
      'Engineering Mechanics',
      'Strength of Materials (SOM)',
      'Theory of Machines (TOM)',
      'Machine Design',
      'Thermodynamics & Applications',
      'Fluid Mechanics & Machines',
      'Heat Transfer',
      'Manufacturing & Production Engineering',
      'Industrial Engineering & Operations Research',
      'General Aptitude'
    ],
    idealTimeMonths: 8,
    beginnerStrategy: 'Production engineering has massive retention requirements but contains simple calculation steps. Make detailed tabular revision charts of casting, welding, and machining bounds. Study Thermodynamics along with Fluid Dynamics to build strong thermal-fluid integration.',
    mistakes: [
      'Brushing off Industrial Engineering as trivial, which contains highly scoring deterministic algorithms like LPP and PERT/CPM.',
      'Cramming formula tables in Machine Design instead of deriving load combinations with vector equilibrium.',
      'Applying heat-transfer boundary assumptions incorrectly in multi-layered radial systems.'
    ],
    interviewVideoId: '-G7fDUFfmUs',
    rankEstimates: [
      {
        "year": 2024,
        "score": 86,
        "rank": 1
      },
      {
        "year": 2024,
        "score": 81,
        "rank": 10
      },
      {
        "year": 2024,
        "score": 74,
        "rank": 100
      },
      {
        "year": 2023,
        "score": 88,
        "rank": 1
      },
      {
        "year": 2023,
        "score": 83,
        "rank": 10
      },
      {
        "year": 2023,
        "score": 76,
        "rank": 100
      },
      {
        "year": 2022,
        "score": 85,
        "rank": 1
      },
      {
        "year": 2022,
        "score": 80,
        "rank": 10
      },
      {
        "year": 2022,
        "score": 72,
        "rank": 100
      }
    ],
    subjects: [
      {
        name: 'Manufacturing & Production',
        weightage: '14-16 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '90 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Double-advantage',
        description: 'Casting, forming, joining, machining, machine tool operations, metrology, computer integrated manufacturing. Extremely high weight section with direct formulas.',
        videoId: 'viNr7R8JPXc',
        isHighROI: true
      },
      {
        name: 'Thermodynamics & Applications',
        weightage: '10-12 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '70 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'First and second laws, entropy, availability. Vapor and gas power cycles. IC engines, refrigeration, air conditioning, steam turbine setups.',
        videoId: '3u-MrpwcaLA',
        isHighROI: true
      },
      {
        name: 'Strength of Materials (SOM)',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '55 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'Stress and strain, elastic constants. Mohr circle. Shear force and bending moment diagrams. Deflection of beams. Torsion, columns, thin cylinders.',
        videoId: 'j-npMBCp9oc',
        isHighROI: true
      },
      {
        name: 'Fluid Mechanics & Machines',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '65 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Fluid properties, manometry, buoyancy, continuity, Euler and Bernoulli equations. Viscous flow. Boundary layer theory. Turbo-machinery basics.',
        videoId: '3MvRpp7WnK0',
        isHighROI: false
      },
      {
        name: 'Theory of Machines & Vibrations',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '70 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Displacement, velocity and acceleration analysis. Dynamic analysis, gyroscopes, governors, flywheels. Free and forced single degree of freedom vibrations.',
        videoId: '44QLDixnG4g',
        isHighROI: false
      },
      {
        name: 'Industrial Engineering',
        weightage: '6-8 Marks',
        category: 'Medium',
        difficulty: 'Easy',
        timeNeeded: '40 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'Medium',
        type: 'Scoring',
        description: 'Production planning and control, forecasting, inventory models, scheduling. Network analysis: PERT, CPM. Quality control, linear programming.',
        videoId: 'tU7FdDBRVjU',
        isHighROI: true
      }
    ]
  },
  {
    id: 'ce',
    name: 'CE',
    fullName: 'Civil Engineering',
    overview: 'GATE Civil syllabus is exceptionally vast. However, the distribution of marks is highly skewed toward Geotechnical Engineering, Transportation Engineering, and Environmental Engineering. Strong structural foundations can unlock massive technical scoring potentials.',
    difficultyLevel: 'High',
    bestStartSubject: 'Strength of Materials AND Fluid Mechanics',
    prepOrder: [
      'Engineering Mathematics',
      'Strength of Materials',
      'Structural Analysis',
      'Geotechnical Engineering (Soil Mechanics)',
      'Environmental Engineering',
      'Transportation Engineering',
      'Fluid Mechanics & Hydraulics',
      'Hydrology & Irrigation',
      'Geomatics (Surveying)',
      'Construction Materials & Management',
      'General Aptitude'
    ],
    idealTimeMonths: 9,
    beginnerStrategy: 'Focus intensely on Geotechnical Engineering (Soil Mechanics) and Environmental Engineering. Together, they hold nearly ~30% of technical weightage. Structural analysis is highly systematic; master static/kinematic indeterminacy before attempting force methods.',
    mistakes: [
      'Spending too much time on design structural details (Concrete/Steel) from IS Codes rather than mathematical solid mechanics.',
      'Ignoring spatial geomatics equations (Surveying), which provide simple direct calculation points.',
      'Treating Hydrology as a theoretical pass-by without learning unit hydrograph step math.'
    ],
    interviewVideoId: 'FVAZ5BPCha8',
    rankEstimates: [
      {
        "year": 2024,
        "score": 89,
        "rank": 1
      },
      {
        "year": 2024,
        "score": 84,
        "rank": 10
      },
      {
        "year": 2024,
        "score": 77,
        "rank": 100
      },
      {
        "year": 2023,
        "score": 91,
        "rank": 1
      },
      {
        "year": 2023,
        "score": 86,
        "rank": 10
      },
      {
        "year": 2023,
        "score": 79,
        "rank": 100
      },
      {
        "year": 2022,
        "score": 88,
        "rank": 1
      },
      {
        "year": 2022,
        "score": 83,
        "rank": 10
      },
      {
        "year": 2022,
        "score": 75,
        "rank": 100
      }
    ],
    subjects: [
      {
        name: 'Geotechnical Engineering',
        weightage: '14-16 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '85 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Double-advantage',
        description: 'Soil classification, three-phase relationships, permeability, effective stress, consolidation, shear strength, earth pressure theory, shallow and deep foundations.',
        videoId: 'JoF9IZNexQQ',
        isHighROI: true
      },
      {
        name: 'Environmental Engineering',
        weightage: '10-12 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '70 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'Water quality standards, purification systems, distribution networks. Sewage treatment: primary, secondary. Air pollution. Solid waste management.',
        videoId: '9nuNHYkZrSQ',
        isHighROI: true
      },
      {
        name: 'Transportation Engineering',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '55 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'Geometric design of highways: sight distance, horizontal & vertical alignments. Pavement design: flexible, rigid. Traffic flow metrics, collisions.',
        videoId: '5zKC_aq4ypM',
        isHighROI: true
      },
      {
        name: 'Fluid Mechanics & Hydraulics',
        weightage: '7-9 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '55 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Fluid statics, kinetics. Boundary layers. Flow in open channels: specific energy, hydraulic jump. Turbines, pumps, dimensional configurations.',
        videoId: '3MvRpp7WnK0',
        isHighROI: false
      },
      {
        name: 'Strength of Materials',
        weightage: '5-7 Marks',
        category: 'Medium',
        difficulty: 'Medium',
        timeNeeded: '45 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'Bending stress, shear stress, shear center, Mohr circle. Deflection of beams, thin cylinders, Euler-buckling of columns. Base for structural structural analysis.',
        videoId: 'n8BmHaao4qM',
        isHighROI: true
      },
      {
        name: 'Geomatics (Surveying)',
        weightage: '4-6 Marks',
        category: 'Low',
        difficulty: 'Easy',
        timeNeeded: '35 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'Medium',
        type: 'Scoring',
        description: 'Linear & angular measurements, compass surveying, levelling, contouring, GPS/photogrammetry basic equations. Short, scoring, concrete.',
        videoId: 'ycZroq11es8',
        isHighROI: true
      }
    ]
  },
  {
    id: 'in',
    name: 'IN',
    fullName: 'Instrumentation Engineering',
    overview: 'GATE Instrumentation covers a highly specific blend of Electrical, Electronic and Sensor technologies. Precision analysis is key; transducers, optical systems, and signal conditioning circuits represent high conceptual weightages.',
    difficultyLevel: 'High',
    bestStartSubject: 'Sensors & Industrial Instrumentation AND Network Theory',
    prepOrder: [
      'Engineering Mathematics',
      'Network Theory',
      'Signals & Systems',
      'Analog Electronics',
      'Digital Electronics',
      'Control Systems',
      'Sensors & Industrial Instrumentation',
      'Measurements',
      'Communication & Optical Instrumentation',
      'General Aptitude'
    ],
    idealTimeMonths: 8,
    beginnerStrategy: 'Master analog signals and operational amplifiers first, as sensor signal conditioning circuits rely entirely on them. Pay high attention to bridge configurations and calibration criteria in measurement units.',
    mistakes: [
      'Ignoring optical fiber components in communication modules.',
      'Confusing dynamic sensor characteristics with static specifications during parameter mapping.'
    ],
    interviewVideoId: 'M5tEUGFpCg0',
    rankEstimates: [
      {
        "year": 2024,
        "score": 78,
        "rank": 1
      },
      {
        "year": 2024,
        "score": 73,
        "rank": 10
      },
      {
        "year": 2024,
        "score": 66,
        "rank": 100
      },
      {
        "year": 2023,
        "score": 80,
        "rank": 1
      },
      {
        "year": 2023,
        "score": 75,
        "rank": 10
      },
      {
        "year": 2023,
        "score": 68,
        "rank": 100
      },
      {
        "year": 2022,
        "score": 77,
        "rank": 1
      },
      {
        "year": 2022,
        "score": 72,
        "rank": 10
      },
      {
        "year": 2022,
        "score": 64,
        "rank": 100
      }
    ],
    subjects: [
      {
        name: 'Sensors & Industrial Instrumentation',
        weightage: '12-14 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '70 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Double-advantage',
        description: 'Resistive, capacitive, inductive transducers. Self-generating transducers: piezoelectric, thermoelectric. Flow, level, pressure measurement sensors.',
        videoId: 'INEtYZqtjTo',
        isHighROI: true
      },
      {
        name: 'Electrical & Electronic Measurements',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Easy',
        timeNeeded: '45 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'Bridges (AC and DC) for measurement. Galvanometers, Ammeters, Voltmeters, Wattmeters. Instrument transformers. Digital oscilloscopes (DSO).',
        videoId: 'IDwDswr6REE',
        isHighROI: true
      },
      {
        name: 'Control Systems',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Medium',
        timeNeeded: '50 hours',
        revisionFreq: 'Bi-weekly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'System feedback equations, block diagrams, signal flow graph analysis, stability limits, controller configurations (P, PI, PID tuning).',
        videoId: 'HcLYoCmWOjI',
        isHighROI: true
      }
    ]
  },
  {
    id: 'ch',
    name: 'CH',
    fullName: 'Chemical Engineering',
    overview: 'GATE Chemical covers fluid-thermal unit operations, process control dynamics, chemical reaction mechanics, and plant economics. High core comprehension ensures strong, predictable outcomes since the syllabus is highly structured.',
    difficultyLevel: 'Moderate',
    bestStartSubject: 'Process Calculations and Fluid Mechanics',
    prepOrder: [
      'Engineering Mathematics',
      'Process Calculations',
      'Thermodynamics',
      'Fluid Mechanics & Operations',
      'Heat Transfer',
      'Mass Transfer',
      'Chemical Reaction Engineering (CRE)',
      'Instrumentation & Process Control',
      'Plant Design & Economics',
      'Chemical Technology',
      'General Aptitude'
    ],
    idealTimeMonths: 8,
    beginnerStrategy: 'Never skip Process Calculations. It is a 4-6 mark domain that sets material balance fundamentals for all downstream mass and fluid transfer processes. Practice catalyst equilibrium calculations carefully.',
    mistakes: [
      'Underestimating process control dynamics and tuning coefficients.',
      'Treating Chemical Technology as a literal theoretical dump without drawing flowcharts of process setups like urea/ammonia synthetic passes.'
    ],
    interviewVideoId: 'qFEX61oRBgQ',
    rankEstimates: [
      {
        "year": 2024,
        "score": 80,
        "rank": 1
      },
      {
        "year": 2024,
        "score": 75,
        "rank": 10
      },
      {
        "year": 2024,
        "score": 68,
        "rank": 100
      },
      {
        "year": 2023,
        "score": 82,
        "rank": 1
      },
      {
        "year": 2023,
        "score": 77,
        "rank": 10
      },
      {
        "year": 2023,
        "score": 70,
        "rank": 100
      },
      {
        "year": 2022,
        "score": 79,
        "rank": 1
      },
      {
        "year": 2022,
        "score": 74,
        "rank": 10
      },
      {
        "year": 2022,
        "score": 66,
        "rank": 100
      }
    ],
    subjects: [
      {
        name: 'Chemical Reaction Engineering (CRE)',
        weightage: '12-14 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '70 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Double-advantage',
        description: 'Kinetics of homogeneous reactions. Single and multiple reactor design (batch, CSTR, PFR). Non-ideal reactors. Heterogeneous catalytic steps.',
        videoId: 'gzrLGtQgLYc',
        isHighROI: true
      },
      {
        name: 'Mass Transfer',
        weightage: '10-12 Marks',
        category: 'High',
        difficulty: 'Hard',
        timeNeeded: '75 hours',
        revisionFreq: 'Weekly',
        practiceIntensity: 'High',
        type: 'Concept-heavy',
        description: 'Ficks law, molecular diffusion. Gas absorption, distillation, extraction, drying, humidification operations. NTU/HTU column math.',
        videoId: '7Bj3N1E7vZk',
        isHighROI: true
      },
      {
        name: 'Heat Transfer',
        weightage: '8-10 Marks',
        category: 'High',
        difficulty: 'Easy',
        timeNeeded: '50 hours',
        revisionFreq: 'Monthly',
        practiceIntensity: 'High',
        type: 'Scoring',
        description: 'Conduction, convection and radiation. Shell and tube heat exchangers, LMTD, NTU charts. Boiling and condensation equations. Evaporations.',
        videoId: 'S_IWeKW2JqA',
        isHighROI: true
      }
    ]
  }
];
