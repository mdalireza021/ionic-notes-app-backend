import express from 'express';
import { getAllNotes, getNoteById, postNote, updateNote, deleteNote, deleteAllNotes } from '../controllers/note.controller.js';

const routers = express.Router();

routers.get('/getall', getAllNotes);
routers.get('/get/:id', getNoteById);
routers.post('/new', postNote);
routers.patch('/update/:id', updateNote);
routers.delete('/delete/:id', deleteNote);
routers.delete('/deleteall', deleteAllNotes);

export default routers;
