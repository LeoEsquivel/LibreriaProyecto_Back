let _authorService = null;

class AuthorController {
    constructor({AuthorSerVice}){
        _authorService = AuthorSerVice;
    }

    async get(request, response){
        const {authorId} = request.params;
        const author = await _authorService.get(authorId);
        return response.send(author);
    }

    async create(request, response){
        const { body } = request;
        const newAuthor = await _authorService.create.create(body);
        return response.status(201).send(newAuthor);
    }


    async getAll(request, response){
        const authors = await _authorService.getAll();
        return response.send(authors);
    }

    async update(request, response){
        const { body } = request;
        const { authorId } = request.params;
        const updatedAuthor = await _authorService.update(authorId, body);
        return request.send(updatedAuthor);
    }

    async delete(request, response){
        const { authorId} = request.params;
        const deletedAuthor = await _authorService.delete(authorId);
        return response.send(deletedAuthor);
    }

}

module.exports = AuthorController;