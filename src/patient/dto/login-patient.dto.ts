import { ApiProperty } from "@nestjs/swagger";

export class LoginPatientDto {
   @ApiProperty() 
    email: string;

    @ApiProperty() 
    password: string;
   
}