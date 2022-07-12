import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common"
import {data} from './data'
import {AppService} from './app.service'
import {v4} from 'uuid'
import { report } from "process"
@Controller('report/:type')
export class AppController{
  constructor(private readonly appService:AppService)
  {}
  @Get()
  getAllReport(
    @Param('type') type:string )
  {
    return this.appService.getAllReport(type)   
  }

  @Get(':id')
  getReportById(@Param("type") type:string,@Param("id") id:string)
  {
    return this.appService.getReportById(type,id)
  }

  @Post()
  createReport(@Body() body:{source:string,amount:number},@Param('type') type:'income'|'expense')
  {
    return this.appService.createReport(body,type)
  }
  
  @Put(':id')
  updateReport(@Body() body:{source:string,amount:number}, @Param('type') type:'income'|'expense',@Param('id') id:string)
  {
    return this.appService.updateReport(body,type,id)
  }

  @Delete(':id')
  deleteReport(@Param('type') type:'income'|'expense',@Param('id') id:string)
  {
    this.appService.deleteReport(type,id)
  }
}