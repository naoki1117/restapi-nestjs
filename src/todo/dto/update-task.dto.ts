import { isNotEmpty, IsNotEmpty,IsOptional,isString,IsString } from "class-validator";

export class UpdateTaskDto {
    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsOptional()
    description?:string;
}