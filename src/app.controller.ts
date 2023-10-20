/*
 * @Descripttion:
 * @Author: yoy
 * @Date: 2023-10-13 11:14:29
 */
import { Body, Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { AppService } from './app.service';

// 定义数据结构
class bodyType {
  @ApiProperty({ title: '名称' })
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: '芜湖' })
  @Get()
  getHello(@Body() body: bodyType): string {
    console.log(body, 'body');
    return this.appService.getHello();
  }

  @Get(':id')
  getList(@Param('id') id: string): string {
    console.log(id, 'body');
    return this.appService.getHello();
  }
}
