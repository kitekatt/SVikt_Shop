const { Card } = require('../models/models.js')
const { Type } = require('../models/models.js')
const { Category } = require('../models/models.js')
const File = require('../services/File') 

class CardModel {
    async getAll(options) {
        const { categoryId, typeId, limit, page } = options
        const offset = (page - 1) * limit
        const where = {}
        if (categoryId) where.categoryId = categoryId
        if (typeId) where.typeId = typeId
        const cards = await Card.findAndCountAll({
            where,
            limit,
            offset,
            include: [
                { model: Type, as: 'type' },
                { model: Category, as: 'category' }
            ],
        })
        return cards
    }
    async getOne(id) {
        const card = await Card.findByPk(id, {
            include: [
                { model: Type, as: 'type' },
                { model: Category, as: 'category' },
            ]
        })
        if (!card) {
            throw new Error('Товар не найден в БД')
        }
        return card
    }
    async create(data, img) {
        //image не допускает null, поэтому задаю пустую строку
        const image = File.save(img) ?? ''
        const { name, price, description, categoryId = null, typeId = null } = data
        const card = await Card.create({ name, price, description, image, categoryId, typeId })
        return card
    }
    async delete(id) {
        const card = await Card.findByPk(id)
        if (!card) {
            throw new Error('Товар не найден в БД')
        }
        if (card.image) { // удаляем изображение товара
            File.delete(card.image)
        }
        await card.destroy()
        return card
    }
}

module.exports = new CardModel()