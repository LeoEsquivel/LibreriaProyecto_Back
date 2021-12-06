let _editorialService = null;

class EditorialController{
    constructor({EditorialService}){
        _editorialService = EditorialService;
    }

    async create(request, response){
        const { body } = request;
        const newEditorial = await _editorialService.create(body);
        return response.status(201).send(newEditorial);
    }


    async get(request, response){
        const { editorialId } = request.params;
        const editorial = await _editorialService.get(editorialId);
        return response.send(editorial);
    }

    async getAll(request, response){
        const {pageSize, pageNum} = request.query;
        const authors = await _editorialService.getAll(pageSize, pageNum);
        return response.send(authors);
    }

    async update(request, response){
        const { body } = request;
        const { editorialId } = request.params;
        const updatedEditorial = await _editorialService.update(editorialId);
        return response.send(updatedEditorial);
    }

    async delete(request, response){
        const { editorialId } = request.params;
        const deleteEditorial = await _editorialService.delete(editorialId);
        return deleteEditorial;
    }
}

module.exports = EditorialController;