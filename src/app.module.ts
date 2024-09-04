import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientModule } from './patient/patient.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports:[
    ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal:true,
  }),

  // JwtModule.registerAsync({
  //   inject: [ConfigService],
  //   useFactory: (config: ConfigService) =>{
  //     return ({
  //       secret: config.get("JWT_SECRET"),
  //       signOptions: {
  //         expiresIn: config.get("JWT_EXPIRE")
  //       }
  //     })
  //   }
  // }),
  MongooseModule.forRoot(process.env.DB_URI),
   DoctorModule,
   PatientModule,
   AppointmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
