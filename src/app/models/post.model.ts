enum PostCategory {
    LIFE = 0,
    TECHNOLOGY = 1,
    TUTORIAL = 2
}

export class Post {
    id : number;
    status : number;
    title : string;
    slug : string;
    author : string;
    content : string;
    created_on : Date;
    category : string;
}