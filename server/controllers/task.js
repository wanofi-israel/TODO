const getAllTasks=(req,res)=>{
    res.status(200).json({status:"success",data:"data"})
}

const getTask=(req,res)=>{
    res.status(200).json({status:"success",data:"data"})
}
const createTask=(req,res)=>{
    res.status(201).json({status:"success",data:"data"})
}
const updateTask=(req,res)=>{
    res.status(201).json({status:"success",data:"data"})
}
const deleteTask=(req,res)=>{
    res.status(201).json({status:"success",data:"data"})
}

module.exports={
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask
}