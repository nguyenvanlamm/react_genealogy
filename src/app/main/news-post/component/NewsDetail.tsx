import InnerHTML from 'dangerously-set-html-content';
import { NewModel } from "src/app/models/models";

interface props{
  data: NewModel;
}

const NewsDetail = (props: props) => {
  const getHtmlNew = () => {
    return <InnerHTML html={props.data.content}></InnerHTML>
  }
  return (
    <div className="w-full flex gap-[16px] flex-col items-center place-content-center">
      <div className="averta-semibold font-semibold xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] maxsm:text-[14px] leading-[24px] sm:leading-[48px] text-center text-[#333333]">
        {props.data.title}
      </div>
      {props.data.content == "<div>Hello</div>" ? "" : getHtmlNew()}
    </div>
  );
};

export default NewsDetail;
