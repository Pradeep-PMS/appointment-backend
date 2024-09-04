import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PatientDocument = HydratedDocument<Patient>;


@Schema({ timestamps: true })

export class Patient {
    @Prop({ required: true, type: String })
    first_name: string;

    @Prop({ required: true, type: String })
    last_name: string;

    @Prop({ required: true, type: String })
    password: string;

    @Prop({ required: true, type: String })
    email: string;

    @Prop({ required: true, type: Number })
    mobile: number;

    @Prop({ required: true, type: String })
    address: string;

     
}
export const PatientSchema = SchemaFactory.createForClass(Patient);