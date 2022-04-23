# **JOB PROJECT**

## About
-This project made for two reason one is someone who searching work and othe one`s who search workers.
-Project running in **NEAR** platform
-Project is still in a development stage.

## Upcoming Updates
-You will be able to get a job
-You will be able to delete your jobs by work
-You will be able to see jobs are available or unavailable
-You will be able to to find your jobs by work


### DOWNLOAD & INSTALL
-You must download the Job-Demo in gitHub


>`git clone https://github.com/ElDersimo/Job-Demo` 

![Git Clone](/img/git%20clone.png)

-You must entry the project folder
>`cd Job-Demo`

-You must install yarn
> `yarn`

### NEAR
-If you want to use Job-Demo you must have NEAR account. If you doesn't have the account you can create. Please check the link for how to crate a NEAR account

[Create Near Account](https://docs.near.org/docs/develop/basics/create-account)

-After you create a account you must login.

> `near login`

![ cd-yarn-login ](/img/cd%20-yarn-login.png)


### BUILD & DEPLOY
-You must build and deploy the smart contract

> `yarn build`
>
> `near dev-deploy ./build/release/job.wasm`    

![yarn build & near dev-deploy](/img/yarn%20build%20%26%20near%20dev-deploy.png)

or you can use this code

> `yarn dev`

![yarn dev](/img/yarn%20dev.png)

-Export your development account to the $CONTRACT

> `export CONTRACT= <yourDevAccount>`


***if you use Windows this code may not work you must use yourDevAccount***



## **HOW TO USE?**

-**There are 3 functions on the project**
1. Add your jobs with work, details and salary information.


![createJob](/img/export%20function.png)

> `near call $CONTRACT createJob '{"work":"police", "details":"8-16", "salary":"300"}' --accountId Youraccount.testnet `
>
>> **NOTE**: If you use Windows this code may not work. Write the code like this: `near call <yourDevAccount> createJob '{"""work""":"""police""", """details""":"""8-16""", """salary""":"""300"""}' --accountId Youraccount.testnet `


2. **You can see the previous jobs list**

![getJobList](/img/get%20job%20list.png)

> `near view $CONTRACT getJobList '{"owner":"youraccountid.testnet"}' `
or
> `near call $CONTRACT getJobList '{"owner":"youraccountid.testnet"}' --accountId Youraccount.testnet `
>
>> **NOTE**: If you use Windows this code may not work. Write the code like this: `near view <yourDevAccount> getJobList '{"""owner""":"""youraccountid.testnet"""}'` or `near call <yourDevAccount> getJobList '{"""owner""":"""youraccountid.testnet"""}' --accountId Youraccount.testnet `


3. **You can delete your last job advertisement**

![deleteJob](/img/deletejob.png)

> `near call $CONTRACT deleteJob --accountId youraccountid.testnet `
>
>> **NOTE**: If you use Windows this code may not work. Write the code like this: `near call <yourDevAccount> deleteJob --accountId youraccountid.testnet `