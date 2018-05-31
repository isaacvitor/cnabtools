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
    {position:'002002', type:dataType.n, description:'IDENTIFICAÇÃO DE ARQUIVO REMESSA'},
    {position:'003009', type:dataType.a, description:'IDENTIFICAÇÃO POR EXTENSO DO TIPO DE MOVIMENTO'},
    {position:'010011', type:dataType.n, description:'IDENTIFICAÇÃO DO TIPO DE SERVIÇO'},
    {position:'012026', type:dataType.a, description:'IDENTIFICAÇÃO POR EXTENSO TIPO SERVIÇO:"COBRANCA"'},
    {position:'027046', type:dataType.a, description:'IDENTIFICAÇÃO DA EMPRESA NO BANCO'},
    {position:'047076', type:dataType.a, description:'NOME POR EXTENSO DA "EMPRESA MÃE"'},
    {position:'077079', type:dataType.n, description:'Nº DO BANCO NA CÂMARA DE COMPENSAÇÃO'},
    {position:'080094', type:dataType.a, description:'NOME POR EXTENSO DO BANCO'},
    {position:'095100', type:dataType.n, description:'DATA DA GRAVAÇÃO DO ARQUIVO'},
    {position:'101394', type:dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    {position:'395400', type:dataType.n, description:'NÚMERO SEQÜENCIAL DO REGISTRO NO ARQUIVO'}
  ],

  detail:[
    {position:'001001', type:dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO TRANSAÇÃO'},
    {position:'002003', type:dataType.n, description:'TIPO DE INSCRIÇÃO DO CEDENTE:01CPF OU 02CNPJ OU SACADOR:03CPF OU 03CNPJ'},
    {position:'004017', type:dataType.n, description:'NÚMERO CPF OU CNPJ'},
    {position:'018037', type:dataType.a, description:'IDENTIFICAÇÃO DA EMPRESA NO BANCO'},
    {position:'038062', type:dataType.a, description:'IDENTIFICAÇÃO DO TÍTULO NA EMPRESA'},
    {position:'063073', type:dataType.n, description:'IDENTIFICAÇÃO DO TÍTULO NO BANCO'},
    {position:'074086', type:dataType.n, description:'COBRANÇA DIRETA TÍTULO CORRESPONDENTE'},
    {position:'087089', type:dataType.a, description:'MODALIDADE DE COBRANÇA COM BANCOS CORRESPONDENTES'},
    {position:'090090', type:dataType.n, description:'CÓDIGO DA MULTA'},
    {position:'091103', type:dataType.m, description:'VALOR OU TAXA DE MULTA'},
    {position:'104105', type:dataType.n, description:'NÚMERO DE DIAS APÓS O VENCIMENTO PARA APLICAR A MULTA'},
    {position:'106107', type:dataType.a, description:'IDENTIFICAÇÃO DA OPERAÇÃO NO BANCO'},
    {position:'108108', type:dataType.a, description:'CÓDIGO DA CARTEIRA'},
    {position:'109110', type:dataType.n, description:'IDENTIFICAÇÃO DA OCORRÊNCIA'},
    {position:'111120', type:dataType.a, description:'NÚMERO DOCUMENTO DE COBRANÇA'},
    {position:'121126', type:dataType.n, description:'DATA DE VENCIMENTO DO TÍTULO'},
    {position:'127139', type:dataType.m, description:'VALOR NOMINAL DO TÍTULO'},
    {position:'140142', type:dataType.n, description:'NÚMERO DO BANCO'},
    {position:'143146', type:dataType.n, description:'AGÊNCIA ENCARREGADA DA COBRANÇA'},
    {position:'147147', type:dataType.n, description:'DÍGITO DE AUTO-CONFERÊNCIA DA AGÊNCIA COBRADORA'},
    {position:'148149', type:dataType.a, description:'ESPÉCIE DO TÍTULO'},
    {position:'150150', type:dataType.a, description:'ACEITE DO TÍTULO'},
    {position:'151156', type:dataType.n, description:'DATA DA EMISSÃO: DDMMAA'},
    {position:'157158', type:dataType.n, description:'INSTRUÇÃO CODIFICADA 01'},
    {position:'159160', type:dataType.n, description:'INSTRUÇÃO CODIFICADA 02'},
    {position:'161173', type:dataType.m, description:'JUROS DE MORA POR DIA DE ATRASO'},
    {position:'174179', type:dataType.n, description:'DATA LIMITE PARA CONCESSÃO DE DESCONTO'},
    {position:'180192', type:dataType.m, description:'VALOR DO DESCONTO'},
    {position:'193205', type:dataType.m, description:'VALOR DO IOF'},
    {position:'206218', type:dataType.m, description:'VALOR DO ABATIMENTO'},
    {position:'219220', type:dataType.n, description:'TIPO DE INSCRIÇÃO DO SACADO'},
    {position:'221234', type:dataType.n, description:'NÚMERO DO CNPJ OU CPF DO SACADO'},
    {position:'235264', type:dataType.a, description:'NOME DO SACADO'},
    {position:'265274', type:dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    {position:'275314', type:dataType.a, description:'ENDEREÇO DO SACADO'},
    {position:'315326', type:dataType.a, description:'BAIRRO DO SACADO'},
    {position:'327334', type:dataType.n, description:'CEP DO ENDEREÇO DO SACADO'},
    {position:'335349', type:dataType.a, description:'CIDADE DO SACADO'},
    {position:'350351', type:dataType.a, description:'UF DO SACADO'},
    {position:'352381', type:dataType.a, description:'NOME DO SACADOR OU AVALISTA'},
    {position:'382385', type:dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    {position:'386391', type:dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
    {position:'392393', type:dataType.n, description:'NÚMERO DE DIAS PARA PROTESTO'},
    {position:'394394', type:dataType.n, description:'MOEDA 0 OU 1 MOEDA CORRENTE NACIONAL'},
    {position:'395400', type:dataType.n, description:'SEQUENCIAL DO REGISTRO'}
  ],

  trailler:[
    {position:'001001', type:dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO TRAILER:"9"'},
    {position:'002394', type:dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},,
    {position:'395400', type:dataType.n, description:'SEQUENCIAL DO REGISTRO'}
  ]
  
}

module.exports = {structure, fileConfig}