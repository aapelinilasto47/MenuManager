import express from 'express';
import MenuItem from '../models/MenuItem.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const items = await MenuItem.find();
    res.json(items);
});

router.post('/', async (req, res) => {
    const newItem = new MenuItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
});

router.put('/:id', async (req, res) => {
    const updatedItem = await MenuItem.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedItem);
});

router.delete('/:id', async (req, res) => {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.status(204).end();
});

export default router;