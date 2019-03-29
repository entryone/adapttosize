
export function applyStandartToConfig(config, standart) {
  let config = Object.assign({}, config)
  config.chart.marginBottom = standart.margins.bottom
  config.chart.marginLeft = standart.margins.left,
  config.chart.marginRight = standart.margins.right
  config.chart.marginTop = standart.margins.top
  config.chart.width = undefined
  return config
}

export function getContainerWidth(config, standart) {
  let plotBoxWidth = standart.width - standart.margins.left - standart.margins.right
  let newPlotBoxWidth = (plotBoxWidth / standart.dataLength) * getDataLength(config)
  let width = standart.margins.left + standart.margins.right + newPlotBoxWidth
  return width
}

export function getContainerHeight(config, standart) {
  let plotBoxHeight = margins.height - standart.margins.top - standart.margins.bottom
  let newPlotBoxHeight = (plotBoxWidth / standart.dataLength) * getDataLength(config)
  let height = standart.margins.top + standart.margins.bottom + newPlotBoxHeight
  return height
}

export function getStandart(chart) {
  return {
    margins: {
      left: chart.plotLeft,
      top: chart.plotTop,
      bottom: chart.marginBottom,
      right: chart.marginRight,
    },
    width: chart.containerWidth,
    height: chart.containerHeight,
    dataLength: getDataLength(chart)
  }
}

function getDataLength (config) {
  return config.series[0].data.length
}