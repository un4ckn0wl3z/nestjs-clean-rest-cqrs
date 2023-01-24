import { Book } from '../entities/book.entity';
import { UpdateBookDto } from '../dto/update-book.dto';
import { CreateBookDto } from '../dto/create-book.dto';

export abstract class BookRepository {
  abstract findOneById(id: string): Promise<Book>;
  abstract findAll(): Promise<Book[]>;

  abstract create(id: string, payload: CreateBookDto): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract update(id: string, payload: UpdateBookDto): Promise<void>;
}