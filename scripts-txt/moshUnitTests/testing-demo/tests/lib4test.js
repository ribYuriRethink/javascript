const lib = require("../lib");

describe("absolute", () => {
  // Função para agrupar testes relacionados
  // palavra chave "test" pode ser trocada para "it"
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

/* 
  Os testes não devem ser muito específicos como no caso abaixo
  nem muito genéricos gerando falta de confiança.
  Devemos encontrar um meio termo
*/
describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Mosh");

    // expect(result).toBe("Welcome Mosh");
    // Neste caso qualquer alteração na string da função greet ira fazer o teste falhar

    // Para o caso das strings, podemos usar padrões como resultados esperados
    expect(result).toMatch(/Mosh/);
    // expect(result).toContain("Mosh");   // também uma opção
  });
});
