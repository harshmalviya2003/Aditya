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
      id: "care-taker",
      title: "Care Taker For Patient",
      description: "Professional caretaker services for patients in Indore, Rau,  Mhow, Ujjain, and Dewas, ensuring compassionate and dedicated support.",
      fullDescription: "Our caretaker services provide personalized assistance for patients, offering daily care, companionship, and support to improve their quality of life in the comfort of their home in Indore, Rau, Mhow, Ujjain, and Dewas.",
      features: [
        "Daily living assistance",
        "Medication reminders",
        "Personal hygiene support",
        "Mobility assistance",
        "Emotional support",
        "Meal preparation"
      ],
      image: "/services/care-taker.png",
      price: "Starting from ₹1500/day",
      content: [
        {
          heading: "Compassionate Care in Indore, Rau, Mhow, Ujjain, and Dewas",
          content: "Our trained caretakers offer personalized support to patients, helping with daily activities such as bathing, dressing, and eating. We focus on creating a comfortable and nurturing environment tailored to individual needs."
        },
        {
          heading: "Dedicated Support for Well-Being",
          content: "Our caretakers work closely with families to ensure patients receive consistent care and companionship, promoting physical and emotional well-being while maintaining dignity and independence."
        }
      ]
    },
    {
      id: "home-nursing",
      title: "Home Nursing Services",
      description: "Skilled nursing care at home in Indore, Rau, Mhow, Ujjain, and Dewas for comprehensive health management.",
      fullDescription: "Our home nursing services provide professional medical care at home, delivered by qualified nurses to ensure patients in Indore, Rau, Mhow, Ujjain, and Dewas receive the best possible care without hospital visits.",
      features: [
        "Wound care",
        "Injection administration",
        "Vital signs monitoring",
        "Catheter care",
        "Post-surgical care",
        "Chronic illness management"
      ],
      image: "/services/home-nursing.png",
            price: "Starting from ₹2000/day",
      content: [
        {
          heading: "Professional Nursing at Your Doorstep",
          content: "Our skilled nurses provide a range of medical services, from administering medications to managing chronic conditions, ensuring high-quality care in the comfort of your home in Indore, Rau, Mhow, Ujjain, and Dewas."
        },
        {
          heading: "Tailored Care Plans",
          content: "We create customized care plans in collaboration with doctors to meet the specific health needs of each patient, ensuring effective treatment and recovery."
        }
      ]
    },
    {
      id: "elder-care",
      title: "Elder Care Services At Home",
      description: "Specialized elder care services in Indore, Rau, Mhow, Ujjain, and Dewas for seniors to live comfortably and independently.",
      fullDescription: "Our elder care services are designed to support seniors with daily activities, medical needs, and companionship, enabling them to live with dignity and comfort in their homes across Indore, Rau, Mhow, Ujjain, and Dewas.",
      features: [
        "Personal care assistance",
        "Medication management",
        "Mobility support",
        "Companionship",
        "Health monitoring",
        "Nutritional guidance"
      ],
      image: "/services/elder-care.png",
            price: "Starting from ₹1800/day",
      content: [
        {
          heading: "Holistic Care for Seniors",
          content: "Our elder care services include assistance with daily tasks, medication reminders, and health monitoring, ensuring seniors in Indore, Rau, Mhow, Ujjain, and Dewas live comfortably and safely."
        },
        {
          heading: "Promoting Independence",
          content: "We focus on empowering seniors to maintain their independence while providing the necessary support to enhance their quality of life and well-being."
        }
      ]
    },
    {
      id: "paralysis-care",
      title: "Nursing Care of Paralysis Patient At Home",
      description: "Specialized nursing care for paralysis patients in Indore, Rau, Mhow, Ujjain, and Dewas, ensuring comfort and recovery support.",
      fullDescription: "Our nursing care for paralysis patients provides specialized support, including mobility assistance, physical therapy coordination, and medical care, delivered at home in Indore, Rau, Mhow, Ujjain, and Dewas.",
      features: [
        "Mobility assistance",
        "Pressure sore prevention",
        "Physical therapy support",
        "Bladder and bowel care",
        "Medication administration",
        "Emotional support"
      ],
      image: "/services/paralysis-care.png",
      price: "Starting from ₹2200/day",
      content: [
        {
          heading: "Specialized Care for Paralysis Patients",
          content: "Our trained nurses provide comprehensive care for paralysis patients, including assistance with daily activities, preventing complications, and coordinating with physiotherapists in Indore, Rau, Mhow, Ujjain, and Dewas."
        },
        {
          heading: "Improving Quality of Life",
          content: "We focus on personalized care plans to manage symptoms, enhance comfort, and support recovery, ensuring patients live with dignity in their home environment."
        }
      ]
    },
    {
      id: "newborn-japa",
      title: "New Born Baby And Japa Care",
      description: "Expert care for newborns and mothers in Indore, Rau, Mhow, Ujjain, and Dewas, including traditional Japa services.",
      fullDescription: "Our newborn and Japa care services provide professional support for new mothers and their babies, combining modern medical care with traditional Japa practices in Indore, Rau, Mhow, Ujjain, and Dewas.",
      features: [
        "Newborn health monitoring",
        "Breastfeeding support",
        "Postpartum care",
        "Traditional Japa services",
        "Infant hygiene",
        "Maternal nutrition guidance"
      ],
      image: "/services/newborn-japa.png",
      price: "Starting from ₹2000/day",
      content: [
        {
          heading: "Comprehensive Newborn Care",
          content: "Our trained caregivers provide expert care for newborns, including feeding, bathing, and health monitoring, ensuring their well-being in Indore, Rau, Mhow, Ujjain, and Dewas."
        },
        {
          heading: "Traditional Japa Support",
          content: "Our Japa services include postpartum care for mothers, such as massage, nutrition advice, and emotional support, blending tradition with modern care practices."
        }
      ]
    },
    {
      id: "post-operative",
      title: "Post Operative Nursing Care At Home",
      description: "Professional post-operative nursing care in Indore, Rau, Mhow, Ujjain, and Dewas for a smooth recovery.",
      fullDescription: "Our post-operative nursing care services provide expert medical support at home, ensuring a safe and comfortable recovery for patients in Indore, Rau, Mhow, Ujjain, and Dewas after surgery.",
      features: [
        "Wound care and dressing",
        "Pain management",
        "Medication administration",
        "Mobility assistance",
        "Infection prevention",
        "Doctor coordination"
      ],
      image: "/services/post-operative.png",
      price: "Starting from ₹2200/day",
      content: [
        {
          heading: "Safe Recovery at Home",
          content: "Our skilled nurses provide comprehensive post-operative care, including wound management, pain relief, and monitoring for complications, ensuring a smooth recovery in Indore, Rau, Mhow, Ujjain, and Dewas."
        },
        {
          heading: "Personalized Post-Surgical Support",
          content: "We work closely with your doctor to create a tailored care plan, helping patients regain strength and independence while minimizing the risk of post-surgical complications."
        }
      ]
    },
    {
      id: "physiotherapy",
      title: "Physiotherapy At Home",
      description: "Expert physiotherapy services in Indore, Rau, Mhow, Ujjain, and Dewas to aid recovery and mobility.",
      fullDescription: "Our physiotherapy services bring professional rehabilitation to your home in Indore, Rau, Mhow, Ujjain, and Dewas, helping patients recover mobility, strength, and function through customized therapy plans.",
      features: [
        "Pain management therapy",
        "Mobility exercises",
        "Strength training",
        "Post-surgical rehabilitation",
        "Neurological physiotherapy",
        "Home exercise plans"
      ],
      image: "/services/physiotherapy.png",
      price: "Starting from ₹1500/session",
      content: [
        {
          heading: "Professional Physiotherapy in Indore, Mhow, Rau, Mhow, Ujjain, and Dewas",
          content: "Our licensed physiotherapists provide personalized therapy sessions at home, addressing conditions like joint pain, muscle weakness, and post-surgical recovery to improve mobility and quality of life."
        },
        {
          heading: "Customized Rehabilitation Plans",
          content: "We design individualized exercise and therapy programs to meet specific recovery goals, ensuring effective treatment and long-term health benefits."
        }
      ]
    },
    {
      id: "ryles-tube-insertion",
      title: "Ryle's Tube Insertion at Home",
      description: "Professional Ryle's tube insertion services at home in Indore, Rau, Mhow, Ujjain, and Dewas for safe and comfortable feeding tube placement.",
      fullDescription: "Our Ryle's tube insertion service provides safe and professional feeding tube placement at home, ensuring patients in Indore, Rau, Mhow, Ujjain, and Dewas receive proper nutrition support without hospital visits.",
      features: [
        "Professional tube insertion",
        "Safe placement techniques",
        "Post-insertion care",
        "Feeding guidance",
        "Tube maintenance",
        "Emergency support"
      ],
      image: "/services/ryles-tube-insertion.png",
      price: "Starting from ₹2500",
      content: [
        {
          heading: "Safe Tube Insertion at Home",
          content: "Our trained healthcare professionals perform Ryle's tube insertion using sterile techniques and proper protocols, ensuring patient safety and comfort in Indore, Rau, Mhow, Ujjain, and Dewas."
        },
        {
          heading: "Comprehensive Care Support",
          content: "We provide complete guidance on tube maintenance, feeding procedures, and emergency protocols, ensuring families feel confident in managing the feeding tube at home."
        }
      ]
    },
    {
      id: "catheter-change",
      title: "Catheter Change Service at Home",
      description: "Professional catheter change services at home in Indore, Rau, Mhow, Ujjain, and Dewas for safe and hygienic catheter management.",
      fullDescription: "Our catheter change service provides safe and sterile catheter replacement at home, ensuring patients in Indore, Rau, Mhow, Ujjain, and Dewas receive proper urinary care without hospital visits.",
      features: [
        "Sterile catheter replacement",
        "Infection prevention",
        "Proper technique",
        "Post-change care",
        "Hygiene maintenance",
        "Emergency support"
      ],
      image: "/services/catheter-change.png",
      price: "Starting from ₹1800",
      content: [
        {
          heading: "Professional Catheter Management",
          content: "Our trained nurses perform catheter changes using sterile techniques and proper protocols, minimizing infection risk and ensuring patient comfort in Indore, Rau, Mhow, Ujjain, and Dewas."
        },
        {
          heading: "Hygiene and Care Guidance",
          content: "We provide comprehensive education on catheter care, hygiene practices, and signs of complications, empowering families to maintain proper care between professional visits."
        }
      ]
    },
    {
      id: "injection-bottle-service",
      title: "Injection Bottle Service at Home",
      description: "Comprehensive medical services including injection administration, blood collection, and medical equipment support at home in Indore, Rau, Mhow, Ujjain, and Dewas.",
      fullDescription: "Our injection bottle service provides comprehensive medical support at home, including injection administration, blood collection, and medical equipment assistance for patients in Indore, Rau, Mhow, Ujjain, and Dewas.",
      features: [
        "Injection administration",
        "Blood collection",
        "Medical equipment setup",
        "IV therapy support",
        "Sample collection",
        "Equipment maintenance"
      ],
      image: "/services/injection-bottle-service.png",
      price: "Starting from ₹1200",
      content: [
        {
          heading: "Complete Medical Support at Home",
          content: "Our skilled healthcare professionals provide injection services, blood collection, and medical equipment support, ensuring patients receive comprehensive care in the comfort of their homes across Indore, Rau, Mhow, Ujjain, and Dewas."
        },
        {
          heading: "Professional Equipment Management",
          content: "We handle medical equipment setup, maintenance, and troubleshooting, providing families with the support they need to manage complex medical procedures safely at home."
        }
      ]
    },
    {
      id: "blood-collection",
      title: "Blood Collection Service at Home",
      description: "Professional blood collection and sample collection services at home in Indore, Rau, Mhow, Ujjain, and Dewas for convenient lab testing.",
      fullDescription: "Our blood collection service provides professional phlebotomy and sample collection at home, ensuring patients in Indore, Rau, Mhow, Ujjain, and Dewas can get their lab tests done without leaving their homes.",
      features: [
        "Professional blood collection",
        "Sample labeling",
        "Proper storage",
        "Lab coordination",
        "Multiple sample types",
        "Fast processing"
      ],
      image: "/services/blood-collection.png",
      price: "Starting from ₹800",
      content: [
        {
          heading: "Convenient Blood Collection at Home",
          content: "Our trained phlebotomists visit your home to collect blood samples and other specimens, ensuring accurate collection and proper handling for reliable lab results in Indore, Rau, Mhow, Ujjain, and Dewas."
        },
        {
          heading: "Professional Sample Management",
          content: "We handle all types of samples including blood, urine, and other specimens, with proper labeling, storage, and coordination with laboratories for timely processing and accurate results."
        }
      ]
    },
    {
      id: "medical-equipment",
      title: "Medical Equipment Service",
      description: "Professional medical equipment setup, maintenance, and support services in Indore, Rau, Mhow, Ujjain, and Dewas for home healthcare needs.",
      fullDescription: "Our medical equipment service provides comprehensive support for medical devices, including setup, maintenance, troubleshooting, and training for patients and families in Indore, Rau, Mhow, Ujjain, and Dewas.",
      features: [
        "Equipment setup",
        "Maintenance services",
        "Troubleshooting support",
        "User training",
        "Equipment rental",
        "24/7 support"
      ],
      image: "/services/medical-equipment.png",
      price: "Starting from ₹1500",
      content: [
        {
          heading: "Complete Medical Equipment Support",
          content: "Our technicians provide professional setup, maintenance, and support for all types of medical equipment, ensuring reliable operation and patient safety in Indore, Rau, Mhow, Ujjain, and Dewas."
        },
        {
          heading: "Training and Maintenance",
          content: "We offer comprehensive training for patients and caregivers on equipment operation, along with regular maintenance services to ensure optimal performance and longevity of medical devices."
        }
      ]
    }
  // Make sure to add the content block to ALL your service objects in the array.
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
