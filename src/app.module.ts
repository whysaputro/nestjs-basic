import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PostModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
