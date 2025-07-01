export interface Service {
    id: string
    title: string
    description: string
    icon: string
    features: string[]
    color: string
}

export interface Testimonial {
    id: string
    name: string
    role: string
    company: string
    content: string
    rating: number
    avatar: string
}

export interface FAQ {
    id: string
    question: string
    answer: string
}

export interface ContactForm {
    name: string
    email: string
    phone: string
    service: string
    message: string
}

export interface TeamMember {
    id: string
    name: string
    role: string
    bio: string
    image: string
    social: {
        linkedin?: string
        twitter?: string
        email?: string
    }
} 