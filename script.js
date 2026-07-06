const like = document.getElementById("like");

const dislike = document.getElementById("dislike");

like.addEventListener("click",()=>{

like.classList.toggle("ativo");

dislike.classList.remove("ativo");

});

dislike.addEventListener("click",()=>{

dislike.classList.toggle("ativo");

like.classList.remove("ativo");

});

const enviar=document.getElementById("enviar");

const comentario=document.getElementById("comentario");

const lista=document.getElementById("listaComentarios");

enviar.addEventListener("click",()=>{

if(comentario.value.trim()===""){

alert("Digite um comentário!");

return;

}

const novo=document.createElement("div");

novo.classList.add("comentario");

novo.innerHTML=`

<p>${comentario.value}</p>

`;

lista.prepend(novo);

comentario.value="";

});
