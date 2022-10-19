"use strict";

function argumentHandler(arg) {
  if (typeof arg != "string") {
    return "Введен некорректный тип данных";
  }

  arg = arg.trim();

  if (arg.length > 30) {
    arg = arg.substr(0, 30) + "... ";
  }

  return arg;
}

console.log(argumentHandler('Kujbor <3'));
