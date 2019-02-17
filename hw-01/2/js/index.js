const sharm = 15;
const hurgada = 25;
const taba = 6;
const cancel = "Нам очень жаль, приходите еще!";


let count = Number(prompt('Введите количество мест'));

if(count > 0){
    if(count > 0 && count <= 6){
        confirm('Есть места в группе TABA, Вы согласны быть в этой группе?')
        if(confirm == true){
            alert('Приятного путешествия в группе TABA');
        }
    }
}else if(count === null){
    alert(cancel);
}