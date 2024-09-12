import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './schemas/appointment.schema';

@Module({
  imports:[
   
    MongooseModule.forFeature([{ name: Appointment.name,  schema:AppointmentSchema}]),
    // JwtModule.register({
    //  global:true,
    //  secret: "Hello",
    //  signOptions: {expiresIn:'60m'},
    // }),
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}
