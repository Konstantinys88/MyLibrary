"use strict";

function init() {
    let name1 = "Vasia";
    function displayName() { // displayName() - внутренняя функция, замыкание
        console.log(name1); // displayName() использует переменную, объявленную в родительской функции
    }
    displayName();
}

// let name1 = "qasd";

init();



// Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена. Другими словами, замыкание даёт вам доступ к Scope (en-US) внешней функции из внутренней функции. В JavaScript замыкания создаются каждый раз при создании функции, во время её создания.



