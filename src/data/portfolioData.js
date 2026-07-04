import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiPostman, SiPython } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const personalInfo = {
  name: 'M. Tulasi Laxmi',
  title: 'React Developer',
  company: 'CustQ Software Services Pvt Ltd',
  experienceYears: '2+',
  location: 'India',
  education: 'B.Tech in Computer Science',
  email: 'tulasilaxmi.mandala@gmail.com', // Placeholder professional email
  phone: '+91 778029511', // Placeholder phone
  linkedin: 'https://www.linkedin.com/in/tulasilaxmi/', // Placeholder LinkedIn
  github: 'https://github.com/Tulasi1005', // Placeholder GitHub
  subtitle: 'Results-driven React Developer with 2+ years of experience designing, developing, and maintaining responsive web applications using React.js, JavaScript, HTML, CSS, Bootstrap, and REST APIs.',
  summary: 'I am a passionate React Developer with over two years of professional experience developing enterprise-grade applications in Education, Matrimony, and Service Booking domains. I enjoy building scalable, responsive, and user-friendly web applications while writing clean and maintainable code.',
};

export const stats = [
  { label: 'Experience', value: '2+ Years' },
  { label: 'Projects', value: '5+' },
  { label: 'Clients Served', value: '2+' },
  
];

export const skills = {
  frontend: [
    { name: 'React.js', level: 95, icon: FaReact, color: '#61DAFB' },
    { name: 'JavaScript', level: 92, icon: FaJs, color: '#F7DF1E' },
    { name: 'HTML5', level: 98, icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', level: 95, icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Bootstrap', level: 90, icon: FaBootstrap, color: '#7952B3' },
  ],
  backend: [
    { name: 'Node.js', level: 75, icon: FaNodeJs, color: '#339933' },
    { name: 'Python', level: 70, icon: SiPython, color: '#3776AB' },
  ],
  tools: [
    
    { name: 'GitHub', level: 92, icon: FaGithub, color: '#181717' },
    { name: 'VS Code', level: 95, icon: VscVscode, color: '#007ACC' },
    { name: 'Postman', level: 88, icon: SiPostman, color: '#FF6C37' },
  ],
};

export const experiences = [
  {
    company: 'CustQ Software Services Pvt Ltd',
    role: 'React Developer',
    duration: 'March 2024 - Present',
    description: 'Lead developer in building front-end architecture, dashboard widgets, and state-management layouts for core service projects.',
    projects: [
      {
        name: 'School Management System',
        domain: 'Education Platform',
        features: [
          'Admin Dashboard & Principal Dashboard metrics charts',
          'Teacher Module & Student Module directories',
          'Attendance tracking & Transport management modules',
          'Fees payment pathways, Exam schedules & Certificates generator',
          'Complaints panel & responsive notification system',
          'Role-based Authentication (Admin/Teacher/Student...)',
          'REST API integration & state management optimization',
        ]
      },
      {
        name: 'Beauty Bliss',
        domain: 'Salon Booking Platform',
        features: [
          'Interactive Appointment Booking calendar',
          'Real-time Availability Tracking system',
          'Service Management & pricing cards catalog',
          'Intuitive booking confirmation workflow',
          'Responsive UI with custom micro-interactions',
        ]
      },
      {
        name: 'Matrimony Platform',
        domain: 'Matrimony Services',
        features: [
          'User Panel with detailed personal portfolio setups',
          'Admin Panel for managing listings, reports & verifications',
          'Dynamic Matchmaking algorithm interface',
          'Advanced Search with multiple criteria filters',
          'Fully responsive and fluid animations across device views',
        ]
      }
    ]
  }
];

export const projectsList = [
  {
    id: 'school-management',
    name: 'School Management System',
    category: 'Education',
    description: 'An enterprise-grade education administration platform handling roles, metrics, payments, and notifications with responsive designs.',
    image: 'https://img.magnific.com/free-vector/vector-cartoon-illustration-school-building-green-lawn-road-trees-educalion-l_134830-1588.jpg?semt=ais_hybrid&w=740&q=80', // Beautiful education placeholder
    tech: ['React.js', 'Bootstrap', 'REST API', 'Framer Motion'],
    features: [
      'Role-based dashboards (Admin, Principal, Teacher, Student)',
      'Attendance tracker, transport route tracker, & billing reports',
      'Certificate generation and print workflow support',
      'Secure token-based auth and state persistence',
    ],
    
  },
  {
    id: 'beauty-bliss',
    name: 'Beauty Bliss Salon Booking',
    category: 'Booking',
    description: 'A beautiful and modern service booking platform supporting calendar schedulers, slot availability, and booking checkout steps.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop', // Beautiful salon placeholder
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
    features: [
      'Real-time appointment slot calculation',
      'Animated multi-step booking form checkout',
      'Services filtering by category and stylist',
      'Customer profile dashboard & booking history',
    ],
   
  },
  {
    id: 'matrimony-platform',
    name: 'Elegant Matrimony Platform',
    category: 'Social',
    description: 'A social matchmaking web application featuring high-fidelity search filters, user matching, and rich profiles.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop', // Beautiful wedding placeholder
    tech: ['React.js', 'CSS Modules', 'REST API', 'AOS Animations'],
    features: [
      'Profile builder with image upload and verification badges',
      'Complex filter-based matchmaking engine dashboard',
      'Direct contact request pipeline and messaging ui',
      'Secure user profile hiding and report mechanics',
    ],
   
  }
];
