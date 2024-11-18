let count_to_elt = 1;
jQuery(document).ready(function ($) {
  $(".add-todo").on("click", function () {
    console.log("add btn is Clicked !");
    newTodolistDOM();
  });
  $("#to-list-wrapper").on("click", "button.delete", function () {
    console.log("delete btn clicked");
    $(this).parent().remove();
  });
});

function newTodolistDOM() {
  let newEltVal = $("#newtodo").val();
  if (newEltVal.length === 0) return;

  let newElt = `
    <label for="element-${count_to_elt}">
        <input
          type="checkbox"
          id="element-${count_to_elt}"
          class="todolist-elt"
          value="${newEltVal}"
        />
        ${newEltVal}
        <button class="delete">
            delete
        </button>
    </label>
    `;
  $("#to-list-wrapper").append(newElt);
  count_to_elt++;
}