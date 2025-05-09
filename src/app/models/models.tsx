export class CatalogCategoryModel {
    id: number;
    catalogCategoryId: string;
    name: string;
    slang: string;
    description: string;
    avatar: string;
    indexLayout?: number;
    catalogCategory?: CatalogCategoryModel[];

    constructor(id: number, catalogCategoryId: string, name: string, slang: string, description: string, avatar: string, indexLayout: number, catalogCategory?: CatalogCategoryModel[]) {
        this.id = id;
        this.catalogCategoryId = catalogCategoryId;
        this.name = name;
        this.slang = slang;
        this.description = description;
        this.avatar = avatar;
        this.indexLayout = indexLayout;
        this.catalogCategory = catalogCategory;
    }
}

export class CommentModel {
    id: number;
    newsId: number;
    phone: string;
    name: string;
    comment: string;
    imageUrl: string;
    
    constructor(id: number, phone: string, name: string, comment: string, newsId: number, imageUrl: string) {
        this.id = id;
        this.phone = phone;
        this.name = name;
        this.comment = comment;
        this.newsId = newsId;
        this.imageUrl = imageUrl;
    }
}

export class NewModel {
    id: number;
    newsCategoryId: number;
    title: string;
    content: string;
    description: string;
    imageUrl: string;
    date: string;
    comments?: number;
    tagId?: number[];

    constructor(id: number, newsCategoryId: number, title: string, content: string, description: string, imageUrl: string, comments?: number, tagId?: number[]) {
        this.id = id;
        this.newsCategoryId = newsCategoryId;
        this.title = title;
        this.content = content;
        this.description = description;
        this.imageUrl = imageUrl;
        this.comments = comments;
        this.tagId = tagId;
    }
}
export class TagsModel {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}


export class VideoModel {
    id: number;
    title: string;
    iframe: string;
    description: string;
    avatarUrl: string;
    time: string;

    constructor(id: number, title: string, iframe: string, description: string, avatarUrl: string, time: string) {
        this.id = id;
        this.title = title;
        this.iframe = title;
        this.description = description;
        this.avatarUrl = avatarUrl;
        this.time = time;
    }
}

export class NewCategoryModel {
    id: number;
    name: string;
    description: string;
    avatar: string;

    constructor(id: number, name: string, description: string, avatar: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.avatar = description;
    }
}

export interface optionModel {
    value: string,
    label: string
}

export interface openDropDownModel{
    id: string,
    isOpen: boolean
}

export interface holyNameModel {
    male: optionModel[],
    female: optionModel[]
}

export interface tabModel {
    id: string,
    nameTab: string
}

export interface genealogiesModel {
    nameGenealogy: string;
    sumPerson: number;
    sumMale: number;
    sumFemale: number;
}

export interface dataStatisticalModel {
    sumGenealogy: number;
    sumPerson: number;
    sumMale: number;
    sumFemale: number;
    genealogies: genealogiesModel[];
}

export interface personalModels {
    "index"?: number,
    "generation"?: number,
    "code"?: string,
    "fullName"?: string,
    "father"?: string,
    "mother"?: null,
    "husband"?: null,
    "dateOfBirth"?: string,
    "yearOfBirth"?: string,
    "dateOfDeath"?: string,
    "yearOfDeath"?: string,
    "longevity"?: 84,
    "relationshipToHeadOfHousehold"?: string,
    "gender"?: string,
    "hometown"?: null,
    "placeOfResidence"?: null,
    "notes"?: string,
    "isActive"?: boolean
}

