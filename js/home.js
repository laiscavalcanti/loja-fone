
const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);

    function handleClick (){
        const $carrinho = document.querySelector(".-last");
            $carrinho.textContent = "mudando de valor";
    }