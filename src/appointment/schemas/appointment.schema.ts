import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Doctor } from 'src/doctor/schemas/doctor.schema';
import { Patient } from 'src/patient/schmas/patient.schema';

export type AppointmentDocument = HydratedDocument<Appointment>;


@Schema({ timestamps: true })

export class Appointment {
   
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Patient" })
    patient: Patient;

    @Prop({ required: true, type: String })
    appointmentfor : string;

    @Prop({ required: true, type: Date })
    appointmentDate: Date;

    @Prop({ required: true, type: String })
    status: string;

    @Prop({ required: true, type: String })
    feedback: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Doctor" })
    doctor: Doctor;

     
}
export const AppointmentSchema = SchemaFactory.createForClass(Appointment);