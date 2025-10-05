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
} 