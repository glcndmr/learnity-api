import { sequelize } from "@/data/db";
import { DataTypes, Model } from "sequelize";

export interface NoteAttributes {
    id?: string;
    userId: string;
    note: string;
}

export interface NoteInstance extends Model<NoteAttributes>, NoteAttributes {}

const Note = sequelize.define<NoteInstance>("notes", {
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
    note: {
        type: DataTypes.TEXT,
        allowNull: false
    } 
}, { timestamps: true });

export default Note;
