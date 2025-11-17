export default class DB {
  static setApiUrl(url) {
    this.apiUrl = url;
  }

  static async findAll() {
    const response = await fetch(this.apiUrl + 'todos');
    return response.json();
  }

  static async create(data) {
    const response = await fetch(this.apiUrl + 'todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: data.content,
        isCompleted: data.isCompleted,
      }),
    });
    return response.json();
  }

  static async updateOne(todo) {
    const response = await fetch(this.apiUrl + 'todos/' + contact.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: todo.content,
        isCompleted: todo.isCompleted,
      }),
    });
    return response.json();
  }

  static async deleteOneById(id) {
    const response = await fetch(this.apiUrl + 'todos/' + id, {
      method: 'DELETE',
    });
    return response.json();
  }
}