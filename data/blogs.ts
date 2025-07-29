export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
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
    excerpt: "Discover why home care is becoming the preferred choice for families seeking quality care for their loved ones.",
    content: `
      <p>When it comes to caring for aging family members or those recovering from illness, families often face a difficult decision: home care or nursing home care. While both options have their merits, home care has emerged as the preferred choice for many families, and for good reason.</p>
      
      <h2>1. Comfort of Familiar Surroundings</h2>
      <p>There's no place like home. Staying in familiar surroundings provides emotional comfort and reduces anxiety for care recipients. They can maintain their routines, sleep in their own bed, and be surrounded by cherished memories and belongings.</p>
      
      <h2>2. Personalized One-on-One Care</h2>
      <p>Home care provides individualized attention that's simply not possible in institutional settings. Caregivers can focus entirely on one person's specific needs, preferences, and schedule.</p>
      
      <h2>3. Family Involvement</h2>
      <p>Home care allows family members to remain actively involved in their loved one's care. This ongoing connection is vital for emotional well-being and helps maintain family bonds.</p>
      
      <h2>4. Cost-Effective Solution</h2>
      <p>Contrary to popular belief, home care is often more affordable than nursing home care, especially when considering the level of personalized attention provided.</p>
      
      <h2>5. Reduced Risk of Infections</h2>
      <p>Healthcare-associated infections are a significant concern in institutional settings. Home care dramatically reduces exposure to infectious diseases.</p>
      
      <h2>6. Maintained Independence</h2>
      <p>Home care promotes independence by allowing individuals to make choices about their daily routines, meals, and activities while receiving necessary support.</p>
      
      <h2>7. Better Nutrition</h2>
      <p>Home care allows for personalized meal preparation based on dietary preferences, restrictions, and cultural considerations.</p>
      
      <h2>8. Flexible Scheduling</h2>
      <p>Care can be adjusted based on changing needs, whether that's increasing hours during recovery or reducing them as independence improves.</p>
      
      <h2>9. Emotional Well-being</h2>
      <p>Studies show that people receiving care at home report higher satisfaction and better emotional health compared to those in institutional care.</p>
      
      <h2>10. Quality Time with Pets</h2>
      <p>For many people, pets are family. Home care allows individuals to maintain these important relationships that contribute to emotional well-being.</p>
      
      <p>At The Florence Nightingale Home Care Agency, we understand that every family's situation is unique. Our experienced team works with you to develop a care plan that meets your specific needs while honoring your preferences and values.</p>
    `,
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/7551428/pexels-photo-7551428.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Home Care",
    tags: ["home care", "nursing homes", "elderly care", "family care"]
  },
  {
    id: "caring-for-dementia-patients",
    title: "Essential Tips for Caring for Loved Ones with Dementia",
    excerpt: "Learn practical strategies and compassionate approaches for providing quality care to individuals with dementia.",
    content: `
      <p>Caring for someone with dementia can be both rewarding and challenging. Understanding the condition and learning effective caregiving strategies can make a significant difference in the quality of life for both the patient and their family.</p>
      
      <h2>Understanding Dementia</h2>
      <p>Dementia is not a single disease but a term used to describe symptoms affecting memory, thinking, and social abilities. Alzheimer's disease is the most common type, accounting for 60-80% of cases.</p>
      
      <h2>Creating a Safe Environment</h2>
      <p>Safety is paramount when caring for someone with dementia:</p>
      <ul>
        <li>Remove or secure potentially dangerous items</li>
        <li>Install locks on cabinets containing medications or chemicals</li>
        <li>Ensure adequate lighting throughout the home</li>
        <li>Remove trip hazards like loose rugs</li>
        <li>Consider installing safety devices like door alarms</li>
      </ul>
      
      <h2>Establishing Routines</h2>
      <p>Consistent daily routines provide structure and reduce confusion. Try to maintain regular times for meals, medications, activities, and sleep.</p>
      
      <h2>Communication Strategies</h2>
      <p>Effective communication becomes increasingly important:</p>
      <ul>
        <li>Speak slowly and clearly</li>
        <li>Use simple, familiar words</li>
        <li>Maintain eye contact</li>
        <li>Be patient and allow extra time for responses</li>
        <li>Use non-verbal cues like gestures and touch</li>
      </ul>
      
      <h2>Managing Behavioral Changes</h2>
      <p>Behavioral changes are common in dementia. Understanding triggers and implementing coping strategies can help manage these challenges effectively.</p>
      
      <h2>The Importance of Professional Support</h2>
      <p>Professional dementia care services can provide specialized support, respite for family caregivers, and peace of mind knowing your loved one is receiving expert care.</p>
      
      <p>At The Florence Nightingale Home Care Agency, our dementia care specialists are trained in the latest evidence-based approaches to provide compassionate, effective care for individuals with dementia and support for their families.</p>
    `,
    author: "Maria Rodriguez, RN",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/7551544/pexels-photo-7551544.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Dementia Care",
    tags: ["dementia", "alzheimer's", "elderly care", "caregiving tips"]
  },
  {
    id: "post-surgery-recovery-at-home",
    title: "Post-Surgery Recovery: Why Home is the Best Place to Heal",
    excerpt: "Explore the advantages of recovering from surgery in the comfort of your own home with professional medical support.",
    content: `
      <p>Recovery after surgery is a critical period that significantly impacts overall outcomes. While hospitals provide excellent acute care, research increasingly shows that home recovery, when properly supported, offers numerous advantages for patients.</p>
      
      <h2>Reduced Risk of Hospital-Acquired Infections</h2>
      <p>Hospitals, while sterile, are also environments where various pathogens can be present. Home recovery significantly reduces exposure to healthcare-associated infections, which can be particularly dangerous for post-surgical patients with compromised immune systems.</p>
      
      <h2>Better Sleep and Rest</h2>
      <p>Quality sleep is essential for healing. At home, patients can sleep in their own bed, maintain their preferred sleep schedule, and avoid the frequent disruptions common in hospital settings.</p>
      
      <h2>Personalized Nutrition</h2>
      <p>Proper nutrition accelerates healing. Home recovery allows for:</p>
      <ul>
        <li>Meals prepared according to dietary preferences</li>
        <li>Fresh, home-cooked food that may be more appealing</li>
        <li>Flexible meal timing based on appetite and medication schedule</li>
        <li>Cultural and personal food preferences</li>
      </ul>
      
      <h2>Emotional and Psychological Benefits</h2>
      <p>The psychological impact of being in familiar surroundings cannot be understated. Home provides:</p>
      <ul>
        <li>Comfort and emotional security</li>
        <li>Presence of family and pets</li>
        <li>Personal belongings and familiar environment</li>
        <li>Reduced anxiety and stress</li>
      </ul>
      
      <h2>Cost-Effective Care</h2>
      <p>Home recovery with professional support is often more cost-effective than extended hospital stays or skilled nursing facility care.</p>
      
      <h2>Professional Post-Surgical Home Care</h2>
      <p>Professional home care ensures that recovery is both safe and effective:</p>
      <ul>
        <li>Wound care and monitoring</li>
        <li>Medication management</li>
        <li>Physical therapy support</li>
        <li>Vital signs monitoring</li>
        <li>Complication prevention</li>
      </ul>
      
      <h2>Family Involvement</h2>
      <p>Home recovery allows family members to be actively involved in the healing process, providing emotional support and helping with care under professional guidance.</p>
      
      <p>At The Florence Nightingale Home Care Agency, our post-surgical care team includes registered nurses and trained caregivers who specialize in supporting patients through their recovery journey at home.</p>
    `,
    author: "Dr. Michael Chen",
    date: "2024-01-05",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/7579319/pexels-photo-7579319.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Medical Care",
    tags: ["post-surgery", "recovery", "medical care", "home healing"]
  },
  {
    id: "choosing-right-caregiver",
    title: "How to Choose the Right Caregiver for Your Family",
    excerpt: "A comprehensive guide to selecting the perfect caregiver who will provide compassionate, professional care for your loved one.",
    content: `
      <p>Choosing a caregiver for your loved one is one of the most important decisions you'll make. The right caregiver becomes an extension of your family, providing not just care, but companionship, dignity, and peace of mind.</p>
      
      <h2>Assess Your Needs</h2>
      <p>Before beginning your search, clearly define what type of care is needed:</p>
      <ul>
        <li>Level of medical care required</li>
        <li>Personal care needs</li>
        <li>Companionship requirements</li>
        <li>Schedule and duration of care</li>
        <li>Special skills or experience needed</li>
      </ul>
      
      <h2>Essential Qualifications to Look For</h2>
      <p>A qualified caregiver should have:</p>
      <ul>
        <li>Proper training and certifications</li>
        <li>Background checks and references</li>
        <li>Experience relevant to your needs</li>
        <li>CPR and first aid certification</li>
        <li>Professional liability insurance</li>
      </ul>
      
      <h2>Personality and Compatibility</h2>
      <p>Technical skills are important, but personality match is equally crucial:</p>
      <ul>
        <li>Patience and compassion</li>
        <li>Good communication skills</li>
        <li>Reliability and punctuality</li>
        <li>Respect for dignity and independence</li>
        <li>Cultural sensitivity</li>
      </ul>
      
      <h2>Questions to Ask During Interviews</h2>
      <p>Prepare thoughtful questions to assess both competency and fit:</p>
      <ul>
        <li>What is your experience with similar care situations?</li>
        <li>How do you handle emergency situations?</li>
        <li>What is your approach to maintaining dignity?</li>
        <li>How do you communicate with families?</li>
        <li>What are your availability and scheduling preferences?</li>
      </ul>
      
      <h2>Red Flags to Avoid</h2>
      <p>Be cautious of caregivers who:</p>
      <ul>
        <li>Cannot provide proper credentials</li>
        <li>Avoid answering specific questions</li>
        <li>Have gaps in employment without explanation</li>
        <li>Seem rushed or disinterested during the interview</li>
        <li>Cannot provide references</li>
      </ul>
      
      <h2>The Trial Period</h2>
      <p>Consider starting with a trial period to ensure the caregiver is a good fit. This allows both parties to assess compatibility and make adjustments as needed.</p>
      
      <h2>Working with Professional Agencies</h2>
      <p>Professional home care agencies offer several advantages:</p>
      <ul>
        <li>Pre-screened, trained caregivers</li>
        <li>Backup coverage and support</li>
        <li>Professional oversight and supervision</li>
        <li>Insurance and liability protection</li>
        <li>Ongoing training and development</li>
      </ul>
      
      <p>At The Florence Nightingale Home Care Agency, we carefully screen and train all our caregivers, ensuring they meet our high standards for professional competence and compassionate care.</p>
    `,
    author: "Jennifer Williams, Care Coordinator",
    date: "2023-12-28",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Caregiver Selection",
    tags: ["caregiver", "hiring", "family care", "home care tips"]
  }
];

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