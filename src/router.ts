import { Router } from "express";
import { body, param } from 'express-validator'
import { createProduct, getProductById, getProducts, updateAvailability, updatedProduct } from "./handers/products";
import { handleInputErrors } from "./middleware";
const router = Router()

// Routing
router.get('/', getProducts)
router.get('/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    getProductById
)

router.post('/',
    // Validación
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede estar vacío'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de Producto no puede estar vacío')
        .custom(value => value > 0).withMessage('Precio no válido'),
    handleInputErrors,
    createProduct
)

router.put('/:id',
    // Validación
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede estar vacío'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de Producto no puede estar vacío')
        .custom(value => value > 0).withMessage('Precio no válido'),
    body('availability')
        .isBoolean().withMessage('Valor para disponibilidad no válido'),
    handleInputErrors,
    updatedProduct
)

router.patch('/:id', updateAvailability)

router.delete('/', (req, res) => {
    res.send('Desde delete')
})

export default router