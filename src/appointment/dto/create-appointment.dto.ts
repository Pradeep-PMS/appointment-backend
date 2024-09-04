

import { ApiProperty } from "@nestjs/swagger";

export class CreateAppointmentDto {
    
    @ApiProperty()
    patient: string;

    @ApiProperty()
    appointmentfor: string;

    @ApiProperty()
    appointmentDate:Date;

    @ApiProperty()
    status: string;

    @ApiProperty()
    feedback:string;

    @ApiProperty()
    doctor: string;
   
}

