import {Body, Controller, Delete, Get, Param, Post, Put,ParseUUIDPipe, ParseEnumPipe} from "@nestjs/common"
import {data} from './data'
import {AppService} from './app.service'
import {v4} from 'uuid'
import { report } from "process"
import {CreateReportDTO, UpdateReportDTO} from './dtos/valid.dto'
enum ReportType
{
  INCOME="income",
  EXPENSE="expense"
}
@Controller('report/:type')
export class AppController{
  constructor(private readonly appService:AppService)
  {}
  @Get()
  getAllReport(
    @Param('type',new ParseEnumPipe(ReportType)) type:string )
  {
    return this.appService.getAllReport(type)   
  }

  @Get(':id')
  getReportById(@Param("type",new ParseEnumPipe(ReportType)) type:string,@Param("id",ParseUUIDPipe) id:string)
  {
    return this.appService.getReportById(type,id)
  }

  @Post()
  createReport(@Body() body:CreateReportDTO,@Param('type',new ParseEnumPipe(ReportType)) type:'income'|'expense')
  {
    return this.appService.createReport(body,type)
  }
  
  @Put(':id')
  updateReport(@Body() body:UpdateReportDTO, @Param('type',new ParseEnumPipe(ReportType)) type:'income'|'expense',@Param('id',ParseUUIDPipe) id:string)
  {
    return this.appService.updateReport(body,type,id)
  }

  @Delete(':id')
  deleteReport(@Param('type',new ParseEnumPipe(ReportType)) type:'income'|'expense',@Param('id',ParseUUIDPipe) id:string)
  {
    this.appService.deleteReport(type,id)
  }
}