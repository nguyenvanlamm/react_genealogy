import BannerCarouselGenealogy from "./components/BannerCarouselGenealogy";
import bgGenealogy from "./images/bgGenealogy.jpg";
import iconHolyName from "./images/iconHolyName.png";
import iconGenealogy from "./images/iconGenealogy.png";
import iconGender from "./images/iconGender.png";
import iconYearThree from "./images/iconYearThree.png";
import iconYearOne from "./images/iconYearOne.png";
import iconYearTwo from "./images/iconYearTwo.png";
import statiscal from "./images/statistical.png";
import iconDot from "./images/iconDot.png";
import iconSearch from "./images/iconSearch.png";
import arrowDown from "./images/arrowDown.png";
import iconResetText from "./images/iconResetText.png";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import dataJson from "../template/genealogies.json";
import diacritic from "diacritic";
import {
    dataStatisticalModel,
    genealogiesModel,
    holyNameModel,
    optionModel,
    personalModels,
    tabModel,
} from "src/app/models/models";
import "./Genealogy.css";
import TableGenealogy from "./components/TableGenealogy";
import TemplatePage from "../template/TemplatePage";

const Genealogy = () => {
    const [Generation, SetGeneration] = useState<optionModel>({
        value: "-1",
        label: "Tất cả",
    });
    const [HolyName, setHolyName] = useState<optionModel>({
        value: "-1",
        label: "Tất cả",
    });
    const [isOpenGeneration, SetisOpenGeneration] = useState<boolean>(false);
    const [isOpenHolyName, SetisOpenHolyName] = useState<boolean>(false);
    const [isOpenGender, SetisOpenGender] = useState<boolean>(false);
    const [isOpenYearBorn, SetisOpenYearBorn] = useState<boolean>(false);
    const [isOpenYearDie, SetisOpenYearDie] = useState<boolean>(false);
    const [isOpenYearLived, SetisOpenYearLived] = useState<boolean>(false);
    const [dataIdSearchs, SetDataIdSearch] = useState<number[]>([]);
    const [YearStartDie, SetYearStartDie] = useState<optionModel>({
        value: "1800",
        label: "1800",
    });
    const [YearEndDie, SetYearEndDie] = useState<optionModel>({
        value: "2024",
        label: "2024",
    });

    const [YearStartLived, SetYearStartLived] = useState<optionModel>({
        value: "0",
        label: "0",
    });

    const [YearEndLived, SetYearEndLived] = useState<optionModel>({
        value: "120",
        label: "120",
    });

    const CloseDropDown = (name: string) => {
        switch (name) {
            case "doi": {
                SetisOpenHolyName(false);
                SetisOpenGender(false);
                SetisOpenYearBorn(false);
                SetisOpenYearDie(false);
                SetisOpenYearLived(false);
            }
            case "tenthanh": {
                SetisOpenGeneration(false);
                SetisOpenYearBorn(false);
                SetisOpenGender(false);
                SetisOpenYearDie(false);
                SetisOpenYearLived(false);
            }
            case "gioitinh": {
                SetisOpenHolyName(false);
                SetisOpenGeneration(false);
                SetisOpenYearBorn(false);
                SetisOpenYearDie(false);
                SetisOpenYearLived(false);
            }
            case "namsinh": {
                SetisOpenHolyName(false);
                SetisOpenGeneration(false);
                SetisOpenGender(false);
                SetisOpenYearDie(false);
                SetisOpenYearLived(false);
            }
            case "nammat": {
                SetisOpenHolyName(false);
                SetisOpenGeneration(false);
                SetisOpenGender(false);
                SetisOpenYearBorn(false);
                SetisOpenYearLived(false);
            }
            case "huongtho": {
                SetisOpenHolyName(false);
                SetisOpenGeneration(false);
                SetisOpenYearBorn(false);
                SetisOpenYearDie(false);
                SetisOpenGender(false);
            }
            default: {
                SetisOpenHolyName(false);
                SetisOpenGeneration(false);
                SetisOpenYearBorn(false);
                SetisOpenGender(false);
                SetisOpenYearDie(false);
                SetisOpenYearLived(false);
            }
        }
    };

    const [currentTab, SetCurrentTab] = useState<string>("dangcay");
    const [gender, SetGender] = useState<optionModel>({
        value: "-1",
        label: "Tất cả",
    });
    const [yearStartBirdth, SetYearStartBirdth] = useState<optionModel>({
        value: "1900",
        label: "1900",
    });
    const [yearEndBirdth, SetYearEndBirdth] = useState<optionModel>({
        value: "2024",
        label: "2024",
    });
    const [searchText, setSearchText] = useState("");
    const [years, SetYears] = useState<optionModel[]>([
        {
            value: "1900",
            label: "1900",
        },
    ]);
    const [yearOld, SetYearOld] = useState<optionModel[]>([
        {
            value: "0",
            label: "0",
        },
    ]);
    const [dataPersonal, SetDataPersonals] = useState<personalModels[]>([]);
    const [dataSearch, SetDataSearch] = useState<personalModels[]>([]);
    const [dataStatistical, SetDataStatistical] = useState<dataStatisticalModel>({
        sumGenealogy: 0,
        sumPerson: 0,
        sumMale: 0,
        sumFemale: 0,
        genealogies: [
            {
                nameGenealogy: "",
                sumPerson: 0,
                sumMale: 0,
                sumFemale: 0,
            },
        ],
    });
    const [dataGeneration, SetDataGeneration] = useState<optionModel[]>([
        {
            value: "1",
            label: "Đời 1",
        },
    ]);
    const [dataHolyNames, SetDataHolyName] = useState<holyNameModel>({
        male: [
            {
                value: "Mata",
                label: "Mata",
            },
        ],
        female: [
            {
                value: "Mata",
                label: "Mata",
            },
        ],
    });

    const statistical: dataStatisticalModel = {
        sumGenealogy: 0,
        sumPerson: 0,
        sumMale: 0,
        sumFemale: 0,
        genealogies: [],
    };

    const holyNames: holyNameModel = {
        male: [],
        female: [],
    };

    const dataGenealogy: optionModel[] = [
        {
            value: "-1",
            label: "Tất cả",
        },
    ];

    const yearsData: optionModel[] = [
        {
            value: "1800",
            label: "1800",
        },
        {
            value: "1900",
            label: "1900",
        },
        {
            value: "1950",
            label: "1950",
        },
    ];

    const yearOldData: optionModel[] = [
        {
            value: "0",
            label: "0",
        },
    ];

    const dataTabs: tabModel[] = [
        {
            id: "dangcay",
            nameTab: "Dạng cây",
        },
        {
            id: "dangbang",
            nameTab: "Dạng bảng",
        },
    ];

    useEffect(() => {
        const personals: personalModels[] = [];

        dataJson.map((item) => {
            const dataItem = item as personalModels;
            personals.push(dataItem);
        });

        SetDataPersonals(personals);
        SetDataGenealogyTable();
        GenYears();
        GenYearOld();
    }, []);

    const GenYears = () => {
        const dateNow = new Date();
        const year = dateNow.getFullYear();
        for (var i = 1951; i <= year; i++) {
            const option: optionModel = {
                value: i.toString(),
                label: i.toString(),
            };

            yearsData.push(option);
        }

        SetYears(yearsData);
    };

    const GenYearOld = () => {
        for (var i = 1; i <= 120; i++) {
            const option: optionModel = {
                value: i.toString(),
                label: i.toString(),
            };

            yearOldData.push(option);
        }

        SetYearOld(yearOldData);
    };

    const SetDataGenealogyTable = () => {
        dataJson.forEach((item) => {
            SetDataGenealogy(item);
            SetDataHolyNames(item);
            SetDataTable(item);
        });

        SetDataGeneration(dataGenealogy);
        SetDataHolyName(holyNames);
        SetDataStatistical(statistical);
    };

    const SetDataTable = (item: any) => {
        statistical.sumPerson++;
        var isExitGenealogy = false;
        statistical.genealogies.map((itemValue) => {
            if (itemValue.nameGenealogy == item.generation) {
                isExitGenealogy = true;
                itemValue.sumPerson++;
                if (item.gender == "male") {
                    itemValue.sumMale++;
                    statistical.sumMale++;
                } else {
                    itemValue.sumFemale++;
                    statistical.sumFemale++;
                }
            }
        });

        if (!isExitGenealogy) {
            statistical.sumGenealogy++;
            const dataNew: genealogiesModel = {
                nameGenealogy: item.generation,
                sumPerson: 1,
                sumMale: item.gender == "male" ? 1 : 0,
                sumFemale: item.gender == "female" ? 1 : 0,
            };
            statistical.genealogies.push(dataNew);
            statistical.sumMale =
                item.gender == "male" ? statistical.sumMale++ : statistical.sumMale;
            statistical.sumFemale =
                item.gender == "female"
                    ? statistical.sumFemale++
                    : statistical.sumFemale;
        }
    };

    const SetDataHolyNames = (item: any) => {
        if (item.gender == "male") {
            var isExist = false;
            holyNames.male.forEach((itemValue) => {
                if (itemValue.value == item.saintName) {
                    isExist = true;
                    return;
                }
            });

            if (!isExist) {
                const data: optionModel = {
                    value: item.saintName,
                    label: item.saintName,
                };
                holyNames.male.push(data);
            }
        } else {
            var isExist = false;
            holyNames.female.forEach((itemValue) => {
                if (itemValue.value == item.saintName) {
                    isExist = true;
                    return;
                }
            });

            if (!isExist) {
                const data: optionModel = {
                    value: item.saintName,
                    label: item.saintName,
                };
                holyNames.female.push(data);
            }
        }
    };

    const SetDataGenealogy = (item: any) => {
        if (dataGenealogy.length <= 0) {
            const data: optionModel = {
                value: (item.generation + 1).toString(),
                label: "Đời " + (item.generation + 1),
            };

            dataGenealogy.push(data);
        }

        var isExist = false;
        dataGenealogy.forEach((itemValue) => {
            if (itemValue.value == (item.generation + 1).toString()) {
                isExist = true;
                return;
            }
        });

        if (!isExist) {
            const data: optionModel = {
                value: (item.generation + 1).toString(),
                label: "Đời " + (item.generation + 1),
            };
            dataGenealogy.push(data);
        }
    };

    useEffect(() => {
        var dataFilter: personalModels[] = dataJson;

        // filter genealogy
        dataFilter = dataFilter.filter((item) => {
            if (parseInt(Generation.value) == -1) {
                return item;
            } else {
                if (item.generation == parseInt(Generation.value)) {
                    return item;
                }
            }
        });

        // filter gender
        dataFilter = dataFilter.filter((item) => {
            if (gender.value == "-1") {
                return item;
            } else {
                if (gender.value == item.gender) {
                    return item;
                }
            }
        });

        // filter name
        dataFilter = dataFilter.filter((item) => {
            if (HolyName.value == "-1") {
                return item;
            } else {
                if (HolyName.value == item.saintName) {
                    return item;
                }
            }
        });

        // filter year birdth
        dataFilter = dataFilter.filter((item) => {
            var yearBirdthArr: string[] = [];
            if (item.dateOfBirth != null) {
                yearBirdthArr = item.dateOfBirth.split("/");
            } else {
                yearBirdthArr = ["1900"];
            }
            const yearBirdth = parseInt(yearBirdthArr[yearBirdthArr.length - 1]);
            if (
                yearBirdth > parseInt(yearStartBirdth.value) &&
                yearBirdth < parseInt(yearEndBirdth.value)
            ) {
                return item;
            }
        });

        // filter year die
        dataFilter = dataFilter.filter((item) => {
            var yearDieArr: string[] = [];
            if (item.dateOfDeath != null) {
                yearDieArr = item.dateOfDeath.split("/");
            } else {
                yearDieArr = ["1900"];
            }
            const yearDie = parseInt(yearDieArr[yearDieArr.length - 1]);
            if (
                yearDie > parseInt(YearStartDie.value) &&
                yearDie < parseInt(YearEndDie.value)
            ) {
                return item;
            }
        });

        // filter year lived
        dataFilter = dataFilter.filter((item) => {
            var yearLived: number = 0;
            if (item.longevity != null) {
                yearLived = item.longevity;
            } else {
                yearLived = 0;
            }
            if (
                yearLived > parseInt(YearStartLived.value) &&
                yearLived < parseInt(YearEndLived.value)
            ) {
                return item;
            }
        });

        SetDataPersonals(dataFilter);
    }, [
        Generation,
        gender,
        HolyName,
        yearStartBirdth,
        yearEndBirdth,
        YearStartDie,
        YearEndDie,
        YearStartLived,
        YearEndLived,
    ]);

    const dataGender: optionModel[] = [
        {
            value: "-1",
            label: "Tất cả",
        },
        {
            value: "male",
            label: "Nam",
        },
        {
            value: "female",
            label: "Nữ",
        },
    ];

    function handleSearchText(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value);
        const data: personalModels[] = [];
        const search: string = diacritic.clean(event.target.value);
        dataPersonal.map((item) => {
            const name: string = diacritic.clean(item.fullName);
            if (name.toUpperCase().includes(search.toUpperCase())) {
                data.push(item);
            }
        });

        SetDataSearch(data);
    }

    const handleKeyPress = (e) => {
        if (e == "Enter" && searchText.length > 0) {
            SetDataPersonals(dataSearch);
            UpdateDataIDSearch();
        } else if (searchText == "") {
            const personals: personalModels[] = [];
            dataJson.map((item) => {
                const dataItem = item as personalModels;
                personals.push(dataItem);
            });
            SetDataPersonals(personals);
        }
    };

    const UpdateDataIDSearch = () => {
        const dataIdSearch = [];
        dataSearch.forEach(item => {
            dataIdSearch.push(item.code);
        });

        SetDataIdSearch(dataIdSearch);
    }

    return (
        <div
            style={{
                backgroundImage: `url(${bgGenealogy})`,
            }}
            className="flex flex-col h-full sm:pt-[130px] maxsm:pt-[70px] w-full bg-cover bg-no-repeat items-center"
        >
            <div className="xl:w-[72.65%] flex flex-col items-center sm:w-[92.65%] maxsm:w-[92.65%]">
                <BannerCarouselGenealogy></BannerCarouselGenealogy>
                <div className="flex flex-row w-full mt-[2.8%] maxsm:w-[100%] sm:w-[93%] xl:w-[65%] h-[48px] border-2 border-[#f6ba73]">
                    <div className="flex flex-row sm:w-[68%] maxsm:w-[100%]">
                        <div className="relative bg-red w-[92%] h-full flex justify-end items-center">
                            <input
                                value={searchText}
                                placeholder="Mời nhập"
                                onKeyDown={(e) => handleKeyPress(e.key)}
                                className="relative px-[2%] h-full w-full"
                                onChange={handleSearchText}
                            ></input>
                            {searchText.trim().length > 0 ? (
                                <div className="flex sm:absolute maxsm:fixed bg-white top-0 maxsm:mt-[57.5%] xl:mt-[8.2%] mt-[50%] sm:mt-[11%] lg:right-0 lg:left-0 lg:mt-[6.8%] sm:left-[-20px] sm:right-[-26px] maxsm:left-[-5px] maxsm:right-[35px] z-[100] flex-col overflow-y-auto md:ml-0 md:mr-0 md:max-h-[388px] max-h-[268px] h-fit ml-[20px] mr-[27px]">
                                    {dataSearch.map((item) => (
                                        <div
                                            onClick={() => {
                                                setSearchText("");
                                            }}
                                            className="flex flex-row hover:bg-[#9E2B25] hover:text-white p-[2%] cursor-pointer border-b-1 border-gray left-[2%] right-[2%] w-[100%]"
                                        >
                                            <div className="ml-[2%] flex flex-col">
                                                <div>{item.fullName}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                            {searchText.trim().length > 0 ? (
                                <img
                                    onClick={() => setSearchText("")}
                                    src={iconResetText}
                                    className="cursor-pointer w-[16px] mr-[2%] h-[16px] absolute "
                                ></img>
                            ) : null}
                        </div>
                        <div className="w-8% cursor-pointer w-[48px] flex justify-center items-center h-[46px] bg-[#f6ba73]">
                            <img onClick={() => handleKeyPress("Enter")} src={iconSearch} className="w-[24px] h-[24px]"></img>
                        </div>
                    </div>
                    <div className="flex maxsm:hidden sm:flex flex-row w-[32%] h-full px-[2%] items-center justify-around font-semibold">
                        {dataTabs.map((item, index) => (
                            <div
                                onClick={() => SetCurrentTab(item.id)}
                                className={`xl:text-[16px] h-[80%] cursor-pointer ml-[2%] xl:py-[2%] flex justify-center items-center sm:py-[4%] rounded-[16px] px-[8%] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] ${currentTab == item.id
                                    ? "bg-[#9E2B25] text-white"
                                    : "text-[#191919]"
                                    }`}
                            >
                                {item.nameTab}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sm:hidden maxsm:flex flex flex-row mt-[2%] w-[50%] h-[32px] px-[2%] items-center justify-around font-semibold">
                    {dataTabs.map((item, index) => (
                        <div
                            onClick={() => SetCurrentTab(item.id)}
                            className={`xl:text-[16px] h-full cursor-pointer ml-[2%] xl:py-[5%] flex justify-center items-center sm:py-[4%] rounded-[16px] px-[8%] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] ${currentTab == item.id
                                ? "bg-[#9E2B25] text-white"
                                : "text-[#191919]"
                                }`}
                        >
                            {item.nameTab}
                        </div>
                    ))}
                </div>
                <div className="grid grid-rows-3 grid-cols-2 sm:grid-rows-2 sm:grid-cols-3 xl:grid-rows-1 xl:grid-cols-5 gap-[20px] xl:mt-[2%] sm:mt-[4%] maxsm:mt-[6%]">
                    <div className="relative w-auto min-w-[30%]">
                        <div
                            className="border-1 cursor-pointer rounded-[5px] hover:border-[#000000] justify-between flex border-[#dccfbe] px-[20px] py-[10px]"
                            onClick={() => {
                                CloseDropDown("doi");
                                SetisOpenGeneration(!isOpenGeneration);
                            }}
                        >
                            <div className="flex items-center">
                                <img src={iconGenealogy} className="w-[18px]"></img>
                                <div className="ml-4 h-[22px]">{Generation.label}</div>
                            </div>
                            <img
                                src={arrowDown}
                                className={
                                    isOpenGeneration
                                        ? "w-[15px] h-[15px] rotate-180"
                                        : "w-[15px] h-[15px] rotate-0"
                                }
                            ></img>
                        </div>
                        {!isOpenGeneration ? null : (
                            <div className="absolute shadow-select pt-[5%] w-full h-[270px] z-[100] bg-white flex px-[5%] flex-col">
                                <div className="border-b-1 font-semibold xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] px-[10%]">
                                    ĐỜI
                                </div>
                                {dataGeneration.map((option) => (
                                    <MenuItem
                                        onClick={() => {
                                            SetGeneration(option);
                                        }}
                                        key={option.value}
                                        className="flex items-center"
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative w-auto min-w-[30%]">
                        <div
                            className="border-1 cursor-pointer rounded-[5px] hover:border-[#000000] justify-between flex border-[#dccfbe] px-[20px] py-[10px]"
                            onClick={() => {
                                CloseDropDown("gioitinh");
                                SetisOpenGender(!isOpenGender);
                            }}
                        >
                            <div className="flex items-center">
                                <img src={iconGender} className="w-[18px]"></img>
                                <div className="ml-4 h-[22px]">{gender.label}</div>
                            </div>
                            <img
                                src={arrowDown}
                                className={
                                    isOpenGender
                                        ? "w-[15px] h-[15px] rotate-180"
                                        : "w-[15px] h-[15px] rotate-0"
                                }
                            ></img>
                        </div>
                        {!isOpenGender ? null : (
                            <div className="absolute shadow-select pt-[5%] w-full h-[270px] z-[100] bg-white flex px-[5%] flex-col">
                                <div className="border-b-1 font-semibold xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] px-[10%]">
                                    GIỚI TÍNH
                                </div>
                                {dataGender.map((option) => (
                                    <MenuItem
                                        onClick={() => {
                                            SetGender(option);
                                        }}
                                        key={option.value}
                                        className="flex items-center"
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="relative w-auto min-w-[30%]">
                        <div
                            className="border-1 cursor-pointer rounded-[5px] hover:border-[#000000] justify-between flex border-[#dccfbe] px-[20px] py-[10px]"
                            onClick={() => {
                                CloseDropDown("namsinh");
                                SetisOpenYearBorn(!isOpenYearBorn);
                            }}
                        >
                            <div className="flex items-center">
                                {" "}
                                {/* Added items-center to center the content verticTất cảy */}
                                <img
                                    src={iconYearOne}
                                    className="w-[18px]"
                                    alt="Year icon"
                                ></img>
                                <div className="ml-4 h-[22px]">
                                    {yearStartBirdth.value}, {yearEndBirdth.value}
                                </div>{" "}
                                {/* Reduced the margin */}
                            </div>
                            <img
                                src={arrowDown}
                                className={
                                    isOpenYearBorn
                                        ? "w-[15px] h-[15px] rotate-180"
                                        : "w-[15px] h-[15px] rotate-0"
                                }
                                alt="Arrow icon"
                            ></img>
                        </div>
                        {!isOpenYearBorn ? null : (
                            <div className="absolute shadow-select pt-[5%] w-full h-[270px] z-[100] bg-white flex px-[5%] flex-col">
                                <div className="border-b-1 font-semibold xl:text-[14px] lg:text-[12px] md:text-[12px] sm:text-[12px] maxsm:text-[12px]">
                                    NĂM SINH
                                </div>
                                <div className="flex mt-[10%] justify-between flex-row items-center">
                                    <div>Từ</div>
                                    <TextField
                                        select
                                        value={yearStartBirdth.value}
                                        defaultValue="2023"
                                    >
                                        {years.map((option) => (
                                            <MenuItem
                                                onClick={() => {
                                                    SetYearStartBirdth(option);
                                                }}
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="flex mt-[5%] justify-between flex-row items-center">
                                    <div>Đến</div>
                                    <TextField
                                        select
                                        value={yearEndBirdth.value}
                                        defaultValue="2023"
                                    >
                                        {years.map((option) => (
                                            <MenuItem
                                                onClick={() => {
                                                    SetYearEndBirdth(option);
                                                }}
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="flex justify-between flex-row mt-[10%]">
                                    <div
                                        className="p-[5%] cursor-pointer"
                                        onClick={() => SetisOpenYearBorn(false)}
                                    >
                                        Hủy bỏ
                                    </div>
                                    <div
                                        onClick={() => SetisOpenYearBorn(false)}
                                        className="cursor-pointer hover:border-[#9E2B25] flex items-center text-[#9E2B25] justify-center bg-[#F4CFA5] w-[108px] h-[32px] border rounded-2xl text-center"
                                    >
                                        <div>Xác nhận</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative w-auto min-w-[30%]">
                        <div
                            className="border-1 cursor-pointer rounded-[5px] hover:border-[#000000] justify-between flex border-[#dccfbe] px-[20px] py-[10px]"
                            onClick={() => {
                                CloseDropDown("nammat");
                                SetisOpenYearDie(!isOpenYearDie);
                            }}
                        >
                            <div className="flex items-center">
                                <img
                                    src={iconYearTwo}
                                    className="w-[18px]"
                                    alt="Year icon"
                                ></img>
                                <div className="ml-4 h-[22px]">
                                    {YearStartDie.value}, {YearEndDie.value}
                                </div>
                            </div>
                            <img
                                src={arrowDown}
                                className={
                                    isOpenYearDie
                                        ? "w-[15px] h-[15px] rotate-180"
                                        : "w-[15px] h-[15px] rotate-0"
                                }
                                alt="Arrow icon"
                            ></img>
                        </div>

                        {!isOpenYearDie ? null : (
                            <div className="absolute shadow-select pt-[5%] w-full h-[270px] z-[100] bg-white flex px-[5%] flex-col">
                                <div className="border-b-1 font-semibold xl:text-[14px] lg:text-[12px] md:text-[12px] sm:text-[12px] maxsm:text-[12px]">
                                    NĂM MẤT
                                </div>
                                <div className="flex mt-[10%] justify-between flex-row items-center">
                                    <div>Từ</div>
                                    <TextField
                                        select
                                        value={YearStartDie.value}
                                        defaultValue="2023"
                                    >
                                        {years.map((option) => (
                                            <MenuItem
                                                onClick={() => {
                                                    SetYearStartDie(option);
                                                }}
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="flex mt-[5%] justify-between flex-row items-center">
                                    <div>Đến</div>
                                    <TextField
                                        select
                                        value={YearEndDie.value}
                                        defaultValue="2023"
                                    >
                                        {years.map((option) => (
                                            <MenuItem
                                                onClick={() => {
                                                    SetYearEndDie(option);
                                                }}
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="flex justify-between flex-row mt-[10%]">
                                    <div
                                        className="p-[5%] cursor-pointer"
                                        onClick={() => SetisOpenYearDie(false)}
                                    >
                                        Hủy bỏ
                                    </div>
                                    <div
                                        onClick={() => SetisOpenYearDie(false)}
                                        className="flex cursor-pointer hover:border-[#9E2B25] items-center text-[#9E2B25] justify-center bg-[#F4CFA5] w-[108px] h-[32px] border rounded-2xl text-center"
                                    >
                                        <div>Xác nhận</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative w-auto min-w-[30%]">
                        <div
                            className="border-1 cursor-pointer rounded-[5px] hover:border-[#000000] justify-between flex border-[#dccfbe] px-[20px] py-[10px]"
                            onClick={() => {
                                CloseDropDown("huongtho");
                                SetisOpenYearLived(!isOpenYearLived);
                            }}
                        >
                            <div className="flex items-center">
                                <img
                                    src={iconYearThree}
                                    className="w-[18px]"
                                    alt="Year icon"
                                ></img>
                                <div className="ml-4 h-[22px]">
                                    {YearStartLived.value}, {YearEndLived.value}
                                </div>{" "}
                                {/* Added whitespace-nowrap */}
                            </div>
                            <img
                                src={arrowDown}
                                className={
                                    isOpenYearLived
                                        ? "w-[15px] h-[15px] rotate-180"
                                        : "w-[15px] h-[15px] rotate-0"
                                }
                                alt="Arrow icon"
                            ></img>
                        </div>

                        {!isOpenYearLived ? null : (
                            <div className="absolute shadow-select pt-[5%] w-full h-[270px] z-[100] bg-white flex px-[5%] flex-col">
                                <div className="border-b-1 font-semibold xl:text-[14px] lg:text-[12px] md:text-[12px] sm:text-[12px] maxsm:text-[12px]">
                                    HƯỞNG THỌ
                                </div>
                                <div className="flex mt-[10%] justify-between flex-row items-center">
                                    <div>Từ</div>
                                    <TextField
                                        select
                                        value={YearStartLived.value}
                                        defaultValue="2023"
                                    >
                                        {yearOld.map((option) => (
                                            <MenuItem
                                                onClick={() => {
                                                    SetYearStartLived(option);
                                                }}
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="flex mt-[5%] justify-between flex-row items-center">
                                    <div>Đến</div>
                                    <TextField
                                        select
                                        value={YearEndLived.value}
                                        defaultValue="2023"
                                    >
                                        {yearOld.map((option) => (
                                            <MenuItem
                                                onClick={() => {
                                                    SetYearEndLived(option);
                                                }}
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="flex justify-between flex-row mt-[10%]">
                                    <div
                                        className="p-[5%] cursor-pointer"
                                        onClick={() => SetisOpenYearLived(false)}
                                    >
                                        Hủy bỏ
                                    </div>
                                    <div
                                        onClick={() => SetisOpenYearLived(false)}
                                        className="flex cursor-pointer hover:border-[#9E2B25] items-center text-[#9E2B25] justify-center bg-[#F4CFA5] w-[108px] h-[32px] border rounded-2xl text-center"
                                    >
                                        <div>Xác nhận</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative flex w-full flex-col justify-between items-center bg-cover bg-no-repeat mt-[2%] maxsm:w-[96%] sm:w-[93%] xl:w-[83%]">
                    <div className="z-[1] utm xl:text-[32px] lg:text-[28px] font-normal maxsm:mt-[6%] sm:mt-[4%] xl:mt-[2%] md:text-[24px] sm:text-[22px] text-[#9E2B25] maxsm:text-[20px]">
                        Thống kê tổng quan
                    </div>
                    <div className="z-[1] mb-[3%] justify-center flex flex-row w-full mt-[1%] maxsm:px-[5%] sm:px-[3%]">
                        <div className="flex justify-center items-center flex-col w-[25%]">
                            <div className="flex flex-row w-full">
                                <img
                                    className="flex w-[10px] mt-[4%] h-[10px]"
                                    src={iconDot}
                                ></img>
                                <div className="xl:text-[16px] ml-[2%] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] font-semibold">
                                    Tổng số:{" "}
                                    <span className="text-[#9E2B25]">
                                        {dataStatistical.sumPerson}
                                    </span>{" "}
                                </div>
                            </div>
                            <div className="flex flex-row w-full">
                                <div className="xl:text-[16px] ml-[1%] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] font-normal">
                                    &#x2022; Nam:{" "}
                                    <span className="text-[#9E2B25]">
                                        {dataStatistical.sumMale}
                                    </span>{" "}
                                    
                                </div>
                            </div>
                            <div className="flex flex-row w-full">
                                <div className="xl:text-[16px] ml-[1%] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] font-normal">
                                    &#x2022; Nữ:{" "}
                                    <span className="text-[#9E2B25]">
                                        {dataStatistical.sumFemale}
                                    </span>{" "}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full">
                            {dataStatistical.genealogies.map((item) => (
                                <div className="flex items-center flex-col w-[25%]">
                                    <div className="flex flex-row w-full">
                                        <img
                                            className="flex w-[10px] mt-[4%] h-[10px]"
                                            src={iconDot}
                                        ></img>
                                        <div className="xl:text-[16px] ml-[2%] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] font-semibold">
                                            Đời {item.nameGenealogy + 1}:{" "}
                                            <span className="text-[#9E2B25]">{item.sumPerson}</span>{" "}
                                            
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-full">
                                        <div className="xl:text-[16px] ml-[1%] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] font-normal">
                                            &#x2022; Nam:{" "}
                                            <span className="text-[#9E2B25]">{item.sumMale}</span>{" "}
                                            
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-full">
                                        <div className="xl:text-[16px] ml-[1%] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] font-normal">
                                            &#x2022; Nữ:{" "}
                                            <span className="text-[#9E2B25]">{item.sumFemale}</span>{" "}
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src={statiscal} className="z-[0] absolute w-full h-full"></img>
                </div>


            </div>
            {currentTab == "dangcay" ? (
                <TemplatePage ids={dataIdSearchs}></TemplatePage>
            ) : (
                <div className="w-[95%] md:w-[95%] bg-transparent mt-[5%] mb-[7%]">
                    <TableGenealogy dataPersonal={dataPersonal}></TableGenealogy>
                </div>
            )}
        </div>
    );
};

export default Genealogy;
