import adminjs from "adminjs";


import Computers from "../models/computers";

export default {
    resource: Computers,
    options: {
        parent: {
            icon: 'Laptop'
        },
        
        properties: {
            id: {
                position: 1,
            },
            
            name: {
                position: 2,
                isRequired: true
            },
            fabricante: {
                position: 3,
                isRequired: true
            },
           
            number_serie: {
                position: 4,
                isRequired: true
            },
            proprietario: {
                position: 5,
                isRequired: true
            },
            status: {
                position: 6,
                isRequired: true,
                availableValues: [
                    { value: 'active', label: 'Ativo' },
                    { value: 'maintenance', label: 'Manutenção' }
                ]
            },
            
            createdAt: {
                position: 7,
                isVisible: { list: true, filter: true, show: true, edit: false }
            },
            updatedAt: {
                position: 8,
                isVisible: { list: true, filter: true, show: true, edit: false }
            },
            
        }
    }

}