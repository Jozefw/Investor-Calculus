import { calculateInvestmentResults,formatter } from "../util/investment";

export default function Results({inputChart}) {
    const dataResults = calculateInvestmentResults(inputChart);
    const initialInvestment = 
        dataResults[0].valueEndOfYear - 
        dataResults[0].interest -
        dataResults[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest Year</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
        <tbody>
            {dataResults.map((yearlyDataItem)=>{
                const totalInterest = 
                yearlyDataItem.valueEndOfYear - yearlyDataItem.annualInvestment * yearlyDataItem.year - 
                initialInvestment;
                const totalAmountInvested = yearlyDataItem.valueEndOfYear - totalInterest

                return(
                <tr key={yearlyDataItem.year}>
                    <td>{yearlyDataItem.year}</td>
                    <td>{formatter.format(yearlyDataItem.valueEndOfYear)}</td>
                    <td>{formatter.format(yearlyDataItem.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>)
            })}
        </tbody>
        </table>
    )
}