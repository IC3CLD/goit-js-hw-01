let userEnter = prompt(`Укажите страну доставки:`);
let userCountry = (userEnter || ``).toLowerCase();

const CHINA = `китай`;
const CHILI = `чили`;
const AUSTRALIA = `австралия`;
const INDIA = `индия`;
const JAMAICA = `ямайка`;

switch (userCountry) {
    case CHINA:
        console.log(`Доставка в ${China} будет стоить 100 кредитов`);
        break;
        case CHILI:
            console.log(`Доставка в ${Chili} будет стоить 250 кредитов`);
            break;
            case AUSTRALIA:
                console.log(`Доставка в ${Australia} будет стоить 170 кредитов`);
                break;
                case INDIA:
                    console.log(`Доставка в ${India} будет стоить 80 кредитов`);
                    break;
                    case JAMAICA:
                        console.log(`Доставка в ${Jamaica} будет стоить 120 кредитов`);
                        break;
                        default:
                            console.log('В вашей стране доставка не доступна');
}

// let userCountry = userCountry[0].toUpperCase() + userCountry.substring(1);
