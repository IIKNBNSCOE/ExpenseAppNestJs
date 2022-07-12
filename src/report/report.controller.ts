import {Body, Controller, Delete, Get, Param, Post, Put,ParseUUIDPipe, ParseEnumPipe} from "@nestjs/common"
import {data} from '../data'
import {ReportService} from './report.service'
import {v4} from 'uuid'
import { report } from "process"
import {CreateReportDTO, UpdateReportDTO,ReportResponseDTO} from '../dtos/valid.dto'
enum ReportType
{
  INCOME="income",
  EXPENSE="expense"
}
@Controller('report/:type')
export class ReportController{
  constructor(private readonly reportService:ReportService)
  {}
  @Get()
  getAllReport(
    @Param('type',new ParseEnumPipe(ReportType)) type:string ):ReportResponseDTO[]
  {
    return this.reportService.getAllReport(type)   
  }

  @Get(':id')
  getReportById(@Param("type",new ParseEnumPipe(ReportType)) type:string,@Param("id",ParseUUIDPipe) id:string):ReportResponseDTO
  {
    return this.reportService.getReportById(type,id)
  }

  @Post()
  createReport(@Body() body:CreateReportDTO,@Param('type',new ParseEnumPipe(ReportType)) type:'income'|'expense'):string
  {
    return this.reportService.createReport(body,type)
  }
  
  @Put(':id')
  updateReport(@Body() body:UpdateReportDTO, @Param('type',new ParseEnumPipe(ReportType)) type:'income'|'expense',@Param('id',ParseUUIDPipe) id:string):string
  {
    return this.reportService.updateReport(body,type,id)
  }

  @Delete(':id')
  deleteReport(@Param('type',new ParseEnumPipe(ReportType)) type:'income'|'expense',@Param('id',ParseUUIDPipe) id:string):string
  {
    return this.reportService.deleteReport(type,id)
  }
}