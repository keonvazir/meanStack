$(document).ready(function(){
    $.get("https://opentdb.com/api.php?amount=10&type=multiple", function(data1){
        
        general = data1.results;
        console.log(data1);
    })
    $.get("https://opentdb.com/api.php?amount=10&type=multiple", function(data2){
        science = data2.results;
    })
    $.get("https://opentdb.com/api.php?amount=10&type=multiple", function(data3){
        sports = data3.results;

    })
    $('#a1').on('click', '.incorrect',function(){
        $(this).addClass('text-danger')
    })
    $('#a1').on('click', '.correct',function(){
        $(this).addClass('text-success')
    })
    $('#a1').click(function(){
        if (!$(this).hasClass('opened')){
            $('#a1').addClass('opened');
            $('#a1 ').html("<div class='center'><p>" + general[0].question+ "</p><br><p class='incorrect'>"+ general[0].incorrect_answers[0] + "</p><p class='incorrect'>"+ general[0].incorrect_answers[1] +"</p><p class='correct'>"+ general[0].correct_answer+"</p><p class='incorrect'>"+ general[0].incorrect_answers[2]+"</p></div>")
        }
    })
    ///////////////////////////////////////////
    $('#a2').on('click', '.incorrect',function(){
        $(this).addClass('text-danger')
    })
    $('#a2').on('click', '.correct',function(){
        $(this).addClass('text-success')
    })
    $('#a2').click(function(){
        if (!$(this).hasClass('opened')){
            $('#a2').addClass('opened');
            $('#a2').html("<div class='center'><p>" + general[1].question+ "</p><br><p class='incorrect'>"+ general[1].incorrect_answers[0] + "</p><p class='incorrect'>"+ general[1].incorrect_answers[1] +"</p><p class='correct'>"+ general[1].correct_answer+"</p><p class='incorrect'>"+ general[1].incorrect_answers[2]+"</p></div>")
        }
        
    })
    //////////////////////////////////////////

    $('#a3').on('click', '.incorrect',function(){
        $(this).addClass('text-danger')
    })
    $('#a3').on('click', '.correct',function(){
        $(this).addClass('text-success')
    })
    $('#a3').click(function(){
        if (!$(this).hasClass('opened')){
            $('#a3').addClass('opened');
            $('#a3').html("<div class='center'><p>" + general[2].question+ "</p><br><p class='incorrect'>"+ general[2].incorrect_answers[0] + "</p><p class='incorrect'>"+ general[2].incorrect_answers[1] +"</p><p class='correct'>"+ general[2].correct_answer+"</p><p class='incorrect'>"+ general[2].incorrect_answers[2]+"</p></div>")
        }
    })
    //////////////////////////////////////////////
    $('#a4').on('click', '.incorrect',function(){
        $(this).addClass('text-danger')
    })
    $('#a4').on('click', '.correct',function(){
        $(this).addClass('text-success')
    })
    
    $('#a4').click(function(){
        if (!$(this).hasClass('opened')){
            $('#a4').addClass('opened');
            $('#a4').html("<div class='center'><p>" + general[3].question+ "</p><br><p class='incorrect'>"+ general[3].incorrect_answers[0] + "</p><p class='incorrect'>"+ general[3].incorrect_answers[1] +"</p><p class='correct'>"+ general[3].correct_answer+"</p><p class='incorrect'>"+ general[3].incorrect_answers[2]+"</p></div>")
        }
    })
    
    ///science///
    $('#b1').click(function(){
        $('#b1').html("<div class='center'><p>" + science[0].question+ "</p><br><p>"+ science[0].incorrect_answers[0] + "</p><p>"+ science[0].incorrect_answers[1] +"</p><p>"+ science[0].correct_answer+"</p><p>"+ science[0].incorrect_answers[2]+"</p></div>")
    })
    $('#b2').click(function(){
        $('#b2').html("<div class='center'><p>" + science[1].question+ "</p><br><p>"+ science[1].incorrect_answers[0] + "</p><p>"+ science[1].incorrect_answers[1] +"</p><p>"+ science[1].correct_answer+"</p><p>"+ science[1].incorrect_answers[2]+"</p></div>")
    })
    $('#b3').click(function(){
        $('#b3').html("<div class='center'><p>" + science[2].question+ "</p><br><p>"+ science[2].incorrect_answers[0] + "</p><p>"+ science[2].incorrect_answers[1] +"</p><p>"+ science[2].correct_answer+"</p><p>"+ science[2].incorrect_answers[2]+"</p></div>")
    })
    $('#b4').click(function(){
        $('#b4').html("<div class='center'><p>" + science[3].question+ "</p><br><p>"+ science[3].incorrect_answers[0] + "</p><p>"+ science[3].incorrect_answers[1] +"</p><p>"+ science[3].correct_answer+"</p><p>"+ science[3].incorrect_answers[2]+"</p></div>")
    })
    ////sports///
    $('#c1').click(function(){
        $('#c1').html("<div class='center'><p>" + sports[0].question+ "</p><br><p>"+ sports[0].incorrect_answers[0] + "</p><p>"+ sports[0].incorrect_answers[1] +"</p><p>"+ sports[0].correct_answer+"</p><p>"+ sports[0].incorrect_answers[2]+"</p></div>")
    })
    $('#c2').click(function(){
        $('#c2').html("<div class='center'><p>" + sports[1].question+ "</p><br><p>"+ sports[1].incorrect_answers[0] + "</p><p>"+ sports[1].incorrect_answers[1] +"</p><p>"+ sports[1].correct_answer+"</p><p>"+ sports[1].incorrect_answers[2]+"</p></div>")
    })
    $('#c3').click(function(){
        $('#c3').html("<div class='center'><p>" + sports[2].question+ "</p><br><p>"+ sports[2].incorrect_answers[0] + "</p><p>"+ sports[2].incorrect_answers[1] +"</p><p>"+ sports[2].correct_answer+"</p><p>"+ sports[2].incorrect_answers[2]+"</p></div>")
    })
    $('#c4').click(function(){
        $('#c4').html("<div class='center'><p>" + sports[3].question+ "</p><br><p>"+ sports[3].incorrect_answers[0] + "</p><p>"+ sports[3].incorrect_answers[1] +"</p><p>"+ sports[3].correct_answer+"</p><p>"+ sports[3].incorrect_answers[2]+"</p></div>")
    })
})

//need to complete bonus features of displaying correct answer and keeping score.
//need to complete bonus features of displaying correct answer and keeping score.
