jQuery(document).ready(function ($) {
  $(".firstButton").hide();

  $.ajax({
    type: "GET",
    url: "https://reqres.in/api/users?page=" + 1,

    success: function (res) {
      $(".main").html("");
      for (var a = 0; a < res.data.length; a++) {
        $(".main").append(
          ' <div class="single-data"> <p class="avatar"> <img src="' +
            res.data[a].avatar +
            '" alt=""> </p> <p class="id"> ID: ' +
            res.data[a].id +
            '</p> <p class="firstname "> First Name: ' +
            res.data[a].first_name +
            '</p> <p class="lastname ">  Last Name:  ' +
            res.data[a].last_name +
            '</p> <p class="email">  Email:' +
            res.data[a].email +
            "</p> </div>"
        );
      }
    },
  });

  $(".secondButton").click(function () {
    $.ajax({
      type: "GET",
      url: "https://reqres.in/api/users?page=" + 2,

      success: function (res) {
        $(".main").html("");
        for (var a = 0; a < res.data.length; a++) {
          $(".main").append(
            ' <div class="single-data"> <p class="avatar"> <img src="' +
              res.data[a].avatar +
              '" alt=""> </p> <p class="id"> ID: ' +
              res.data[a].id +
              '</p> <p class="firstname "> First Name: ' +
              res.data[a].first_name +
              '</p> <p class="lastname "> Last Name: ' +
              res.data[a].last_name +
              '</p> <p class="email"> Email: ' +
              res.data[a].email +
              "</p> </div>"
          );
        }
      },
    });

    $(".secondButton").hide();
    $(".firstButton").show();
  });

  $(".firstButton").click(function () {
    $.ajax({
      type: "GET",
      url: "https://reqres.in/api/users?page=" + 1,

      success: function (res) {
        $(".main").html("");
        for (var a = 0; a < res.data.length; a++) {
          $(".main").append(
            ' <div class="single-data"> <p class="avatar"> <img src="' +
              res.data[a].avatar +
              '" alt=""> </p> <p class="id"> ID: ' +
              res.data[a].id +
              '</p> <p class="firstname "> First Name: ' +
              res.data[a].first_name +
              '</p> <p class="lastname ">Last Name: ' +
              res.data[a].last_name +
              '</p> <p class="email"> Email: ' +
              res.data[a].email +
              "</p> </div>"
          );
        }
      },
    });

    $(".firstButton").hide();
    $(".secondButton").show();
  });
});
