function insert(num){
    $('.calc-display').val($('.calc-display').val() + num);

}
function eql(){
    $('.calc-display').val(eval($('.calc-display').val()));
}
function AC() {
    $('.calc-display').val('');
}
function del(){
    value = $('.calc-display').val();
    $('.calc-display').val(value.substring(0,value.length - 1));
}

    