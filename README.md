# EMI Calculator - Front End Coding Exercise

In a country of Coderland, EMI for Home loan is calculated based on interest rate, principal and loan tenure. The EMI calculates based on the below formula,

<p align="center">
  <img src="https://emicalculator.net/wp-content/uploads/emiformula.png">
</p>

where E is EMI and P is Principal Loan Amount

### **For example,**

If you borrow _₹10,00,000_ from the bank at _10.5%_ annual interest for a period of _10 years (i.e., 120 months)_, then _EMI = ₹10,00,000 * 0.00875 * (1 + 0.00875)120 / ((1 + 0.00875)120 -1) = ₹13,493_. i.e., you will have to pay _₹13,493_ for _120 months_ to repay the entire loan amount. The total amount payable will be _₹13,493 \* 120 = ₹16,19,220_ that includes _₹6,19,220_ as interest toward the loan.

Write a web application that can accept these as a user input,

`principal, interest rate, loan tenure`

The application should show **Loan EMI, Total Interest Payable & Total Payment**. The application also should show each year (Including months) payable/paid EMI breakup.

For a reference, you can refer https://emicalculator.net/

Please consider these tasks when you are building this application,

- EMI calculation should be visible on every change

- Do not use any third part component library to build the UI.

- Only for showing chart, you can use a third party library.

- The application should not be identical to https://emicalculator.net/

### **Important Points About Coding:**

- The submission must have full unit test coverage.

- Prefer React with functional components. Building using typescript is good to have

- Use Webpack to build project.

- Design the solution considering future use case (as if writing production grade code, avoid if-else waterfalls)

- You would be asked to enhance the same solution for in-office interview

- Ideally it should take 3-4 days to implement, if you need more time do inform us upfront.

- Accompany a Readme with instructions to execute your program.

**We value integrity the most in our potential candidates. Please do not share the coding problem or solution with any one. Avoid publishing your code in any public forum.**

## Submitting your solution

Please push your changes to the `master branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Complete task` link on <a href="https://app.codescreen.dev/#/codescreentesta3bc58bd-a383-4f08-9edb-2f349d356400" target="_blank">this screen</a>.