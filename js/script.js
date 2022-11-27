alert("BIENVENIDO USUARIO A LA MAQUINA EXPENDORA")
do {
    let product = Number(prompt("¿Que desea? \n 1.Coca-Cola   2.Pepsi    3.Sprite \n 4.Lays        5.Pringles    6.Doritos \n 0.No deseo nada"))
    if (product !== 0) {
        switch (product) {
            case 1:
                tipo = Number(prompt("¿De que tipo lo desea? \n 1.Light 2.Zero 3.Normal"))
                precio = 100
                switch (tipo) {
                    case 1:
                        pago = prompt("Debe pagar: " + precio * 1.21)
                        break;
                    case 2:
                        pago = prompt("Debe pagar: " + precio * 1.5)
                        break;
                    case 3:
                        pago = prompt("Debe pagar: " + precio)
                        break;
                    default:
                        alert("ERROR")
                        break;
                }
                break;
            case 2:
                tipo = Number(prompt("¿De que tipo lo desea? \n 1.Light 2.Zero 3.Normal"))
                precio = 120
                switch (tipo) {
                    case 1:
                        pago = prompt("Debe pagar: " + precio * 1.21)
                        break;
                    case 2:
                        pago = prompt("Debe pagar: " + precio * 1.5)
                        break;
                    case 3:
                        pago = prompt("Debe pagar: " + precio)
                        break;
                    default:
                        alert("ERROR")
                        break;
                }
                break;
            case 3:
                tipo = Number(prompt("¿De que tipo lo desea? \n 1.Light 2.Zero 3.Normal"))
                precio = 140
                switch (tipo) {
                    case 1:
                        pago = prompt("Debe pagar: " + precio * 1.21)
                        break;
                    case 2:
                        pago = prompt("Debe pagar: " + precio * 1.5)
                        break;
                    case 3:
                        pago = prompt("Debe pagar: " + precio)
                        break;
                    default:
                        alert("ERROR")
                        break;
                }
                break;
            case 4:
                precio = 220
                break;
            case 5:
                precio = 250
                break;
            case 6:
                precio = 270
                break;
            case 0:
                break;
            default:
                alert("ERROR")
                break;
        }
    } else {
        break;
    }
} while (product !== 0)