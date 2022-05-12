import adminjs from "adminjs";


import Notebook from "../models/notebook";

export default {
    resource: Notebook,
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
            modelo: {
                position: 4,
                isRequired: true
            },
            number_serie: {
                position: 5,
                isRequired: true
            },
            proprietario: {
                position: 6,
                isRequired: true
            },
            status: {
                position: 7,
                isRequired: true,
                availableValues: [
                    { value: 'active', label: 'Ativo' },
                    { value: 'maintenance', label: 'Manutenção' }
                ]
            },
            
           
            createdAt: {
                position: 8,
                isVisible: { list: true, filter: true, show: true, edit: false }
            },
            updatedAt: {
                position: 9,
                isVisible: { list: true, filter: true, show: true, edit: false }
            },
            
        }
    }

}