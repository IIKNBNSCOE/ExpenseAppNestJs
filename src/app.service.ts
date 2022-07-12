import {Injectable} from '@nestjs/common'
import {data} from './data'
import {v4} from 'uuid'
@Injectable()
export class AppService{
  getAllReport(type:string)
  {
    let reportData:{}
    if(type === "income")
    {   
      reportData=data.report.filter((report)=>{
      if(report.type === "income")
      return report
    })
    }
    else if(type === "expense")
    {
      reportData=data.report.filter((report)=>{
        if(report.type === "expense")
        return report
    })
  }
    return reportData    
  }

  getReportById(type:string,id:string)
  {
    let reportvyid;
    data.report.forEach((report)=>
    {
      if((report.type === 'income' || 'expense') && ((report.id === id)))
      reportvyid=report

    })  
    console.log(reportvyid)
    return reportvyid    
  }

  createReport(body:{source:string,amount:number},type:"expense"|"income")
  {
    const newReport={
      id:v4(),
      source:body.source,
      amount:body.amount,
      created_At:new Date(),
      updated_At:new Date(),
      type
    }
    data.report.push(newReport)
    console.log(data)
    return "Report Created"    
  }

  updateReport(body:{source:string,amount:number},type:"expense"|"income",id:string)
  {
    let f:boolean=false
    data.report.map((item,index)=>
    {
      if(item.id === id)
      {
        item.source=body.source
        item.amount=body.amount
        f=true
      }
    })
    console.log(data.report)
    if(f)
    return "Report Updated"
    else 
    return "Record Not Found"
  }

  deleteReport(type:'income'|'expense',id:string)
  {
    let f:boolean=false
    if(type === 'income' || 'expense')
    {
      data.report=data.report.filter((item)=>{
      return item.id != id
      })
    }    
    console.log(data.report)
    return "Report Deleted"  
  }
}