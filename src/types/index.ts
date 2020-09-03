
export type RootStackParamList = {
    MonthlyExpenses: undefined;
    ExpensesDetails: undefined;
};

export type ExpensesItemType = {
    id: string;
    title: string;
    place: string;
    card: string;
    price: number;
    status: string;
    date: string;
}

export type ExpensesType = {
    title: Date;
    data: ExpensesItemType[]
}