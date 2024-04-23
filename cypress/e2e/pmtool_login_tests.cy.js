describe("PMTool Login Page Tests", () => {
  it("Login page title is visible", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get(".form-title").should("be.visible");
  });
});
