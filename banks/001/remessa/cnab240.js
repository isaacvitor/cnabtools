const _s = require( 'lodash/string' )

const _dataType = {
  n: {
    ordinator: _s.padStart,
    complement: '0'
  },
  a: {
    ordinator: _s.padEnd,
    complement: ' ' //Here is a TRUE BLANK SPACE pay attention!
  },
  m: {
    ordinator: _s.padStart,
    complement: '0',
    preFormat:(v) => v > 0 ? Number(v).toFixed(2).replace('.', '') : v
  }
}

exports.properties = {
  version:'072017',
  sequenceField:'395400',
  sequenceSize:6,
  sequenceComplement:0,
  breakLine:'\r\n',
  breakLastLine:false,
  encoding:{content:'ascii',file:'ascii'}
}

exports.header = [
  {position:'001001', type:_dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO HEADER'},
  {position:'002002', type:_dataType.n, description:'TIPO DE OPERAÇAO'},
  {position:'003009', type:_dataType.a, description:'IDENTIFICAÇAO POR EXTENSO DO TIPO DE OPERAÇAO'},
  {position:'010011', type:_dataType.n, decription:'IDENTIFICAÇAO DO TIPO DE SERVIÇO'},
  {position:'012019', type:_dataType.a, decription:'IDENTIFICAÇÃO POR EXTENSO TIPO SERVIÇO:"COBRANCA"'},
  {position:'020026', type:_dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},
  {position:'027030', type:_dataType.n, decription:'PREFIXO DA AGENCIA'},
  {position:'031031', type:_dataType.a, decription:'DÍGITO VERIFICADOR DA AGÊNCIA'},
  {position:'032039', type:_dataType.n, decription:'NÚMERO DA CONTA CORRENTE'},
  {position:'040040', type:_dataType.a, decription:'DÍGITO VERIFICADOR DA CONTA CORRENTE'},
  {position:'041046', type:_dataType.n, decription:'COMPLEMENTO DE REGISTROS:ZEROS'},
  {position:'047076', type:_dataType.a, decription:'NOME DO CEDENTE'},
  {position:'077094', type:_dataType.a, decription:'CÓDIGO DO BANCO E NOME DO BANCO'},
  {position:'095100', type:_dataType.n, decription:'DATA DA GRAVAÇÃO:DDMMAA'},
  {position:'101107', type:_dataType.n, decription:'SEQUENCIAL DA REMESSA'},
  {position:'108129', type:_dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},
  {position:'130136', type:_dataType.n, decription:'NÚMERO DO CONVÊNIO'},
  {position:'137394', type:_dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},
  {position:'395400', type:_dataType.n, decription:'SEQUENCIAL DO REGISTRO'}
]

exports.detail = [
  {position:'001001', type:_dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO DETALHE'},
  {position:'002003', type:_dataType.n, description:'TIPO DE INSCRIÇÃO DO CEDENTE:01CPF OU 02CNPJ'},
  {position:'004017', type:_dataType.n, description:'NÚMERO CPF OU CNPJ'},
  {position:'018021', type:_dataType.n, decription:'PREFIXO DA AGÊNCIA'},
  {position:'022022', type:_dataType.a, decription:'DÍGITO VERIFICADOR DA AGÊNCIA'},
  {position:'023030', type:_dataType.n, decription:'NÚMERO CONTA DO CEDENTE'},
  {position:'031031', type:_dataType.a, decription:'DÍGITO VERIFICADOR DA CONTA'},
  {position:'032038', type:_dataType.n, decription:'NÚMERO DO CONVÊNIO DE COBRANÇA DO CENDENTE'},
  {position:'039063', type:_dataType.a, decription:'CÓDIGO DE CONTROLE DA EMPRESA'},
  {position:'064080', type:_dataType.n, decription:'NOSSO NÚMERO'},
  {position:'081082', type:_dataType.n, decription:'NÚMERO DA PRESTAÇÃO:"00"'},
  {position:'083084', type:_dataType.n, decription:'GRUPO DE VALOR:"00"'},
  {position:'085087', type:_dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},
  {position:'088088', type:_dataType.a, decription:'INDICATIVO DE MENSAGEM SACADOR/AVALISTA'},
  {position:'089091', type:_dataType.a, decription:'PREFIXO DO TÍTULO:BRANCOS'},
  {position:'092094', type:_dataType.n, decription:'VARIAÇÃO DA CARTEIRA'},
  {position:'095095', type:_dataType.n, decription:'CONTA CAUÇÃO'},
  {position:'096101', type:_dataType.n, decription:'NÚMERO DO BordinatorÔ:ZEROS'},
  {position:'102106', type:_dataType.a, decription:'TIPO DE COBRANÇA'},
  {position:'107108', type:_dataType.n, decription:'CARTEIRA DE COBRANÇA'},
  {position:'109110', type:_dataType.n, decription:'COMANDO'},
  {position:'111120', type:_dataType.a, decription:'SEU NÚMERO/NÚMERO DO TÍTULO ATRIBUIDO P/ CEDENTE'},
  {position:'121126', type:_dataType.n, decription:'DATA VENCIMENTO'},
  {position:'127139', type:_dataType.m, decription:'VALOR DO TÍTULO'},
  {position:'140142', type:_dataType.n, decription:'NÚMERO DO BANCO'},
  {position:'143146', type:_dataType.n, decription:'PREFIXO DA AGÊNCIA'},
  {position:'147147', type:_dataType.a, decription:'DÍGITO VERIFICADOR DA AGÊNCIA COBRADORA'},
  {position:'148149', type:_dataType.n, decription:'ESPÉCIE DO TÍTULO'},
  {position:'150150', type:_dataType.a, decription:'ACEITE DO TÍTULO'},
  {position:'151156', type:_dataType.n, decription:'DATA DA EMISSÃO: DDMMAA'},
  {position:'157158', type:_dataType.n, decription:'INSTRUÇÃO CODIFICADA'},
  {position:'159160', type:_dataType.n, decription:'INSTRUÇÃO CODIFICADA'},
  {position:'161173', type:_dataType.m, decription:'JUROS DE MORA POR DIA DE ATRASO'},
  {position:'174179', type:_dataType.n, decription:'DATA LIMITE PARA CONCESSÃO DE DESCONTO'},
  {position:'180192', type:_dataType.m, decription:'VALOR DO DESCONTO'},
  {position:'193205', type:_dataType.m, decription:'VALOR DO IOF'},
  {position:'206218', type:_dataType.m, decription:'VALOR DO ABATIMENTO'},
  {position:'219220', type:_dataType.n, decription:'TIPO DE INSCRIÇÃO DO SACADO'},
  {position:'221234', type:_dataType.n, decription:'NÚMERO DO CNPJ OU CPF DO SACADO'},
  {position:'235271', type:_dataType.a, decription:'NOME DO SACADO'},
  {position:'272274', type:_dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},
  {position:'275314', type:_dataType.a, decription:'ENDEREÇO DO SACADO'},
  {position:'315326', type:_dataType.a, decription:'BAIRRO DO SACADO'},
  {position:'327334', type:_dataType.n, decription:'CEP DO ENDEREÇO DO SACADO'},
  {position:'335349', type:_dataType.a, decription:'CIDADE DO SACADO'},
  {position:'350351', type:_dataType.a, decription:'UF DO SACADO'},
  {position:'352391', type:_dataType.a, decription:'OBSERVAÇÕES/MENSAGEM SACADOS/AVALISTA'},
  {position:'392393', type:_dataType.a, decription:'NÚMERO DE DIAS PARA PROTESTO'},
  {position:'394394', type:_dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},
  {position:'395400', type:_dataType.n, decription:'SEQUENCIAL DO REGISTRO'}
],

exports.trailler = [
  {position:'001001', type:_dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO TRAILER:"9"'},
  {position:'002394', type:_dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},,
  {position:'395400', type:_dataType.n, description:'SEQUENCIAL DO REGISTRO'}
]