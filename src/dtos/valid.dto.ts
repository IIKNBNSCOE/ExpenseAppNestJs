import {IsString,IsNumber,IsNotEmpty,IsPositive, IsOptional} from 'class-validator'
import {Exclude, Expose} from 'class-transformer'
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

export class ReportResponseDTO
{
    id: string;
    source: string;
    amount: number;
    @Exclude()
    created_At: Date;
    
    @Exclude()
    updated_At: Date;
    type: string
    @Expose({name:"createdAt"})
    transformCreatedAt(){
        return this.created_At
    }

    constructor(partial:Partial<ReportResponseDTO>){
        Object.assign(this,partial)
    }
}