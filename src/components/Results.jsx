import { calculateInvestmentResults } from "../util/investment";

export default function Results({inputChart}) {
    const dataResults = calculateInvestmentResults(inputChart);
    
    console.log(dataResults);
    return (
        <p>Results Chart...</p>
    )
}