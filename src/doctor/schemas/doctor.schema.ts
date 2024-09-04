import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Doctor>;


@Schema({ timestamps: true })

export class Doctor {
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
    speciality: string;

    @Prop({ required: true, type: Boolean })
    available: boolean;
}
export const DoctorSchema = SchemaFactory.createForClass(Doctor);