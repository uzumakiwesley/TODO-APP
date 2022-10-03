/**
 * Métodos de recuperação de elementos HTML
 */
// Recuepra elementos HTML a partir do nome da tag
//const todoForm = document.getElementsByTagName('form')[0]
const todoForm = document.getElementById("todo-form");
const todos = [];

/**
 *addEventListener seve para ouvir eventos de elementos HTML sempre que forem emitidos
 */

todoForm.addEventListener("submit", function (evento) {
  /**
   * preventDefaul cancela o comportamento padrão de um formulário que seria o recarregamento da página tentando fazer seu envio
   */
  evento.preventDefault();
  /**
   * cancela a propagação do evento que foi emitido para o elemento pai, evitando que outros eventos sejam emitidos
   */
  evento.stopPropagation();
  /**
   * querySelector recupera o primeiro elemento que atenda a um seletor css informado
   */
  const todoInput = document.querySelector("#todo");
  /**
   * a propriedade value é uma propriedade que representa o atributo value dos elementos de formulário do HTML, para acessarmos o valor que está dentro deles
   */
  todos.push(todoInput.value);
  todoInput.value = "";
  renderizarTodos();
});
function renderizarTodos() {
  const todosListSection = document.querySelector("#todos-list")
  todosListSection.innerHTML = ''

  for (let tarefa of todos) {
    /**
     * createElement = é o metodo responsavel por gerar novos elementos html dentro do javascript a partit do nome das tags
     */
    const divCard = document.createElement("div");
    divCard.classList.add("card", "bg-warning");

    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body", "d-flex", "align-items-center");

    const pTodoText = document.createElement("p");
    pTodoText.classList.add("todo-text", "flex-grow-1", "text-truncate");
    /**
     * inner.text é a propriedade qu informa qual conteudo de texto que esta dentro de um elemento html
     */
    pTodoText.innerText = tarefa;

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn", "delete-todo");
    /**
     * arrow functions SEMPRE são anônimas
     */
    btnDelete.addEventListener('click', () => {
        /**
         * desvobrit o indice do elemento dentro do array
         */
        /**
         * indexoff informa em qual indice se encontra determinado valor dentro do seu array
         * 
         * se ele não encontraar o valor dentro do array ele retorna o valor - 1
         */
        const index = todos.indexOf(tarefa)
        /**
         * splice serve para excluir um determinado valor de um array a partir do seu indice
         */
        todos.splice(index, 1)
        renderizarTodos()
    })

    const spanIcon = document.createElement('span');
    spanIcon.classList.add('material-symbols-outlined');
    spanIcon.innerText = 'delete';

    /**
     * appendChild serve para colocar um(por vez) novos elementos html dentro de outros e o append serve para colocar varios elementos
     */

    btnDelete.appendChild(spanIcon);
    divCardBody.append(pTodoText, btnDelete);
    divCard.appendChild(divCardBody);
    todosListSection.appendChild(divCard);
  }
}
