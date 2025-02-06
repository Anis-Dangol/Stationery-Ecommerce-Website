import { Button } from '@/components/ui/button';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import { ChevronLeftIcon, ChevronRightIcon, LampDesk, Notebook, Package, PaintBucket, Pen, Scissors } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFilteredProducts, fetchProductDetails } from '@/store/shop/products-slice';
import ShoppingProductTile from '@/components/shopping-view/product-tile';
import { useNavigate } from 'react-router-dom';
import { addToCart, fetchCartItems } from '@/store/shop/cart-slice';
import { useToast } from '@/components/ui/use-toast';
import { ProductDetailsDialog } from '@/components/shopping-view/product-details';

const categoriesWithIcon = [
    { id: "writing_essentials", label: "Writing Essentials", icon : Pen },
    { id: "art_supplies", label: "Art Supplies", icon : PaintBucket },
    { id: "craft_material", label: "Craft Material", icon : Scissors },
    { id: "journaling", label: "Journaling", icon : Notebook },
    { id: "office_essentials", label: "Office Essentials", icon : LampDesk },
    { id: "packing_supplies", label: "Packing Supplies", icon : Package }
  ];
  
const sub_categoriesWithIcon = [
    { id: "notebooks&diary", label: "Notebooks & Diary", icon : Pen  },
    { id: "pens", label: "Pens", icon : Pen  },
    { id: "sticky_notes", label: "Sticky Notes", icon : Pen  },
    { id: "erasers&correction_tapes", label: "Erasers & Correction Tapes", icon : Pen  },
    { id: "paints", label: "Paints", icon : Pen  },
    { id: "pencils", label: "Pencils", icon : Pen  },
    { id: "art_essentials", label: "Artist Essentials", icon : Pen  },
    { id: "resin_art", label: "Resin Art", icon : Pen  },
    { id: "model_making", label: "Model making", icon : Pen  },
    { id: "papers", label: "Papers", icon : Pen  },
    { id: "stickers", label: "Stickers", icon : Pen  },
    { id: "tapes_adhesive", label: "Tapes & Adhesive", icon : Pen  },
    { id: "office_essentials_items", label: "Office Essentials Items", icon : Pen  },
    { id: "organizers", label: "Organizers", icon : Pen  },
    { id: "hamper_box", label: "Hamper Box", icon : Pen  },
    { id: "gift_decor_products", label: "Gift Decor Products", icon : Pen  },
  ];

function ShoppingHome() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const productList = useSelector(state => state.shopProducts?.productList);
    const productDetails = useSelector(state => state.shopProducts?.productDetails);
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const user = useSelector(state => state.auth?.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { toast } = useToast();

    const slides = [banner1, banner2, banner3];

    function handleNavigateToLisingPage(getCurrentItem, section) {
        sessionStorage.removeItem('filters');
        const currentFilter = {
            [section] : [getCurrentItem.id]
        }

        sessionStorage.setItem('filters', JSON.stringify(currentFilter));
        navigate('/shop/listing');
    }

    function handleGetProductDetails(getCurrentProductId) {
        dispatch(fetchProductDetails(getCurrentProductId));
        
    }

    function handleAddtoCart(getCurrentProductId) {
        console.log(getCurrentProductId);
        dispatch(addToCart({
            userId: user?.id, 
            productId: getCurrentProductId, 
            quantity: 1,
        }))
        .then(data =>{
            if (data?.payload?.success) {
                dispatch(fetchCartItems(user?.id));
                toast ({
                    title : "Product is Added to Cart",
                })
            }
        });
    }

    useEffect(() => {
        if (productDetails !== null) 
        setOpenDetailsDialog(true);
    },[productDetails]);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 50000)
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        dispatch(fetchAllFilteredProducts({ filterParams: {}, sortParams : 'price-lowtohigh' }));
    },[dispatch]);

    console.log(productList, "productList");

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
                        {categoriesWithIcon.map(categoryItem => 
                            <Card onClick={() => handleNavigateToLisingPage(categoryItem, 'category')} className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <categoryItem.icon className="w-12 h-12 mb-4 text-primary"/>
                                    <span className='font-bold text-center'>{categoryItem.label}</span>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </section>

            <section className='py-12 bg-gray-50'>
                <div className='continer mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>Shop by Sub-Category</h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4'>
                        {sub_categoriesWithIcon.map(sub_categoryItem => 
                            <Card onClick={() => handleNavigateToLisingPage(sub_categoryItem, 'sub_category')} className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <sub_categoryItem.icon className="w-12 h-12 mb-4 text-primary"/>
                                    <span className='font-bold text-center'>{sub_categoryItem.label}</span>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </section>
            
            <section className='py-12'>
                <div className='continer mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>Feature Products</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {
                            productList && productList.length > 0 ?
                            productList.map(productItem => <ShoppingProductTile 
                                handleGetProductDetails={handleGetProductDetails}
                                product={productItem}
                                handleAddtoCart={handleAddtoCart}
                            />) 
                            : null
                        }
                    </div>
                </div>
            </section>
            <ProductDetailsDialog 
                open={openDetailsDialog} 
                setOpen={setOpenDetailsDialog} 
                productDetails={productDetails}
            />
        </div>
     );
}

export default ShoppingHome;