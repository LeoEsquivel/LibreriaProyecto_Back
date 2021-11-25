let _editorialService = null;

class EditorialController{
    constructor({EditorialService}){
        _editorialService = EditorialService;
    }

    async create(request, response){
        const { body } = request;
        const newEditorial = await _editorialService.create.create(body);
        return response.status(201).send(newEditorial);
    }


    async get(request, response){
        const { editorialId } = request.params;
        const editorial = await _editorialService.get(editorialId);
        return response.send(editorial);
    }

    async getAll(request, response){
        const authors = await _editorialService.getAll();
        return response.send(authors);
    }

    async update(request, response){
        const { body } = request;
        const { editorialId } = request.params;
        const updatedEditorial = await _editorialService.update(editorialId);
        return request.send(updatedEditorial);
    }

    async delete(request, response){
        const { editorialId } = request.params;
        const deleteEditorial = await _editorialService.delete(editorial);
        return deleteEditorial;
    }
}

module.exports = EditorialController;