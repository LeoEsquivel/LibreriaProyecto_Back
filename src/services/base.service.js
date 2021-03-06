class BaseService {
    constructor(repository){
        this.repository = repository;
    }

    async get(id){
        if(!id){
            const error = new Error();
            error.status = 400;
            error.message = "Id debe ser enviado";
            throw error;
        }
        const currentEntity = await this.repository.get(id);
        
        if(!currentEntity){
            const error = new Error();
            error.status = 404;
            error.message = "No se ha encontrado la entidad";
            throw error;
        }

        return currentEntity;
    }

    async getAll(pageSize, pageNum){
        return await this.repository.getAll(pageSize, pageNum);
    }

    async create(entity){
        return await this.repository.create(entity);
    }

    async update(id, entity){
        if(!id){
            const error = new Error();
            error.status = 400;
            error.message = "Id debe ser enviado";
            throw error;
        }
        return await this.repository.update(id, entity);
        
    }

    async delete(id){
        if(!id){
            const error = new Error();
            error.status = 400;
            error.message = "Id debe ser enviado";
            throw error;
        }
        await this.repository.delete(id);
        return true;
    }

}

module.exports = BaseService;