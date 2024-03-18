let text = document.querySelector('h1');
let original = text.innerText;
let len = original.length;
let a = document.getElementById('theme');

text.addEventListener('click', () => {
    a.pause()
    a.play();

    let key = len;
    let num = 0;

    if (key >= 0){
        setInterval(() => {
            for (let x = 0; x<=key; x++){
                num = Math.floor(Math.random() * (Math.pow(10, key)));
                if (key > 0)
                    text.innerText = original.substring(0, (len-key)) + num;
                else if (key === 0)
                    text.innerText = original.substring(0, (len-key));
                console.log(key);
            }
            key--;
        }, 100);
    }       
});