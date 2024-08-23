import { Router } from "express";
import { body, param } from 'express-validator'
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updatedProduct } from "./handlers/products";
import { handleInputErrors } from "./middleware";

const router = Router()
/**
 * @swagger
 * components: 
 *      schemas:
 *          Product:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      description:  The Product ID
 *                      example: 1
 *                  name:
 *                      type: string
 *                      description:  The Product name
 *                      example: Monitor Curvo de 49 Pulgadas
 *                  price:
 *                      type: number
 *                      description:  The Product price
 *                      example: 300
 *                  availability:
 *                      type: boolean
 *                      description:  The Product availavility
 *                      example: true
 * 
 * 
 */


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
    param('id').isInt().withMessage('ID no válido'),
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

router.patch('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    updateAvailability
)

router.delete('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    deleteProduct
)

export default router