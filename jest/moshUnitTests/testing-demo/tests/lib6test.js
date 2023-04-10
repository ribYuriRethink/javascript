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

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();

    // // Formas muito genéricas
    // expect(result).toBeDefined();
    // expect(result).not.toBeNull();

    // // Formas muito específicas
    // expect(result[0]).toBe("USD");
    // expect(result[1]).toBe("AUD");
    // expect(result[2]).toBe("EUR");
    // expect(result.length).toBe(3);

    // Maneira correta
    // expect(result).toContain("USD");
    // expect(result).toContain("AUD");
    // expect(result).toContain("EUR");

    // Maneira Ideal
    expect(result).toEqual(expect.arrayContaining(["EUR", "AUD", "USD"]));
  });
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);

    // expect(result).toBe({ id: 1, price: 10 });
    // toBe nesse caso compara referência. Como não estão no mesmo lugar na memória, ira falhar

    // expect(result).toEqual({ id: 1, price: 10 });
    // Espera um objeto exatamente igual, com apenas essas propriedades

    expect(result).toMatchObject({ id: 1, price: 10 });
    // Pode ter outras propriedades além dessas

    expect(result).toHaveProperty("id", 1);
    // Espera que tenha pelo menos esta propriedade e seu valor
  });
});
