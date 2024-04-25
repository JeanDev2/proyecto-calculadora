
import Display from "./Display.js"

const displayValorActual = document.getElementById('valor-actual')
const displayValorAnterior = document.getElementById('valor-anterior')

const botonesNumeros = document.querySelectorAll('.numero')
const botonesOperadores = document.querySelectorAll('.operador')

const display = new Display(displayValorAnterior,displayValorActual)

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.innerHTML)
    })
})


botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () =>{
        display.computar(boton.value)
    })
})

const borrar = document.querySelector('.borrar')
borrar.addEventListener('click',() => {
    display.borrar()
})

const borrarTodo = document.querySelector('.borrarTodo')
borrarTodo.addEventListener('click',() => {
    display.borrarTodo()
})