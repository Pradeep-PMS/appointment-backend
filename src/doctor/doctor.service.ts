import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { Doctor } from './schemas/doctor.schema';
import { LoginDoctorDto } from './dto/login-doctor.dto';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctorService {
   
  constructor(
    @InjectModel(Doctor.name) 
    private userModel: Model<Doctor>,
    private jwtService: JwtService
  ) {}
  

  async signup(createDoctorDto: CreateDoctorDto) {
    const doctor = await this.userModel.create(createDoctorDto);
    // const { password, ...doctorData } = doctor.toObject();
  
    const access_token = this.jwtService.sign({ first_name: doctor.first_name ,
      last_name:doctor.last_name,
      id:doctor._id
    });
  
    return {
      access_token,
      message:'Patient created successfully',
    };
  }
  
  async login(dto: LoginDoctorDto) {
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
     const doctor = await this.userModel.findById(id,{},{lean:true}) ;
     return doctor
   }

   async update(id: string, UpdateDoctorDto:UpdateDoctorDto) {
    return  await this.userModel.findByIdAndUpdate(
      new Types.ObjectId(id),
      UpdateDoctorDto,
      {new:true}
    );
  }

  async remove(id: string) {
    const result = await this.userModel.findByIdAndDelete(id);
    if (!result) {
      throw new Error(`Doctor with ID ${id} not found`);
    }
    return { message: `Doctor with ID ${id} removed successfully` };
  }
}
