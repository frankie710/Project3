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
                console.log(data[i].task);
                task.push(displayTask(data[i].task));
            }
            console.log(task);
            taskList.append(task);


        })
    }

    function displayTask(task) {
        taskList.empty();

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
        return newItem;

    }



    // createNewRow(task) {
    //     var formattedDate = new Date(post.createdAt);
    //     formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    //     var newPostCard = $("<div>");
    //     newPostCard.addClass("card");
    //     var newPostCardHeading = $("<div>");
    //     newPostCardHeading.addClass("card-header");
    //     var deleteBtn = $("<button>");
    //     deleteBtn.text("x");
    //     deleteBtn.addClass("delete btn btn-danger");
    //     var editBtn = $("<button>");
    //     editBtn.text("EDIT");
    //     editBtn.addClass("edit btn btn-info");
    //     var newPostTitle = $("<h2>");
    //     var newPostDate = $("<small>");
    //     var newPostAuthor = $("<h5>");
    //     newPostAuthor.text("Written by: " + post.Author.name);
    //     newPostAuthor.css({
    //       float: "right",
    //       color: "blue",
    //       "margin-top":
    //       "-10px"
    //     });
    //     var newPostCardBody = $("<div>");
    //     newPostCardBody.addClass("card-body");
    //     var newPostBody = $("<p>");
    //     newPostTitle.text(post.title + " ");
    //     newPostBody.text(task);
    //     newPostDate.text(formattedDate);
    //     newPostTitle.append(newPostDate);
    //     newPostCardHeading.append(deleteBtn);
    //     newPostCardHeading.append(editBtn);
    //     newPostCardHeading.append(newPostTitle);
    //     newPostCardHeading.append(newPostAuthor);
    //     newPostCardBody.append(newPostBody);
    //     newPostCard.append(newPostCardHeading);
    //     newPostCard.append(newPostCardBody);
    //     newPostCard.data("post", post);
    //     return newPostCard;

});