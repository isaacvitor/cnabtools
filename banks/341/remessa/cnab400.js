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
    {position:'003009', type:dataType.a, description:'IDENTIFICAÇÃO POR EXTENSO DO MOVIMENTO:"REMESSA"'},
    {position:'010011', type:dataType.a, description:'IDENTIFICAÇAO DO TIPO DE SERVIÇO'},
    {position:'012026', type:dataType.a, description:'IDENTIFICAÇÃO POR EXTENSO TIPO SERVIÇO:"COBRANCA"'},
    {position:'027030', type:dataType.n, description:'AGÊNCIA MANTENEDORA DA CONTA'},
    {position:'031032', type:dataType.n, description:'COMPLEMENTO DE REGISTRO'},
    {position:'033037', type:dataType.n, description:'NÚMERO DA CONTA CORRENTE DA EMPRESA'},
    {position:'038038', type:dataType.n, description:'DÍGITO DE AUTO CONFERÊNCIA AG/CONTA EMPRESA'},
    {position:'039046', type:dataType.a, description:'COMPLEMENTO DO REGISTRO'},
    {position:'047076', type:dataType.a, description:'NOME POR EXTENSO DA "EMPRESA MÃE"'},
    {position:'077079', type:dataType.n, description:'Nº DO BANCO NA CÂMARA DE COMPENSAÇÃO'},
    {position:'080094', type:dataType.a, description:'NOME POR EXTENSO DO BANCO COBRADOR'},
    {position:'095100', type:dataType.n, description:'DATA DE GERAÇÃO DO ARQUIVO'},
    {position:'101394', type:dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    {position:'395400', type:dataType.n, description:'NÚMERO SEQÜENCIAL DO REGISTRO NO ARQUIVO'}
  ],

  detail:[
    {position:'001001', type:dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO DETALHE'},
    {position:'002003', type:dataType.n, description:'TIPO DE INSCRIÇÃO DO CEDENTE:01CPF OU 02CNPJ'},
    {position:'004017', type:dataType.n, description:'NÚMERO CPF OU CNPJ'},
    {position:'018021', type:dataType.n, description:'PREFIXO DA AGÊNCIA'},
    {position:'022022', type:dataType.a, description:'DÍGITO VERIFICADOR DA AGÊNCIA'},
    {position:'023030', type:dataType.n, description:'NÚMERO CONTA DO CEDENTE'},
    {position:'031031', type:dataType.a, description:'DÍGITO VERIFICADOR DA CONTA'},
    {position:'032038', type:dataType.n, description:'NÚMERO DO CONVÊNIO DE COBRANÇA DO CENDENTE'},
    {position:'039063', type:dataType.a, description:'CÓDIGO DE CONTROLE DA EMPRESA'},
    {position:'064080', type:dataType.n, description:'NOSSO NÚMERO'},
    {position:'081082', type:dataType.n, description:'NÚMERO DA PRESTAÇÃO:"00"'},
    {position:'083084', type:dataType.n, description:'GRUPO DE VALOR:"00"'},
    {position:'085087', type:dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    {position:'088088', type:dataType.a, description:'INDICATIVO DE MENSAGEM SACADOR/AVALISTA'},
    {position:'089091', type:dataType.a, description:'PREFIXO DO TÍTULO:BRANCOS'},
    {position:'092094', type:dataType.n, description:'VARIAÇÃO DA CARTEIRA'},
    {position:'095095', type:dataType.n, description:'CONTA CAUÇÃO'},
    {position:'096101', type:dataType.n, description:'NÚMERO DO BORDERÔ:ZEROS'},
    {position:'102106', type:dataType.a, description:'TIPO DE COBRANÇA'},
    {position:'107108', type:dataType.n, description:'CARTEIRA DE COBRANÇA'},
    {position:'109110', type:dataType.n, description:'COMANDO'},
    {position:'111120', type:dataType.a, description:'SEU NÚMERO/NÚMERO DO TÍTULO ATRIBUIDO P/ CEDENTE'},
    {position:'121126', type:dataType.n, description:'DATA VENCIMENTO'},
    {position:'127139', type:dataType.m, description:'VALOR DO TÍTULO'},
    {position:'140142', type:dataType.n, description:'NÚMERO DO BANCO'},
    {position:'143146', type:dataType.n, description:'PREFIXO DA AGÊNCIA'},
    {position:'147147', type:dataType.a, description:'DÍGITO VERIFICADOR DA AGÊNCIA COBRADORA'},
    {position:'148149', type:dataType.n, description:'ESPÉCIE DO TÍTULO'},
    {position:'150150', type:dataType.a, description:'ACEITE DO TÍTULO'},
    {position:'151156', type:dataType.n, description:'DATA DA EMISSÃO: DDMMAA'},
    {position:'157158', type:dataType.n, description:'INSTRUÇÃO CODIFICADA'},
    {position:'159160', type:dataType.n, description:'INSTRUÇÃO CODIFICADA'},
    {position:'161173', type:dataType.m, description:'JUROS DE MORA POR DIA DE ATRASO'},
    {position:'174179', type:dataType.n, description:'DATA LIMITE PARA CONCESSÃO DE DESCONTO'},
    {position:'180192', type:dataType.m, description:'VALOR DO DESCONTO'},
    {position:'193205', type:dataType.m, description:'VALOR DO IOF'},
    {position:'206218', type:dataType.m, description:'VALOR DO ABATIMENTO'},
    {position:'219220', type:dataType.n, description:'TIPO DE INSCRIÇÃO DO SACADO'},
    {position:'221234', type:dataType.n, description:'NÚMERO DO CNPJ OU CPF DO SACADO'},
    {position:'235271', type:dataType.a, description:'NOME DO SACADO'},
    {position:'272274', type:dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    {position:'275314', type:dataType.a, description:'ENDEREÇO DO SACADO'},
    {position:'315326', type:dataType.a, description:'BAIRRO DO SACADO'},
    {position:'327334', type:dataType.n, description:'CEP DO ENDEREÇO DO SACADO'},
    {position:'335349', type:dataType.a, description:'CIDADE DO SACADO'},
    {position:'250251', type:dataType.a, description:'UF DO SACADO'},
    {position:'352391', type:dataType.a, description:'OBSERVAÇÕES/MENSAGEM SACADOS/AVALISTA'},
    {position:'392393', type:dataType.a, description:'NÚMERO DE DIAS PARA PROTESTO'},
    {position:'394394', type:dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    //{position:'395400', type:dataType.n, description:'SEQUENCIAL DO REGISTRO'}
  ],

  trailler:[
    {position:'001001', type:dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO TRAILER:"9"'},
    {position:'002394', type:dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},,
    //{position:'395400', type:dataType.n, description:'SEQUENCIAL DO REGISTRO'}
  ]
  
}

module.exports = {structure, fileConfig}