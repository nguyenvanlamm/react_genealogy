const ItemVideo = (props: { nameVideo: string, nameChanel: string, view: GLfloat, years: string, avatarUrl: string }) => {
    return (
        <div className='flex w-full flex-row'>
            <img className='w-[50%]' src={props.avatarUrl}></img>
            <div className='ml-[2%] flex w-full flex-col'>
                <div className='w-full text-white xl:text-[14px] lg:text-[12px] md:text-[12px] sm:text-[12px] maxsm:text-[12px]'>
                    {props.nameVideo}
                </div>
                <div className='text-white xl:text-[12px] lg:text-[10px] md:text-[10px] sm:text-[10px] maxsm:text-[8px]'>
                    {props.nameChanel}
                </div>
                <div className='text-white xl:text-[12px] lg:text-[10px] md:text-[10px] sm:text-[10px] maxsm:text-[8px]'>
                    {props.view}M view . {props.years} years ago. 
                </div>
            </div>
        </div>
    )
}

export default ItemVideo    