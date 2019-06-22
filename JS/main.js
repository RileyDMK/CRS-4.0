//var about = '<div id="about"><h1>What\'s It About?</h1></div>';

// function changeText()
// {
//     document.getElementById('main').innerHTML = about;
// }
// document.getElementById('a1').onclick = function() {changeText()};



$(document).ready(function(){
    $("#welcome-btn").click(function(){
        $("#welcome-btn").toggle();
        $("#main-div").toggle();
        $("#bg img").toggleClass("transparent");
        $("#main").load("HTML/home.html");
    });
    $("#go-home").click(function(){
        $("#main").load("HTML/home.html");
    });
    $("#about-1").click(function(){
        $("#main").load("HTML/country-road-studio.html");
    });
    $("#about-2").click(function(){
        $("#main").load("HTML/about-bryan-stuart.html");
    });
    $("#about-3").click(function(){
        $("#main").load("HTML/what-to-expect.html");
    });
    $("#about-4").click(function(){
        $("#main").load("HTML/lesson-tracks.html");
    });
    $("#lessons-1").click(function(){
        $("#main").load("HTML/piano.html");
    });
    $("#lessons-2").click(function(){
        $("#main").load("HTML/for-adults.html");
    });
    $("#lessons-3").click(function(){
        $("#main").load("HTML/electric-keyboards.html");
    });
    $("#lessons-4").click(function(){
        $("#main").load("HTML/singing.html");
    });
    $("#lessons-5").click(function(){
        $("#main").load("HTML/ukelele.html");
    });
    $("#band").click(function(){
        $("#main").load("HTML/for-band-directors.html");
    });
    $("#policies-1").click(function(){
        $("#main").load("HTML/studio-operation.html");
    });
    $("#policies-2").click(function(){
        $("#main").load("HTML/attendance.html");
    });
    $("#policies-3").click(function(){
        $("#main").load("HTML/tuition.html");
    });
    $("#policies-4").click(function(){
        $("#main").load("HTML/scheduling.html");
    });
    $("#contact").click(function(){
        $("#main").load("HTML/contact-us.html");
    });
    $("#blog").click(function(){
        $("#main").load("HTML/blog.html");
    });
    $("#o-blog").click(function(){
        $("#main").load("HTML/blog.html");
    });
});




//'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// const element = <div id="about"><h1>What\'s It About?</h1></div>;
// ReactDOM.render(element, document.getElementById('main'));


// let html;

// $(document).ready(function(){
//     let getView = function(view){

//       //let html;

//       $.ajax({
//         url: '../HTML/'+view+'.html',
//         async: false,
//         success: function( data ){
//           html = $.parseHTML( data.response );
//         }
//       });

//       return html;

//     }
//     //var about = getView('about');
// });



// document.getElementById('a1').onclick = document.getElementById('main').innerHTML = html;
