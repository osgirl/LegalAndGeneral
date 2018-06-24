export class FirstLevelItem {
    text: "string";
    isOpened: boolean;
    secondLevelItems: Array<
        {
            column: Array<
            {
                text: string;
                isNavHeading?: boolean;
                thirdLevelItems?: Array<{
                    text: string;
                }>
            }>
        }>
}