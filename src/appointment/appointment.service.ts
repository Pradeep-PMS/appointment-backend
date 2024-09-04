import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Appointment } from './schemas/appointment.schema';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
   
  constructor(
    @InjectModel(Appointment.name) 
    private userModel: Model<Appointment>,
  ) {}
  
  async create(createAppointmentDto:CreateAppointmentDto) {
    return await this.userModel.create(createAppointmentDto) ;
 }


    async findAll() {
      return await this.userModel.find({},{},{lean:true}) ;
   }
 
   async findOne(id: string) {
     const patient = await this.userModel.findById(id,{},{lean:true}) ;
     return patient
   }

   async update(id: string, UpdateDoctorDto:UpdateAppointmentDto) {
    return  await this.userModel.findByIdAndUpdate(
      new Types.ObjectId(id),
      UpdateAppointmentDto,
      {new:true}
    );
  }

  async remove(id: string) {
    const result = await this.userModel.findByIdAndDelete(id);
    if (!result) {
      throw new Error(`Patient with ID ${id} not found`);
    }
    return { message: `Patient with ID ${id} removed successfully` };
  }
}