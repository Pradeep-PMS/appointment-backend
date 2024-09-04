import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginPatientDto } from './dto/login-patient.dto';

@ApiTags("Patient")
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post("/signup")
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.signup(createPatientDto);
  }

  @Post('/login')
  login(@Body() loginPatientDto: LoginPatientDto) {
    return this.patientService.login(loginPatientDto);
  }

  @Get()
  findAll(){
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(id);
  }
}
