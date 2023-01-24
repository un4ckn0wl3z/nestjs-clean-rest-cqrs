import { UpdateBookDto } from 'src/book/dto/update-book.dto';

export class UpdateBookCommand {
  constructor(public id: string, public payload: UpdateBookDto) {}
}