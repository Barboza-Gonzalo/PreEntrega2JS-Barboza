const SI = 'si';
const NO = 'no';
const MAYOR = 'mayores';
const MENOR = 'menores';
const ALFA = 'clave';
const INICIAL = 18;
const FINAL = 100;

let nombre ;
let edad ;
let dni ; 
let nacionalidad ;
let agregar ;




const personaUno = new Persona ("Gonzalo",29,38178889,"argentino");
const personaDos = new Persona ("Fernanda",26,40264780,"argentina");
const personaTres = new Persona ("Frank",32,99123654,"venenzolano");
const personaCuatro = new Persona ("Rodrigo",45,28147526,"argentino");

let planillaGeneral = [ personaUno , personaDos , personaTres , personaCuatro  ] ;


alert("Bienvenido al regristro de personas");
do{    
let personaNombre = prompt("ingrese su nombre");
let personaEdad = +prompt("ingrese su edad ");
let personaDni = +prompt("ingrese su DNI");
let personaNacionalidad = prompt ("ingrese su nacionalidad");

const personaNueva = new Persona (personaNombre,personaEdad,personaDni,personaNacionalidad);

planillaGeneral.push (personaNueva);

agregar = prompt("desea agregar otro individuo? SI/NO");


}while (agregar === SI)

consulta = prompt ("desea consultar la planilla de registro? SI/NO ")
if( consulta === SI){
    mostrarPlanilla(planillaGeneral);
    do{

    consulta = prompt('desea saber quienes son mayores de edad? dijite    "mayores"'+'\n'
                    + 'desea saber quienes son menores de edad? dijite    "menores"'+'\n'
                    +'desea realizar busqueda por palabra clave? dijite   "clave"'+'\n');
        switch(consulta){
            case MAYOR:
                const mayorEdad = planillaGeneral.filter((Persona)=> {return Persona.edad >= INICIAL && Persona.edad <= FINAL });
                for(let indiv of mayorEdad){
                alert(  `nombre: ${indiv.nombre}\n
                        edad: ${indiv.edad}\n
                        dni:${indiv.dni}\n
                        nacionalidad:${indiv.nacionalidad} `);                  
                };
                break;
            case MENOR:
                const menorEdad = planillaGeneral.filter((Persona)=> {return Persona.edad < INICIAL });
                for(let indiv of menorEdad){
                alert(  `nombre: ${indiv.nombre}\n
                        edad: ${indiv.edad}\n
                        dni:${indiv.dni}\n
                        nacionalidad:${indiv.nacionalidad} `);                  
                };
                break;
            case ALFA:
                const busqueda = prompt ('ingrese palabra clave para realizar su busqueda:')
                const filNacio = planillaGeneral.filter ((Persona)=> { return Persona.nacionalidad.includes(busqueda)});
                for(let indiv of filNacio){
                alert(  `nombre: ${indiv.nombre}\n
                        edad: ${indiv.edad}\n
                        dni:${indiv.dni}\n
                        nacionalidad:${indiv.nacionalidad} `);
                };
                break;              
            default:
                alert('Usted a ingresado un opcion invalida');
                    }
                consulta = prompt('desea realizar otra consulta ? SI/NO')
    }while (consulta === SI)

    alert("Hasta la proxima");
                
                
}else {
    alert("Hasta la proxima");
}

    
