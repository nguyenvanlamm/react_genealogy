import titleIntroduce from '../images/title_introduce.png'
import iconTitleIntroduce from '../images/icon_title_introduce.png'
import borderHistory from '../images/border_history.png'
import roofHistory from '../images/roofHistory.png'
import imageBgHomeOne from '../images/imageBgHomeOne.png'
import imageBgHomeThree from '../images/imageBgHomeThree.png'
import TitleNew from './TitleNew'
import { useNewCategories, useNews } from 'src/app/stores/hooks'
import { useEffect, useState } from 'react'
import { NewModel } from 'src/app/models/models'

const Histories = () => {
    const [newCategories, getNewCategories] = useNewCategories();
    const [news, getNews] = useNews();
    const [dataNews, SetdataNews] = useState<NewModel[]>([
        {
            id: 1,
            newsCategoryId: 1,
            title: "Gia phả họ Kiều",
            content: "<div>Hello</div>",
            description: "Hello",
            imageUrl: iconTitleIntroduce,
            date: "20-02-2024",
            comments: 1,
        }
    ]);

    useEffect(() => {
        if (newCategories.length <= 0) {
            getNewCategories();
        } else {
            UpdateDataNewCategories();
        }

        if (news.length < 0) {
            getNews();
        }
    }, []);

    useEffect(() => {
        if (news.length > 0 && newCategories.length > 0) {
            const data: NewModel[] = [];
            news.forEach(item => {
                if (item.newsCategoryId == 1) {
                    data.push(item);
                }
            });

            SetdataNews(data);
        }else{
            getNews();
        }
    }, [news]);

    useEffect(() => {
        UpdateDataNewCategories();
    }, [newCategories]);

    const UpdateDataNewCategories = () => {
        if (news.length > 0 && newCategories.length > 0) {
            const data: NewModel[] = [];
            news.forEach(item => {
                if (item.newsCategoryId == 1) {
                    data.push(item);
                }
            });

            SetdataNews(data);
        }else{
            getNewCategories();
        }
    }

    const dataIntroduce = {
        title: "Các họ đổi sang họ khác – Nguyên nhân và gốc tích",
        description: "Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, không ít dòng họ, chi họ Kiều đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Kiều.",
    }


    return (
        <div className='flex relative xl:w-[63%] sm:w-[73%] maxsm:w-[83%] flex-col mt-[4%] items-center justify-center'>
            <img src={roofHistory} className='w-[100%] pointer-events-none'></img>
            <div className='flex z-[1] mt-[-2%] w-full sm:rounded-[20px] maxsm:rounded-[10px] bg-[#922620] sm:p-[2%] maxsm:p-[5%]'>
                <div className='relative flex flex-col items-center'>
                    <div className='flex flex-col items-center p-[3%]'>
                        <div className='relative sm:mt-[2%] maxsm:mt-0 bg-cover flex justify-center items-center utm w-[30%]'>
                            <div className='text-white xl:text-[48px] lg:text-[42px] md:text-[36px] sm:text-[30px] maxsm:text-[24px]'>
                                Lịch sử họ Kiều
                            </div>
                            <img className='absolute sm:w-full maxsm:w-[140%] max-w-[140%] xl:h-[95px] sm:h-[70px] maxsm:h-[30px]' src={titleIntroduce}></img>
                            <img className='absolute left-[-10%] h-[150%]' src={iconTitleIntroduce}></img>
                        </div>
                        <div className='w-[93%] mt-[4%] text-white'>
                            <div className='xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] maxsm:text-[14px]'>{dataIntroduce.title}</div>
                            <div className='mt-[2%] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px]'>{dataIntroduce.description}</div>
                        </div>
                        <div className='w-[93%] mt-[1%]'>
                            {
                                dataNews.slice(0, 2).map((item) => <div>
                                    <TitleNew id={item.id} title={item.title} imageUrl={item.imageUrl} description={item.description} date={item.date}></TitleNew>
                                </div>)
                            }
                        </div>
                    </div>
                    <img src={borderHistory} className='sm:block maxsm:hidden absolute w-full h-full pointer-events-none'></img>
                </div>
            </div>
            <img src={imageBgHomeOne} className='absolute z-[0] right-0 w-[17%] mt-[-30%] mix-blend-multiply'></img>
            <img src={imageBgHomeThree} className='absolute z-[0] left-0 w-[17%] mt-[20%] mix-blend-multiply'></img>
        </div>
    )
}

export default Histories;