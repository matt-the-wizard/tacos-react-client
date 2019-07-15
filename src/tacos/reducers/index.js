const tacos = [
    {
        price: 2.25,
        title: "Bulgogi Korean Taco",
        description: "Korean taco marinated in Bulgogi BBQ Sauce"
    },
    {
        price: 2.05,
        title: "Thai Chicken Taco",
        description: "Taco layered in peanut butter thai sauce with lettuce and grilled chicken"
    },
    {
        price: 1.85,
        title: "Mexican Mole Taco",
        description: "Mexincan Mole sauce brings a spicy kick to this taco"
    }
];

const TacoReducer = (state = {
    tacos
}, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default TacoReducer;