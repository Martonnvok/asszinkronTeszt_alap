import Statisztika from "../js/Statisztika.js";

QUnit.module('aadatok megjelenitese', function(hooks) {
    let statisztika 
    hooks.before(()=>{
       statisztika = new Statisztika();
    });

    QUnit.test('létezik-e a nemszerintSzama ?', function(assert)  {
        assert.ok(
            (Statisztika.nemszerintSzama, 'Létezik-e a nemszerintSzama ?')
            );
    });

    QUnit.test('létezik-e az atlagEletkor ?', function(assert)  {
        assert.ok(
            (Statisztika.atlagEletkor, 'Létezik-e az atlagEletkor ?')
            );
    });

    QUnit.test('létezik-e a nemszerintAtlagEletkora ?', function(assert)  {
        assert.ok(
            (Statisztika.nemszerintAtlagEletkora, 'Létezik-e a nemszerintAtlagEletkora ?')
            );
    });


    
  });


QUnit.module('nemszerintSzama tesztelés', function(hooks) {
    let statisztika ;
    hooks.before(()=>{
       statisztika = new Statisztika();
    });

    QUnit.test('Üres lista', function(assert)  {
        let nem = "";
        statisztika.lista=[{},{},{}],
        assert.equal(statisztika.nemszerintSzama(nem),"");
    });

    QUnit.test('csak nő lista', function(assert)  {
        let nem = "nő";
        statisztika.lista = [
        { "nev": "Béla", "kor": 56, "nem": "ffi" },
        { "nev": "Jenő", "kor": 16, "nem": "ffi" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" }],
        assert.equal(statisztika.nemszerintSzama(nem),"1");
    });

    QUnit.test('csak férfi lista', function(assert)  {
        let nem = "ffi";
        statisztika.lista = [
        { "nev": "Béla", "kor": 56, "nem": "ffi" },
        { "nev": "Jenő", "kor": 16, "nem": "ffi" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" }],
        assert.equal(statisztika.nemszerintSzama(nem),"2");
    });

    QUnit.test('csak egyéb lista', function(assert)  {
        let nem = "egyéb";
        statisztika.lista = [
        { "nev": "Béla", "kor": 56, "nem": "egyéb" },
        { "nev": "Jenő", "kor": 16, "nem": "egyéb" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" },],
        assert.equal(statisztika.nemszerintSzama(nem),"2");
    });

    QUnit.test('Van benne üres', function(assert)  {
        let nem = "egyéb";
        statisztika.lista = [
        { "nev": "Béla", "kor": 56, "nem": "egyéb" },
        { "nev": "Jenő", "kor": 16, "nem": "egyéb" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" },
        { "nev": "", "kor": 56, "nem": "" },
        { "nev": "", "kor": 16, "nem": "" },],
        assert.equal(statisztika.nemszerintSzama(nem),"2");
    });

    QUnit.test('Vegyes férfi nő', function(assert)  {
        let nem = "egyéb";
        statisztika.lista = [
        { "nev": "Béla", "kor": 56, "nem": "egyéb" },
        { "nev": "Jenő", "kor": 16, "nem": "egyéb" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" },
        { "nev": "", "kor": 56, "nem": "férfi" },
        { "nev": "", "kor": 16, "nem": "férfi" },],
        assert.equal(statisztika.nemszerintSzama(nem),"2");
    });
});

  QUnit.module('atlagEletkor tesztelés', function(hooks) {
    let statisztika ;
    hooks.before(()=>{
       statisztika = new Statisztika();
    });

    QUnit.test('Üres lista', function(assert)  {
        statisztika.lista=[{},{},{}],
        assert.equal(statisztika.atlagEletkor(),"0");
    });

    QUnit.test('csak nő lista', function(assert)  {
        statisztika.lista = [
        { "nev": "Rózsa", "kor": 33, "nem": "nő" }],
        assert.equal(statisztika.atlagEletkor(),"33");
    });

    QUnit.test('csak férfi lista', function(assert)  {
        statisztika.lista = [
        { "nev": "Béla", "kor": 56, "nem": "ffi" },
        { "nev": "Jenő", "kor": 16, "nem": "ffi" },];
        assert.equal(statisztika.atlagEletkor(),"36");
    });

    QUnit.test('csak egyéb lista', function(assert)  {
        statisztika.lista = [
        { "nev": "Béla", "kor": 56, "nem": "egyéb" },
        { "nev": "Jenő", "kor": 16, "nem": "egyéb" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" },],
        assert.equal(statisztika.atlagEletkor(),"35");
    });

    QUnit.test('Van benne üres', function(assert)  {
        statisztika.lista = [
        { "nev": "Béla", "kor": 56, "nem": "egyéb" },
        { "nev": "Jenő", "kor": 16, "nem": "egyéb" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" },
        { "nev": "", "kor": 56, "nem": "" },
        { "nev": "", "kor": 16, "nem": "" },],
        assert.equal(statisztika.atlagEletkor(),"35.4");
    });

    QUnit.test('Vegyes féri nő', function(assert)  {
        statisztika.lista = [
        { "nev": "Béla", "kor": 56, "nem": "egyéb" },
        { "nev": "Jenő", "kor": 16, "nem": "egyéb" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" },
        ],
        assert.equal(statisztika.atlagEletkor(),"34.2");
    });

    QUnit.test('egy nő', function(assert)  {
        statisztika.lista = [
        { "nev": "Béla", "kor": 56, "nem": "nő" },];
        assert.equal(statisztika.atlagEletkor(),"56");
    });

    QUnit.test('Van benne üres elem', function(assert)  {
        statisztika.lista = [
        { "nev": "", "kor": 56, "nem": "egyéb" },
        { "nev": "Jenő", "kor": 16, "nem": "egyéb" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" },
        { "nev": "Rózsa", "kor": 33, "nem": "nő" },
        { "nev": "", "kor": 33, "nem": "nő" },
        { "nev": "", "kor": 56, "nem": "" },
        { "nev": "", "kor": 16, "nem": "" },],
        assert.equal(statisztika.atlagEletkor(),"34.714285714285715");
    });
  });