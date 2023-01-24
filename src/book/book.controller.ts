import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateBookCommand } from "./commands/create-book/create-book.command";
import { DeleteBookCommand } from "./commands/delete-book/delete-book.command";
import { UpdateBookCommand } from "./commands/update-book/update-book.command";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { GetBookQuery } from "./queries/get-book/get-book.query";
import { ListBooksQuery } from "./queries/list-books/list-books.query";

@Controller('books')
export class BookController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ){

    }

    @Post()
    create(@Body() createBookDto: CreateBookDto) {
      return this.commandBus.execute(new CreateBookCommand(createBookDto));
    }
  
    @Get()
    findAll() {
      return this.queryBus.execute(new ListBooksQuery());
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.queryBus.execute(new GetBookQuery(id));
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
      return this.commandBus.execute(new UpdateBookCommand(id, updateBookDto));
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.commandBus.execute(new DeleteBookCommand(id));
    }

}