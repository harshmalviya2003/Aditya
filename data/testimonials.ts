export interface Testimonial {
  id: number;
  name: string;
  relationship: string;
  rating: number;
  content: string;
}

const allTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    relationship: "Daughter of Client",
    rating: 5,
    content: "Comfort Health Home provided outstanding home care in Indore for my mother. The caregivers were compassionate and professional, ensuring her comfort and well-being. Highly recommend their services!"
  },
  {
    id: 2,
    name: "Rohit Patel",
    relationship: "Son of Client",
    rating: 5,
    content: "The home care in Rau from Comfort Health Home was a game-changer for my father’s recovery. Their skilled nurses and personalized care made all the difference. Truly exceptional!"
  },
  {
    id: 3,
    name: "Anjali Verma",
    relationship: "Client",
    rating: 5,
    content: "After my surgery, Comfort Health Home provided excellent post-operative home care in Dewas. The team was attentive and professional, helping me recover quickly at home."
  },
  {
    id: 4,
    name: "Vikram Singh",
    relationship: "Husband of Client",
    rating: 4,
    content: "Comfort Health Home’s home care in Ujjain gave me peace of mind while caring for my wife. The service was reliable, and the caregivers were skilled and caring."
  },
  {
    id: 5,
    name: "Sunita Gupta",
    relationship: "Niece of Client",
    rating: 5,
    content: "The companionship provided by Comfort Health Home for my aunt in Indore was exceptional. Their home care services truly enhanced her quality of life."
  },
  {
    id: 6,
    name: "Amit Malhotra",
    relationship: "Grandson of Client",
    rating: 5,
    content: "Comfort Health Home’s home care in Rau is top-notch. The caregivers treated my grandfather with respect and ensured his comfort every day. Highly recommend!"
  },
  {
    id: 7,
    name: "Neha Reddy",
    relationship: "Family of Client",
    rating: 5,
    content: "From consultation to daily care, Comfort Health Home’s home care in Dewas was flawless. Their professional approach made us feel secure and cared for."
  },
  {
    id: 8,
    name: "Imran Khan",
    relationship: "Friend of Client",
    rating: 4,
    content: "I arranged Comfort Health Home’s home care in Ujjain for a friend. The tailored care and responsive team exceeded expectations. Great service!"
  },
  {
    id: 9,
    name: "Kavita Joshi",
    relationship: "Daughter of Client",
    rating: 5,
    content: "Comfort Health Home provided excellent home care in Indore for my mother. Their attention to detail and compassionate staff made her recovery smooth and stress-free."
  },
  {
    id: 10,
    name: "Sanjay Dubey",
    relationship: "Son of Client",
    rating: 5,
    content: "The home care in Rau by Comfort Health Home was exceptional for my father’s paralysis care. Their expertise and dedication ensured his comfort and progress."
  },
  // Hindi Reviews
  {
    id: 11,
    name: "Rekha Yadav",
    relationship: "Wife of Client",
    rating: 5,
    content: "Comfort Health Home ne Indore mein mere pati ke liye shandaar home care diya. Unki team professional aur dil se seva karne wali thi."
  },
  {
    id: 12,
    name: "Manoj Tiwari",
    relationship: "Brother of Client",
    rating: 5,
    content: "Comfort Health Home ki home care service Rau mein meri behen ke liye lajawab thi. Nurses aur caregivers ne dil se kaam kiya."
  },
  {
    id: 13,
    name: "Poonam Sharma",
    relationship: "Mother of Client",
    rating: 5,
    content: "Mere bete ke operation ke baad Comfort Health Home ne Dewas mein ghar par shandaar nursing di. Unki wajah se jaldi recovery hui."
  },
  {
    id: 14,
    name: "Rakesh Jain",
    relationship: "Son of Client",
    rating: 4,
    content: "Comfort Health Home ki home care service Ujjain mein meri maa ke liye bahut acchi thi. Team dependable aur caring thi."
  },
  {
    id: 15,
    name: "Geeta Thakur",
    relationship: "Sister of Client",
    rating: 5,
    content: "Comfort Health Home ne Indore mein mere bhai ke liye home care di, jo dil se thi. Unki seva ne humein sukun diya."
  },
  {
    id: 16,
    name: "Arvind Mishra",
    relationship: "Father of Client",
    rating: 5,
    content: "Comfort Health Home ki Rau mein home care service meri beti ke liye shandaar thi. Caregivers ne ghar jaisa mahol banaya."
  },
  {
    id: 17,
    name: "Sarita Rathore",
    relationship: "Daughter of Client",
    rating: 5,
    content: "Comfort Health Home ne Dewas mein meri maa ke liye physiotherapy service di. Unki team ne unki mobility mein bahut sudhar kiya."
  },
  {
    id: 18,
    name: "Deepak Solanki",
    relationship: "Son of Client",
    rating: 5,
    content: "Comfort Health Home ki Ujjain mein home care service mere pita ji ke liye lajawab thi. Nurses ne unki har zarurat ka khyal rakha."
  },
  {
    id: 19,
    name: "Lata Chauhan",
    relationship: "Wife of Client",
    rating: 4,
    content: "Comfort Health Home ne Indore mein mere pati ke liye post-operative care di. Unki professional seva se recovery jaldi hui."
  },
  {
    id: 20,
    name: "Vinod Pandey",
    relationship: "Brother of Client",
    rating: 5,
    content: "Comfort Health Home ki Rau mein home care meri behen ke liye bahut acchi thi. Unki team ne har cheez ka khyal rakha."
  },
  // Hinglish Reviews
  {
    id: 21,
    name: "Shalini Bhargava",
    relationship: "Daughter of Client",
    rating: 5,
    content: "Comfort Health Home ne Indore mein meri mom ke liye amazing home care provide kiya. Caregivers super caring aur professional the."
  },
  {
    id: 22,
    name: "Rahul Saxena",
    relationship: "Son of Client",
    rating: 5,
    content: "Comfort Health Home ki Rau mein home care service mere dad ke liye ekdum perfect thi. Nurses ne unki health ka full khyal rakha."
  },
  {
    id: 23,
    name: "Meena Rawat",
    relationship: "Client",
    rating: 5,
    content: "Mujhe Dewas mein Comfort Health Home se post-operative care mili, jo ekdum zabardast thi. Team ne mujhe ghar pe recover karne mein bahut help ki."
  },
  {
    id: 24,
    name: "Ajay Rathod",
    relationship: "Husband of Client",
    rating: 4,
    content: "Comfort Health Home ki Ujjain mein home care meri wife ke liye bahut acchi thi. Caregivers reliable aur bahut caring the."
  },
  {
    id: 25,
    name: "Nisha Agrawal",
    relationship: "Niece of Client",
    rating: 5,
    content: "Comfort Health Home ne Indore mein meri aunt ke liye awesome companionship di. Unki home care service ne unki life ko better kiya."
  },
  {
    id: 26,
    name: "Karan Choubey",
    relationship: "Grandson of Client",
    rating: 5,
    content: "Comfort Health Home ki Rau mein home care mere dada ji ke liye ekdum perfect thi. Caregivers ne unhe respect aur care ke sath treat kiya."
  },
  {
    id: 27,
    name: "Pallavi Sen",
    relationship: "Family of Client",
    rating: 5,
    content: "Comfort Health Home ki Dewas mein home care service ne humein bahut relief diya. Team professional aur caring thi, bilkul family jaisa."
  },
  {
    id: 28,
    name: "Farhan Qureshi",
    relationship: "Friend of Client",
    rating: 4,
    content: "Maine apne friend ke liye Comfort Health Home ki Ujjain mein home care arrange ki. Service top-notch thi aur team super responsive."
  },
  {
    id: 29,
    name: "Ritu Malviya",
    relationship: "Daughter of Client",
    rating: 5,
    content: "Comfort Health Home ne Indore mein meri maa ke liye shandaar home care di. Unki team ne recovery ko super easy bana diya."
  },
  {
    id: 30,
    name: "Suresh Tomar",
    relationship: "Son of Client",
    rating: 5,
    content: "Comfort Health Home ki Rau mein home care mere pita ji ke liye ekdum best thi. Unki paralysis care ne unki life ko bahut improve kiya."
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
