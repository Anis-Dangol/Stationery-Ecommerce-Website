import { Button } from '@/components/ui/button';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import { ChevronLeftIcon, ChevronRightIcon, LampDesk, Notebook, Package, PaintBucket, Pen, Scissors } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';



function ShoppingHome() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [banner1, banner2, banner3];

    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 5000)

        return () => clearInterval(timer);

    }, []);

    const categoriesWithIcon = [
        { id: "writing_essentials", label: "Writing Essentials", icon : Pen },
        { id: "art_supplies", label: "Art Supplies", icon : PaintBucket },
        { id: "craft_material", label: "Craft Material", icon : Scissors },
        { id: "journaling", label: "Journaling", icon : Notebook },
        { id: "office_essentials", label: "Office Essentials", icon : LampDesk },
        { id: "packing_supplies", label: "Packing Supplies", icon : Package }
      ];

    return ( 
        <div className="flex flex-col min-h-screen">
            <div className="relative w-full h-[600px] overflow-hidden">
                {slides.map((slide, index) => (
                    <img
                        src={slide}
                        key={index}
                        className={`${index === currentSlide ? 'opacity-100' : 'opacity-0' } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500`}
                    />
                ))}
                <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length)}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
                >
                    <ChevronLeftIcon className='w-4 h-4'/>
                </Button>
                <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)} 
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
                >
                    <ChevronRightIcon className='w-4 h-4'/>
                </Button>
            </div>
            <section className='py-12 bg-gray-50'>
                <div className='continer mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>Shop by category</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                        {
                            categoriesWithIcon.map(categoryItem => 
                                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                                    <CardContent className="flex flex-col items-center justify-center p-6">
                                        <categoryItem.icon className="w-12 h-12 mb-4 text-primary"/>
                                        <span className='font-bold text-center'>{categoryItem.label}</span>
                                    </CardContent>
                                </Card>)
                        }
                    </div>
                </div>
            </section>
        </div>
     );
}

export default ShoppingHome;