import { Button, ButtonProps } from "@mui/base";
import React from "react";

const types = { primary: "primary", secondary: "secondary", tertiray: "tertiray", link: "link" } as const;

export type ButtonPropsCustom = ButtonProps &
    Partial<{
        typeButton: keyof typeof types;
        text: any;
    }>;


const ButtonMCT: React.FC<React.PropsWithChildren<ButtonPropsCustom>> = ({
    children,
    typeButton = "primary",
    text = "Button",
    ...restProps
}) => {

    const renderSwitch = (type) => {

        switch (type) {
            case 'primary':
                return <Button {...restProps}
                    className={`  bg-primary-blue hover:bg-[#0882D3] disabled:bg-other-disable text-common-white disabled:text-text-disable  shadow-[0_3px_3px_0_rgba(165, 163, 174, 0.90)] px-[16px] py-[10px] rounded-[12px] ${restProps.className}`}
                    aria-label="Button"
                >
                    <p className='mct-font-button'>{text}</p>
                </Button>;
            case 'secondary':
                return <Button {...restProps}
                    className={`h-fit bg-common-white hover:bg-primary-blue/10 border-solid border border-primary-blue disabled:border-opacity-50  text-primary-blue disabled:text-primary-blue/50  shadow-[0_2px_4px_0_rgba(165, 163, 174, 0.2)] px-[16px] py-[10px] rounded-[12px] ${restProps.className}`}
                    aria-label="Button"
                >
                    <p className='mct-font-button'>{text}</p>
                </Button>;
            case 'tertiray':
                return <Button {...restProps}
                    className={`h-fit bg-common-white hover:bg-[#A8AAAE1A]/20 disabled:bg-common-white border-solid border border-[#A8AAAE] disabled:border-[#A8AAAE]/50  text-[#817D8D] disabled:text-[#817D8D]/50 shadow-[0_2px_4px_0_rgba(165, 163, 174, 0.2)] px-[16px] py-[10px] rounded-[12px] ${restProps.className}`}
                    aria-label="Button"
                >
                    <p className='mct-font-button'>{text}</p>
                </Button>;
            case 'link':
                return <Button {...restProps}
                    className={`h-fit bg-common-white hover:bg-primary-blue/10 disabled:bg-common-white text-primary-blue disabled:text-primary-blue/50 shadow-[0_2px_4px_0_rgba(165, 163, 174, 0.2)] px-[16px] py-[10px] rounded-[12px] ${restProps.className}`}
                    aria-label="Button"
                >
                    <p className='mct-font-button'>{text}</p>
                </Button>;
            default:
                return '';
        }
    }
    return (
        <>
            {renderSwitch(typeButton)}
        </>
    );
};

export { ButtonMCT };
