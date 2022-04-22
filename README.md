# **JOB PROJECT**

## About
-This project made for two reason one is someone who searching work and othe one`s who search workers.
-Project running in **NEAR** platform
-Project is still in a development stage.

## Upcoming Updates##
-You will be able to get a job
-You will be able to delete your jobs by work
-You will be able to see jobs are available or unavailable
-You will be able to to find your jobs by work

## How to use? ##

### DOWNLOAD & INSTALL###
-You must download the Job-Demo in gitHub
>`git clone https://github.com/ElDersimo/Job-Demo` 
>`cd Job-Demo`

-You must install yarn
> `yarn`

### NEAR###
-If you want to use Job-Demo you must have NEAR account. If you doesn't have the account you can create. Please check the link for how to crate a NEAR account

[CreateNearAccount] (https://docs.near.org/docs/develop/basics/create-account)

-After you create a account you must login.
> `near login`

-There are 3 functions on the project
1. Add your jobs with work, details and salary information.


![createJob](/img/export%20function.png)

> `near call $CONTRACT createJob '{"work":"police", "details":"8-16", "salary":"300"}' --accountId Youraccount.testnet `

2. You can see the previous jobs list

![getJobList](/img/get%20job%20list.png)

> `near view $CONTRACT getJobList '{"owner':"youraccountid.testnet"}' `
or
> `near call $CONTRACT getJobList '{"owner':"youraccountid.testnet"}' --accountId Youraccount.testnet `

3. You can delete your last job advertisement

![deleteJob](/img/deletejob.png)

> `near call $CONTRACT deleteJob --accountId youraccountid.testnet `