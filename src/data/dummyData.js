// Dummy data for the coaching institute website

// export const courses = [
//   {
//     id: 1,
//     name: "11th Science",
//     description: "Complete foundation course for 11th standard students",
//     subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
//     duration: "1 Year",
//     fees: "₹25,000",
//     image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
//   },
//   {
//     id: 2,
//     name: "12th Science",
//     description: "Advanced course for 12th standard board exam preparation",
//     subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
//     duration: "1 Year",
//     fees: "₹30,000",
//     image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
//   },
//   {
//     id: 3,
//     name: "JEE Main & Advanced",
//     description: "Comprehensive preparation for JEE Main and Advanced",
//     subjects: ["Physics", "Chemistry", "Mathematics"],
//     duration: "2 Years",
//     fees: "₹50,000",
//     image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
//   },
//   {
//     id: 4,
//     name: "NEET",
//     description: "Complete medical entrance exam preparation",
//     subjects: ["Physics", "Chemistry", "Biology"],
//     duration: "2 Years",
//     fees: "₹45,000",
//     image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
//   },
//   {
//     id: 5,
//     name: "CET",
//     description: "Common Entrance Test preparation",
//     subjects: ["Physics", "Chemistry", "Mathematics"],
//     duration: "1 Year",
//     fees: "₹20,000",
//     image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
//   },
//   {
//     id: 6,
//     name: "UPSC",
//     description: "Civil Services Examination preparation",
//     subjects: ["General Studies", "Optional Subject", "Essay"],
//     duration: "2 Years",
//     fees: "₹60,000",
//     image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
//   },
//   {
//     id: 7,
//     name: "MPSC",
//     description: "Maharashtra Public Service Commission preparation",
//     subjects: ["General Studies", "Optional Subject"],
//     duration: "1.5 Years",
//     fees: "₹35,000",
//     image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
//   }
// ];
export const courses = [
  {
    id: '1',
    title: '11th & 12th Science + NEET + MHT-CET + JEE',
    description: 'A two-year integrated program for 11th and 12th students targeting NEET, MHT-CET, and JEE exams.',
    category: 'Competitive',
    duration: '24 months',
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    students: 60,
    rating: 4.9,
    price: '₹50,000',
    image: 'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=400',
    level: 'Advanced',
  },
  {
    id: '2',
    title: 'Crash Course for NEET, MHT-CET & JEE',
    description: 'A quick revision program covering essential topics for NEET, CET, and JEE aspirants.',
    category: 'Competitive',
    duration: '3 months',
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    students: 100,
    rating: 4.7,
    price: '₹12,000',
    image: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=400',
    level: 'Intermediate',
  },
  {
    id: '3',
    title: '8th, 9th & 10th All Mediums',
    description: 'Foundation courses for school students from 8th to 10th standard in all mediums.',
    category: 'Science',
    duration: '36 months',
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    students: 250,
    rating: 4.6,
    price: '₹18,000',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    level: 'Beginner',
  },
  {
    id: '4',
    title: 'Spoken English Course',
    description: 'Enhance your English communication skills through practical sessions and activities.',
    category: 'Language',
    duration: '3 months',
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    students: 180,
    rating: 4.5,
    price: '₹3,000',
    image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400',
    level: 'All Levels',
  },
  {
    id: '5',
    title: 'Midbrain Development Course',
    description: 'A scientifically designed course to enhance memory, concentration, and creativity in children.',
    category: 'Science',
    duration: '2 months',
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    students: 75,
    rating: 4.4,
    price: '₹4,000',
    image: 'https://images.pexels.com/photos/4145193/pexels-photo-4145193.jpeg?auto=compress&cs=tinysrgb&w=400',
    level: 'Beginner',
  },
  {
    id: '6',
    title: 'Handwriting Improvement Course',
    description: 'Special course to improve handwriting skills in both cursive and print styles.',
    category: 'Language',
    duration: '1.5 months',
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    students: 90,
    rating: 4.3,
    price: '₹2,500',
    image: 'https://images.pexels.com/photos/590587/pexels-photo-590587.jpeg?auto=compress&cs=tinysrgb&w=400',
    level: 'Beginner',
  },
];

export const teachers = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    subject: "Physics",
    experience: "15 Years",
    qualification: "Ph.D. in Physics",
    image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    name: "Dr. Priya Patel",
    subject: "Chemistry",
    experience: "12 Years",
    qualification: "M.Sc. Chemistry",
    image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    name: "Prof. Amit Kumar",
    subject: "Mathematics",
    experience: "10 Years",
    qualification: "M.Sc. Mathematics",
    image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    name: "Dr. Sunita Desai",
    subject: "Biology",
    experience: "8 Years",
    qualification: "Ph.D. in Biology",
    image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    rollNo: "2024001",
    course: "JEE Main",
    phone: "9876543210",
    email: "rahul@example.com"
  },
  {
    id: 2,
    name: "Priya Patel",
    rollNo: "2024002",
    course: "NEET",
    phone: "9876543211",
    email: "priya@example.com"
  },
  {
    id: 3,
    name: "Amit Kumar",
    rollNo: "2024003",
    course: "12th Science",
    phone: "9876543212",
    email: "amit@example.com"
  },
  {
    id: 4,
    name: "Sunita Desai",
    rollNo: "2024004",
    course: "CET",
    phone: "9876543213",
    email: "sunita@example.com"
  },
  {
    id: 5,
    name: "Vikram Singh",
    rollNo: "2024005",
    course: "UPSC",
    phone: "9876543214",
    email: "vikram@example.com"
  }
];

export const results = [
  {
    id: 1,
    name: "Aarav Sharma",
    exam: "JEE Main 2024",
    rank: "AIR 45",
    score: "295/300",
    image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    name: "Diya Patel",
    exam: "NEET 2024",
    rank: "AIR 123",
    score: "680/720",
    image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    name: "Rohan Gupta",
    exam: "12th Board",
    rank: "95.2%",
    score: "476/500",
    image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    name: "Ananya Singh",
    exam: "CET 2024",
    rank: "State Rank 15",
    score: "185/200",
    image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const facilities = [
  {
    id: 1,
    name: "Library",
    description: "Well-equipped library with over 10,000 books",
    icon: "BookOpen",
    image: "https://images.pexels.com/photos/481021/pexels-photo-481021.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  // {
  //   id: 2,
  //   name: "Science Labs",
  //   description: "Modern physics, chemistry, and biology laboratories",
  //   icon: "Flask",
  //   image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400"
  // },
  {
    id: 3,
    name: "Smart Classrooms",
    description: "Interactive smart boards and digital learning tools",
    icon: "Monitor",
    image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  // {
  //   id: 4,
  //   name: "Hostel",
  //   description: "Comfortable accommodation for outstation students",
  //   icon: "Home",
  //   image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400"
  // },
  {
    id: 5,
    name: "Cafeteria",
    description: "Healthy and nutritious meals for students",
    icon: "Coffee",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  // {
  //   id: 6,
  //   name: "Sports Complex",
  //   description: "Indoor and outdoor sports facilities",
  //   icon: "Trophy",
  //   image: "https://images.pexels.com/photos/159832/basketball-ball-streetball-sport-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  // }
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    course: "JEE Main",
    message: "Excellent coaching with dedicated teachers. Got AIR 45 in JEE Main!",
    rating: 5,
    image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    name: "Priya Patel",
    course: "NEET",
    message: "The best coaching institute in the city. Highly recommend!",
    rating: 5,
    image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    name: "Amit Kumar",
    course: "12th Science",
    message: "Great teaching methodology and supportive environment.",
    rating: 5,
    image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const attendanceData = {
  students: [
    { name: "Rahul Sharma", rollNo: "2024001", date: "2024-01-15", status: "Present" },
    { name: "Priya Patel", rollNo: "2024002", date: "2024-01-15", status: "Present" },
    { name: "Amit Kumar", rollNo: "2024003", date: "2024-01-15", status: "Absent" },
    { name: "Sunita Desai", rollNo: "2024004", date: "2024-01-15", status: "Present" },
    { name: "Vikram Singh", rollNo: "2024005", date: "2024-01-15", status: "Present" }
  ],
  teachers: [
    { name: "Dr. Rajesh Sharma", empId: "EMP001", date: "2024-01-15", status: "Present" },
    { name: "Dr. Priya Patel", empId: "EMP002", date: "2024-01-15", status: "Present" },
    { name: "Prof. Amit Kumar", empId: "EMP003", date: "2024-01-15", status: "Present" },
    { name: "Dr. Sunita Desai", empId: "EMP004", date: "2024-01-15", status: "Absent" }
  ]
};

export const classImages = [
  "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/8199150/pexels-photo-8199150.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/8199150/pexels-photo-8199150.jpeg?auto=compress&cs=tinysrgb&w=400"
];