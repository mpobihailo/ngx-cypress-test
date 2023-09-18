/// <reference types="cypress" />

import { onNavigateTo } from "../support/page_objects/navigationPage"

describe('Test with Page Objects', () => {
  beforeEach('open application', () => {
    cy.visit('/')
  })

  it('verify navigations actoss the page', () => {
    onNavigateTo.formLayoutsPage()
    onNavigateTo.datepickerPage()
  })




})