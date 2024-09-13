
import React from 'react'
import Bannerimg from '../../assets/fruitBanner.jpg'
import Appstore from '../../assets/appstore.png'
import Playstore from '../../assets/playstore.png'


const BannerStyle={
    backgroundImage:`url(${Bannerimg})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    width:"100%",
    hight:"100%"
};

const AppBanner = () => {
  return (
    <div className='conttainer my-14'>
        <div style={BannerStyle} className='sm:min-h-[400px] flex justify-end items-center rounded-xl '>
            <div>
            <div className='space-y-3 max-w-xl mx-auto'>
                <h1 className='text-2xl text-center sm:text-4xl font-semibold'>Download the app</h1>
                <p  className='text-center sm:px-20'>
                    You can also download apps from the Google Play Store on a computer by going to play.google.com in a web browser.
                    </p>

                    {/* image links */}
                    <div className='flex justify-center items-center gap-4'>
                        <a href='#'>
                            <img  src={Appstore} alt='not found' className='mx-w-[120px] sm:mx-w-[150px] md:max-w-[200px]'></img>
                        </a>
                        <a href='#'>
                            <img  src={Playstore} alt='not found' className='mx-w-[120px] sm:mx-w-[150px] md:max-w-[200px] '></img>
                        </a>
                    </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default AppBanner