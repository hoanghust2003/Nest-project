export class ResponseData<D> {
    data: D | D[];
    statusCode: number;
    message: string;

    constructor(data: D | D[], statusCode: number, message: string) {
        this.data = data;
        this.message = message;
        this.statusCode = statusCode;

        return this;
    }
}