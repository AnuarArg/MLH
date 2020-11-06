const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('Inputs', function () { //define suite title by passing a string

    describe('Inputs are displayed', function () { //define sub-suite title by passing a string

        it('TC-014 Title is correct ', function () { //define test title by passing a string
            browser.url('');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);

        });

        it('TC-015 Gender He', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender She', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender It', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-019 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-020 Create', function () {
            const label = $(sel.createButton).isDisplayed();
            expect(label).toEqual(true);
        });

        });

    describe('Placeholders are correct', function () {




    });

    });
