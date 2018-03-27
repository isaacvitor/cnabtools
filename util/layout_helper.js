const _s = require( 'lodash/string' )
const getSizeByPosition = function(position){
  const i = Number(position.substr(0, 3))
  const f = Number(position.substr(3, 3))
  return (f - i) + 1
}

const createContentFile = function(fileConfig, data){
  let count = 1
  const sequenceSize = fileConfig.sequenceSize
  const sequenceComplement = fileConfig.sequenceComplement
  const breakLine = fileConfig.breakLine
  const breakLastLine = fileConfig.breakLastLine
  
  const sequencedData = data.map( (line,index) => { 
    const bl = (index == data.length-1) 
    ? (breakLastLine ) ? breakLine : ''
    : breakLine

    line += _s.padStart(count, sequenceSize, sequenceComplement) + bl
    count++
    return line
  });
  return sequencedData.join('#').replace(/\#/g,'')
}

const layoutParserPart = function (partOfLayout, dataPart) {
  let dataContent = []

  dataPart.forEach(item => {
    let content = ''
    partOfLayout.forEach(part => {
      const position = part.position
      const size = getSizeByPosition(position)
      const complement = part.type.complement
      const rawValue = (part.type.preFormat)
        ? part.type.preFormat( _s.truncate(item[position], {'length':size, omission:''}) )
        : _s.truncate(item[position], {'length':size, omission:''})
      let value = part
        .type
        .order(rawValue, size, complement)
      content += value
    })
    dataContent.push(content)
  })
  return dataContent
}

module.exports = {layoutParserPart, createContentFile}