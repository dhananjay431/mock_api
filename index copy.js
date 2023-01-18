const express = require("express");
const path = require("path");
const { faker } = require("@faker-js/faker");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json({ type: "application/*+json" }));

app.use(express.static("public"));
const port = process.env.PORT || 3000;

function lorem() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    lines: faker.lorem.lines(),
    paragraph: faker.lorem.paragraph(),
    paragraphs: faker.lorem.paragraphs(),
    sentence: faker.lorem.sentence(),
    sentences: faker.lorem.sentences(),
    slug: faker.lorem.slug(),
    text: faker.lorem.text(),
    word: faker.lorem.word(),
    words: faker.lorem.words(),
  };
}
function finance() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    account: faker.finance.account(),
    accountName: faker.finance.accountName(),
    amount: faker.finance.amount(),
    bic: faker.finance.bic(),
    bitcoinAddress: faker.finance.bitcoinAddress(),
    creditCardCVV: faker.finance.creditCardCVV(),
    creditCardIssuer: faker.finance.creditCardIssuer(),
    creditCardNumber: faker.finance.creditCardNumber(),
    currencyCode: faker.finance.currencyCode(),
    currencyName: faker.finance.currencyName(),
    currencySymbol: faker.finance.currencySymbol(),
    ethereumAddress: faker.finance.ethereumAddress(),
    iban: faker.finance.iban(),
    litecoinAddress: faker.finance.litecoinAddress(),
    mask: faker.finance.mask(),
    pin: faker.finance.pin(),
    routingNumber: faker.finance.routingNumber(),
    transactionDescription: faker.finance.transactionDescription(),
    transactionType: faker.finance.transactionType(),
  };
}
function name() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),

    firstName: faker.name.firstName(),
    fullName: faker.name.fullName(),
    gender: faker.name.gender(),
    jobArea: faker.name.jobArea(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobTitle: faker.name.jobTitle(),
    jobType: faker.name.jobType(),
    lastName: faker.name.lastName(),
    middleName: faker.name.middleName(),
    prefix: faker.name.prefix(),
    sex: faker.name.sex(),
    sexType: faker.name.sexType(),
    suffix: faker.name.suffix(),
    address: address(),
    phone: phone(),
    company: company(),
  };
}
function address() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    buildingNumber: faker.address.buildingNumber(),
    cardinalDirection: faker.address.cardinalDirection(),
    city: faker.address.city(),
    cityName: faker.address.cityName(),
    country: faker.address.country(),
    countryCode: faker.address.countryCode(),
    county: faker.address.county(),
    direction: faker.address.direction(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    nearbyGPSCoordinate: faker.address.nearbyGPSCoordinate(),
    ordinalDirection: faker.address.ordinalDirection(),
    secondaryAddress: faker.address.secondaryAddress(),
    state: faker.address.state(),
    stateAbbr: faker.address.stateAbbr(),
    street: faker.address.street(),
    streetAddress: faker.address.streetAddress(),
    streetName: faker.address.streetName(),

    timeZone: faker.address.timeZone(),
    zipCode: faker.address.zipCode(),
    zipCodeByState: faker.address.zipCodeByState(),
  };
}
function phone() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    imei: faker.phone.imei(),
    number: faker.phone.number(),
  };
}
function company() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    bs: faker.company.bs(),
    bsAdjective: faker.company.bsAdjective(),
    bsBuzz: faker.company.bsBuzz(),
    bsNoun: faker.company.bsNoun(),
    catchPhrase: faker.company.catchPhrase(),
    catchPhraseAdjective: faker.company.catchPhraseAdjective(),
    catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
    catchPhraseNoun: faker.company.catchPhraseNoun(),
    // "companyName":faker.company.companyName(),
    companySuffix: faker.company.companySuffix(),
    name: faker.company.name(),
    suffixes: faker.company.suffixes(),
  };
}
function internet() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    avatar: faker.internet.avatar(),
    color: faker.internet.color(),
    domainName: faker.internet.domainName(),
    domainSuffix: faker.internet.domainSuffix(),
    domainWord: faker.internet.domainWord(),
    email: faker.internet.email(),
    emoji: faker.internet.emoji(),
    exampleEmail: faker.internet.exampleEmail(),
    httpMethod: faker.internet.httpMethod(),
    httpStatusCode: faker.internet.httpStatusCode(),
    ip: faker.internet.ip(),
    ipv4: faker.internet.ipv4(),
    ipv6: faker.internet.ipv6(),
    mac: faker.internet.mac(),
    password: faker.internet.password(),
    port: faker.internet.port(),
    protocol: faker.internet.protocol(),
    url: faker.internet.url(),
    userAgent: faker.internet.userAgent(),
    userName: faker.internet.userName(),
  };
}
function word() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    adjective: faker.word.adjective(),
    adverb: faker.word.adverb(),
    conjunction: faker.word.conjunction(),
    interjection: faker.word.interjection(),
    noun: faker.word.noun(),
    preposition: faker.word.preposition(),
    verb: faker.word.verb(),
  };
}
function git() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    branch: faker.git.branch(),
    commitEntry: faker.git.commitEntry(),
    commitMessage: faker.git.commitMessage(),
    commitSha: faker.git.commitSha(),
    shortSha: faker.git.shortSha(),
  };
}
function color() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    cmyk: faker.color.cmyk(),
    colorByCSSColorSpace: faker.color.colorByCSSColorSpace(),
    cssSupportedFunction: faker.color.cssSupportedFunction(),
    cssSupportedSpace: faker.color.cssSupportedSpace(),
    hsl: faker.color.hsl(),
    human: faker.color.human(),
    hwb: faker.color.hwb(),
    lab: faker.color.lab(),
    lch: faker.color.lch(),
    rgb: faker.color.rgb(),
    space: faker.color.space(),
  };
}
function hacker() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    abbreviation: faker.hacker.abbreviation(),
    adjective: faker.hacker.adjective(),
    ingverb: faker.hacker.ingverb(),
    noun: faker.hacker.noun(),
    phrase: faker.hacker.phrase(),
    verb: faker.hacker.verb(),
  };
}
function random() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    alpha: faker.random.alpha(),
    alphaNumeric: faker.random.alphaNumeric(),
    locale: faker.random.locale(),
    numeric: faker.random.numeric(),
    word: faker.random.word(),
    words: faker.random.words(),
  };
}
function commerce() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),

    department: faker.commerce.department(),
    price: faker.commerce.price(),
    product: faker.commerce.product(),
    productAdjective: faker.commerce.productAdjective(),
    productDescription: faker.commerce.productDescription(),
    productMaterial: faker.commerce.productMaterial(),
    productName: faker.commerce.productName(),
  };
}
function system() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    commonFileExt: faker.system.commonFileExt(),
    commonFileName: faker.system.commonFileName(),
    commonFileType: faker.system.commonFileType(),
    cron: faker.system.cron(),
    directoryPath: faker.system.directoryPath(),
    fileExt: faker.system.fileExt(),
    fileName: faker.system.fileName(),
    filePath: faker.system.filePath(),
    fileType: faker.system.fileType(),
    mimeType: faker.system.mimeType(),
    networkInterface: faker.system.networkInterface(),
    semver: faker.system.semver(),
  };
}
function image() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    abstract: faker.image.abstract(),
    animals: faker.image.animals(),
    avatar: faker.image.avatar(),
    business: faker.image.business(),
    cats: faker.image.cats(),
    city: faker.image.city(),
    dataUri: faker.image.dataUri(),
    fashion: faker.image.fashion(),
    food: faker.image.food(),
    image: faker.image.image(),
    imageUrl: faker.image.imageUrl(),
    nature: faker.image.nature(),
    nightlife: faker.image.nightlife(),
    people: faker.image.people(),
    sports: faker.image.sports(),
    technics: faker.image.technics(),
    transport: faker.image.transport(),
  };
}
function vehicle() {
  return {
    id: faker.datatype.number({ min: 1, max: 100000 }),
    bicycle: faker.vehicle.bicycle(),
    color: faker.vehicle.color(),
    fuel: faker.vehicle.fuel(),
    manufacturer: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    vehicle: faker.vehicle.vehicle(),
    vin: faker.vehicle.vin(),
    vrm: faker.vehicle.vrm(),
  };
}

// start
function _number() {
  return faker.datatype.number({ min: 1, max: 100000 });
}

function _lines() {
  return faker.lorem.lines();
}

function _paragraph() {
  return faker.lorem.paragraph();
}

function _paragraphs() {
  return faker.lorem.paragraphs();
}

function _sentence() {
  return faker.lorem.sentence();
}

function _sentences() {
  return faker.lorem.sentences();
}

function _slug() {
  return faker.lorem.slug();
}

function _text() {
  return faker.lorem.text();
}

function _word() {
  return faker.lorem.word();
}

function _words() {
  return faker.lorem.words();
}

function _account() {
  return faker.finance.account();
}

function _accountName() {
  return faker.finance.accountName();
}

function _amount() {
  return faker.finance.amount();
}

function _bic() {
  return faker.finance.bic();
}

function _bitcoinAddress() {
  return faker.finance.bitcoinAddress();
}

function _creditCardCVV() {
  return faker.finance.creditCardCVV();
}

function _creditCardIssuer() {
  return faker.finance.creditCardIssuer();
}

function _creditCardNumber() {
  return faker.finance.creditCardNumber();
}

function _currencyCode() {
  return faker.finance.currencyCode();
}

function _currencyName() {
  return faker.finance.currencyName();
}

function _currencySymbol() {
  return faker.finance.currencySymbol();
}

function _ethereumAddress() {
  return faker.finance.ethereumAddress();
}

function _iban() {
  return faker.finance.iban();
}

function _litecoinAddress() {
  return faker.finance.litecoinAddress();
}

function _mask() {
  return faker.finance.mask();
}

function _pin() {
  return faker.finance.pin();
}

function _routingNumber() {
  return faker.finance.routingNumber();
}

function _transactionDescription() {
  return faker.finance.transactionDescription();
}

function _transactionType() {
  return faker.finance.transactionType();
}

function _firstName() {
  return faker.name.firstName();
}

function _fullName() {
  return faker.name.fullName();
}

function _gender() {
  return faker.name.gender();
}

function _jobArea() {
  return faker.name.jobArea();
}

function _jobDescriptor() {
  return faker.name.jobDescriptor();
}

function _jobTitle() {
  return faker.name.jobTitle();
}

function _jobType() {
  return faker.name.jobType();
}

function _lastName() {
  return faker.name.lastName();
}

function _middleName() {
  return faker.name.middleName();
}

function _prefix() {
  return faker.name.prefix();
}

function _sex() {
  return faker.name.sex();
}

function _sexType() {
  return faker.name.sexType();
}

function _suffix() {
  return faker.name.suffix();
}

function _buildingNumber() {
  return faker.address.buildingNumber();
}

function _cardinalDirection() {
  return faker.address.cardinalDirection();
}

function _city() {
  return faker.address.city();
}

function _cityName() {
  return faker.address.cityName();
}

function _country() {
  return faker.address.country();
}

function _countryCode() {
  return faker.address.countryCode();
}

function _county() {
  return faker.address.county();
}

function _direction() {
  return faker.address.direction();
}

function _latitude() {
  return faker.address.latitude();
}

function _longitude() {
  return faker.address.longitude();
}

function _nearbyGPSCoordinate() {
  return faker.address.nearbyGPSCoordinate();
}

function _ordinalDirection() {
  return faker.address.ordinalDirection();
}

function _secondaryAddress() {
  return faker.address.secondaryAddress();
}

function _state() {
  return faker.address.state();
}

function _stateAbbr() {
  return faker.address.stateAbbr();
}

function _street() {
  return faker.address.street();
}

function _streetAddress() {
  return faker.address.streetAddress();
}

function _streetName() {
  return faker.address.streetName();
}

function _timeZone() {
  return faker.address.timeZone();
}

function _zipCode() {
  return faker.address.zipCode();
}

function _zipCodeByState() {
  return faker.address.zipCodeByState();
}

function _imei() {
  return faker.phone.imei();
}

function _number() {
  return faker.phone.number();
}

function _bs() {
  return faker.company.bs();
}

function _bsAdjective() {
  return faker.company.bsAdjective();
}

function _bsBuzz() {
  return faker.company.bsBuzz();
}

function _bsNoun() {
  return faker.company.bsNoun();
}

function _catchPhrase() {
  return faker.company.catchPhrase();
}

function _catchPhraseAdjective() {
  return faker.company.catchPhraseAdjective();
}

function _catchPhraseDescriptor() {
  return faker.company.catchPhraseDescriptor();
}

function _catchPhraseNoun() {
  return faker.company.catchPhraseNoun();
}

function _companySuffix() {
  return faker.company.companySuffix();
}

function _name() {
  return faker.company.name();
}

function _suffixes() {
  return faker.company.suffixes();
}

function _avatar() {
  return faker.internet.avatar();
}

function _color() {
  return faker.internet.color();
}

function _domainName() {
  return faker.internet.domainName();
}

function _domainSuffix() {
  return faker.internet.domainSuffix();
}

function _domainWord() {
  return faker.internet.domainWord();
}

function _email() {
  return faker.internet.email();
}

function _emoji() {
  return faker.internet.emoji();
}

function _exampleEmail() {
  return faker.internet.exampleEmail();
}

function _httpMethod() {
  return faker.internet.httpMethod();
}

function _httpStatusCode() {
  return faker.internet.httpStatusCode();
}

function _ip() {
  return faker.internet.ip();
}

function _ipv4() {
  return faker.internet.ipv4();
}

function _ipv6() {
  return faker.internet.ipv6();
}

function _mac() {
  return faker.internet.mac();
}

function _password() {
  return faker.internet.password();
}

function _port_() {
  return faker.internet.port();
}

function _protocol() {
  return faker.internet.protocol();
}

function _url() {
  return faker.internet.url();
}

function _userAgent() {
  return faker.internet.userAgent();
}

function _userName() {
  return faker.internet.userName();
}

function _adjective() {
  return faker.word.adjective();
}

function _adverb() {
  return faker.word.adverb();
}

function _conjunction() {
  return faker.word.conjunction();
}

function _interjection() {
  return faker.word.interjection();
}

function _noun() {
  return faker.word.noun();
}

function _preposition() {
  return faker.word.preposition();
}

function _verb() {
  return faker.word.verb();
}

function _branch() {
  return faker.git.branch();
}

function _commitEntry() {
  return faker.git.commitEntry();
}

function _commitMessage() {
  return faker.git.commitMessage();
}

function _commitSha() {
  return faker.git.commitSha();
}

function _shortSha() {
  return faker.git.shortSha();
}

function _cmyk() {
  return faker.color.cmyk();
}

function _colorByCSSColorSpace() {
  return faker.color.colorByCSSColorSpace();
}

function _cssSupportedFunction() {
  return faker.color.cssSupportedFunction();
}

function _cssSupportedSpace() {
  return faker.color.cssSupportedSpace();
}

function _hsl() {
  return faker.color.hsl();
}

function _human() {
  return faker.color.human();
}

function _hwb() {
  return faker.color.hwb();
}

function _lab() {
  return faker.color.lab();
}

function _lch() {
  return faker.color.lch();
}

function _rgb() {
  return faker.color.rgb();
}

function _space() {
  return faker.color.space();
}

function _abbreviation() {
  return faker.hacker.abbreviation();
}

function _adjective() {
  return faker.hacker.adjective();
}

function _ingverb() {
  return faker.hacker.ingverb();
}

function _noun() {
  return faker.hacker.noun();
}

function _phrase() {
  return faker.hacker.phrase();
}

function _verb() {
  return faker.hacker.verb();
}

function _alpha() {
  return faker.random.alpha();
}

function _alphaNumeric() {
  return faker.random.alphaNumeric();
}

function _locale() {
  return faker.random.locale();
}

function _numeric() {
  return faker.random.numeric();
}

function _word() {
  return faker.random.word();
}

function _words() {
  return faker.random.words();
}

function _department() {
  return faker.commerce.department();
}

function _price() {
  return faker.commerce.price();
}

function _product() {
  return faker.commerce.product();
}

function _productAdjective() {
  return faker.commerce.productAdjective();
}

function _productDescription() {
  return faker.commerce.productDescription();
}

function _productMaterial() {
  return faker.commerce.productMaterial();
}

function _productName() {
  return faker.commerce.productName();
}

function _commonFileExt() {
  return faker.system.commonFileExt();
}

function _commonFileName() {
  return faker.system.commonFileName();
}

function _commonFileType() {
  return faker.system.commonFileType();
}

function _cron() {
  return faker.system.cron();
}

function _directoryPath() {
  return faker.system.directoryPath();
}

function _fileExt() {
  return faker.system.fileExt();
}

function _fileName() {
  return faker.system.fileName();
}

function _filePath() {
  return faker.system.filePath();
}

function _fileType() {
  return faker.system.fileType();
}

function _mimeType() {
  return faker.system.mimeType();
}

function _networkInterface() {
  return faker.system.networkInterface();
}

function _semver() {
  return faker.system.semver();
}

function _abstract() {
  return faker.image.abstract();
}

function _animals() {
  return faker.image.animals();
}

function _avatar() {
  return faker.image.avatar();
}

function _business() {
  return faker.image.business();
}

function _cats() {
  return faker.image.cats();
}

function _city() {
  return faker.image.city();
}

function _dataUri() {
  return faker.image.dataUri();
}

function _fashion() {
  return faker.image.fashion();
}

function _food() {
  return faker.image.food();
}

function _image() {
  return faker.image.image();
}

function _imageUrl() {
  return faker.image.imageUrl();
}

function _nature() {
  return faker.image.nature();
}

function _nightlife() {
  return faker.image.nightlife();
}

function _people() {
  return faker.image.people();
}

function _sports() {
  return faker.image.sports();
}

function _technics() {
  return faker.image.technics();
}

function _transport() {
  return faker.image.transport();
}

function _bicycle() {
  return faker.vehicle.bicycle();
}

function _color() {
  return faker.vehicle.color();
}

function _fuel() {
  return faker.vehicle.fuel();
}

function _manufacturer() {
  return faker.vehicle.manufacturer();
}

function _model() {
  return faker.vehicle.model();
}

function _type() {
  return faker.vehicle.type();
}

function _vehicle() {
  return faker.vehicle.vehicle();
}

function _vin() {
  return faker.vehicle.vin();
}

function _vrm() {
  return faker.vehicle.vrm();
}

// end
function get(num, cb) {
  return Array(num)
    .fill({})
    .map((d) => {
      return cb();
    });
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/_number/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _number();
  }
  res.send(get(id, cb));
});
app.get("/_lines/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _lines();
  }
  res.send(get(id, cb));
});
app.get("/_paragraph/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _paragraph();
  }
  res.send(get(id, cb));
});
app.get("/_paragraphs/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _paragraphs();
  }
  res.send(get(id, cb));
});
app.get("/_sentence/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _sentence();
  }
  res.send(get(id, cb));
});
app.get("/_sentences/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _sentences();
  }
  res.send(get(id, cb));
});
app.get("/_slug/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _slug();
  }
  res.send(get(id, cb));
});
app.get("/_text/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _text();
  }
  res.send(get(id, cb));
});
app.get("/_word/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _word();
  }
  res.send(get(id, cb));
});
app.get("/_words/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _words();
  }
  res.send(get(id, cb));
});
app.get("/_account/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _account();
  }
  res.send(get(id, cb));
});
app.get("/_accountName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _accountName();
  }
  res.send(get(id, cb));
});
app.get("/_amount/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _amount();
  }
  res.send(get(id, cb));
});
app.get("/_bic/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _bic();
  }
  res.send(get(id, cb));
});
app.get("/_bitcoinAddress/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _bitcoinAddress();
  }
  res.send(get(id, cb));
});
app.get("/_creditCardCVV/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _creditCardCVV();
  }
  res.send(get(id, cb));
});
app.get("/_creditCardIssuer/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _creditCardIssuer();
  }
  res.send(get(id, cb));
});
app.get("/_creditCardNumber/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _creditCardNumber();
  }
  res.send(get(id, cb));
});
app.get("/_currencyCode/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _currencyCode();
  }
  res.send(get(id, cb));
});
app.get("/_currencyName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _currencyName();
  }
  res.send(get(id, cb));
});
app.get("/_currencySymbol/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _currencySymbol();
  }
  res.send(get(id, cb));
});
app.get("/_ethereumAddress/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _ethereumAddress();
  }
  res.send(get(id, cb));
});
app.get("/_iban/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _iban();
  }
  res.send(get(id, cb));
});
app.get("/_litecoinAddress/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _litecoinAddress();
  }
  res.send(get(id, cb));
});
app.get("/_mask/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _mask();
  }
  res.send(get(id, cb));
});
app.get("/_pin/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _pin();
  }
  res.send(get(id, cb));
});
app.get("/_routingNumber/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _routingNumber();
  }
  res.send(get(id, cb));
});
app.get("/_transactionDescription/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _transactionDescription();
  }
  res.send(get(id, cb));
});
app.get("/_transactionType/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _transactionType();
  }
  res.send(get(id, cb));
});
app.get("/_firstName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _firstName();
  }
  res.send(get(id, cb));
});
app.get("/_fullName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _fullName();
  }
  res.send(get(id, cb));
});
app.get("/_gender/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _gender();
  }
  res.send(get(id, cb));
});
app.get("/_jobArea/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _jobArea();
  }
  res.send(get(id, cb));
});
app.get("/_jobDescriptor/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _jobDescriptor();
  }
  res.send(get(id, cb));
});
app.get("/_jobTitle/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _jobTitle();
  }
  res.send(get(id, cb));
});
app.get("/_jobType/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _jobType();
  }
  res.send(get(id, cb));
});
app.get("/_lastName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _lastName();
  }
  res.send(get(id, cb));
});
app.get("/_middleName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _middleName();
  }
  res.send(get(id, cb));
});
app.get("/_prefix/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _prefix();
  }
  res.send(get(id, cb));
});
app.get("/_sex/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _sex();
  }
  res.send(get(id, cb));
});
app.get("/_sexType/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _sexType();
  }
  res.send(get(id, cb));
});
app.get("/_suffix/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _suffix();
  }
  res.send(get(id, cb));
});
app.get("/_buildingNumber/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _buildingNumber();
  }
  res.send(get(id, cb));
});
app.get("/_cardinalDirection/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _cardinalDirection();
  }
  res.send(get(id, cb));
});
app.get("/_city/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _city();
  }
  res.send(get(id, cb));
});
app.get("/_cityName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _cityName();
  }
  res.send(get(id, cb));
});
app.get("/_country/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _country();
  }
  res.send(get(id, cb));
});
app.get("/_countryCode/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _countryCode();
  }
  res.send(get(id, cb));
});
app.get("/_county/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _county();
  }
  res.send(get(id, cb));
});
app.get("/_direction/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _direction();
  }
  res.send(get(id, cb));
});
app.get("/_latitude/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _latitude();
  }
  res.send(get(id, cb));
});
app.get("/_longitude/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _longitude();
  }
  res.send(get(id, cb));
});
app.get("/_nearbyGPSCoordinate/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _nearbyGPSCoordinate();
  }
  res.send(get(id, cb));
});
app.get("/_ordinalDirection/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _ordinalDirection();
  }
  res.send(get(id, cb));
});
app.get("/_secondaryAddress/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _secondaryAddress();
  }
  res.send(get(id, cb));
});
app.get("/_state/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _state();
  }
  res.send(get(id, cb));
});
app.get("/_stateAbbr/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _stateAbbr();
  }
  res.send(get(id, cb));
});
app.get("/_street/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _street();
  }
  res.send(get(id, cb));
});
app.get("/_streetAddress/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _streetAddress();
  }
  res.send(get(id, cb));
});
app.get("/_streetName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _streetName();
  }
  res.send(get(id, cb));
});
app.get("/_timeZone/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _timeZone();
  }
  res.send(get(id, cb));
});
app.get("/_zipCode/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _zipCode();
  }
  res.send(get(id, cb));
});
app.get("/_zipCodeByState/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _zipCodeByState();
  }
  res.send(get(id, cb));
});
app.get("/_imei/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _imei();
  }
  res.send(get(id, cb));
});
app.get("/_number/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _number();
  }
  res.send(get(id, cb));
});
app.get("/_bs/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _bs();
  }
  res.send(get(id, cb));
});
app.get("/_bsAdjective/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _bsAdjective();
  }
  res.send(get(id, cb));
});
app.get("/_bsBuzz/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _bsBuzz();
  }
  res.send(get(id, cb));
});
app.get("/_bsNoun/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _bsNoun();
  }
  res.send(get(id, cb));
});
app.get("/_catchPhrase/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _catchPhrase();
  }
  res.send(get(id, cb));
});
app.get("/_catchPhraseAdjective/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _catchPhraseAdjective();
  }
  res.send(get(id, cb));
});
app.get("/_catchPhraseDescriptor/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _catchPhraseDescriptor();
  }
  res.send(get(id, cb));
});
app.get("/_catchPhraseNoun/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _catchPhraseNoun();
  }
  res.send(get(id, cb));
});
app.get("/_companySuffix/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _companySuffix();
  }
  res.send(get(id, cb));
});
app.get("/_name/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _name();
  }
  res.send(get(id, cb));
});
app.get("/_suffixes/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _suffixes();
  }
  res.send(get(id, cb));
});
app.get("/_avatar/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _avatar();
  }
  res.send(get(id, cb));
});
app.get("/_color/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _color();
  }
  res.send(get(id, cb));
});
app.get("/_domainName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _domainName();
  }
  res.send(get(id, cb));
});
app.get("/_domainSuffix/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _domainSuffix();
  }
  res.send(get(id, cb));
});
app.get("/_domainWord/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _domainWord();
  }
  res.send(get(id, cb));
});
app.get("/_email/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _email();
  }
  res.send(get(id, cb));
});
app.get("/_emoji/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _emoji();
  }
  res.send(get(id, cb));
});
app.get("/_exampleEmail/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _exampleEmail();
  }
  res.send(get(id, cb));
});
app.get("/_httpMethod/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _httpMethod();
  }
  res.send(get(id, cb));
});
app.get("/_httpStatusCode/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _httpStatusCode();
  }
  res.send(get(id, cb));
});
app.get("/_ip/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _ip();
  }
  res.send(get(id, cb));
});
app.get("/_ipv4/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _ipv4();
  }
  res.send(get(id, cb));
});
app.get("/_ipv6/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _ipv6();
  }
  res.send(get(id, cb));
});
app.get("/_mac/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _mac();
  }
  res.send(get(id, cb));
});
app.get("/_password/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _password();
  }
  res.send(get(id, cb));
});
app.get("/_port/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _port();
  }
  res.send(get(id, cb));
});
app.get("/_protocol/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _protocol();
  }
  res.send(get(id, cb));
});
app.get("/_url/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _url();
  }
  res.send(get(id, cb));
});
app.get("/_userAgent/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _userAgent();
  }
  res.send(get(id, cb));
});
app.get("/_userName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _userName();
  }
  res.send(get(id, cb));
});
app.get("/_adjective/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _adjective();
  }
  res.send(get(id, cb));
});
app.get("/_adverb/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _adverb();
  }
  res.send(get(id, cb));
});
app.get("/_conjunction/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _conjunction();
  }
  res.send(get(id, cb));
});
app.get("/_interjection/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _interjection();
  }
  res.send(get(id, cb));
});
app.get("/_noun/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _noun();
  }
  res.send(get(id, cb));
});
app.get("/_preposition/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _preposition();
  }
  res.send(get(id, cb));
});
app.get("/_verb/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _verb();
  }
  res.send(get(id, cb));
});
app.get("/_branch/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _branch();
  }
  res.send(get(id, cb));
});
app.get("/_commitEntry/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _commitEntry();
  }
  res.send(get(id, cb));
});
app.get("/_commitMessage/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _commitMessage();
  }
  res.send(get(id, cb));
});
app.get("/_commitSha/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _commitSha();
  }
  res.send(get(id, cb));
});
app.get("/_shortSha/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _shortSha();
  }
  res.send(get(id, cb));
});
app.get("/_cmyk/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _cmyk();
  }
  res.send(get(id, cb));
});
app.get("/_colorByCSSColorSpace/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _colorByCSSColorSpace();
  }
  res.send(get(id, cb));
});
app.get("/_cssSupportedFunction/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _cssSupportedFunction();
  }
  res.send(get(id, cb));
});
app.get("/_cssSupportedSpace/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _cssSupportedSpace();
  }
  res.send(get(id, cb));
});
app.get("/_hsl/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _hsl();
  }
  res.send(get(id, cb));
});
app.get("/_human/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _human();
  }
  res.send(get(id, cb));
});
app.get("/_hwb/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _hwb();
  }
  res.send(get(id, cb));
});
app.get("/_lab/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _lab();
  }
  res.send(get(id, cb));
});
app.get("/_lch/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _lch();
  }
  res.send(get(id, cb));
});
app.get("/_rgb/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _rgb();
  }
  res.send(get(id, cb));
});
app.get("/_space/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _space();
  }
  res.send(get(id, cb));
});
app.get("/_abbreviation/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _abbreviation();
  }
  res.send(get(id, cb));
});
app.get("/_adjective/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _adjective();
  }
  res.send(get(id, cb));
});
app.get("/_ingverb/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _ingverb();
  }
  res.send(get(id, cb));
});
app.get("/_noun/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _noun();
  }
  res.send(get(id, cb));
});
app.get("/_phrase/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _phrase();
  }
  res.send(get(id, cb));
});
app.get("/_verb/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _verb();
  }
  res.send(get(id, cb));
});
app.get("/_alpha/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _alpha();
  }
  res.send(get(id, cb));
});
app.get("/_alphaNumeric/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _alphaNumeric();
  }
  res.send(get(id, cb));
});
app.get("/_locale/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _locale();
  }
  res.send(get(id, cb));
});
app.get("/_numeric/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _numeric();
  }
  res.send(get(id, cb));
});
app.get("/_word/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _word();
  }
  res.send(get(id, cb));
});
app.get("/_words/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _words();
  }
  res.send(get(id, cb));
});
app.get("/_department/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _department();
  }
  res.send(get(id, cb));
});
app.get("/_price/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _price();
  }
  res.send(get(id, cb));
});
app.get("/_product/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _product();
  }
  res.send(get(id, cb));
});
app.get("/_productAdjective/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _productAdjective();
  }
  res.send(get(id, cb));
});
app.get("/_productDescription/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _productDescription();
  }
  res.send(get(id, cb));
});
app.get("/_productMaterial/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _productMaterial();
  }
  res.send(get(id, cb));
});
app.get("/_productName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _productName();
  }
  res.send(get(id, cb));
});
app.get("/_commonFileExt/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _commonFileExt();
  }
  res.send(get(id, cb));
});
app.get("/_commonFileName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _commonFileName();
  }
  res.send(get(id, cb));
});
app.get("/_commonFileType/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _commonFileType();
  }
  res.send(get(id, cb));
});
app.get("/_cron/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _cron();
  }
  res.send(get(id, cb));
});
app.get("/_directoryPath/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _directoryPath();
  }
  res.send(get(id, cb));
});
app.get("/_fileExt/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _fileExt();
  }
  res.send(get(id, cb));
});
app.get("/_fileName/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _fileName();
  }
  res.send(get(id, cb));
});
app.get("/_filePath/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _filePath();
  }
  res.send(get(id, cb));
});
app.get("/_fileType/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _fileType();
  }
  res.send(get(id, cb));
});
app.get("/_mimeType/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _mimeType();
  }
  res.send(get(id, cb));
});
app.get("/_networkInterface/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _networkInterface();
  }
  res.send(get(id, cb));
});
app.get("/_semver/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _semver();
  }
  res.send(get(id, cb));
});
app.get("/_abstract/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _abstract();
  }
  res.send(get(id, cb));
});
app.get("/_animals/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _animals();
  }
  res.send(get(id, cb));
});
app.get("/_avatar/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _avatar();
  }
  res.send(get(id, cb));
});
app.get("/_business/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _business();
  }
  res.send(get(id, cb));
});
app.get("/_cats/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _cats();
  }
  res.send(get(id, cb));
});
app.get("/_city/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _city();
  }
  res.send(get(id, cb));
});
app.get("/_dataUri/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _dataUri();
  }
  res.send(get(id, cb));
});
app.get("/_fashion/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _fashion();
  }
  res.send(get(id, cb));
});
app.get("/_food/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _food();
  }
  res.send(get(id, cb));
});
app.get("/_image/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _image();
  }
  res.send(get(id, cb));
});
app.get("/_imageUrl/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _imageUrl();
  }
  res.send(get(id, cb));
});
app.get("/_nature/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _nature();
  }
  res.send(get(id, cb));
});
app.get("/_nightlife/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _nightlife();
  }
  res.send(get(id, cb));
});
app.get("/_people/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _people();
  }
  res.send(get(id, cb));
});
app.get("/_sports/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _sports();
  }
  res.send(get(id, cb));
});
app.get("/_technics/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _technics();
  }
  res.send(get(id, cb));
});
app.get("/_transport/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _transport();
  }
  res.send(get(id, cb));
});
app.get("/_bicycle/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _bicycle();
  }
  res.send(get(id, cb));
});
app.get("/_color/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _color();
  }
  res.send(get(id, cb));
});
app.get("/_fuel/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _fuel();
  }
  res.send(get(id, cb));
});
app.get("/_manufacturer/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _manufacturer();
  }
  res.send(get(id, cb));
});
app.get("/_model/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _model();
  }
  res.send(get(id, cb));
});
app.get("/_type/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _type();
  }
  res.send(get(id, cb));
});
app.get("/_vehicle/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _vehicle();
  }
  res.send(get(id, cb));
});
app.get("/_vin/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _vin();
  }
  res.send(get(id, cb));
});
app.get("/_vrm/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return _vrm();
  }
  res.send(get(id, cb));
});
// object ret 





















app.get("/lorem/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return lorem();
  }
  res.send(get(id, cb));
});
app.get("/finance/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return finance();
  }
  res.send(get(id, cb));
});
app.get("/name/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return name();
  }
  res.send(get(id, cb));
});
app.get("/address/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return address();
  }
  res.send(get(id, cb));
});
app.get("/phone/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return phone();
  }
  res.send(get(id, cb));
});
app.get("/address/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return address();
  }
  res.send(get(id, cb));
});
app.get("/company/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return company();
  }
  res.send(get(id, cb));
});
app.get("/internet/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return internet();
  }
  res.send(get(id, cb));
});
app.get("/word/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return word();
  }
  res.send(get(id, cb));
});
app.get("/hacker/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return hacker();
  }
  res.send(get(id, cb));
});
app.get("/color/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return color();
  }
  res.send(get(id, cb));
});
app.get("/random/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return random();
  }
  res.send(get(id, cb));
});
app.get("/commerce/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return commerce();
  }
  res.send(get(id, cb));
});
app.get("/system/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return system();
  }
  res.send(get(id, cb));
});
app.get("/image/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return image();
  }
  res.send(get(id, cb));
});
app.get("/vehicle/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));
  function cb() {
    return vehicle();
  }
  res.send(get(id, cb));
});

app.get("/user/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));

  function cb() {
    return {
      name: name(),
      finance: finance(),
      internet: internet(),
      word: word(),
      git: git(),
      color: color(),
      hacker: hacker(),
      random: random(),
      commerce: commerce(),
      system: system(),
      image: image(),
      vehicle: vehicle(),
      lorem: lorem(),
    };
  }
  res.send(get(id, cb));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/* 

http://localhost:3000/lorem
http://localhost:3000/finance
http://localhost:3000/name
http://localhost:3000/address
http://localhost:3000/phone
http://localhost:3000/address
http://localhost:3000/company
http://localhost:3000/internet
http://localhost:3000/word
http://localhost:3000/hacker
http://localhost:3000/color
http://localhost:3000/random
http://localhost:3000/commerce
http://localhost:3000/system
http://localhost:3000/image
http://localhost:3000/vehicle
http://localhost:3000/user
*/
