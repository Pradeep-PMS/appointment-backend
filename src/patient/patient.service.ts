import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './schmas/patient.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { LoginPatientDto } from './dto/login-patient.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PatientService {
   
  constructor(
    @InjectModel(Patient.name) 
    private userModel: Model<Patient>,
    private jwtService: JwtService
  ) {}
  

  async signup(createPatientDto: CreatePatientDto) {
    const patient = await this.userModel.create(createPatientDto);
    // const { password, ...patientData } = patient.toObject();
  
    const access_token = this.jwtService.sign({ first_name: patient.first_name ,
      last_name:patient.last_name,
      id:patient._id
    });
  
    return {
      access_token,
      message:'Patient created successfully',
    };
  }
  
  async login(dto: LoginPatientDto) {
    const user = await this.userModel.findOne({email: dto.email},{},{lean:true});
    if (!user) {
      throw new UnauthorizedException("wrong credentials")
    }
    if (user.password != dto.password) {
      throw new UnauthorizedException("wrong credentials")
    }

    delete user.password
    const token = this.jwtService.sign({ user });
    console.log("token=>",token);
    
    
    return {access_token:token,data:user}
    
  }
  
    async findAll() {
      return await this.userModel.find({},{},{lean:true}) ;
   }
 
   async findOne(id: string) {
     const patient = await this.userModel.findById(id,{},{lean:true}) ;
     return patient
   }

   async update(id: string, UpdateDoctorDto:UpdatePatientDto) {
    return  await this.userModel.findByIdAndUpdate(
      new Types.ObjectId(id),
      UpdatePatientDto,
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
