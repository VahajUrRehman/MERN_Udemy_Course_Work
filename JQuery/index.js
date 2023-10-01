//Style MAnupulation
// $("h1").css("color", "orange");
// $("h1").addClass("big-title");
// $("h1").hasClass("big-title");
// $("h1").removeClass("big-title");

//text Manupulation
// $(".btn").text("Now Click Me");
$(".btn").html("<em>Click Me</em>");

//Attributes Manupulation
// console.log($("a").attr("href"));
$("a").attr("href", "https://www.bing.com");

//Adding Event Listeners In JQuery

$(".btn").click(function () {
  $("h1").css("color", "green");
});

$("input").keydown(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "orange");
});

//Adding And removing Elements Using Jquery

$("h1").before("<button> Before </button>"); //Adding Button out of h1 Before
$("h1").after("<button> After </button>"); //Adding Button out of h1  After
$("h1").append("<button> Append </button>"); //Adding Button in h1 The After The text
$("h1").prepend("<button> Prepend </button>"); //Adding Button in h1 The Before The text

// $("button").remove(); //This Would remove All Buuttons In Document
