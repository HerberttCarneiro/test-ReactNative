import { ExpensesType } from "./types";

export const expenses: ExpensesType[] =
    [
        {
            title: new Date("2020-08-09"),
            data: [
                {
                    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
                    title: "Almoço",
                    place: "Madero",
                    card: "Refeição",
                    price: 21.0,
                    status: "send",
                    date: "09/08/2020",
                },
                {
                    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
                    title: "Almoço",
                    place: "Madero",
                    card: "Refeição",
                    price: 28.60,
                    status: "send",
                    date: "09/08/2020",
                },
            ],
        },
        {
            title: new Date("2020-08-05"),
            data: [
                {
                    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f634",
                    title: "Jantar",
                    place: "Outback Steakhouse",
                    card: "Refeição",
                    price: 8.0,
                    status: "cancelled",
                    date: "05/08/2020",
                },
                {
                    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
                    title: "Compras do mês",
                    place: "Extra",
                    card: "Alimentação",
                    price: 1007.18,
                    status: "send",
                    date: "05/08/2020",
                },
            ],
        },
        {
            title: new Date("2010-08-03"),
            data: [
                {
                    id: "58694a0f-3da1-471f-bd96-145571e29d728",
                    title: "Almoço",
                    place: "China in Box",
                    card: "Refeição",
                    price: 17.5,
                    status: "send",
                    date: "03/08/2010",
                },
            ],
        },
    ];