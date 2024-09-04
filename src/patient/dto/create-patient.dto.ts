import { ApiProperty } from "@nestjs/swagger";

export class CreatePatientDto {
    
    @ApiProperty()
    first_name: string;

    @ApiProperty()
    last_name: string;

    @ApiProperty()
    mobile:number;

    @ApiProperty()
    email: string;

    @ApiProperty()
    address:string;

    @ApiProperty()
    password: string;
   
}
