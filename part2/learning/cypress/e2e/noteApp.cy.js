describe("Note app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });
  it("front page can be opened", function () {
    cy.contains("Notes");
    cy.contains(
      "Note app, Department of Computer Science, University of Helsinki 2023"
    );
  });

  it("login form can be opened", function () {
    cy.contains("log in").click();
  });

  it("user can login", function () {
    cy.contains("log in").click();
    cy.get("#username").type("mati");
    cy.get("#password").type("mati123");
    cy.get("#login-button").click();

    cy.contains("bubens logged in");
  });

  describe("when logged in", function () {
    beforeEach(function () {
      cy.contains("log in").click();
      cy.get("#username").type("mati");
      cy.get("#password").type("mati123");
      cy.get("#login-button").click();
    });

    it("a new note can be created", function () {
      cy.contains("new note").click();
      cy.get("#note-input").type("a note created by cypress");
      cy.contains("save").click();
      cy.contains("a note created by cypress");
    });
  });
});
