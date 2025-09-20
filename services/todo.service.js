const url = 'http://localhost:3000/todo'

export const todoService = {
    getTodos: async () => {
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error("Network Error " + response.status);
            }
    
            return response.json();
        } catch (error) {
            throw new Error(error.message);
        }

    },

    updateTodosOrder: async (todos) => {
        try {
            const payload = { todos: todos.map(t => ({ _id: t._id, position: t.position })) };
            console.log('[frontend] PUT', `${url}/reorder`, payload);
            const response = await fetch(`${url}/reorder`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(payload)
            })

            if (!response.ok) {
                throw new Error("Reorder request failed " + response.status);
            }

            return response.json();
        } catch (error) {
            console.error('[frontend] updateTodosOrder error:', error);
            throw error;
        }
    },
    updateTodo: async (id, updates) => {
        try {
            console.log('[frontend] PUT', `${url}/${id}`, updates);
            const response = await fetch(`${url}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(updates)
            })

            if (!response.ok) {
                throw new Error("Update request failed " + response.status);
            }

            return response.json();
        } catch (error) {
            console.error('[frontend] updateTodo error:', error);
            throw error;
        }
    },
    addTodo: async (object) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(object)
            })

            if (!response.ok) {
                throw new Error("Creation resuest failed " + response.status);
            }

            return response.json();
        } catch (error) {
            console.log(error.message);
        }
    },

    deleteTodo: async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error("Creation resuest failed " + response.status);
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    ,

    deleteCompleted: async () => {
        try {
            console.log('[frontend] DELETE', `${url}/completed`);
            const response = await fetch(`${url}/completed`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error("Bulk delete request failed " + response.status);
            }
            return response.json();
        } catch (error) {
            console.error('[frontend] deleteCompleted error:', error);
            throw error;
        }
    }
} 