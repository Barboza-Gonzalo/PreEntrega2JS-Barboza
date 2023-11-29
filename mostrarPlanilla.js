function mostrarPlanilla (){
    for(let indiv of planillaGeneral){
    alert(  `nombre: ${indiv.nombre}\n
            edad: ${indiv.edad}\n
            dni:${indiv.dni}\n
            nacionalidad:${indiv.nacionalidad} `);
    } 
}