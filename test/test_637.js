const chai = require('chai')
const mod = require('../banks/637/index')

const assert = chai.assert
const layoutHelpers = require('../util/layout_helper')
const lp = layoutHelpers.layoutParserPart
const cnab400 = mod.layouts.remessa.cnab400


const headerExemplo =   '01REMESSA01COBRANCA       000123456AAA341     XXXXXXX XXXXXXXX. XXXXXX. LTDA637BANCO SOFISA SA040518                                                                                                                                                                                                                                                                                                      000001'
const detalheExemplo =  '10201234567891234000123456AAA341     0025201805               000000000000000001234567   0000000000000000  401002520180530051800000000228083410000001N040518000000000000000000000000000000000000000000000000000000000000000209876543211234XXXXXX XXXXXXXXX X XXXXXXXX LT          AAAAAAA AAAAAAA AAAAAAAA, S/N           BBBBBB DD SS54321345CCCCCCCC       UFRRRRRRR AAAAAAAA. CCCCCC. LTDA          100000002'
const traillerExemplo = '9                                                                                                                                                                                                                                                                                                                                                                                                         000003'

const data = {
  header:[
    {
      '001001':0,
      '002002':1,
      '003009':'REMESSA',
      '010011':'01',
      '012026':'COBRANCA',
      '027046':'000123456AAA341',
      '047076':'XXXXXXX XXXXXXXX. XXXXXX. LTDA',
      '077079':637,
      '080094':'BANCO SOFISA SA',
      '095100':'040518',
      '101394':'',
      '395400':1
    }
  ],
  detail:[
    {
      '001001':1,
      '002003':'02',
      '004017':'1234567891234',
      '018037':'000123456AAA341',
      '038062':'0025201805',
      '063073':0,
      '074086':1234567,
      '087089':'',
      '090090':0,
      '091103':0,
      '104105':0,
      '106107':'',
      '108108':4,
      '109110':01,
      '111120':'0025201805',
      '121126':300518,
      '127139':228.08,
      '140142':341,
      '143146':0,
      '147147':0,
      '148149':'01',
      '150150':'N',
      '151156':40518,
      '157158':0,
      '159160':0,
      '161173':0,
      '174179':0,
      '180192':0,
      '193205':0,
      '206218':0,
      '219220':2,
      '221234':09876543211234,
      '235264':'XXXXXX XXXXXXXXX X XXXXXXXX LTDA',
      '265274':'',
      '275314':'AAAAAAA AAAAAAA AAAAAAAA, S/N',
      '315326':'BBBBBB DD SSSSSS',
      '327334':'54321345',
      '335349':'CCCCCCCC',
      '350351':'UF',
      '352381':'RRRRRRR AAAAAAAA. CCCCCC. LTDA',
      '382385':'',
      '386391':'',
      '392393':10,
      '394394':0,
      '395400':2

    }
  ],
  trailler:[
    {
      '001001':9,
      '002394':'',
      '395400':3
    }
  ]
}

describe('CBNAB 400 - SOFISA', () => {
  it('Header deve ser igual a HeaderExamplo', () => {
    assert.equal(lp(cnab400.structure.header, data.header)[0], headerExemplo);
  });
  it('Detalhe deve ser igual a DetalheExamplo', () => {
    assert.equal(lp(cnab400.structure.detail, data.detail)[0], detalheExemplo);
  });

  it('Trailler deve ser igual a TraillerExamplo', () => {
    assert.equal(lp(cnab400.structure.trailler, data.trailler)[0], traillerExemplo);
  });
});
