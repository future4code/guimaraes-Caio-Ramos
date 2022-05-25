function checaAnoBissexto(ano: number): string {
  const cond1 = ano % 400 === 0;
  const cond2 = ano % 4 === 0 && ano % 100 !== 0;
  if (cond1) {
    return `É bissexto pela primeira condição`;
  } else {
    return `É bissexto pela segunda condição`;
  }
}

console.log(checaAnoBissexto(1600));
