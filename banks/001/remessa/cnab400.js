const _s = require( 'lodash/string' )

const dataType = {
  n: {
    order: _s.padStart,
    complement: '0'
  },
  a: {
    order: _s.padEnd,
    complement: ' ' //Here is a TRUE BLANK SPACE pay attention!
  },
  m: {
    order: _s.padStart,
    complement: '0',
    preFormat:(v) => v > 0 ? Number(v).toFixed(2).replace('.', '') : v
  }
}

const fileConfig = {
  sequenceSize:6,
  sequenceComplement:0,
  breakLine:'\r\n',
  breakLastLine:false,
  encoding:{content:'ascii',file:'ascii'}
}

const structure = {
  header:[
    {position:'001001', type:dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO HEADER'},
    {position:'002002', type:dataType.n, description:'TIPO DE OPERAÇAO'},
    {position:'003009', type:dataType.a, description:'IDENTIFICAÇAO POR EXTENSO DO TIPO DE OPERAÇAO'},
    {position:'010011', type:dataType.n, decription:'IDENTIFICAÇAO DO TIPO DE SERVIÇO'},
    {position:'012019', type:dataType.a, decription:'IDENTIFICAÇÃO POR EXTENSO TIPO SERVIÇO:"COBRANCA"'},
    {position:'020026', type:dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    {position:'027030', type:dataType.n, decription:'PREFIXO DA AGENCIA'},
    {position:'031031', type:dataType.a, decription:'DÍGITO VERIFICADOR DA AGÊNCIA'},
    {position:'032039', type:dataType.n, decription:'NÚMERO DA CONTA CORRENTE'},
    {position:'040040', type:dataType.a, decription:'DÍGITO VERIFICADOR DA CONTA CORRENTE'},
    {position:'041046', type:dataType.n, decription:'COMPLEMENTO DE REGISTROS:ZEROS'},
    {position:'047076', type:dataType.a, decription:'NOME DO CEDENTE'},
    {position:'077094', type:dataType.a, decription:'CÓDIGO DO BANCO E NOME DO BANCO'},
    {position:'095100', type:dataType.n, decription:'DATA DA GRAVAÇÃO:DDMMAA'},
    {position:'101107', type:dataType.n, decription:'SEQUENCIAL DA REMESSA'},
    {position:'108129', type:dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    {position:'130136', type:dataType.n, decription:'NÚMERO DO CONVÊNIO'},
    {position:'137394', type:dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    //{position:'395400', type:dataType.n, decription:'SEQUENCIAL DO REGISTRO'}
  ],

  detail:[
    {position:'001001', type:dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO DETALHE'},
    {position:'002003', type:dataType.n, description:'TIPO DE INSCRIÇÃO DO CEDENTE:01CPF OU 02CNPJ'},
    {position:'004017', type:dataType.n, description:'NÚMERO CPF OU CNPJ'},
    {position:'018021', type:dataType.n, decription:'PREFIXO DA AGÊNCIA'},
    {position:'022022', type:dataType.a, decription:'DÍGITO VERIFICADOR DA AGÊNCIA'},
    {position:'023030', type:dataType.n, decription:'NÚMERO CONTA DO CEDENTE'},
    {position:'031031', type:dataType.a, decription:'DÍGITO VERIFICADOR DA CONTA'},
    {position:'032038', type:dataType.n, decription:'NÚMERO DO CONVÊNIO DE COBRANÇA DO CENDENTE'},
    {position:'039063', type:dataType.a, decription:'CÓDIGO DE CONTROLE DA EMPRESA'},
    {position:'064080', type:dataType.n, decription:'NOSSO NÚMERO'},
    {position:'081082', type:dataType.n, decription:'NÚMERO DA PRESTAÇÃO:"00"'},
    {position:'083084', type:dataType.n, decription:'GRUPO DE VALOR:"00"'},
    {position:'085087', type:dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    {position:'088088', type:dataType.a, decription:'INDICATIVO DE MENSAGEM SACADOR/AVALISTA'},
    {position:'089091', type:dataType.a, decription:'PREFIXO DO TÍTULO:BRANCOS'},
    {position:'092094', type:dataType.n, decription:'VARIAÇÃO DA CARTEIRA'},
    {position:'095095', type:dataType.n, decription:'CONTA CAUÇÃO'},
    {position:'096101', type:dataType.n, decription:'NÚMERO DO BORDERÔ:ZEROS'},
    {position:'102106', type:dataType.a, decription:'TIPO DE COBRANÇA'},
    {position:'107108', type:dataType.n, decription:'CARTEIRA DE COBRANÇA'},
    {position:'109110', type:dataType.n, decription:'COMANDO'},
    {position:'111120', type:dataType.a, decription:'SEU NÚMERO/NÚMERO DO TÍTULO ATRIBUIDO P/ CEDENTE'},
    {position:'121126', type:dataType.n, decription:'DATA VENCIMENTO'},
    {position:'127139', type:dataType.m, decription:'VALOR DO TÍTULO'},
    {position:'140142', type:dataType.n, decription:'NÚMERO DO BANCO'},
    {position:'143146', type:dataType.n, decription:'PREFIXO DA AGÊNCIA'},
    {position:'147147', type:dataType.a, decription:'DÍGITO VERIFICADOR DA AGÊNCIA COBRADORA'},
    {position:'148149', type:dataType.n, decription:'ESPÉCIE DO TÍTULO'},
    {position:'150150', type:dataType.a, decription:'ACEITE DO TÍTULO'},
    {position:'151156', type:dataType.n, decription:'DATA DA EMISSÃO: DDMMAA'},
    {position:'157158', type:dataType.n, decription:'INSTRUÇÃO CODIFICADA'},
    {position:'159160', type:dataType.n, decription:'INSTRUÇÃO CODIFICADA'},
    {position:'161173', type:dataType.m, decription:'JUROS DE MORA POR DIA DE ATRASO'},
    {position:'174179', type:dataType.n, decription:'DATA LIMITE PARA CONCESSÃO DE DESCONTO'},
    {position:'180192', type:dataType.m, decription:'VALOR DO DESCONTO'},
    {position:'193205', type:dataType.m, decription:'VALOR DO IOF'},
    {position:'206218', type:dataType.m, decription:'VALOR DO ABATIMENTO'},
    {position:'219220', type:dataType.n, decription:'TIPO DE INSCRIÇÃO DO SACADO'},
    {position:'221234', type:dataType.n, decription:'NÚMERO DO CNPJ OU CPF DO SACADO'},
    {position:'235271', type:dataType.a, decription:'NOME DO SACADO'},
    {position:'272274', type:dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    {position:'275314', type:dataType.a, decription:'ENDEREÇO DO SACADO'},
    {position:'315326', type:dataType.a, decription:'BAIRRO DO SACADO'},
    {position:'327334', type:dataType.n, decription:'CEP DO ENDEREÇO DO SACADO'},
    {position:'335349', type:dataType.a, decription:'CIDADE DO SACADO'},
    {position:'250251', type:dataType.a, decription:'UF DO SACADO'},
    {position:'352391', type:dataType.a, decription:'OBSERVAÇÕES/MENSAGEM SACADOS/AVALISTA'},
    {position:'392393', type:dataType.a, decription:'NÚMERO DE DIAS PARA PROTESTO'},
    {position:'394394', type:dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    //{position:'395400', type:dataType.n, decription:'SEQUENCIAL DO REGISTRO'}
  ],

  trailler:[
    {position:'001001', type:dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO TRAILER:"9"'},
    {position:'002394', type:dataType.a, decription:'COMPLEMENTO DO REGISTRO:BRANCOS'},,
    //{position:'395400', type:dataType.n, description:'SEQUENCIAL DO REGISTRO'}
  ]
  
}

module.exports = {structure, fileConfig}