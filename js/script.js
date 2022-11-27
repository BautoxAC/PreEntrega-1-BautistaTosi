alert("BIENVENIDO USUARIO A LA MAQUINA EXPENDORA")
do {
    product = Number(prompt("¿Que desea? \n 1.Coca-Cola   2.Pepsi    3.Sprite \n 4.Lays        5.Pringles    6.Doritos \n 0.No deseo nada"))
    if (product !== 0) {
        switch (product) {
            case 1:
                tipo = Number(prompt("¿De que tipo lo desea? \n 1.Light 2.Zero 3.Normal"))
                precio = 100
                switch (tipo) {
                    case 1:
                        precio = precio * 1.21
                        do {
                            pago = Number(prompt("Debe pagar: " + precio + "$"))
                            if (pago < precio) {
                                precio = precio - pago
                            } else if (pago > precio) {
                                vuelto = precio - pago
                                alert("Su vuelto es de: " + (-vuelto) + "$")
                                alert("Disfrute su producto")
                                break;
                            } else if (pago === precio) {
                                pago = precio - pago
                                alert("Disfrute su producto")
                                break;
                            } else {
                                alert("ERROR")
                            }
                        } while (pago !== 0);
                        break;
                    case 2:
                        precio = precio * 1.5
                        pago = Number(prompt("Debe pagar: " + precio + "$"))
                        break;
                    case 3:
                        pago = Number(prompt("Debe pagar: " + precio + "$"))
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
                        precio = precio * 1.21
                        pago = Number(prompt("Debe pagar: " + precio + "$"))
                        break;
                    case 2:
                        precio = precio * 1.5
                        pago = Number(prompt("Debe pagar: " + precio + "$"))
                        break;
                    case 3:
                        pago = Number(prompt("Debe pagar: " + precio + "$"))
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
                        precio = precio * 1.21
                        pago = Number(prompt("Debe pagar: " + precio + "$"))
                        break;
                    case 2:
                        precio = precio * 1.5
                        pago = Number(prompt("Debe pagar: " + precio + "$"))
                        break;
                    case 3:
                        pago = Number(prompt("Debe pagar: " + precio + "$"))
                        break;
                    default:
                        alert("ERROR")
                        break;
                }
                break;
            case 4:
                precio = 220
                pago = Number(prompt("Debe pagar: " + precio + "$"))
                break;
            case 5:
                precio = 250
                pago = Number(prompt("Debe pagar: " + precio + "$"))
                break;
            case 6:
                precio = 270
                pago = Number(prompt("Debe pagar: " + precio + "$"))
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