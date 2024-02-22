import titleIntroduce from '../images/title_introduce.png'
import iconTitleIntroduce from '../images/icon_title_introduce.png'
import imageBgHomeSept from '../images/imageBgHomeSept.png'
import imageDetailIntroduce from '../images/image_detail_introduce.png'
import { useState } from 'react'

const Introduce = () => {
    const [isShowFullText, SetIsShowFullText] = useState<boolean>(false);
    const dataIntroduce = {
        title: "Lời tựa gia phả",
        description: "Dòng họ Kiều đến nơi đây sinh sống và lập nghiệp theo ước tính là vào khoảng nửa đầu thế kỷ thứ 10 , đã trải qua khoảng hơn 1000 năm. Thời gian là vũ khí đáng sợ nhất của cuộc đời, không ai chắc mình sẽ luôn ở bên nhau cả đời, cũng không ai chắc rằng mình có thể nhớ nhau cả đời, cho dù là thân thiết, thời gian, khoảng cách cũng sẽ xóa dần đi. Một dòng họ cũng vậy, 7 đời, 8 đời…, liệu các đời sau còn nhớ nổi cha ông, nhớ nổi anh em họ hàng. Do vậy, việc nghi chép và quản lý gia phả lúc này là rất cần thiết, cho dù 10 năm, 20 hay 100 năm... đi nữa thì gia phả luôn được bổ sung quản lý, được truyền dạy để con cháu muôn đời khắc ghi.",
    }
    return (
        <div className='relative flex w-full justify-center'>
            <div className='flex mt-[4%] z-[1] w-full sm:rounded-[20px] maxsm:rounded-[10px] bg-[#922620] sm:p-[2%] maxsm:p-[5%] flex-col items-center'>
                <div className='relative sm:mt-[2%] maxsm:mt-0 bg-cover flex justify-center items-center utm w-[30%]'>
                    <div className='text-white xl:text-[48px] lg:text-[42px] md:text-[36px] sm:text-[30px] maxsm:text-[24px]'>
                        Giới thiệu
                    </div>
                    <img className='absolute w-full xl:h-[95px] sm:h-[70px] maxsm:h-[30px]' src={titleIntroduce}></img>
                    <img className='absolute left-[-10%] h-[150%]' src={iconTitleIntroduce}></img>
                </div>
                <img src={imageDetailIntroduce} className='w-[93%] mt-[6%] h-[40%]'></img>
                <div className='w-[93%] mt-[2%] text-white border-1 border-white p-[2%]'>
                    <div className='xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] maxsm:text-[14px]'>{dataIntroduce.title}</div>
                    <div className='mt-[1%] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px]'>
                        {
                            isShowFullText ? <div>{dataIntroduce.description}</div> : <div onClick={() => SetIsShowFullText(true)}>{dataIntroduce.description.length > 100 ? <div>{dataIntroduce.description.slice(0, 100)} <b>...Xem Thêm</b></div> : dataIntroduce.description}</div>
                        }</div>
                </div>
            </div>
            <img src={imageBgHomeSept} className='absolute w-[20%] z-0 right-0 top-[15%] mix-blend-multiply'></img>
        </div >
    )
}

export default Introduce;