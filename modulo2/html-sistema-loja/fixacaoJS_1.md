function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let salarioFixo = 2000
let comissao = (100 * qtdeCarrosVendidos) + (0.05*valorTotalVendas)
let salarioTotal = salarioFixo + comissao
return salarioTotal
}
