import bgHome from './images/bg_home.jpg';
import BannerCarouselHome from './components/Banner/BannerCarouselHome';
import Introduce from './components/Introduce';
import Histories from './components/Histories';
import Businessmen from './components/Businessmens/Businessmen';
import NewLastest from './components/NewLastest';
import Pictues from './components/Pictures';
import Videos from './components/Videos/Videos';

const Home = () => {
    
    return (
        <div
            style={{
                backgroundImage:
                    `url(${bgHome})`,
            }}
            className="flex flex-col sm:pt-[130px] maxsm:pt-[70px]  w-full bg-cover bg-no-repeat items-center h-full">
            <div className="relative mt-[0.5%] xl:w-[72.65%] sm:w-[82.65%] maxsm:w-[92.65%]">
                <BannerCarouselHome />
            </div>
            <div className='xl:w-[63%] sm:w-[73%] maxsm:w-[83%]'>
                <Introduce></Introduce>
            </div>
            <div className="w-full flex justify-center">
                <Histories></Histories>
            </div>
            {/* <div className="w-full flex justify-center">
                <Businessmen></Businessmen>
            </div> */}
            <div className="w-full flex justify-center">
                <NewLastest></NewLastest>
            </div>
            <div className="w-full flex justify-center">
                <Videos></Videos>
            </div>
            <div className="w-full flex justify-center">
                <Pictues></Pictues>
            </div>
        </div>
    );
}

export default Home