import { Document } from "mongoose";

export interface CaphubUser extends Document {
  email: string;
  name: string;
  passwordHash: string;
}
