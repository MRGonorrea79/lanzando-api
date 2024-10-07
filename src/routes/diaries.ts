import express from "express";//ESmodules
import * as diaryServices from "../services/diary"
import toNewDiaryEntry from "../services/utils";


const router = express.Router()

router.get('/', (_req,res) => {
    res.send(diaryServices.getEntrieswhitoutInfo())

})

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id)
    if (diary != null) {
        res.send(diary)
    }else{
        res.status(404)
    }

})

router.post('/', (req,res)=> {
    try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
    } catch (e) {
        
    }
    
})

export default router