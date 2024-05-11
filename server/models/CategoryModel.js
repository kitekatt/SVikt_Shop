const {Category} = require('../models/models')

class CategoryModel {
   async getAll(){
      const categories = await Category.findAll()
      return categories
   }
   async getOne(id){
      const category = await Category.findByPk(id)
      if(!category){
         throw new Error('Нет такой категории')
      }
      return category
   }
   async create(data){
      const { name } = data
      const category = await Category.create({name})
   }
   async delete(id){
      const category = await Category.findByPk(id)
      if(!category){
         throw new Error('Нет такой категории')
      }
      await category.destroy()
      return category
   }
}

module.exports = new CategoryModel()