export class PostModelRequest {
    title!: string;
    text!: string;
    author!: string;
    imgUrl!: string;
}
 
export class PostModelResponse extends PostModelRequest {
    id!: number;
}