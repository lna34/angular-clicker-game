enum Abbreviation {
    Millier = "K",
    Million = "M",
    Milliard = "Mi",
    Billion = "Bo",
    Billiard = "Bi",
    Trillion = "T"
}

export class FormatNumberHelper {

    // Format large numbers into more readable values.
    static formatNumber(number: Number) {
        let numberToString = number.toFixed(0);
        let numberLength = numberToString.length;

        if (numberLength >= 4) {
            let numberLeftPart = numberToString.slice(0, (numberLength - 4) % 3 + 1);
            let numberRightPart = numberToString.substr(numberLeftPart.length, 1);
            let numberAbbreviation = this.getNumberAbbreviation(numberLength);

            numberToString = numberLeftPart + (numberRightPart.length != 0 ? "." : "") + numberRightPart + numberAbbreviation;
        }

        return numberToString;
    }

    private static getNumberAbbreviation(length: number) {
        if (length >= 19) {
            return Abbreviation.Trillion;
        }
        if (length >= 16) {
            return Abbreviation.Billiard;
        }
        if (length >= 13) {
            return Abbreviation.Billion;
        }
        if (length >= 10) {
            return Abbreviation.Milliard;
        }
        if (length >= 7) {
            return Abbreviation.Million;
        }
        if (length >= 4) {
            return Abbreviation.Millier;
        }

        return "";
    }
}
