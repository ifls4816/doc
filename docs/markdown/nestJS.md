# nestjs 入门

## 安装

```shell
npm i -g @nestjs/cli
nest new project-name
```

## controller 控制器

> 控制器负责处理传入的请求和向客户端返回响应

### 路由

```shell
# 创建cats
$ nest g controller cats
```

```ts
import { Controller, Get } from '@nestjs/common'

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats'
  }
}
// http://localhost:3000/cats
```

### Ruquest

- @Request()，@Req() req
- @Response()，@Res()\* res
- @Next() next
- @Session() req.session
- @Param(key?: string) req.params/req.params[key]
- @Body(key?: string) req.body/req.body[key]
- @Query(key?: string) req.query/req.query[key]
- @Headers(name?: string) req.headers/req.headers[name]
- @Ip() req.ip
- @HostParam() req.hosts

```ts
import { Controller, Get, Req, Res } from '@nestjs/common'
import { Request } from 'express'

@Controller('cats')
export class CatsController {
  @Get() //  @Put()、@Delete()、@Patch()、@Options() @Head() @All()
  // @Get('a*b') // 路由写法: 以a开头 b结尾都可以
  findAll(@Req() request: Request, @Res() response: Response): string {
    // @Body() @Query()
    console.log(request)
    console.log(response)
    response.send('123')
    // return 'This action returns all cats'
  }
}
```

### 状态码

> 默认情况下，响应的状态码总是默认为 200，除了 POST 请求（默认响应状态码为 201）

```ts
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
```

### Header

```ts
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}
```

### 重定向

```ts
@Controller('cats')
export class CatsController {
  // @Get()
  @Get('a*b')
  @Redirect('https://nestjs.com', 301)
  findAll(@Query('version') version: string) {
    // 先走请求内的判断 符合条件返回return值 不符合条件直接走Redirect装饰器
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/', statusCode: 200 }
    }
  }
}
```

### 路由参数

```ts
import { Controller, Get, Param } from '@nestjs/common'
interface Id {
  id: string
}
@Controller('cats')
export class CatsController {
  @Get(':id')
  findAll(@Param() params: Id): string {
    console.log(params.id) // 123
    return params.id
  }
  // findAll(@Param('id') id: string): string {
  //   console.log(id); // 123
  //   return id;
  // }
}
// http://localhost:3000/cats/123
```

### 完整示例

```shell
# 自动生成curd模版
nest g resource user
```

```ts
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto'

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat'
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`
  }
}
```

## Provider 提供者

### Service

```ts
// 1.定义service
import { Injectable } from '@nestjs/common'
// import { CreateCatDto } from './dto/create-cat.dto';
export class CreateCatDto {
  name: string
  age: number
  type: string
}

@Injectable()
export class CatsService {
  private readonly cats: CreateCatDto[] = []

  create(cat: CreateCatDto) {
    this.cats.push(cat)
  }

  findAll(): CreateCatDto[] {
    return this.cats
  }
}

// 2.在app.module里注入
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
//
import { CatsController } from './cats/cats.controller'
import { CatsService } from './cats/cats.service'
//
@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
// 3.在controler里引用 使用
import { Controller, Get, Post, Body } from '@nestjs/common'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'
@Controller('cats')
export class CatsController {
  // 依赖注入
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<CreateCatDto[]> {
    return this.catsService.findAll()
  }
}
```

## 模块

```shell
# 自动生成curd模版
nest g resource user
```

### 功能模块

标准目录:
src
├──cats
│ ├──dto
│ │ └──create-cat.dto.ts
│ ├──interfaces
│ │ └──cat.interface.ts
│ ├─cats.service.ts
│ ├─cats.controller.ts
│ └──cats.module.ts
├──app.module.ts
└──main.ts

### 共享模块

提供方:

```ts
// cats.module.ts
mport { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // 在模块里显式导出
  exports: [CatsService]
})
export class CatsModule {}
```

引用方:

```ts
// users.module.ts
@Module({
  // 导入: 此处算局部模块共享 也可以配置全局模块共享 导出模块在module里配置 @Global()
  // 就不用在这里import了
  imports: [CatsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
// users.controller.ts
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly catsService: CatsService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // user使用cats
    return this.catsService.createCat({})
  }
}
```

### 模块导出

> 模块可以导出他们的内部提供者。 而且，他们可以再导出自己导入的模块。

```ts
@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}
```

### 依赖注入

```ts
// cats.module.ts
import { Module } from '@nestjs/common'
import { CatsService } from './cats.service'
import { CatsController } from './cats.controller'

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {
  // 直接在module里把CatsService(提供者)挂载到了CatsModule(模块)上 一般用于配置参数
  constructor(private readonly catsService: CatsService) {
    console.log('this===', catsService.createCat({}))
  }
}
```

## 中间件

```ts
// app.mideeleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...')
    next()
  }
}
// export function LoggerMiddleware(
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) {
//   console.log('Request...');
//   next();
// }

// main.ts
app.use(new LoggerMiddleware().use)
```

### 使用 cors 中间件

```ts
import * as cors from 'cors'
app.use(cors())
```

## 异常过滤器

```ts
// http-exception.filter.ts // 自定义异常内容
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const data = exception.getResponse();
    response.status(status).json({
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      data,
    });
  }
}

// 局部使用:
// controller.ts
import { HttpExceptionFilter } from '../http-exception.filter'
@UseFilters(HttpExceptionFilter)
export class UsersController {}
// or
@Get()
@UseFilters(HttpExceptionFilter)
findAll() {
  throw new GatewayTimeoutException();
}
// 全局使用:
// main.ts
app.useGlobalFilters(new HttpExceptionFilter());
```

## 管道

> 用途: 转换数据 验证类型

```ts
// 校验id参数是否为uuid类型
findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    console.log('=----==>', typeof id);
    return this.usersService.findOne(+id);
  }
```

### 自定义管道

```ts
// 定义
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata);
    console.log('value', value);
    if (metadata.type !== 'body') {
      throw new NotFoundException();
    }
    return value;
  }
}
// 使用
@Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.create(createUserDto);
  }
```

### 校验

#### 自定义校验

```ts
// create-login.dto.ts
// 定义校验规则
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateLoginDto {
  @IsString()
  name: string

  @IsNotEmpty()
  isOk: boolean
}
// validate.pipe.ts
// 定义校验器
import { PipeTransform, Injectable, ArgumentMetadata, HttpException } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    // 将metatype 也就是DTO类进行实例化
    const DTO = plainToInstance(metadata.metatype, value)
    // 校验DTO
    const errors = await validate(DTO)
    if (errors.length) {
      throw new HttpException(errors, 400)
    }
    return value
  }
}
// login.controller.ts
// 使用
import { ValidationPipe } from '../validate.pipe';
@Post()
  create(@Body(ValidationPipe) createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }
```

#### 全局校验

```ts
// create-login.dto.ts
// 管道中定义
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateLoginDto {
  @IsString()
  name: string

  @IsNotEmpty()
  isOk: boolean
}

// main.ts
// 全局使用
import { ValidationPipe } from '@nestjs/common'
app.useGlobalPipes(new ValidationPipe())
```
