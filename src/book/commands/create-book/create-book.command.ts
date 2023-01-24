import { CreateBookDto } from 'src/book/dto/create-book.dto';

export class CreateBookCommand {
  constructor(public payload: CreateBookDto) {}
}