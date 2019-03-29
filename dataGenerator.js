import {chart1} from './chart1'
import cloneDeep from 'lodash/cloneDeep'

export function generateConfig (categoriesCount, k = 100) {

let config = cloneDeep(chart1)


config.series.forEach((series, index) => {
    //console.log(index)
    series.data = new Array(categoriesCount).fill(Math.random()*k);
})

return config

}