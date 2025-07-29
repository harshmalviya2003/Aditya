export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Keep as HTML string for dangerouslySetInnerHTML
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}

export const blogs: Blog[] = [
  {
    id: "benefits-of-home-care",
    title: "10 Benefits of Choosing Home Care Over Nursing Homes",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    excerpt: "Discover why home care is becoming the preferred choice for families seeking quality care for their loved ones.",
    content: `... (HTML content remains the same) ...`,
    author: "Dr. Sarah Johnson",
    date: "2024-07-25",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/7551428/pexels-photo-7551428.jpeg?auto=compress&cs=tinysrgb&w=1260",
    category: "Home Care",
    tags: ["home care", "nursing homes", "elderly care"]
  },
  {
    id: "dementia-care-tips",
    title: "Effective Communication Strategies for Dementia Care",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    excerpt: "Learn how to improve communication with a loved one living with dementia, fostering a more positive and supportive environment.",
    content: `<p>Communicating with a person who has dementia requires patience, understanding, and creativity. As the disease progresses, their ability to process language and express themselves changes. Here are some effective strategies...</p><h2>1. Be Patient and Positive</h2><p>Speak slowly and calmly. Use a gentle, reassuring tone. If you get frustrated, take a deep breath and pause. Your body language and attitude communicate more than your words.</p>`,
    author: "Mark Williams",
    date: "2024-07-18",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/7551544/pexels-photo-7551544.jpeg?auto=compress&cs=tinysrgb&w=1260",
    category: "Dementia Care",
    tags: ["dementia", "communication", "caregiving"]
  },
  {
    id: "post-operative-recovery",
    title: "A Guide to Safe and Speedy Post-Operative Recovery at Home",
    authorAvatar: "https://randomuser.me/api/portraits/women/50.jpg",
    excerpt: "Recovering from surgery at home can be challenging. Follow these essential tips to ensure a smooth and safe healing process.",
    content: `<p>After surgery, the comfort of home is often the best place to recover. However, it's crucial to create a safe environment and follow medical advice strictly. This guide provides key steps for a successful post-operative recovery at home...</p><h2>1. Prepare Your Home</h2><p>Before leaving the hospital, prepare your home. This includes setting up a comfortable recovery space, removing tripping hazards, and having necessary supplies on hand.</p>`,
    author: "Priya Malhotra, RN",
    date: "2024-07-10",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/7579319/pexels-photo-7579319.jpeg?auto=compress&cs=tinysrgb&w=1260",
    category: "Recovery Care",
    tags: ["surgery", "recovery", "post-op", "nursing"]
  },
  {
    id: "newborn-mother-care-guide",
    title: "Essential Care Tips for Newborns and Postpartum Mothers",
    authorAvatar: "https://randomuser.me/api/portraits/women/55.jpg",
    excerpt: "Navigating the first few weeks with a newborn can be overwhelming. Here are essential tips for caring for your baby and yourself.",
    content: `<p>The postpartum period is a time of great joy and significant adjustment. Proper care for both the newborn and the mother is crucial for a healthy start. Our expert nurses have compiled these essential tips...</p><h2>1. Umbilical Cord Care</h2><p>Keeping the umbilical cord stump clean and dry is vital to prevent infection. Fold the diaper down to expose the stump to air until it falls off naturally.</p>`,
    author: "Anjali Desai",
    date: "2024-06-28",
    readTime: "9 min read",
    image: "/services/1.jpg",
    category: "Newborn Care",
    tags: ["newborn", "postpartum", "motherhood"]
  }
];

export const getBlogById = (id: string): Blog | undefined => {
  return blogs.find(blog => blog.id === id);
};

// ... other export functions remain the same ...
