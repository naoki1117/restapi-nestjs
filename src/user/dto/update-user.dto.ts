import { IsOptional,isString,IsString } from "class-validator";

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    nickName?:string;
}