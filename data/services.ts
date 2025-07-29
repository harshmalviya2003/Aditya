export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  image: string;
  price?: string;
  // NEW: Add a content array for detailed descriptions
  content: {
    heading: string;
    content: string;
  }[];
}

export const services: Service[] = [
  {
    id: "newborn-mother-care",
    title: "New Born Baby and Mother Care",
    description: "Professional care for newborns and postpartum mothers in the comfort of your home.",
    fullDescription: "Our specialized newborn and mother care services provide comprehensive support during the critical postpartum period. Our trained nurses assist with newborn care, breastfeeding support, and the mother's recovery.",
    features: [
      "Newborn bathing and hygiene",
      "Umbilical cord care",
      "Breastfeeding assistance",
      "Postpartum recovery support",
      "Sleep pattern guidance",
      "Newborn health monitoring"
    ],
    image: "/services/1.jpg",
    price: "Starting from ₹1500/day",
    content: [
      {
        heading: "Comprehensive Postnatal Support",
        content: "The arrival of a new baby is a joyous occasion, but it can also be overwhelming. Our caregivers provide expert support to ensure both mother and baby are healthy and comfortable. We handle everything from bathing and diapering to monitoring the baby's health, allowing the mother to focus on recovery and bonding."
      },
      {
        heading: "Expert Guidance for New Mothers",
        content: "Our nurses are trained in lactation support and can provide invaluable guidance on breastfeeding techniques, feeding schedules, and addressing common challenges. We also offer emotional support and education on postpartum recovery, helping mothers navigate this new phase with confidence."
      }
    ]
  },
  {
    id: "patient-caretaker",
    title: "Care Taker for Patient",
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
    price: "Starting from ₹1000/day",
    content: [
        {
            heading: "Personalized Daily Assistance",
            content: "Our caregivers assist with all activities of daily living, including bathing, dressing, grooming, and toileting. We ensure that the patient's personal hygiene is maintained while respecting their dignity and privacy. Our goal is to provide support that enables as much independence as possible."
        },
        {
            heading: "Medical and Nutritional Support",
            content: "We manage medication schedules, monitor vital signs, and prepare nutritious meals according to dietary requirements. Our team works closely with the patient's doctors to ensure the care plan is followed precisely, providing families with peace of mind."
        }
    ]
  },
    // ... Add the `content` array to all other service objects in a similar way ...
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
    price: "Starting from ₹900/day",
    content: [
        {
            heading: "Promoting Independence with Dignity",
            content: "Our primary goal in elder care is to help seniors live safely and independently at home for as long as possible. We provide assistance with daily tasks while encouraging active participation. Our caregivers are not just helpers but also companions who engage in conversations, games, and hobbies."
        },
        {
            heading: "Holistic Approach to Senior Wellness",
            content: "We focus on the overall well-being of our senior clients, including physical, mental, and emotional health. This includes medication reminders, accompanying them on walks, ensuring proper nutrition, and providing a friendly face to combat loneliness and isolation."
        }
    ]
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
    price: "Starting from ₹2500/day",
    content: [
      {
        heading: "Advanced Medical Care at Home",
        content: "We bring the essential elements of an ICU to your home. Our service includes state-of-the-art medical equipment like ventilators, cardiac monitors, and infusion pumps, all managed by highly trained critical care nurses. This ensures continuous, high-quality medical supervision in a familiar environment."
      },
      {
        heading: "A Team-Based, Coordinated Approach",
        content: "Our home ICU care is delivered by a multidisciplinary team, including critical care nurses, respiratory therapists, and physicians who collaborate to manage the patient's condition. We maintain constant communication with the primary treating doctor to ensure seamless and coordinated care, reducing the risk of complications."
      }
    ]
  }
  // Make sure to add the content block to ALL your service objects in the array.
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
