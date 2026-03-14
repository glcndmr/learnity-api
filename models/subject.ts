import { sequelize } from "@/data/db";
import { DataTypes, Model } from "sequelize";

export interface UserSubjectAttributes {
    id?: string;
    userId: string;
    subject: string;
}

export interface UserSubjectInstance extends Model<UserSubjectAttributes>, UserSubjectAttributes {}

const UserSubject = sequelize.define<UserSubjectInstance>("userSubject", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    } 
}, { timestamps: true });

export default UserSubject;
