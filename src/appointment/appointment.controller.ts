import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard, AuthRequest } from 'src/auth/auth.guard';


@ApiTags("Appointment")
@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @ApiBearerAuth("authentication")
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto,@Request() req:AuthRequest) {
    return this.appointmentService.create(createAppointmentDto,req.auth);
  }

  @ApiBearerAuth("authentication")
  @UseGuards(AuthGuard)
  @Get()
  findAll(@Request() req:AuthRequest) {
    return this.appointmentService.findAll(req.auth);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(id);
  }
}
