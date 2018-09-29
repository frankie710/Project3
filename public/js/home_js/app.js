$(document).ready(function () {
    var taskList = $(".taskList")
    $('#new-task-form').on("click", "#addTasks", function () {
        event.preventDefault();
        var todo = $("#new-task").val().trim();
        saveTask({
            task: todo
        });
    })

    function saveTask(task) {
        $.post("/api/todos", task)
        .then(function(){
        showTask()
        });
    }

    function showTask() {
        $.get("/api/todos", function (data) {
            var task = [];
            for (var i = 0; i < data.length; i++) {
                task.push(displayTask(data[i].task));
            }
            taskList.append(newItem);
        })
    }

    function displayTask(task) {
        taskList.empty();

        // var newRow = $("<div>");
        // newRow.addClass("row");
        // newRow.addClass("newLine");
        var newItem = $("<div>");
        newItem.addClass("todos");
        var deleteBtn = $("<button>");
        deleteBtn.text("x");
        deleteBtn.addClass("delete btn-task");
        var newItemBody = $("<div>");
        newItemBody.addClass("item-body");
        var newTaskBody = $("<p>");
        newTaskBody.text(task);
        newItemBody.append(newTaskBody);
        newItemBody.append(deleteBtn);
        newItem.append(newItemBody);
        // newRow.append(newItem);
        return newItem;

    }

});