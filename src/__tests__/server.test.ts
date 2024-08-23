import { connectDB } from '../server'
import db from '../config/db'

// Importar la configuración y la instancia de sequelize
jest.mock('../config/db')

describe('connectDB', () => {
    it('should handle database connection error', async () => {
        // Crea un espía, pasamos la bd y el método a revisar
        jest.spyOn(db, 'authenticate')
            .mockRejectedValueOnce(new Error('Hubo un error al conectar la BD'))
        const consoleSpy = jest.spyOn(console, 'log')
        
        await connectDB()

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Hubo un error al conectar la BD')
        )
    })
})