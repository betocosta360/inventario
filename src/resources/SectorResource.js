import adminjs from "adminjs";

import Sector from "../models/sector";

export default {
    resource: Sector,
    options: {
        parent: {
            icon: 'Layers'
        },
        
        properties: {
            id: {
                position: 1,
            },
            
            name: {
                position: 2,
                isRequired: true
            },
            
            initials: {
                position: 2,
                isVisible: { list: true, filter: false, show: true, edit: false }
              },
            createdAt: {
                position: 3,
                isVisible: { list: true, filter: true, show: true, edit: false }
            },
            updatedAt: {
                position: 4,
                isVisible: { list: true, filter: true, show: true, edit: false }
            },
            
        }
    }

}