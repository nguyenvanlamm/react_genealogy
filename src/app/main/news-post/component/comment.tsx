import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import React, { useState } from "react";
import { CommentModel } from "src/app/models/models";
import { useComments } from "src/app/stores/hooks";
import { useParams } from "react-router-dom";
import { showMessage } from "app/store/fuse/messageSlice";
import { useAppDispatch } from "app/store";

const Comment = () => {
  const { newId } = useParams<{ newId: string }>();
  const [comments, getComments, createComment] = useComments();
  const [valueComment, SetValueComment] = useState<string>("");
  const [valueName, SetValueName] = useState<string>("");
  const [valuePhone, SetValuePhone] = useState<string>("");
  const dispatch = useAppDispatch();

  const HandlerCreateComment = () => {
    const dataComment = {
      newsId: newId,
      name: valueName,
      phone: valuePhone,
      comment: valueComment,
    };

    SetValueComment("");
    SetValueName("");
    SetValuePhone("");
    createComment(dataComment);
    dispatch(
      showMessage({
        message: "Đăng bình luận thành công", //text or html
        autoHideDuration: 3000, //ms
        anchorOrigin: {
          vertical: "bottom", //top bottom
          horizontal: "center", //left center right
        },
        variant: "success", //success error info warning null
      })
    );
  };

  return (
    <div className="bg-white bg-opacity-[0.32] p-[18px] sm:p-[24px] flex flex-col gap-[3.5px] sm:gap-[8xp]">
      <div className="averta-regular font-normal text-[20px] leading-[28.2px]">
        Bình luận
      </div>
      <div className="text-[#9E2B25] averta-regular font-normal xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] leading-[16px] sm:leading-[28.2px]">
        Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc được
        đánh dấu *
      </div>
      <div>
        <div>
          <span className="averta-regular font-normal xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] leading-[28.2px] text-[#333333]">
            Thêm bình luận
          </span>
          <span className="text-[#9E2B25]">*</span>
        </div>
        <TextField
          className="mt-12 mb-12"
          id=""
          type="text"
          multiline
          rows={15}
          value={valueComment}
          onChange={(e) => SetValueComment(e.target.value)}
          variant="outlined"
          fullWidth
          InputProps={{
            style: { backgroundColor: "white" },
          }}
        />
      </div>
      <div className="flex w-full flex-row gap-[5px] sm:gap-[10px]">
        <div className="w-1/2">
          <div>
            <span className="averta-regular font-normal xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] leading-[28.2px] text-[#333333]">
              Tên
            </span>
            <span className="text-[#9E2B25]">*</span>
          </div>
          <TextField
            className="mt-12 mb-12"
            id=""
            type="text"
            multiline
            value={valueName}
            onChange={(e) => SetValueName(e.target.value)}
            variant="outlined"
            fullWidth
            InputProps={{
              style: { backgroundColor: "white" },
            }}
          />
        </div>
        <div className="w-1/2">
          <div>
            <span className="averta-regular font-normal xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] leading-[28.2px] text-[#333333]">
              SĐT
            </span>
            <span className="text-[#9E2B25]">*</span>
          </div>
          <TextField
            className="mt-12 mb-12"
            id=""
            type="text"
            multiline
            value={valuePhone}
            onChange={(e) => SetValuePhone(e.target.value)}
            variant="outlined"
            fullWidth
            InputProps={{
              style: { backgroundColor: "white" },
            }}
          />
        </div>
      </div>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Lưu tên và sđt này của bạn cho lần bình luận tiếp theo"
      />
      <div
        onClick={() => HandlerCreateComment()}
        className="btn cursor-pointer text-[#9E2B25] averta-semibold font-semibold xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] maxsm:text-[14px] py-[14px] px-[22.5px] w-fit leading-[24px] rounded-[5px]"
      >
        ĐĂNG BÌNH LUẬN
      </div>
    </div>
  );
};

export default Comment;
