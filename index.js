// Import stylesheets
import Highcharts from 'highcharts'
import jquery from 'jquery'
import './style.css'
import {getStandart, applyStandartToConfig, getContainerWidth} from './adaptToSize'
import {generateConfig} from './dataGenerator'

const standartChartLength = parseInt(Math.random()*20)
const сhart1Length = parseInt(Math.random()*10 + 2)
const сhart2Length = parseInt(Math.random()*10 + 2)

const conf1 = generateConfig(parseInt(Math.random()*20))
jquery('#chart1').css('width', 800+'px')
const chart = Highcharts.chart('chart1', conf1)
const standart = getStandart(chart)



let conf2 = generateConfig(сhart1Length, 10000)
let conf2 = applyStandartToConfig(conf2, standart)
let newWidth = getContainerWidth(conf2, standart)
jquery('#chart2').css('width', newWidth+'px')
const chart_2 = Highcharts.chart('chart2', conf2)


let conf3 = generateConfig(сhart2Length, 10000)
conf3 = applyStandartToConfig(conf3, standart)
let newWidth = getContainerWidth(conf3, standart)
jquery('#chart3').css('width', newWidth+'px')
const chart_3 = Highcharts.chart('chart3', conf3)