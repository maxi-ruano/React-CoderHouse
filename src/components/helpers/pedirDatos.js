
import  MOKS_DATA  from "../../data/MOKS_DATA .json";   





export const pedirDatos = () => {

    return new Promise((resolve,reject) => {

        resolve(MOKS_DATA)
    })
}