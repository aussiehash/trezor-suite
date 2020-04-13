const fixtures = [
    {
        visit: '/bridge',
        should: ['contain', 'Trezor Bridge'],
    },
    {
        visit: '/version',
        should: ['contain', 'version'],
    },
] as const;

describe('Static pages', () => {
    beforeEach(() => {
        cy.viewport(1024, 768).resetDb();
    });

    fixtures.forEach(f => {
        it(`test ${f.visit} page is online`, () => {
            cy.visit(f.visit);
            cy.screenshot('1');
            cy.wait(10000);
            cy.screenshot('2');
            cy.wait(10000);
            cy.screenshot('3');
            cy.wait(10000);
            cy.screenshot('4');
            cy.get('html').should(f.should[0], f.should[1]);
        });
    });
});