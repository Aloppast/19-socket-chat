/* id es único para cada usuario
* {
*    id: "dsadsad-adasda",
*    nombre: 'Adrián',
*    sala: 'videojuegos'
* }
*/

class Usuarios {
    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];
        /* FORMA 2 DE HACERLO
        let persona = this.personas.filter( persona => {
            //Retorna un array
            return persona.id = id;
        });
        */

        return persona;
    }
    //Getter
    getPersonas() {
        return this.personas;
    }
    getPersonasPorSala(sala) {
        //276.
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {
        //Debemos saber qué persona fue borrada antes de borrarla
        let personaBorrada = this.getPersona(id);

        //Si encuentra este id de persona, lo saca del array
        this.personas = this.personas.filter(persona => persona.id != id);
        /* FORMA 2 DE HACERLO
        this.personas.filter(persona =>{
            return persona.id != id;
        });
        */

        return personaBorrada;
    }
}

module.exports = { Usuarios };