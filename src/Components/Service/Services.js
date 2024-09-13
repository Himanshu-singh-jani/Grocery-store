
import React from 'react'
import Fruit1 from '../../assets/fruitBasket.png'
import Fruit2 from '../../assets/fruitsJuice.png'
import Fruit3 from '../../assets/orangeSlice.png'



const ServiceData=[
    {
        id: 1,
        image: Fruit1,
        title:"Fresh Fruits",
        subtitle:"Fruit is the sweet, fleshy, edible part of a plant. It generally contains seeds. Fruits are usually eaten raw, although some varieties can be cooked. They come in a wide variety of colours, shapes and flavours.",
        aosDealy:"300"

    },
    {
        id: 1,
        image: Fruit2,
        title:"Fruits Juice",
        subtitle:"Fruit juice is rich in vitamin C and other antioxidants that help to strengthen the immune system and protect the body against infections and diseases.",
        aosDealy:"300"
    },
    {
        id: 1,
        image: Fruit3,
        title:"Orange Juice",
        subtitle:"The healthiest juice is freshly squeezed or bottled orange juice that is 100% pure. Health-conscious consumers may also inquire about where you source your oranges, and they may prefer organic",
        aosDealy:"300"
    }
];

const Services = () => {
  return (
    <div className='container my-16 space-y-4'>
        <div className='text-center max-w-lg mx-auto space-y-2'>
          <h1 className='text-3xl font-bold text-dark'>Fresh and 
            <span className='text-primary'> Tasty Fruits</span>
          </h1>
          <p className='text-sm opacity-50'>Mango. Mangoes are often called the “king of fruits” and for good reason. ...
             Pineapple. Pineapple is another sweet tropical fruit that is rich in vitamins and minerals. ...
             Papaya. Papaya is a delicious fruit that is sweet, juicy, and has a creamy texture. ...
             Grapes. ...
             Cherry. ...
             Watermelon. ...
             Peach. ...
             Strawberry.
          </p>

        </div>

        {/* card section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {ServiceData.map((item)=>(
                <div key={item.id} data-aos="fade-up" data-aos-delay={item.aosDealy} className='p-4 text-center space-y-6'>
                    <img alt='img not found' src={item.image} className='max-w-[200px] mx-auto hover:scale-125 
                    duration-300 img-shadow2'/>
                    <div className='space-y-2'>
                        <h1 className='text-2xl font-bold text-primary'>{item.title}</h1>
                        <p className='text-dark'>{item.subtitle}</p>
                        </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services;