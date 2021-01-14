$(document).ready(function(){
    $("myInput").on("keyup",function(){
        var value = $(this).val().toLowerCase();
        $("myTable tr").Filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function openDialog(){
    const colEl = document.getElementById('table_col');
    
}