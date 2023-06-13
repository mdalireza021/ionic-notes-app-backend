import express from 'express';
import noteModel from '../models/note.model.js';

// get all notes
export const getAllNotes = async (req, res) => {
    const deviceId = req.headers['device-id'];
    noteModel.find({ deviceId })
        .then((notes) => {
            return res.json(notes);
        })
        .catch((error) => {
            console.error(err);
            return res.status(500).json({ message: error.message });
        })
}

///get note by id
export const getNoteById = async (req, res) => {
    const noteId = req.params.id;
    const deviceId = req.headers['device-id'];

    noteModel.findOne({ _id: noteId, deviceId })
        .then((note) => {
            if (!note) {
                return res.status(404).json({ message: 'Note not found or you are not authorized to access this note' });
            }
            return res.json(note);
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        })
}

//post a note
export const postNote = async (req, res) => {
    const { title, content, category, tags, createdAt, updatedAt } = req.body;
    const deviceId = req.headers['device-id'];
    const note = new noteModel({
        deviceId,
        title,
        content,
        category, tags,
        createdAt,
        updatedAt
    });
    note.save()
        .then((savedNote) => {
            return res.status(201).json(savedNote);
        })
        .catch((error) => {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        });
}

//update a note 
export const updateNote = async (req, res) => {
    const noteId = req.params.id;
    const { title, content, category, tags, createdAt, updatedAt } = req.body;
    const deviceId = req.headers['device-id'];

    noteModel.findOneAndUpdate(
        { _id: noteId, deviceId },
        { $set: { title, content, category, tags, createdAt, updatedAt } },
        { new: true })
        .then((updatedNote) => {
            if (!updatedNote) {
                return res.status(404).json({ message: 'Note not found or you are not authorized to access this note' });
            }
            return res.json(updatedNote);
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        })
}

///delete a note
export const deleteNote = async (req, res) => {
    const noteId = req.params.id;
    const deviceId = req.headers['device-id'];
    noteModel.findOneAndDelete({ _id: noteId, deviceId })
        .then((deletedNote) => {
            if (!deletedNote) {
                return res.status(404).json({ message: 'Note not found or you are not authorized to access this note' });
            }
            return res.json({ message: 'Note deleted successfully' });
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        })
}

///delete all notes
export const deleteAllNotes = async (req, res) => {
    const deviceId = req.headers['device-id'];
    noteModel.deleteMany({ deviceId })
        .then(() => {
            return res.json({ message: 'All notes deleted successfully' });
        })
        .catch((error) => {

            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        })
}

