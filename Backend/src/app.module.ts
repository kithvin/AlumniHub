// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
// import { AdminModule } from './admin/admin.module';
// import { UsersModule } from './users/users.module';
// import { ContactModule } from './contact/contact.module';
// import { MailModule } from './mail/mail.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//     }),

//     MongooseModule.forRootAsync({
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         uri: configService.get<string>('MONGODB_URI'),
//         dbName: 'AlumniHubDB',
//         retryWrites: true,
//         w: 'majority',
//         appName: 'AlumniHub',
//       }),
//     }),

//     UsersModule,
//     AdminModule,
//     ContactModule,
//     MailModule,
//   ],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { ContactModule } from './contact/contact.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    // UPDATED: Added envFilePath and cache for better env handling
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache: true,
    }),

    // UPDATED: Added imports: [ConfigModule]
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // UPDATED
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),

        // optional configs
        dbName: 'AlumniHubDB',
        retryWrites: true,
        w: 'majority',
        appName: 'AlumniHub',
      }),
    }),

    UsersModule,
    AdminModule,
    ContactModule,
    MailModule,
  ],
})
export class AppModule {}