import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    deviceId: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: ""
    },
    tags: {
        type: [String],
        default: []
    },
    color: {
        type: String,
        default: "#FFFFFF"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})

const Note = mongoose.model('note', noteSchema);
export default Note;

