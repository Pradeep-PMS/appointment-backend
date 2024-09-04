import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { Doctor, DoctorSchema } from './schemas/doctor.schema';

@Module({
  imports: [

    MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }]),
    JwtModule.register({
      global: true,
      secret: "Hello",
      signOptions: { expiresIn: '60m' },
    }),

  ],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule { }
