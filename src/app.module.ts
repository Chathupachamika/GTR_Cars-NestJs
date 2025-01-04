import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ServiceModule } from './service/service.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [HomeModule, AboutModule, ServiceModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
