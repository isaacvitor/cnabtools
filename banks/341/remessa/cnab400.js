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
  version:'012017',
  sequenceField:'395400',
  sequenceSize:6,
  sequenceComplement:0,
  breakLine:'\r\n',
  breakLastLine:true,
  encoding:{content:'ascii',file:'ascii'}
}

exports.header = [
  {position:'001001', type:_dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO HEADER'},
  {position:'002002', type:_dataType.n, description:'TIPO DE OPERAÇAO'},
  {position:'003009', type:_dataType.a, description:'IDENTIFICAÇÃO POR EXTENSO DO MOVIMENTO:"REMESSA"'},
  {position:'010011', type:_dataType.n, description:'IDENTIFICAÇAO DO TIPO DE SERVIÇO'},
  {position:'012026', type:_dataType.a, description:'IDENTIFICAÇÃO POR EXTENSO TIPO SERVIÇO:"COBRANCA"'},
  {position:'027030', type:_dataType.n, description:'AGÊNCIA MANTENEDORA DA CONTA'},
  {position:'031032', type:_dataType.n, description:'COMPLEMENTO DE REGISTRO'},
  {position:'033037', type:_dataType.n, description:'NÚMERO DA CONTA CORRENTE DA EMPRESA'},
  {position:'038038', type:_dataType.n, description:'DÍGITO DE AUTO CONFERÊNCIA AG/CONTA EMPRESA'},
  {position:'039046', type:_dataType.a, description:'COMPLEMENTO DO REGISTRO'},
  {position:'047076', type:_dataType.a, description:'NOME POR EXTENSO DA "EMPRESA MÃE"'},
  {position:'077079', type:_dataType.n, description:'Nº DO BANCO NA CÂMARA DE COMPENSAÇÃO'},
  {position:'080094', type:_dataType.a, description:'NOME POR EXTENSO DO BANCO COBRADOR'},
  {position:'095100', type:_dataType.n, description:'DATA DE GERAÇÃO DO ARQUIVO'},
  {position:'101394', type:_dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
  {position:'395400', type:_dataType.n, description:'NÚMERO SEQÜENCIAL DO REGISTRO NO ARQUIVO'}
]

exports.detail = [
  {position:'001001', type:_dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO DETALHE'},
  {position:'002003', type:_dataType.n, description:'TIPO DE INSCRIÇÃO DO CEDENTE:01CPF OU 02CNPJ'},
  {position:'004017', type:_dataType.n, description:'NÚMERO CPF OU CNPJ'},
  {position:'018021', type:_dataType.n, description:'AGÊNCIA MANTENEDORA DA CONTA'},
  {position:'022023', type:_dataType.n, description:'COMPLEMENTO DE REGISTRO'},
  {position:'024028', type:_dataType.n, description:'NÚMERO DA CONTA CORRENTE DA EMPRESA'},
  {position:'029029', type:_dataType.n, description:'DÍGITO DE AUTO CONFERÊNCIA AG/CONTA EMPRESA'},
  {position:'030033', type:_dataType.a, description:'COMPLEMENTO DE REGISTRO'},
  {position:'034037', type:_dataType.n, description:'CÓD.INSTRUÇÃO/ALEGAÇÃO A SER CANCELADA'},
  {position:'038062', type:_dataType.a, description:'IDENTIFICAÇÃO DO TÍTULO NA EMPRESA'},
  {position:'063070', type:_dataType.n, description:'IDENTIFICAÇÃO DO TÍTULO NO BANCO - NOSSO NÚMERO'},
  {position:'071083', type:_dataType.n, description:'QUANTIDADE DE MOEDA VARIÁVEL'},
  {position:'084086', type:_dataType.n, description:'NÚMERO DA CARTEIRA NO BANCO'},
  {position:'087107', type:_dataType.a, description:'IDENTIFICAÇÃO DA OPERAÇÃO NO BANCO'},
  {position:'108108', type:_dataType.a, description:'CÓDIGO DA CARTEIRA'},
  {position:'109110', type:_dataType.n, description:'IDENTIFICAÇÃO DA OCORRÊNCIA'},
  {position:'111120', type:_dataType.a, description:'Nº DO DOCUMENTO DE COBRANÇA (DUPL.,NP ETC.)'},
  {position:'121126', type:_dataType.n, description:'DATA DE VENCIMENTO DO TÍTULO'},
  {position:'127139', type:_dataType.m, description:'VALOR DO TÍTULO'},
  {position:'140142', type:_dataType.n, description:'Nº DO BANCO NA CÂMARA DE COMPENSAÇÃO'},
  {position:'143147', type:_dataType.n, description:'AGÊNCIA ONDE O TÍTULO SERÁ COBRADO'},
  {position:'148149', type:_dataType.a, description:'ESPÉCIE DO TÍTULO'},
  {position:'150150', type:_dataType.a, description:'IDENTIFICAÇÃO DE TÍTULO ACEITO OU NÃO ACEITO - ACEITE DO TÍTULO'},
  {position:'151156', type:_dataType.n, description:'DATA DA EMISSÃO DO TÍTULO - DATA DA EMISSÃO: DDMMAA'},
  {position:'157158', type:_dataType.a, description:'1ª INSTRUÇÃO DE COBRANÇA'},
  {position:'159160', type:_dataType.a, description:'2ª INSTRUÇÃO DE COBRANÇA'},
  {position:'161173', type:_dataType.m, description:'VALOR DE MORA POR DIA DE ATRASO'},
  {position:'174179', type:_dataType.n, description:'DATA LIMITE PARA CONCESSÃO DE DESCONTO'},
  {position:'180192', type:_dataType.m, description:'VALOR DO DESCONTO A SER CONCEDIDO'},
  {position:'193205', type:_dataType.m, description:'VALOR DO I.O.F. RECOLHIDO P/ NOTAS SEGURO'},
  {position:'206218', type:_dataType.m, description:'VALOR DO ABATIMENTO A SER CONCEDIDO'},
  {position:'219220', type:_dataType.n, description:'IDENTIFICAÇÃO DO TIPO DE INSCRIÇÃO/PAGADOR - 01=CPF 02=CNPJ'},
  {position:'221234', type:_dataType.n, description:'Nº DE INSCRIÇÃO DO PAGADOR (CPF/CNPJ)'},
  {position:'235264', type:_dataType.a, description:'NOME DO PAGADOR'},
  {position:'265274', type:_dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
  {position:'275314', type:_dataType.a, description:'RUA, NÚMERO E COMPLEMENTO DO PAGADOR'},
  {position:'315326', type:_dataType.a, description:'BAIRRO DO PAGADOR'},
  {position:'327334', type:_dataType.n, description:'CEP DO PAGADOR'},
  {position:'335349', type:_dataType.a, description:'CIDADE DO PAGADOR'},
  {position:'350351', type:_dataType.a, description:'UF DO PAGADOR'},
  {position:'352381', type:_dataType.a, description:'NOME DO SACADOR OU AVALISTA'},
  {position:'382385', type:_dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
  {position:'386391', type:_dataType.n, description:'DATA DE MORA'},
  {position:'392393', type:_dataType.n, description:'QUANTIDADE DE DIAS'},
  {position:'394394', type:_dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
  {position:'395400', type:_dataType.n, description:'SEQUENCIAL DO REGISTRO'}
]

exports.trailler = [
  {position:'001001', type:_dataType.n, description:'IDENTIFICAÇÃO DO REGISTRO TRAILER:"9"'},
  {position:'002394', type:_dataType.a, description:'COMPLEMENTO DO REGISTRO:BRANCOS'},
  {position:'395400', type:_dataType.n, description:'SEQUENCIAL DO REGISTRO'}
]