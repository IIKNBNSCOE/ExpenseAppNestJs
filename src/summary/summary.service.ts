import { Injectable } from '@nestjs/common';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
    constructor(private readonly reportService:ReportService){}
    getSummary()
    {
        const allExpense=this.reportService.getAllReport("expense").reduce((s,item)=>{
           return s+item.amount
        },0)
        const allIncome=this.reportService.getAllReport("income").reduce((s,item)=>{
            return s+item.amount
         },0)

        return{
            allExpense,
            allIncome,
            netProfit:(allIncome-allExpense)

        }
    }
}
