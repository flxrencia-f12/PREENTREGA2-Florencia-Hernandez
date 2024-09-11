function ingresarDescuentos() {
    let plantas = [];
    let continuar = true;
    
    while (continuar === true) {
        const planta = prompt("Ingresa el nombre de la planta");
        const descuento = parseFloat(prompt("Ingresa el descuento de la planta"));
        const stock = parseFloat(prompt("Ingrese stock"));

        if (isNaN(descuento) || isNaN(stock) || descuento < 0 || descuento > 50 || stock < 0 || stock > 50) {
            alert("Ingresa un numero válido");
            
        } else {
            plantas.push({nombre: planta, descuento: descuento, stock: stock});
        }

        console.log(plantas);

        const respuesta = prompt("Querés agregar otra planta? Si/No").toLowerCase();
        if (respuesta === "si") {
            continuar = true;
        } else {
            continuar = false;
        }

    }

    return plantas;
}

const plantas = [
    {
        nombre: "Bromelia",
        descuento: 10,
        stock: 20
    },
    {
        nombre: "Fittonia",
        descuento: 50,
        stock: 1
    },
    {
        nombre: "Calathea",
        descuento: 50,
        stock: 3
    },
    {
        nombre: "Begonia",
        descuento: 15,
        stock: 1
    }
   
   
]

function mejorOferta(plantas) {
    
  const mayorDescuento = Math.max(...plantas.map(planta => planta.descuento));
  const lasMasEconomicas = plantas.filter(planta => planta.descuento === mayorDescuento);



    console.log("Las plantas con mayor descuento son:", lasMasEconomicas);

    return lasMasEconomicas;

}

function menorOferta(plantas) {
    
    const menorDescuento = Math.min(...plantas.map(planta => planta.descuento));
    const lasMenosEconomicas = plantas.filter(planta => planta.descuento === menorDescuento);

    console.log("Las plantas con menor descuento son:", lasMenosEconomicas);
    

    return lasMenosEconomicas;
}
let nuevasPlantas = ingresarDescuentos();
let todasLasPlantas = nuevasPlantas.concat(plantas);

console.log("Todas las plantas:", todasLasPlantas);
mejorOferta(todasLasPlantas);
menorOferta(todasLasPlantas);


    const total = plantas.reduce((acc,prod) => acc + prod.stock, 0);
    console.log("El stock total de plantas con descuento es de:", total);



