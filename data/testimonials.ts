export interface Testimonial {
  id: number;
  name: string;
  relationship: string;
  avatar: string;
  rating: number;
  content: string;
}

const allTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "The Sharma Family",
    relationship: "Daughter of Client",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    content: "The care and compassion shown to my mother were exceptional. The caregiver became like a part of our family. We are so grateful for the peace of mind you've given us."
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    relationship: "Son of Client",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    content: "Finding reliable dementia care for my father was a struggle until we found this service. The specialized care plan made a huge difference in his daily life and happiness."
  },
  {
    id: 3,
    name: "Anita Desai",
    relationship: "Client",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    content: "After my surgery, the post-operative care I received at home was fantastic. The nurse was professional, attentive, and helped me recover much faster than I expected."
  },
  {
    id: 4,
    name: "Prakash Singh",
    relationship: "Husband of Client",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    content: "Excellent respite care service. It gave me a much-needed break, and I was confident my wife was in safe and capable hands. Highly recommend."
  },
  {
    id: 5,
    name: "Sunita Gupta",
    relationship: "Niece of Client",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 5,
    content: "Their companionship service has been a lifeline for my aunt. She looks forward to the visits, and it has greatly improved her mood and overall well-being."
  },
  {
    id: 6,
    name: "Vikram Mehta",
    relationship: "Grandson of Client",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    content: "The caregivers are not just skilled but also incredibly kind and patient. They treat my grandfather with the utmost respect and dignity. A truly five-star service."
  },
    {
    id: 7,
    name: "The Reddy Family",
    relationship: "Family of Client",
    avatar: "https://randomuser.me/api/portraits/women/58.jpg",
    rating: 5,
    content: "From the initial consultation to the daily care, every step has been professional and reassuring. This is the best home care service we've ever used."
  },
  {
    id: 8,
    name: "Imran Khan",
    relationship: "Friend of Client",
    avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    rating: 4,
    content: "I arranged for their services for a close friend. The team was responsive, flexible, and provided excellent care that was tailored to his specific needs."
  }
];

// This is the missing function that your component needs.
export const getFeaturedTestimonials = (count: number): Testimonial[] => {
  return allTestimonials.slice(0, count);
};

// It's also good practice to have a function to get all testimonials.
export const getAllTestimonials = (): Testimonial[] => {
    return allTestimonials;
};
