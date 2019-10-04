import {Cx, sugarSolution, amplitudeIntensity} from "quantum-tensors"

const z = Cx(-4, 3)
console.log(z.toString())

console.log("Here comes a sugar solution:")
const elem1 = sugarSolution(0.25)
console.log(elem1.toString())

console.log("Here comes a neutral-density filter:")
const elem2 = amplitudeIntensity(Math.SQRT1_2, 0)
console.log(elem2.toString())