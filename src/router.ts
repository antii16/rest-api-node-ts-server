import { Router } from "express";
import { body } from 'express-validator'
import { createProduct } from "./handers/products";
const router = Router()

// Routing
router.get('/', (req, res) => {
    // Envía datos a la pantalla
    res.send('Desde get')
})

router.post('/',
    // Validación
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede estar vacío'), 
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de Producto no puede estar vacío')
        .custom(value => value > 0).withMessage('Precio no válido'),
    createProduct
)

router.put('/', (req, res) => {
    res.send('Desde put')
})

router.patch('/', (req, res) => {
    res.send('Desde patch')
})

router.delete('/', (req, res) => {
    res.send('Desde delete')
})

export default router