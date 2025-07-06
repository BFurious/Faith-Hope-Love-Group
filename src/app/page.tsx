import {
    Header,
    Hero,
    Services,
    About,
    Testimonials,
    FAQ,
    Contact,
    Footer
} from '@/components'
import Disclaimer from '@/components/Disclaimer'

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Services showLimited={true} />
            <About />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    )
} 