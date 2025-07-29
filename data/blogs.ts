export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  // UPDATED: Content is now an array of structured objects
  content: {
    heading: string;
    description: string;
  }[];
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
    content: [
      {
        heading: "1. Comfort of Familiar Surroundings",
        description: "There's no place like home. Staying in familiar surroundings provides emotional comfort and reduces anxiety. Care recipients can maintain their routines, sleep in their own bed, and be surrounded by cherished memories."
      },
      {
        heading: "2. Personalized One-on-One Care",
        description: "Home care provides individualized attention that's simply not possible in institutional settings. Caregivers can focus entirely on one person's specific needs, preferences, and daily schedule."
      },
      {
        heading: "3. Stronger Family Involvement",
        description: "Home care allows family members to remain actively and easily involved in their loved one's care. This ongoing connection is vital for emotional well-being and helps maintain strong family bonds."
      },
      {
        heading: "4. Cost-Effective Solution",
        description: "Contrary to popular belief, home care is often more affordable than nursing home care, especially when considering the level of personalized attention and the avoidance of costly facility fees."
      },
       {
        heading: "5. Reduced Risk of Infections",
        description: "Healthcare-associated infections are a significant concern in institutional settings with many residents. Home care dramatically reduces exposure to infectious diseases, promoting a safer environment."
      }
    ],
    author: "Dr. Sarah Johnson",
    date: "2024-07-25",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/7551428/pexels-photo-7551428.jpeg?auto=compress&cs=tinysrgb&w=1260",
    category: "Home Care",
    tags: ["home care", "nursing homes", "elderly care"]
  },
  // Add more blog posts with the new content structure
  {
    id: "dementia-care-tips",
    title: "Effective Communication Strategies for Dementia Care",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    excerpt: "Learn how to improve communication with a loved one living with dementia, fostering a more positive and supportive environment.",
    content: [
      {
        heading: "Be Patient and Positive",
        description: "Speak slowly and calmly. Use a gentle, reassuring tone. If you get frustrated, take a deep breath and pause. Your body language and attitude communicate more than your words and are key to a positive interaction."
      },
      {
        heading: "Use Simple, Direct Language",
        description: "Use short sentences and familiar words. Ask one question at a time and wait patiently for a response. Avoid complex questions or offering too many choices at once."
      }
    ],
    author: "Mark Williams",
    date: "2024-07-18",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/7551544/pexels-photo-7551544.jpeg?auto=compress&cs=tinysrgb&w=1260",
    category: "Dementia Care",
    tags: ["dementia", "communication", "caregiving"]
  }
];

// The rest of the functions in this file (getBlogById, etc.) remain the same.

export const getBlogById = (id: string): Blog | undefined => {
  return blogs.find(blog => blog.id === id);
};

export const getBlogsByCategory = (category: string): Blog[] => {
  return blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
};

export const getRecentBlogs = (limit: number = 3): Blog[] => {
  return blogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
