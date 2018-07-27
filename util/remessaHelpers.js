const _s = require( 'lodash/string' )

const getSizeByPosition = function(position){
  const i = Number(position.substr(0, 3))
  const f = Number(position.substr(3, 3))
  return (f - i) + 1
}

exports.createContentFile = function(properties, data){
  const breakLine = properties.breakLine
  const breakLastLine = properties.breakLastLine
  
  const sequencedData = data.map( (line,index) => { 
    const bl = (index == data.length-1) 
    ? (breakLastLine ) ? breakLine : ''
    : breakLine
    line += bl
    return line
  });
  return sequencedData.join('#').replace(/\#/g,'')
}

exports.dataToLayoutSection = function (layoutSection, data) {
  let dataContent = []

  data.forEach(item => {
    let rowContent = ''
    layoutSection.forEach( section => {
      const position = section.position
      const size = getSizeByPosition(position)
      const complement = section.type.complement
      const preFormat = section.type.preFormat || null
      const ordinator = section.type.ordinator
      
      let rawValue
      if(preFormat){
        rawValue = preFormat( _s.truncate(item[position], {'length':size, omission:''}) )
      }else{
        rawValue = _s.truncate(item[position], {'length':size, omission:''})
      }
      
      let value = ordinator(rawValue, size, complement)
      rowContent += value
    })
    dataContent.push(rowContent)
  })
  return dataContent
}

exports.resequence = function(properties, data, sequenceStart){
  const sequenceField = properties.sequenceField
  let count = sequenceStart
  data.forEach( row => {
    row[sequenceField] = count
    count++
  })
  return data
}