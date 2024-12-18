import img from '../../assets/new-cc-webpage-hero-1920x1080.jpg'


const Extra = () => {
    return (
        <div className='container mx-auto'>
            <div className="flex items-center my-10">
                <div className=' w-full lg1/2 '>
                        <h2 className='text-xl lg:text-4xl py-2 font-bold'>Swiss Alps Expedition</h2>
                        <p className='text-md '>A Swiss Alps expedition can include a variety of activities, such as hiking, cycling, mountaineering, and train travel: 
Hiking
Hike the Haute Route to Zermatt, a scenic trail with mountaineering history. You can also hike in the Bernese Oberland, which is good for the whole family. 
Cycling
Cycle through the Rhine River valley or circle Lake Constance, which is flanked by the Swiss Alps. 
Train travel
Take a scenic train ride to St. Moritz or Davos. You can also ride the Bernina Red Train on a UNESCO-listed route with alpine views</p>
                </div>

                <div className='w-full lg:w-1/2' >
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Extra;