import { ApiProperty } from "@nestjs/swagger";

export class LoginDoctorDto {
    
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
   
}