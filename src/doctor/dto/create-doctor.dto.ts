import { ApiProperty } from "@nestjs/swagger";

export class CreateDoctorDto {
    @ApiProperty()
    first_name: string;

    @ApiProperty()
    last_name: string;

    @ApiProperty()
    mobile:number;

    @ApiProperty()
    email: string;

    @ApiProperty()
    speciality: string;

    @ApiProperty()
    available: boolean;

    @ApiProperty()
    password: string;

   
}

