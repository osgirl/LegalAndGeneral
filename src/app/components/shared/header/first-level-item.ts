export class FirstLevelItem {
    text: string;
    routerLink: string;
    secondLevelItems?: Array<
        {
            column: Array<
            {
                text: string;
                isNavHeading?: boolean;
                thirdLevelItems?: Array<{
                    text: string;
                }>
            }>;
        }>;
}