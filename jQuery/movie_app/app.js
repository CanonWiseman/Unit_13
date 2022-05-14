$('form').on('submit', function(e){
    e.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();
    let removeBtn = $('button').text('remove');
    $('ul').append(
        $('<li>')
        .text(title + " " + rating + " ")
        .append(removeBtn)
        .addClass('new-li')
        .on('click', 'button', function(e){
            $(this).before().remove();
        })
    )   
})