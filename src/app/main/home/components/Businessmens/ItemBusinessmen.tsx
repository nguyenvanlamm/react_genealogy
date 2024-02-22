import { useState } from 'react';
import borderBusinessment from '../../images/borderBusinessment.png';
import { useNavigate } from "react-router-dom";

const ItemBusinessmen = (props: { id: number, name: string, image: string, years: string, description: string }) => {
    const navigate = useNavigate();
    const [isShowFullText, SetIsShowFullText] = useState<boolean>(false);

    const ClickNews = (id:number) => {
        navigate(`/news/${id}`)
      }
    return (
        <div className='cursor-pointer flex flex-col px-[2%] sm:w-[25%] maxsm:w-[35%] items-center'>
            <div onClick={() => ClickNews(props.id)} className='relative flex justify-center items-center'>
                <img className='w-[80%]' src={borderBusinessment}></img>
                <img className='absolute h-[80%] w-[65%] rounded-full' src={props.image}></img>
            </div>
            <div onClick={() => ClickNews(props.id)} className='mt-[10%] text-white text-center xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] maxsm:text-[14px]'>{props.name}</div>
            <div className='mt-[4%] text-white text-center xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px]'>
                {
                    isShowFullText ? <div>{props.description}</div> : <div onClick={() => SetIsShowFullText(true)}>{props.description.length > 20 ? <div>{props.description.slice(0, 20)} <b>...Xem Thêm</b></div> : props.description}</div>
                }
            </div>
        </div>
    )
}

export default ItemBusinessmen