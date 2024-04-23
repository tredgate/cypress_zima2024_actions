describe("Cypress GitHub actions demo", () => {
  it("Open pmtool and fill username", { tags: "@smoke" }, () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.get("#username").should("have.value", "admin");
  });
});
