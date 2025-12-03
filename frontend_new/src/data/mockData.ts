export interface Program {
    id: number;
    title: string;
    description: string;
    icon: 'FaBook' | 'FaHeart' | 'FaShieldAlt' | 'FaTools' | 'FaFutbol' | 'FaLaptop';
}

export const programs: Program[] = [
    {
        id: 1,
        title: 'Education Support',
        description: 'Providing scholarships, school supplies, and after-school tutoring to ensure no child drops out.',
        icon: 'FaBook',
    },
    {
        id: 2,
        title: 'Nutrition & Health',
        description: 'Regular health camps and nutritious meal programs to fight malnutrition and ensure well-being.',
        icon: 'FaHeart',
    },
    {
        id: 3,
        title: 'Child Protection',
        description: 'Advocacy and counseling services to safeguard children from abuse, labor, and exploitation.',
        icon: 'FaShieldAlt',
    },
    {
        id: 4,
        title: 'Skill Development',
        description: 'Vocational training and workshops to equip older children with job-ready skills.',
        icon: 'FaTools',
    },
    {
        id: 5,
        title: 'Sports & Recreation',
        description: 'Fostering teamwork, discipline, and physical health through organized sports activities.',
        icon: 'FaFutbol',
    },
    {
        id: 6,
        title: 'Digital Literacy',
        description: 'Bridging the digital divide by teaching computer basics and coding to underprivileged kids.',
        icon: 'FaLaptop',
    },
];

export interface VolunteerRole {
    id: number;
    title: string;
    description: string;
}

export const volunteerRoles: VolunteerRole[] = [
    {
        id: 1,
        title: 'Teaching Support',
        description: 'Help children with homework, tutoring, and educational activities.',
    },
    {
        id: 2,
        title: 'Event Volunteer',
        description: 'Assist in organizing and managing community events and fundraisers.',
    },
    {
        id: 3,
        title: 'Fundraising Partner',
        description: 'Help raise funds and awareness for our programs through campaigns.',
    },
];

export interface ImpactStat {
    id: number;
    number: string;
    label: string;
    icon: 'FaChild' | 'FaUsers' | 'FaHome' | 'FaAward';
}

export const impactStats: ImpactStat[] = [
    {
        id: 1,
        number: '500+',
        label: 'Children Supported',
        icon: 'FaChild',
    },
    {
        id: 2,
        number: '50+',
        label: 'Active Volunteers',
        icon: 'FaUsers',
    },
    {
        id: 3,
        number: '20+',
        label: 'Community Centers',
        icon: 'FaHome',
    },
    {
        id: 4,
        number: '15+',
        label: 'Years of Service',
        icon: 'FaAward',
    },
];

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
    image: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Parent',
        quote: 'Baal Sanjeevani gave my daughter a second chance at education. I am forever grateful for their support.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    },
    {
        id: 2,
        name: 'Rajesh Kumar',
        role: 'Volunteer',
        quote: 'Volunteering here opened my eyes. The dedication of the team and the smiles on the kids\' faces are my biggest reward.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'Anita Desai',
        role: 'Community Leader',
        quote: 'A transparent and impactful organization. They truly walk the talk when it comes to child welfare.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    },
];
