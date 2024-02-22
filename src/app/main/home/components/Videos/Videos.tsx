import titleIntroduce from '../../images/title_introduce.png'
import iconTitleIntroduce from '../../images/icon_title_introduce.png'
import imageVideoOne from '../../images/imageVideoOne.png'
import imageVideoTwo from '../../images/imageVideoTwo.png'
import imageVideoThree from '../../images/imageVideoThree.png'
import imageBgHomeFive from '../../images/imageBgHomeFive.png'
import InnerHTML from 'dangerously-set-html-content';
import parse from 'html-react-parser';
import { ReactElement, useEffect, useState } from 'react'
import ItemVideo from './ItemVideo'
import { useVideos } from 'src/app/stores/hooks'
import { VideoModel } from 'src/app/models/models'

const Videos = () => {
    const [videos, getVideos] = useVideos();
    const [dataVideos, SetDataVideos] = useState<VideoModel[]>([
        {
            id: 1,
            title: "Title",
            iframe: `<iframe className='w-[100%] h-[100%]' src="https://www.youtube.com/embed/_2uVuxLgMGc?si=bksSTdURVjvPYA_J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
            description: "Description",
            avatarUrl: imageVideoOne,
            time: Date.now().toString(),
        }
    ]);
    const [currentVideo, SetCurrentVideo] = useState<VideoModel>(dataVideos[0]);

    useEffect(() => {
        if (videos.length <= 0) {
            getVideos();
        } else {
            UpdateDataVideo();
        }
    }, []);

    const UpdateDataVideo = () => {
        SetDataVideos(videos);
        SetCurrentVideo(videos[0]);
    }

    useEffect(() => {
        if (videos.length > 0) {
            UpdateDataVideo();
        }
    }, [videos]);

    return (
        <div className='relative xl:w-[63%] sm:w-[73%] maxsm:w-[83%] flex w-full justify-center'>
            <div className='flex mt-[4%] w-full sm:rounded-[20px] maxsm:rounded-[10px] bg-[#922620] sm:p-[2%] maxsm:p-[5%] flex-col items-center'>
                <div className='relative sm:mt-[2%] maxsm:mt-0 bg-cover flex justify-center items-center utm w-[30%]'>
                    <div className='text-white xl:text-[48px] lg:text-[42px] md:text-[36px] sm:text-[30px] maxsm:text-[24px]'>
                        Video
                    </div>
                    <img className='absolute sm:w-full maxsm:w-[140%] max-w-[140%] xl:h-[95px] sm:h-[70px] maxsm:h-[30px]' src={titleIntroduce}></img>
                    <img className='absolute left-[-10%] h-[150%]' src={iconTitleIntroduce}></img>
                </div>

                <div className='flex px-[5%] mt-[5%] w-full h-full maxsm:flex-col sm:flex-row justify-between'>
                    <div className='sm:w-[60%] maxsm:w-[100%] flex flex-col'>
                        <div className='sm:h-[378px] maxsm:h-full'>
                            {parse(currentVideo.iframe)}
                        </div>
                        <div className='mt-[2%] xl:text-[18px] lg:text-[16px] md:text-[12px] sm:text-[10px] maxsm:text-[10px] text-white'>{currentVideo.title}</div>
                    </div>
                    <div className='sm:ml-[2%] maxsm:ml-0 flex sm:w-[40%] maxsm:w-[100%] flex-col sm:h-[350px] overflow-y-scroll'>
                        {
                            dataVideos.map((item) =>
                                <div onClick={() => SetCurrentVideo(item)} className='cursor-pointer w-[80%] mt-[2%] white w-full flex flex-col'>
                                    <ItemVideo nameVideo={item.title} nameChanel={""} view={354} avatarUrl={item.avatarUrl} years={'20-03-2023'}></ItemVideo>
                                </div>)
                        }
                    </div>
                </div>
            </div>
            <img src={imageBgHomeFive} className='absolute z-[0] left-0 w-[18%] mt-[20%] mix-blend-multiply'></img>
        </div >
    )
}

export default Videos