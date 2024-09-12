import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Patient, PatientSchema } from './schmas/patient.schema';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports:[
   
    MongooseModule.forFeature([{ name: Patient.name,  schema:PatientSchema}]),
    // JwtModule.register({
    //  global:true,
    //  secret: "Hello",
    //  signOptions: {expiresIn:'60m'},
    // }),
  ],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
