import adminjs from "adminjs";

import Impressora from "../models/impressora";

export default {
    resource: Impressora,
    options: {
        parent: {
            icon: 'Printer'
        },
        
        properties: {
            id: {
                position: 1,
            },
            
            name: {
                position: 2,
                isRequired: true
            },
            proprietario: {
                position: 3,
                isRequired: true
            },
            modelo: {
                position: 3,
                isRequired: true
            },
            fabricante: {
                position: 3,
                isRequired: true
            },
            number_serie: {
                position: 3,
                isRequired: true
            },
            status: {
                position: 4,
                isRequired: true,
                availableValues: [
                    { value: 'active', label: 'Ativo' },
                    { value: 'maintenance', label: 'Manutenção' }
                ]
            },
            
           
            createdAt: {
                position: 5,
                isVisible: { list: true, filter: true, show: true, edit: false }
            },
            updatedAt: {
                position: 6,
                isVisible: { list: true, filter: true, show: true, edit: false }
            },
            
        }
    }

}