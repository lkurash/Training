class TodoList {
  constructor(element) {
    this.lastId = 0;
    this.todo = [];

    this.todoItemsElem = document.getElementById("todo-items");
  }

  addItem(text = prompt("Create a note. Input text")) {
    this.lastId = this.lastId + 1;

    const obj = {
      id: this.lastId,
      text: text,
      date: Date.now()
    };

    this.todo.push(obj);

    this.showList();
  }

  showList() {
    this.todoItemsElem.innerHTML = "";

    this.todo.forEach(({id, text}) => {
      let li = document.createElement('li');
      li.textContent = `${id} ${text}`;
      this.todoItemsElem.appendChild(li);
    });
  };

  sort() {
   this.todo = this.todo.sort((a, b) => b.date - a.date);

   this.showList();
  }

  removeItemById (id = +prompt("Delete a note. Input id:")) {

    const index = this.todo.findIndex(item => item.id === id);

    if (index !== -1) {
      this.todo.splice(index, 1);
    }
    else {
      alert('Notes with this id were not be created');
    }

    this.showList();
  }

  clear() {
    this.todo = [];
    this.todo.push({id : 'id', text : "text", date : 'date'});
    this.showList();
  }
};
