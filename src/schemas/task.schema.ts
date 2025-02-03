import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ default: 'pending' })  // Trạng thái: pending, in-progress, completed
    status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
