export interface Testimonial {
  id: string;
  name: string;
  relationship: string;
  content: string;
  rating: number;
  location: string;
  image?: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Priya Sharma",
    relationship: "Daughter",
    content: "Sunita's care for my mother is exceptional. Her dedication has improved Mom's mobility and mood. Truly a blessing!",
    rating: 5,
    location: "Vijay Nagar, Indore",
    date: "2024-01-10"
  },
  {
    id: "testimonial-2",
    name: "Rajesh Gupta",
    relationship: "Son",
    content: "Kavya's post-op care was outstanding. Dad recovered quickly thanks to her expertise and care.",
    rating: 5,
    location: "Palasia, Indore",
    date: "2024-01-05"
  },
  {
    id: "testimonial-3",
    name: "Meera Patel",
    relationship: "Wife",
    content: "Asha's dementia care is incredible. Her patience and kindness make a huge difference for my husband.",
    rating: 5,
    location: "Scheme No. 78, Indore",
    date: "2023-12-28"
  },
  {
    id: "testimonial-4",
    name: "Dr. Amit Joshi",
    relationship: "Family member",
    content: "The team's professionalism exceeded my expectations. Their care for my mother is top-notch.",
    rating: 5,
    location: "AB Road, Indore",
    date: "2023-12-20"
  },
  {
    id: "testimonial-5",
    name: "Anjali Singh",
    relationship: "Daughter-in-law",
    content: "Rita ji's care won my mother-in-law's heart. Her compassion has been a game-changer for us.",
    rating: 5,
    location: "Bhanwarkuan, Indore",
    date: "2023-12-15"
  },
  {
    id: "testimonial-6",
    name: "Vikram Malhotra",
    relationship: "Son",
    content: "The team's 24/7 care was compassionate and professional, supporting us through a tough time.",
    rating: 5,
    location: "New Palasia, Indore",
    date: "2023-12-10"
  }
];

export const getFeaturedTestimonials = (limit: number = 3): Testimonial[] => {
  return testimonials
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};