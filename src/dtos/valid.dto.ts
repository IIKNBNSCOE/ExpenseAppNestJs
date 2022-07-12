import {IsString,IsNumber,IsNotEmpty,IsPositive, IsOptional} from 'class-validator'
export class CreateReportDTO
{
    @IsString()
    @IsNotEmpty()
    source:string;
    @IsNumber()
    @IsPositive()
    amount:number
}

export class UpdateReportDTO
{
    @IsString()
    @IsNotEmpty()
   
    source:string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    amount:number;
}