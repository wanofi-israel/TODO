const express=require("express")
const router=express.Router()
const {getAllTasks,getTask,createTask}=require("../controllers/task")

router.route('/api/tasks').get(getAllTasks).post(createTask);
router.route('/api/task/:id').get(getTask)


module.exports=router