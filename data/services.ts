export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  image: string;
  icon: string;
  price?: string;
}

export const services: Service[] = [
  {
    id: "newborn-mother-care",
    title: "New Born Baby And Mother Care",
    description: "Professional care for newborns and postpartum mothers in the comfort of your home.",
    fullDescription: "Our specialized newborn and mother care services provide comprehensive support during the critical postpartum period. Our trained nurses assist with newborn care, breastfeeding support, and mother's recovery.",
    features: [
      "Newborn bathing and hygiene",
      "Umbilical cord care",
      "Breastfeeding assistance",
      "Postpartum recovery support",
      "Sleep pattern guidance",
      "Newborn health monitoring"
    ],
    image: "/services/1.jpg",
    icon: "Baby",
    price: "Starting from ₹1500/day"
  },
  {
    id: "patient-caretaker",
    title: "Care Taker For Patient",
    description: "Dedicated caregivers providing round-the-clock assistance for patients at home.",
    fullDescription: "Our professional patient caretakers provide compassionate, personalized care for individuals needing assistance with daily activities and medical needs in their home environment.",
    features: [
      "24/7 monitoring",
      "Medication management",
      "Personal hygiene assistance",
      "Mobility support",
      "Meal preparation",
      "Vital signs monitoring"
    ],
    image: "/services/2.jpg",
    icon: "User",
    price: "Starting from ₹1000/day"
  },
  {
    id: "elder-care",
    title: "Elder Care Services At Home",
    description: "Comprehensive care solutions for elderly individuals to maintain independence at home.",
    fullDescription: "Our elder care services are designed to help seniors maintain their quality of life while receiving the support they need in the comfort and familiarity of their own home.",
    features: [
      "Daily living assistance",
      "Companionship",
      "Medication reminders",
      "Light housekeeping",
      "Exercise assistance",
      "Transportation to appointments"
    ],
    image: "/services/3.jpg",
    icon: "Senior",
    price: "Starting from ₹900/day"
  },
  {
    id: "ortho-rehab",
    title: "Expert Ortho Rehab At Home",
    description: "Specialized rehabilitation services for orthopedic patients in home setting.",
    fullDescription: "Our orthopedic rehabilitation program helps patients recover from fractures, joint replacements, and other orthopedic surgeries with personalized therapy plans at home.",
    features: [
      "Post-surgical rehabilitation",
      "Pain management",
      "Mobility exercises",
      "Strength training",
      "Gait training",
      "Assistive device training"
    ],
    image: "/services/4.jpg",
        icon: "Bone",
    price: "Starting from ₹1200/day"
  },
  {
    id: "cancer-rehab",
    title: "Rehabilitation Of Cancer Patient At Home",
    description: "Compassionate care and rehabilitation for cancer patients recovering at home.",
    fullDescription: "Our cancer rehabilitation services focus on helping patients regain strength, manage symptoms, and improve quality of life during and after cancer treatment.",
    features: [
      "Pain management",
      "Fatigue management",
      "Nutritional support",
      "Lymphedema care",
      "Emotional support",
      "Physical therapy"
    ],
    image: "/services/5.jpg",
    icon: "Medical",
    price: "Starting from ₹1300/day"
  },
  {
    id: "paralysis-care",
    title: "Nursing Care of Paralysis Patient At Home",
    description: "Specialized nursing care for patients with paralysis or limited mobility.",
    fullDescription: "Our paralysis care program provides comprehensive support for patients with spinal cord injuries, stroke, or other conditions causing paralysis, focusing on comfort and quality of life.",
    features: [
      "Positioning and turning",
      "Skin care and pressure sore prevention",
      "Bladder and bowel management",
      "Range of motion exercises",
      "Respiratory care",
      "Equipment management"
    ],
    image: "/services/6.jpg",
    icon: "Wheelchair",
    price: "Starting from ₹1400/day"
  },
  {
    id: "icu-care",
    title: "ICU Care At Home",
    description: "Critical care services bringing ICU-level monitoring and treatment to your home.",
    fullDescription: "Our ICU-at-home service provides hospital-level care for critically ill patients who prefer to recover in the comfort of their own home, with specialized equipment and trained staff.",
    features: [
      "Ventilator care",
      "Cardiac monitoring",
      "Tracheostomy care",
      "IV medication administration",
      "Critical care nursing",
      "Emergency response"
    ],
    image: "/services/7.jpg",
    icon: "HeartMonitor",
    price: "Starting from ₹2500/day"
  },
  {
    id: "post-op-care",
    title: "Post Operative Nursing Care At Home",
    description: "Professional nursing care for patients recovering from surgery at home.",
    fullDescription: "Our post-operative care services help patients recover safely and comfortably at home after surgical procedures, reducing hospital stays and risk of infections.",
    features: [
      "Wound care",
      "Pain management",
      "Drain care",
      "Medication administration",
      "Rehabilitation exercises",
      "Recovery monitoring"
    ],
    image: "/services/8.jpg",
    icon: "Bandage",
    price: "Starting from ₹1100/day"
  },
  {
    id: "elder-daycare",
    title: "Elder Day Care Services At Home",
    description: "Daytime care and companionship services for elderly individuals at home.",
    fullDescription: "Our elder day care services provide social engagement, activities, and care during daytime hours, allowing seniors to remain at home while receiving needed support.",
    features: [
      "Social activities",
      "Cognitive stimulation",
      "Meal preparation",
      "Medication reminders",
      "Light exercise",
      "Safety supervision"
    ],
    image: "/services/9.jpg",
    icon: "Sun",
    price: "Starting from ₹800/day"
  },
  {
    id: "lung-rehab",
    title: "Lung Rehab Services At Home",
    description: "Specialized rehabilitation for patients with respiratory conditions.",
    fullDescription: "Our lung rehabilitation program helps patients with COPD, pulmonary fibrosis, and other respiratory conditions improve breathing and quality of life through targeted therapies.",
    features: [
      "Breathing exercises",
      "Oxygen therapy support",
      "Airway clearance techniques",
      "Energy conservation training",
      "Nutritional counseling",
      "Medication management"
    ],
    image: "/services/10.jpg",
    icon: "Lung",
    price: "Starting from ₹1200/day"
  },
  {
    id: "heart-rehab",
    title: "Heart Rehab At Home",
    description: "Cardiac rehabilitation services for heart patients recovering at home.",
    fullDescription: "Our home-based cardiac rehabilitation program helps patients recover from heart attacks, surgeries, and other cardiac events with monitored exercise and lifestyle guidance.",
    features: [
      "Supervised exercise",
      "Vital signs monitoring",
      "Dietary guidance",
      "Medication management",
      "Stress reduction techniques",
      "Recovery progress tracking"
    ],
    image: "/services/11.jpg",
    icon: "Heart",
    price: "Starting from ₹1300/day"
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};