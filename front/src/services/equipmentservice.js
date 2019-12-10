import axios from "axios";

class EquipmentService{

    constructor(){
        this.connection = axios.create({baseURL: 'http://localhost:8080'});
    }

    save(equipment) {
        if (equipment.id) {
            return this.connection.put(`/equipments/${equipment.id}`, equipment);
        }
        return this.connection.post('/equipments', equipment);
    }

    delete(equipmentId) {
        return this.connection.delete(`/equipments/${equipmentId}`);
    }

    findOne(equipmentId) {
        return this.connection.get(`/equipments/${equipmentId}`);
    }

    findAll() {
        return this.connection.get('/equipments');
    }

}

export default new EquipmentService();
