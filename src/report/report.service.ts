import {Injectable} from '@nestjs/common'
import {data} from '../data'
import {v4} from 'uuid'
import {ReportResponseDTO} from '../dtos/valid.dto'
@Injectable()
export class ReportService{
  getAllReport(type:string):ReportResponseDTO[]
  {
    let reportData
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
  const reportData1=reportData.map((report)=>new ReportResponseDTO(report))
  console.log(reportData1)
    return reportData1
  }

  getReportById(type:string,id:string):ReportResponseDTO
  {
    let reportvyid
    data.report.forEach((report)=>
    {
      if((report.type === 'income' || 'expense') && ((report.id === id)))
      reportvyid=report

    })  
    console.log(reportvyid)
    return new ReportResponseDTO(reportvyid)
  }

  createReport(body:{source:string,amount:number},type:"expense"|"income"):string
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

  updateReport(body:{source?:string,amount?:number},type:"expense"|"income",id:string):string
  {
    let f:boolean=false
    data.report=data.report.map((item,index)=>
    {
      if(item.id === id)
      {
       item={...item,...body}
       console.log(item)
        f=true
      }
      return item
    })
    console.log(data.report)
    if(f)
    return "Report Updated"
    else 
    return "Record Not Found"
  }

  deleteReport(type:'income'|'expense',id:string):string
  {
    let f:boolean=false
   
      data.report=data.report.filter((item)=>{
      return item.id != id })
        
    console.log(data.report)
    return "Report Deleted"  
   } 
}