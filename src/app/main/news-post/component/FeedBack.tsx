import { Avatar } from '@mui/material'

const FeedBack = (props) => {
    const {name, comment, imageUrl} = props;

  return (
    <div className="border-y fb-border flex flex-row gap-[15px] sm:gap-[20px] py-[16px] sm:py-[24px]">
      <div className="">
      <Avatar className="w-[82px] h-[82px]" alt="Remy Sharp" src={imageUrl} />
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] leading-[28.2px] font-semibold">{name}</div>
        <div className="xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] leading-[24px] font-light">{comment}</div>
      </div>
    </div>
  )
}

export default FeedBack
