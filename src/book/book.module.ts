import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { IdGenerator, UuidGenerator } from 'src/shared';
import { CommandHandlers } from './commands';
import { QueryHandlers } from './queries';
import { CqrsModule } from '@nestjs/cqrs';
import { BookRepositoryMemoryAdapter } from './repository/memory/book-repository-memory.adapter';
import { BookRepository } from './repository/book-repository';

@Module({
  imports: [CqrsModule],
  controllers: [BookController],
  providers: [
    {
      provide: IdGenerator,
      useClass: UuidGenerator,
    },
    {
      provide: BookRepository,
      useClass: BookRepositoryMemoryAdapter,
    },
    ...CommandHandlers,
    ...QueryHandlers,
  ],
})
export class BookModule {}